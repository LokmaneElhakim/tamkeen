"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { SidebarInset } from "@/components/ui/sidebar";
import { AdminSidebar, AdminSidebarProvider } from "./admin-sidebar";
import {
  Users,
  Download,
  Scan,
  AlertTriangle,
  Edit,
  Trash2,
  Search,
  Plus,
  BookUser,
  TrendingUp,
  Loader2,
  UserPlus,
  Calendar,
  Building2,
  Clock,
  MapPin,
  ChevronUp,
  ChevronDown,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Import database services
import {
  participantsService,
  mentorsService,
  sessionsService,
  companiesService,
} from "@/lib/database";
import type { Participant, Mentor, Session, Company } from "@/lib/supabase";

// Import the DatabaseTest component
import { DatabaseTest } from "./database-test";

// Default program data structure
const defaultTamkeenProgram = {
  program_name: "تمكين بريان 2025",
  location: "بريان، الجزائر",
  dates: "22-29 أغسطس 2025",
  daily_time: "17:00 - 22:00",
  days: [],
};

// Import the Tamkeen program data with fallback
let tamkeenProgram = defaultTamkeenProgram;
try {
  tamkeenProgram = require("../data/tamkeen-program.json");
} catch (error) {
  console.warn(
    "Could not load tamkeen-program.json, using default data:",
    error
  );
}

// Extract course content from the JSON structure with safety checks
const extractCourseContent = () => {
  const courses = [];

  // Safety check for days array
  if (!tamkeenProgram?.days || !Array.isArray(tamkeenProgram.days)) {
    console.warn("tamkeenProgram.days is not available or not an array");
    return [];
  }

  tamkeenProgram.days.forEach((day, index) => {
    // Safety check for day object
    if (!day || typeof day !== "object") {
      console.warn(`Day ${index} is not a valid object`);
      return;
    }

    // Add main day content
    courses.push({
      id: `day-${day.day || index + 1}`,
      title: day.title || `اليوم ${day.day || index + 1}`,
      type: "main",
      day: day.day || index + 1,
      content:
        day.content ||
        `اليوم ${day.day || index + 1}: ${day.title || "بدون عنوان"}`,
      objective: day.objective || "",
    });

    // Add entrepreneurship specific content
    if (day.entrepreneurship && Array.isArray(day.entrepreneurship)) {
      day.entrepreneurship.forEach((topic, topicIndex) => {
        courses.push({
          id: `day-${day.day || index + 1}-ent-${topicIndex}`,
          title: topic,
          type: "entrepreneurship",
          day: day.day || index + 1,
          content: topic,
          parentTitle: day.title || "",
        });
      });
    }

    // Add employment specific content
    if (day.employment && Array.isArray(day.employment)) {
      day.employment.forEach((topic, topicIndex) => {
        courses.push({
          id: `day-${day.day || index + 1}-emp-${topicIndex}`,
          title: topic,
          type: "employment",
          day: day.day || index + 1,
          content: topic,
          parentTitle: day.title || "",
        });
      });
    }

    // Add shared content
    if (day.shared && Array.isArray(day.shared)) {
      day.shared.forEach((topic, topicIndex) => {
        courses.push({
          id: `day-${day.day || index + 1}-shared-${topicIndex}`,
          title: topic,
          type: "shared",
          day: day.day || index + 1,
          content: topic,
          parentTitle: day.title || "",
        });
      });
    }
  });

  return courses;
};

const TAMKEEN_COURSES = extractCourseContent();

export function AdminDashboard() {
  // State for data
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);

  // Loading states
  const [loading, setLoading] = useState(true);
  const [participantsLoading, setParticipantsLoading] = useState(false);
  const [mentorsLoading, setMentorsLoading] = useState(false);
  const [sessionsLoading, setSessionsLoading] = useState(false);
  const [companiesLoading, setCompaniesLoading] = useState(false);

  // UI state
  const [showScanner, setShowScanner] = useState(false);
  const [editingParticipant, setEditingParticipant] =
    useState<Participant | null>(null);
  const [editingMentor, setEditingMentor] = useState<Mentor | null>(null);
  const [editingSession, setEditingSession] = useState<Session | null>(null);
  const [addingParticipant, setAddingParticipant] = useState(false);
  const [addingMentor, setAddingMentor] = useState(false);
  const [addingSession, setAddingSession] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeView, setActiveView] = useState("dashboard");

  const [newParticipant, setNewParticipant] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    track: "",
    group: "",
    attended_sessions: [] as number[],
  });

  const [newMentor, setNewMentor] = useState({
    name: "",
    email: "",
    phone: "",
    specialties: [] as string[],
    availability: [] as string[],
    bio: "",
  });

  const [newSession, setNewSession] = useState({
    title: "",
    date: "",
    start_time: "17:00",
    end_time: "22:00",
    mentor_id: 0,
    course_id: "",
    group: "",
    location: "",
  });

  // Load initial data
  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    setLoading(true);
    try {
      console.log("Loading data from database...");

      const [participantsData, mentorsData, sessionsData, companiesData] =
        await Promise.all([
          participantsService.getAll().catch((err) => {
            console.error("Failed to load participants:", err);
            toast({
              title: "خطأ في تحميل المشاركين",
              description:
                err.message || "حدث خطأ أثناء تحميل بيانات المشاركين",
              variant: "destructive",
            });
            return [];
          }),
          mentorsService.getAll().catch((err) => {
            console.error("Failed to load mentors:", err);
            toast({
              title: "خطأ في تحميل المدربين",
              description: err.message || "حدث خطأ أثناء تحميل بيانات المدربين",
              variant: "destructive",
            });
            return [];
          }),
          sessionsService.getAll().catch((err) => {
            console.error("Failed to load sessions:", err);
            toast({
              title: "خطأ في تحميل الجلسات",
              description: err.message || "حدث خطأ أثناء تحميل بيانات الجلسات",
              variant: "destructive",
            });
            return [];
          }),
          companiesService.getAll().catch((err) => {
            console.error("Failed to load companies:", err);
            toast({
              title: "خطأ في تحميل الشركات",
              description: err.message || "حدث خطأ أثناء تحميل بيانات الشركات",
              variant: "destructive",
            });
            return [];
          }),
        ]);

      console.log("Loaded data:", {
        participants: participantsData.length,
        mentors: mentorsData.length,
        sessions: sessionsData.length,
        companies: companiesData.length,
      });

      setParticipants(participantsData);
      setMentors(mentorsData);
      setSessions(sessionsData);
      setCompanies(companiesData);

      if (
        participantsData.length === 0 &&
        mentorsData.length === 0 &&
        sessionsData.length === 0
      ) {
        toast({
          title: "قاعدة البيانات فارغة",
          description:
            "لا توجد بيانات حالياً. ابدأ بإضافة المشاركين والمدربين.",
        });
      }
    } catch (error) {
      console.error("Error loading data:", error);
      toast({
        title: "خطأ في تحميل البيانات",
        description:
          "حدث خطأ أثناء تحميل البيانات من قاعدة البيانات. تحقق من اتصال الإنترنت والمحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Analytics calculations
  const analytics = useMemo(() => {
    const totalSessions = 8; // Based on Tamkeen program
    const onTrackParticipants = participants.filter(
      (p) => p.attended_sessions.length >= 6
    ).length;
    const atRiskParticipants = participants.filter(
      (p) => p.attended_sessions.length === 1
    ).length;
    const excludedParticipants = participants.filter(
      (p) => p.attended_sessions.length >= 2 && p.attended_sessions.length < 6
    ).length;
    const totalAttendance = participants.reduce(
      (sum, p) => sum + p.attended_sessions.length,
      0
    );
    const attendanceRate =
      participants.length > 0
        ? (totalAttendance / (participants.length * totalSessions)) * 100
        : 0;

    return {
      totalParticipants: participants.length,
      totalMentors: mentors.length,
      totalSessions: sessions.length,
      onTrackParticipants,
      atRiskParticipants,
      excludedParticipants,
      attendanceRate: Math.round(attendanceRate),
      upcomingSessions: sessions.filter((s) => new Date(s.date) >= new Date())
        .length,
    };
  }, [participants, mentors, sessions]);

  // QR Code scanning
  const handleQRScan = async (qrCode: string) => {
    try {
      const participant = await participantsService.findByQRCode(qrCode);
      if (participant) {
        const currentSessionIndex = 1; // This would be dynamic based on current session
        if (!participant.attended_sessions.includes(currentSessionIndex)) {
          const updatedSessions = [
            ...participant.attended_sessions,
            currentSessionIndex,
          ];
          await participantsService.update(participant.id, {
            attended_sessions: updatedSessions,
          });

          // Update local state
          setParticipants((prev) =>
            prev.map((p) =>
              p.id === participant.id
                ? { ...p, attended_sessions: updatedSessions }
                : p
            )
          );

          toast({
            title: "تم تسجيل الحضور",
            description: `تم تسجيل حضور ${participant.name} بنجاح`,
          });
        } else {
          toast({
            title: "تم التسجيل مسبقاً",
            description: `${participant.name} مسجل الحضور لهذه الجلسة مسبقاً`,
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "رمز QR غير صحيح",
          description: "لم يتم العثور على مشارك بهذا الرمز",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error scanning QR:", error);
      toast({
        title: "خطأ في المسح",
        description: "حدث خطأ أثناء مسح رمز QR",
        variant: "destructive",
      });
    }
    setShowScanner(false);
  };

  // Export to CSV
  const exportToCSV = (data: any[], filename: string) => {
    if (data.length === 0) {
      toast({
        title: "لا توجد بيانات للتصدير",
        description: "لا توجد بيانات متاحة للتصدير",
        variant: "destructive",
      });
      return;
    }

    const csv = [
      Object.keys(data[0]).join(","),
      ...data.map((row) => Object.values(row).join(",")),
    ].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();

    toast({
      title: "تم التصدير بنجاح",
      description: `تم تصدير ${data.length} سجل إلى ${filename}`,
    });
  };

  // Participant operations
  const handleAddParticipant = async () => {
    if (
      !newParticipant.name ||
      !newParticipant.email ||
      !newParticipant.track ||
      !newParticipant.group
    ) {
      toast({
        title: "بيانات ناقصة",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    setParticipantsLoading(true);
    try {
      const qrCode = `TMK${String(participants.length + 1).padStart(3, "0")}`;
      const participantData = {
        ...newParticipant,
        age: Number.parseInt(newParticipant.age) || null,
        qr_code: qrCode,
      };

      const newParticipantRecord = await participantsService.create(
        participantData
      );
      setParticipants((prev) => [newParticipantRecord, ...prev]);

      setNewParticipant({
        name: "",
        email: "",
        phone: "",
        age: "",
        track: "",
        group: "",
        attended_sessions: [],
      });
      setAddingParticipant(false);

      toast({
        title: "تم إضافة المشارك",
        description: `تم إضافة ${newParticipantRecord.name} بنجاح`,
      });
    } catch (error) {
      console.error("Error adding participant:", error);
      toast({
        title: "خطأ في الإضافة",
        description:
          error instanceof Error
            ? error.message
            : "حدث خطأ أثناء إضافة المشارك",
        variant: "destructive",
      });
    } finally {
      setParticipantsLoading(false);
    }
  };

  const handleUpdateParticipant = async () => {
    if (!editingParticipant) return;

    setParticipantsLoading(true);
    try {
      const updatedParticipant = await participantsService.update(
        editingParticipant.id,
        editingParticipant
      );
      setParticipants((prev) =>
        prev.map((p) =>
          p.id === updatedParticipant.id ? updatedParticipant : p
        )
      );
      setEditingParticipant(null);

      toast({
        title: "تم تحديث المشارك",
        description: `تم تحديث بيانات ${updatedParticipant.name} بنجاح`,
      });
    } catch (error) {
      console.error("Error updating participant:", error);
      toast({
        title: "خطأ في التحديث",
        description:
          error instanceof Error
            ? error.message
            : "حدث خطأ أثناء تحديث بيانات المشارك",
        variant: "destructive",
      });
    } finally {
      setParticipantsLoading(false);
    }
  };

  const handleDeleteParticipant = async (id: number) => {
    if (!confirm("هل أنت متأكد من حذف هذا المشارك؟")) return;

    setParticipantsLoading(true);
    try {
      await participantsService.delete(id);
      setParticipants((prev) => prev.filter((p) => p.id !== id));

      toast({
        title: "تم حذف المشارك",
        description: "تم حذف المشارك بنجاح",
      });
    } catch (error) {
      console.error("Error deleting participant:", error);
      toast({
        title: "خطأ في الحذف",
        description:
          error instanceof Error ? error.message : "حدث خطأ أثناء حذف المشارك",
        variant: "destructive",
      });
    } finally {
      setParticipantsLoading(false);
    }
  };

  // Mentor operations
  const handleAddMentor = async () => {
    if (!newMentor.name || !newMentor.phone) {
      toast({
        title: "بيانات ناقصة",
        description: "يرجى ملء الاسم ورقم الهاتف على الأقل",
        variant: "destructive",
      });
      return;
    }

    setMentorsLoading(true);
    try {
      const newMentorRecord = await mentorsService.create(newMentor);
      setMentors((prev) => [newMentorRecord, ...prev]);

      setNewMentor({
        name: "",
        email: "",
        phone: "",
        specialties: [],
        availability: [],
        bio: "",
      });
      setAddingMentor(false);

      toast({
        title: "تم إضافة المدرب",
        description: `تم إضافة ${newMentorRecord.name} بنجاح`,
      });
    } catch (error) {
      console.error("Error adding mentor:", error);
      toast({
        title: "خطأ في الإضافة",
        description:
          error instanceof Error ? error.message : "حدث خطأ أثناء إضافة المدرب",
        variant: "destructive",
      });
    } finally {
      setMentorsLoading(false);
    }
  };

  const handleUpdateMentor = async () => {
    if (!editingMentor) return;

    setMentorsLoading(true);
    try {
      const updatedMentor = await mentorsService.update(
        editingMentor.id,
        editingMentor
      );
      setMentors((prev) =>
        prev.map((m) => (m.id === updatedMentor.id ? updatedMentor : m))
      );
      setEditingMentor(null);

      toast({
        title: "تم تحديث المدرب",
        description: `تم تحديث بيانات ${updatedMentor.name} بنجاح`,
      });
    } catch (error) {
      console.error("Error updating mentor:", error);
      toast({
        title: "خطأ في التحديث",
        description:
          error instanceof Error
            ? error.message
            : "حدث خطأ أثناء تحديث بيانات المدرب",
        variant: "destructive",
      });
    } finally {
      setMentorsLoading(false);
    }
  };

  const handleDeleteMentor = async (id: number) => {
    if (!confirm("هل أنت متأكد من حذف هذا المدرب؟")) return;

    setMentorsLoading(true);
    try {
      await mentorsService.delete(id);
      setMentors((prev) => prev.filter((m) => m.id !== id));

      toast({
        title: "تم حذف المدرب",
        description: "تم حذف المدرب بنجاح",
      });
    } catch (error) {
      console.error("Error deleting mentor:", error);
      toast({
        title: "خطأ في الحذف",
        description:
          error instanceof Error ? error.message : "حدث خطأ أثناء حذف المدرب",
        variant: "destructive",
      });
    } finally {
      setMentorsLoading(false);
    }
  };

  // Session operations
  const handleAddSession = async () => {
    if (
      !newSession.title ||
      !newSession.date ||
      !newSession.group ||
      !newSession.course_id
    ) {
      toast({
        title: "بيانات ناقصة",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    setSessionsLoading(true);
    try {
      const sessionData = {
        ...newSession,
        mentor_id: newSession.mentor_id || null,
      };

      const newSessionRecord = await sessionsService.create(sessionData);
      setSessions((prev) => [newSessionRecord, ...prev]);

      setNewSession({
        title: "",
        date: "",
        start_time: "17:00",
        end_time: "22:00",
        mentor_id: 0,
        course_id: "",
        group: "",
        location: "",
      });
      setAddingSession(false);

      toast({
        title: "تم إضافة الجلسة",
        description: `تم إضافة جلسة ${newSessionRecord.title} بنجاح`,
      });
    } catch (error) {
      console.error("Error adding session:", error);
      toast({
        title: "خطأ في الإضافة",
        description:
          error instanceof Error ? error.message : "حدث خطأ أثناء إضافة الجلسة",
        variant: "destructive",
      });
    } finally {
      setSessionsLoading(false);
    }
  };

  const handleUpdateSession = async () => {
    if (!editingSession) return;

    setSessionsLoading(true);
    try {
      const updatedSession = await sessionsService.update(
        editingSession.id,
        editingSession
      );
      setSessions((prev) =>
        prev.map((s) => (s.id === updatedSession.id ? updatedSession : s))
      );
      setEditingSession(null);

      toast({
        title: "تم تحديث الجلسة",
        description: `تم تحديث جلسة ${updatedSession.title} بنجاح`,
      });
    } catch (error) {
      console.error("Error updating session:", error);
      toast({
        title: "خطأ في التحديث",
        description:
          error instanceof Error ? error.message : "حدث خطأ أثناء تحديث الجلسة",
        variant: "destructive",
      });
    } finally {
      setSessionsLoading(false);
    }
  };

  const handleDeleteSession = async (id: number) => {
    if (!confirm("هل أنت متأكد من حذف هذه الجلسة؟")) return;

    setSessionsLoading(true);
    try {
      await sessionsService.delete(id);
      setSessions((prev) => prev.filter((s) => s.id !== id));

      toast({
        title: "تم حذف الجلسة",
        description: "تم حذف الجلسة بنجاح",
      });
    } catch (error) {
      console.error("Error deleting session:", error);
      toast({
        title: "خطأ في الحذف",
        description:
          error instanceof Error ? error.message : "حدث خطأ أثناء حذف الجلسة",
        variant: "destructive",
      });
    } finally {
      setSessionsLoading(false);
    }
  };

  // Helper functions
  const getParticipantRowClass = (participant: Participant) => {
    const absenceCount = 8 - participant.attended_sessions.length;
    if (absenceCount >= 2) return "bg-red-500 text-white";
    if (absenceCount === 1) return "bg-red-400 text-white";
    return "";
  };

  const getParticipantNameClass = (participant: Participant) => {
    const absenceCount = 8 - participant.attended_sessions.length;
    if (absenceCount >= 2) return "line-through";
    return "";
  };

  const getCourseTitle = (courseId: string) => {
    const course = TAMKEEN_COURSES.find((c) => c.id === courseId);
    return course ? course.title : courseId;
  };

  const filteredParticipants = participants.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.track.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">جاري تحميل البيانات...</p>
        </div>
      </div>
    );
  }

  const renderDashboard = () => (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-[#2b3761] mb-2">
            لوحة تحكم تمكين بريان 2025
          </h1>
          <p className="text-gray-600">
            إدارة المشاركين وتتبع تقدم فعالية تمكين
          </p>
          <p className="text-sm text-[#4767a7] mt-1">
            {tamkeenProgram.dates} - {tamkeenProgram.location}
          </p>
        </div>
      </div>

      {/* Database Connection Test - Prominent placement */}
      <div className="mb-8 flex justify-center">
        <DatabaseTest />
      </div>

      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-[#4767a7] to-[#2b3761] text-white">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-[#f7cd6f]" />
              <div className="ml-4">
                <p className="text-sm font-medium text-blue-100">
                  إجمالي المشاركين
                </p>
                <p className="text-3xl font-bold">
                  {analytics.totalParticipants}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-[#f7cd6f] to-[#eeb93c] text-[#2b3761]">
          <CardContent className="p-6">
            <div className="flex items-center">
              <BookUser className="h-8 w-8 text-[#2b3761]" />
              <div className="ml-4">
                <p className="text-sm font-medium text-[#2b3761]/70">
                  المدربين
                </p>
                <p className="text-3xl font-bold">{analytics.totalMentors}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-emerald-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-green-100" />
              <div className="ml-4">
                <p className="text-sm font-medium text-green-100">
                  معدل الحضور
                </p>
                <p className="text-3xl font-bold">
                  {analytics.attendanceRate}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-red-500 to-pink-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 text-red-100" />
              <div className="ml-4">
                <p className="text-sm font-medium text-red-100">
                  مهددون بالإقصاء
                </p>
                <p className="text-3xl font-bold">
                  {analytics.atRiskParticipants +
                    analytics.excludedParticipants}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions for Empty State */}
      {analytics.totalParticipants === 0 && analytics.totalMentors === 0 && (
        <Card className="mb-8 border-2 border-dashed border-gray-300">
          <CardContent className="p-8 text-center">
            <div className="space-y-4">
              <div className="text-gray-500">
                <UserPlus className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  ابدأ بإضافة البيانات
                </h3>
                <p className="text-gray-600 mb-4">
                  لا توجد بيانات حالياً. ابدأ بإضافة المشاركين والمدربين لبرنامج
                  تمكين.
                </p>
              </div>
              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => setAddingParticipant(true)}
                  className="bg-gradient-to-r from-[#4767a7] to-[#2b3761] text-white"
                >
                  <Users className="mr-2 h-4 w-4" />
                  إضافة مشارك
                </Button>
                <Button
                  onClick={() => setAddingMentor(true)}
                  className="bg-gradient-to-r from-[#f7cd6f] to-[#eeb93c] text-[#2b3761]"
                >
                  <BookUser className="mr-2 h-4 w-4" />
                  إضافة مدرب
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Program Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-[#4767a7] to-[#2b3761] text-white rounded-t-lg">
            <CardTitle className="text-xl">
              برنامج تمكين - المرحلة الأولى
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">مدة البرنامج:</span>
                <span className="font-semibold">8 أيام</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">التوقيت اليومي:</span>
                <span className="font-semibold">
                  {tamkeenProgram.daily_time}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">الجلسات المجدولة:</span>
                <span className="font-semibold">{analytics.totalSessions}</span>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800 font-medium">
                  ⚠️ الغياب يومين يؤدي للإقصاء
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-[#f7cd6f] to-[#eeb93c] text-[#2b3761] rounded-t-lg">
            <CardTitle className="text-xl">إحصائيات الحضور</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  على المسار الصحيح:
                </span>
                <Badge className="bg-green-100 text-green-800">
                  {analytics.onTrackParticipants}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  في خطر (غياب واحد):
                </span>
                <Badge className="bg-red-100 text-red-800">
                  {analytics.atRiskParticipants}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">مقصيون (غيابان+):</span>
                <Badge className="bg-red-500 text-white">
                  {analytics.excludedParticipants}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">الجلسات القادمة:</span>
                <Badge className="bg-blue-100 text-blue-800">
                  {analytics.upcomingSessions}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderParticipants = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#2b3761]">المشاركون</h1>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="البحث في المشاركين..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button
            onClick={() => setAddingParticipant(true)}
            className="bg-gradient-to-r from-[#f7cd6f] to-[#eeb93c] text-[#2b3761] hover:shadow-lg"
            disabled={participantsLoading}
          >
            {participantsLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Plus className="mr-2 h-4 w-4" />
            )}
            إضافة مشارك
          </Button>
        </div>
      </div>

      {participants.length === 0 ? (
        <Card className="border-2 border-dashed border-gray-300">
          <CardContent className="p-12 text-center">
            <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              لا يوجد مشاركون
            </h3>
            <p className="text-gray-500 mb-6">
              ابدأ بإضافة المشاركين لبرنامج تمكين
            </p>
            <Button
              onClick={() => setAddingParticipant(true)}
              className="bg-gradient-to-r from-[#4767a7] to-[#2b3761] text-white"
            >
              <Plus className="mr-2 h-4 w-4" />
              إضافة أول مشارك
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-0 shadow-lg">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold">الاسم</TableHead>
                  <TableHead className="font-semibold">
                    البريد الإلكتروني
                  </TableHead>
                  <TableHead className="font-semibold">المسار</TableHead>
                  <TableHead className="font-semibold">المجموعة</TableHead>
                  <TableHead className="font-semibold">
                    الجلسات المحضورة
                  </TableHead>
                  <TableHead className="font-semibold">الحالة</TableHead>
                  <TableHead className="font-semibold">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredParticipants.map((participant) => (
                  <TableRow
                    key={participant.id}
                    className={`hover:bg-gray-50 ${getParticipantRowClass(
                      participant
                    )}`}
                  >
                    <TableCell
                      className={`font-medium ${getParticipantNameClass(
                        participant
                      )}`}
                    >
                      {participant.name}
                    </TableCell>
                    <TableCell>{participant.email}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {participant.track}
                      </Badge>
                    </TableCell>
                    <TableCell>{participant.group}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">
                          {participant.attended_sessions.length}/8
                        </span>
                        <div className="flex gap-1">
                          {Array.from({ length: 8 }).map((_, index) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full ${
                                participant.attended_sessions.includes(
                                  index + 1
                                )
                                  ? "bg-green-500"
                                  : "bg-gray-300"
                              }`}
                              title={`الجلسة ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          8 - participant.attended_sessions.length >= 2
                            ? "destructive"
                            : 8 - participant.attended_sessions.length === 1
                            ? "secondary"
                            : "default"
                        }
                      >
                        {8 - participant.attended_sessions.length >= 2
                          ? "مقصي"
                          : 8 - participant.attended_sessions.length === 1
                          ? "في خطر"
                          : "جيد"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingParticipant(participant)}
                          className="h-8 w-8 p-0"
                          disabled={participantsLoading}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            handleDeleteParticipant(participant.id)
                          }
                          className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                          disabled={participantsLoading}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );

  const renderMentors = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#2b3761]">المدربون</h1>
        <Button
          onClick={() => setAddingMentor(true)}
          className="bg-gradient-to-r from-[#4767a7] to-[#2b3761] text-white hover:shadow-lg"
          disabled={mentorsLoading}
        >
          {mentorsLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Plus className="mr-2 h-4 w-4" />
          )}
          إضافة مدرب
        </Button>
      </div>

      {mentors.length === 0 ? (
        <Card className="border-2 border-dashed border-gray-300">
          <CardContent className="p-12 text-center">
            <BookUser className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              لا يوجد مدربون
            </h3>
            <p className="text-gray-500 mb-6">
              ابدأ بإضافة المدربين لبرنامج تمكين
            </p>
            <Button
              onClick={() => setAddingMentor(true)}
              className="bg-gradient-to-r from-[#4767a7] to-[#2b3761] text-white"
            >
              <Plus className="mr-2 h-4 w-4" />
              إضافة أول مدرب
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-0 shadow-lg">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold">الاسم</TableHead>
                  <TableHead className="font-semibold">رقم الهاتف</TableHead>
                  <TableHead className="font-semibold">التخصصات</TableHead>
                  <TableHead className="font-semibold">الإتاحة</TableHead>
                  <TableHead className="font-semibold">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mentors.map((mentor) => (
                  <TableRow key={mentor.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{mentor.name}</TableCell>
                    <TableCell>{mentor.phone}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {mentor.specialties.slice(0, 2).map((specialty) => (
                          <Badge
                            key={specialty}
                            variant="outline"
                            className="text-xs"
                          >
                            {getCourseTitle(specialty)}
                          </Badge>
                        ))}
                        {mentor.specialties.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{mentor.specialties.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {mentor.availability.slice(0, 3).map((day) => (
                          <Badge
                            key={day}
                            variant="secondary"
                            className="text-xs"
                          >
                            {day}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingMentor(mentor)}
                          className="h-8 w-8 p-0"
                          disabled={mentorsLoading}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteMentor(mentor.id)}
                          className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                          disabled={mentorsLoading}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );

  const renderSessions = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#2b3761]">الجلسات التدريبية</h1>
        <Button
          onClick={() => setAddingSession(true)}
          className="bg-gradient-to-r from-[#f7cd6f] to-[#eeb93c] text-[#2b3761] hover:shadow-lg"
          disabled={sessionsLoading}
        >
          {sessionsLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Plus className="mr-2 h-4 w-4" />
          )}
          إضافة جلسة
        </Button>
      </div>

      {sessions.length === 0 ? (
        <Card className="border-2 border-dashed border-gray-300">
          <CardContent className="p-12 text-center">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              لا توجد جلسات
            </h3>
            <p className="text-gray-500 mb-6">
              ابدأ بإضافة الجلسات التدريبية لبرنامج تمكين
            </p>
            <Button
              onClick={() => setAddingSession(true)}
              className="bg-gradient-to-r from-[#f7cd6f] to-[#eeb93c] text-[#2b3761]"
            >
              <Plus className="mr-2 h-4 w-4" />
              إضافة أول جلسة
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-0 shadow-lg">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold">العنوان</TableHead>
                  <TableHead className="font-semibold">التاريخ</TableHead>
                  <TableHead className="font-semibold">الوقت</TableHead>
                  <TableHead className="font-semibold">المدرب</TableHead>
                  <TableHead className="font-semibold">المحتوى</TableHead>
                  <TableHead className="font-semibold">المجموعة</TableHead>
                  <TableHead className="font-semibold">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sessions.map((session) => (
                  <TableRow key={session.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium">
                      {session.title}
                    </TableCell>
                    <TableCell>
                      {new Date(session.date).toLocaleDateString("ar-DZ")}
                    </TableCell>
                    <TableCell>
                      {session.start_time} - {session.end_time}
                    </TableCell>
                    <TableCell>
                      {mentors.find((m) => m.id === session.mentor_id)?.name ||
                        "غير محدد"}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {getCourseTitle(session.course_id)}
                      </Badge>
                    </TableCell>
                    <TableCell>{session.group}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingSession(session)}
                          className="h-8 w-8 p-0"
                          disabled={sessionsLoading}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteSession(session.id)}
                          className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                          disabled={sessionsLoading}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );

  const renderCompanies = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#2b3761]">الشركات المشاركة</h1>
        <Button
          onClick={() => exportToCSV(companies, "tamkeen-companies.csv")}
          variant="outline"
        >
          <Download className="mr-2 h-4 w-4" />
          تصدير CSV
        </Button>
      </div>

      {companies.length === 0 ? (
        <Card className="border-2 border-dashed border-gray-300">
          <CardContent className="p-12 text-center">
            <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              لا توجد شركات
            </h3>
            <p className="text-gray-500">لم يتم تسجيل أي شركات مشاركة بعد</p>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-0 shadow-lg">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold">اسم الشركة</TableHead>
                  <TableHead className="font-semibold">الشخص المسؤول</TableHead>
                  <TableHead className="font-semibold">
                    البريد الإلكتروني
                  </TableHead>
                  <TableHead className="font-semibold">النوع</TableHead>
                  <TableHead className="font-semibold">الحالة</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {companies.map((company) => (
                  <TableRow key={company.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium">
                      {company.name}
                    </TableCell>
                    <TableCell>{company.contact}</TableCell>
                    <TableCell>{company.email}</TableCell>
                    <TableCell>{company.type}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          company.status === "Confirmed"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {company.status === "Confirmed"
                          ? "مؤكد"
                          : "في الانتظار"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );

  return (
    <AdminSidebarProvider>
      <div className="flex h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <AdminSidebar activeView={activeView} onViewChange={setActiveView} />

        <SidebarInset className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 py-8">
            {/* Header with QR Scanner */}
            <div className="flex justify-end items-center mb-8">
              <Button
                onClick={() => setShowScanner(true)}
                className="bg-gradient-to-r from-[#4767a7] to-[#2b3761] text-white hover:shadow-lg"
              >
                <Scan className="mr-2 h-4 w-4" />
                مسح QR
              </Button>
            </div>

            {/* Content */}
            {activeView === "dashboard" && renderDashboard()}
            {activeView === "participants" && renderParticipants()}
            {activeView === "mentors" && renderMentors()}
            {activeView === "sessions" && renderSessions()}
            {activeView === "companies" && renderCompanies()}

            {/* Modals */}
            {/* Add/Edit Participant Modal */}
            {(addingParticipant || editingParticipant) && (
              <Dialog
                open={true}
                onOpenChange={() => {
                  setAddingParticipant(false);
                  setEditingParticipant(null);
                }}
              >
                <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>
                      {editingParticipant ? "تعديل مشارك" : "إضافة مشارك جديد"}
                    </DialogTitle>
                    <DialogDescription>
                      أدخل معلومات المشارك واختر المسار والجلسات المحضورة.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">الاسم الكامل *</Label>
                        <Input
                          id="name"
                          value={
                            editingParticipant?.name || newParticipant.name
                          }
                          onChange={(e) => {
                            if (editingParticipant) {
                              setEditingParticipant({
                                ...editingParticipant,
                                name: e.target.value,
                              });
                            } else {
                              setNewParticipant({
                                ...newParticipant,
                                name: e.target.value,
                              });
                            }
                          }}
                          placeholder="الاسم الكامل"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">البريد الإلكتروني *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={
                            editingParticipant?.email || newParticipant.email
                          }
                          onChange={(e) => {
                            if (editingParticipant) {
                              setEditingParticipant({
                                ...editingParticipant,
                                email: e.target.value,
                              });
                            } else {
                              setNewParticipant({
                                ...newParticipant,
                                email: e.target.value,
                              });
                            }
                          }}
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="phone">الهاتف</Label>
                        <Input
                          id="phone"
                          value={
                            editingParticipant?.phone || newParticipant.phone
                          }
                          onChange={(e) => {
                            if (editingParticipant) {
                              setEditingParticipant({
                                ...editingParticipant,
                                phone: e.target.value,
                              });
                            } else {
                              setNewParticipant({
                                ...newParticipant,
                                phone: e.target.value,
                              });
                            }
                          }}
                          placeholder="+213 XXX XXX XXX"
                        />
                      </div>
                      <div>
                        <Label htmlFor="age">العمر</Label>
                        <Input
                          id="age"
                          type="number"
                          value={editingParticipant?.age || newParticipant.age}
                          onChange={(e) => {
                            if (editingParticipant) {
                              setEditingParticipant({
                                ...editingParticipant,
                                age: Number.parseInt(e.target.value),
                              });
                            } else {
                              setNewParticipant({
                                ...newParticipant,
                                age: e.target.value,
                              });
                            }
                          }}
                          placeholder="العمر"
                        />
                      </div>
                      <div>
                        <Label htmlFor="group">المجموعة</Label>
                        <Select
                          value={
                            editingParticipant?.group || newParticipant.group
                          }
                          onValueChange={(value) => {
                            if (editingParticipant) {
                              setEditingParticipant({
                                ...editingParticipant,
                                group: value,
                              });
                            } else {
                              setNewParticipant({
                                ...newParticipant,
                                group: value,
                              });
                            }
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="اختر المجموعة" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Group A">المجموعة أ</SelectItem>
                            <SelectItem value="Group B">المجموعة ب</SelectItem>
                            <SelectItem value="Group C">المجموعة ج</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="track">المسار</Label>
                      <Select
                        value={
                          editingParticipant?.track || newParticipant.track
                        }
                        onValueChange={(value) => {
                          if (editingParticipant) {
                            setEditingParticipant({
                              ...editingParticipant,
                              track: value,
                            });
                          } else {
                            setNewParticipant({
                              ...newParticipant,
                              track: value,
                            });
                          }
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="اختر المسار" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Entrepreneurship & Startups">
                            ريادة الأعمال والمشاريع الناشئة
                          </SelectItem>
                          <SelectItem value="Employment & Job Readiness">
                            التوظيف والاستعداد للعمل
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setAddingParticipant(false);
                        setEditingParticipant(null);
                      }}
                    >
                      إلغاء
                    </Button>
                    <Button
                      onClick={
                        editingParticipant
                          ? handleUpdateParticipant
                          : handleAddParticipant
                      }
                      className="bg-[#4767a7] hover:bg-[#2b3761]"
                      disabled={participantsLoading}
                    >
                      {participantsLoading && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      {editingParticipant ? "حفظ التغييرات" : "إضافة مشارك"}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}

            {/* Add/Edit Mentor Modal */}
            {(addingMentor || editingMentor) && (
              <Dialog
                open={true}
                onOpenChange={() => {
                  setAddingMentor(false);
                  setEditingMentor(null);
                }}
              >
                <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>
                      {editingMentor ? "تعديل مدرب" : "إضافة مدرب جديد"}
                    </DialogTitle>
                    <DialogDescription>
                      أدخل معلومات المدرب واختر التخصصات من برنامج تمكين.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="mentor-name">الاسم الكامل *</Label>
                        <Input
                          id="mentor-name"
                          value={editingMentor?.name || newMentor.name}
                          onChange={(e) => {
                            if (editingMentor) {
                              setEditingMentor({
                                ...editingMentor,
                                name: e.target.value,
                              });
                            } else {
                              setNewMentor({
                                ...newMentor,
                                name: e.target.value,
                              });
                            }
                          }}
                          placeholder="الاسم الكامل"
                        />
                      </div>
                      <div>
                        <Label htmlFor="mentor-phone-primary">
                          رقم الهاتف *
                        </Label>
                        <Input
                          id="mentor-phone-primary"
                          value={editingMentor?.phone || newMentor.phone}
                          onChange={(e) => {
                            if (editingMentor) {
                              setEditingMentor({
                                ...editingMentor,
                                phone: e.target.value,
                              });
                            } else {
                              setNewMentor({
                                ...newMentor,
                                phone: e.target.value,
                              });
                            }
                          }}
                          placeholder="+213 XXX XXX XXX"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="mentor-email">البريد الإلكتروني</Label>
                      <Input
                        id="mentor-email"
                        type="email"
                        value={editingMentor?.email || newMentor.email}
                        onChange={(e) => {
                          if (editingMentor) {
                            setEditingMentor({
                              ...editingMentor,
                              email: e.target.value,
                            });
                          } else {
                            setNewMentor({
                              ...newMentor,
                              email: e.target.value,
                            });
                          }
                        }}
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <Label>التخصصات (من برنامج تمكين)</Label>
                      <div className="grid grid-cols-1 gap-3 mt-2 max-h-48 overflow-y-auto border rounded-lg p-4">
                        {TAMKEEN_COURSES.map((course) => (
                          <div
                            key={course.id}
                            className="flex items-center space-x-3"
                          >
                            <Checkbox
                              id={`course-${course.id}`}
                              checked={(
                                editingMentor?.specialties ||
                                newMentor.specialties
                              ).includes(course.id)}
                              onCheckedChange={(checked) => {
                                const currentSpecialties =
                                  editingMentor?.specialties ||
                                  newMentor.specialties;
                                const newSpecialties = checked
                                  ? [...currentSpecialties, course.id]
                                  : currentSpecialties.filter(
                                      (s) => s !== course.id
                                    );

                                if (editingMentor) {
                                  setEditingMentor({
                                    ...editingMentor,
                                    specialties: newSpecialties,
                                  });
                                } else {
                                  setNewMentor({
                                    ...newMentor,
                                    specialties: newSpecialties,
                                  });
                                }
                              }}
                            />
                            <Label
                              htmlFor={`course-${course.id}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              <span className="font-semibold text-[#4767a7]">
                                اليوم {course.day}:
                              </span>{" "}
                              {course.title}
                              {course.type !== "main" && (
                                <Badge
                                  variant="outline"
                                  className="ml-2 text-xs"
                                >
                                  {course.type === "entrepreneurship"
                                    ? "ريادة الأعمال"
                                    : course.type === "employment"
                                    ? "التوظيف"
                                    : "مشترك"}
                                </Badge>
                              )}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label>أيام الإتاحة</Label>
                      <div className="grid grid-cols-4 gap-2 mt-2">
                        {[
                          "Monday",
                          "Tuesday",
                          "Wednesday",
                          "Thursday",
                          "Friday",
                          "Saturday",
                          "Sunday",
                        ].map((day) => (
                          <Button
                            key={day}
                            type="button"
                            variant={
                              (
                                editingMentor?.availability ||
                                newMentor.availability
                              ).includes(day)
                                ? "default"
                                : "outline"
                            }
                            onClick={() => {
                              const currentAvailability =
                                editingMentor?.availability ||
                                newMentor.availability;
                              const newAvailability =
                                currentAvailability.includes(day)
                                  ? currentAvailability.filter((d) => d !== day)
                                  : [...currentAvailability, day];

                              if (editingMentor) {
                                setEditingMentor({
                                  ...editingMentor,
                                  availability: newAvailability,
                                });
                              } else {
                                setNewMentor({
                                  ...newMentor,
                                  availability: newAvailability,
                                });
                              }
                            }}
                            className="text-xs"
                          >
                            {day === "Monday"
                              ? "الاثنين"
                              : day === "Tuesday"
                              ? "الثلاثاء"
                              : day === "Wednesday"
                              ? "الأربعاء"
                              : day === "Thursday"
                              ? "الخميس"
                              : day === "Friday"
                              ? "الجمعة"
                              : day === "Saturday"
                              ? "السبت"
                              : "الأحد"}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="mentor-bio">نبذة تعريفية</Label>
                      <Textarea
                        id="mentor-bio"
                        value={editingMentor?.bio || newMentor.bio}
                        onChange={(e) => {
                          if (editingMentor) {
                            setEditingMentor({
                              ...editingMentor,
                              bio: e.target.value,
                            });
                          } else {
                            setNewMentor({ ...newMentor, bio: e.target.value });
                          }
                        }}
                        placeholder="نبذة مختصرة عن المدرب وخبراته..."
                        rows={3}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setAddingMentor(false);
                        setEditingMentor(null);
                      }}
                    >
                      إلغاء
                    </Button>
                    <Button
                      onClick={
                        editingMentor ? handleUpdateMentor : handleAddMentor
                      }
                      className="bg-[#4767a7] hover:bg-[#2b3761]"
                      disabled={mentorsLoading}
                    >
                      {mentorsLoading && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      {editingMentor ? "حفظ التغييرات" : "إضافة مدرب"}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}

            {/* Add/Edit Session Modal */}
            {(addingSession || editingSession) && (
              <Dialog
                open={true}
                onOpenChange={() => {
                  setAddingSession(false);
                  setEditingSession(null);
                }}
              >
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>
                      {editingSession ? "تعديل جلسة" : "إضافة جلسة جديدة"}
                    </DialogTitle>
                    <DialogDescription>
                      أدخل تفاصيل الجلسة التدريبية واختر المحتوى من برنامج
                      تمكين.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div>
                      <Label htmlFor="session-title">عنوان الجلسة *</Label>
                      <Input
                        id="session-title"
                        value={editingSession?.title || newSession.title}
                        onChange={(e) => {
                          if (editingSession) {
                            setEditingSession({
                              ...editingSession,
                              title: e.target.value,
                            });
                          } else {
                            setNewSession({
                              ...newSession,
                              title: e.target.value,
                            });
                          }
                        }}
                        placeholder="عنوان الجلسة"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="session-date">التاريخ *</Label>
                        <Input
                          id="session-date"
                          type="date"
                          value={editingSession?.date || newSession.date}
                          onChange={(e) => {
                            if (editingSession) {
                              setEditingSession({
                                ...editingSession,
                                date: e.target.value,
                              });
                            } else {
                              setNewSession({
                                ...newSession,
                                date: e.target.value,
                              });
                            }
                          }}
                        />
                      </div>
                      <div>
                        <Label htmlFor="session-location">المكان</Label>
                        <Input
                          id="session-location"
                          value={
                            editingSession?.location || newSession.location
                          }
                          onChange={(e) => {
                            if (editingSession) {
                              setEditingSession({
                                ...editingSession,
                                location: e.target.value,
                              });
                            } else {
                              setNewSession({
                                ...newSession,
                                location: e.target.value,
                              });
                            }
                          }}
                          placeholder="مكان انعقاد الجلسة"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="session-start">وقت البداية *</Label>
                        <Input
                          id="session-start"
                          type="time"
                          value={
                            editingSession?.start_time || newSession.start_time
                          }
                          onChange={(e) => {
                            if (editingSession) {
                              setEditingSession({
                                ...editingSession,
                                start_time: e.target.value,
                              });
                            } else {
                              setNewSession({
                                ...newSession,
                                start_time: e.target.value,
                              });
                            }
                          }}
                        />
                      </div>
                      <div>
                        <Label htmlFor="session-end">وقت النهاية *</Label>
                        <Input
                          id="session-end"
                          type="time"
                          value={
                            editingSession?.end_time || newSession.end_time
                          }
                          onChange={(e) => {
                            if (editingSession) {
                              setEditingSession({
                                ...editingSession,
                                end_time: e.target.value,
                              });
                            } else {
                              setNewSession({
                                ...newSession,
                                end_time: e.target.value,
                              });
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="session-course">المحتوى التدريبي *</Label>
                      <Select
                        value={
                          editingSession?.course_id || newSession.course_id
                        }
                        onValueChange={(value) => {
                          if (editingSession) {
                            setEditingSession({
                              ...editingSession,
                              course_id: value,
                            });
                          } else {
                            setNewSession({ ...newSession, course_id: value });
                          }
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="اختر المحتوى من برنامج تمكين" />
                        </SelectTrigger>
                        <SelectContent>
                          {TAMKEEN_COURSES.map((course) => (
                            <SelectItem key={course.id} value={course.id}>
                              اليوم {course.day}: {course.title}
                              {course.type !== "main" && (
                                <span className="text-xs text-gray-500 ml-2">
                                  (
                                  {course.type === "entrepreneurship"
                                    ? "ريادة الأعمال"
                                    : course.type === "employment"
                                    ? "التوظيف"
                                    : "مشترك"}
                                  )
                                </span>
                              )}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="session-mentor">المدرب</Label>
                        <Select
                          value={
                            editingSession?.mentor_id?.toString() ||
                            newSession.mentor_id?.toString()
                          }
                          onValueChange={(value) => {
                            if (editingSession) {
                              setEditingSession({
                                ...editingSession,
                                mentor_id: Number.parseInt(value),
                              });
                            } else {
                              setNewSession({
                                ...newSession,
                                mentor_id: Number.parseInt(value),
                              });
                            }
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="اختر المدرب" />
                          </SelectTrigger>
                          <SelectContent>
                            {mentors.map((mentor) => (
                              <SelectItem
                                key={mentor.id}
                                value={mentor.id.toString()}
                              >
                                {mentor.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="session-group">
                          المجموعة المستهدفة
                        </Label>
                        <Select
                          value={editingSession?.group || newSession.group}
                          onValueChange={(value) => {
                            if (editingSession) {
                              setEditingSession({
                                ...editingSession,
                                group: value,
                              });
                            } else {
                              setNewSession({ ...newSession, group: value });
                            }
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="اختر المجموعة" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="All Groups">
                              جميع المجموعات
                            </SelectItem>
                            <SelectItem value="Group A">المجموعة أ</SelectItem>
                            <SelectItem value="Group B">المجموعة ب</SelectItem>
                            <SelectItem value="Group C">المجموعة ج</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setAddingSession(false);
                        setEditingSession(null);
                      }}
                    >
                      إلغاء
                    </Button>
                    <Button
                      onClick={
                        editingSession ? handleUpdateSession : handleAddSession
                      }
                      className="bg-[#4767a7] hover:bg-[#2b3761]"
                      disabled={sessionsLoading}
                    >
                      {sessionsLoading && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      {editingSession ? "حفظ التغييرات" : "إضافة جلسة"}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}

            {/* QR Scanner Modal */}
            {showScanner && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
                  <h3 className="text-2xl font-bold text-[#2b3761] mb-6 text-center">
                    ماسح QR تمكين
                  </h3>
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 text-center mb-6">
                    <Scan className="h-16 w-16 text-[#4767a7] mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">
                      سيتم تنفيذ ماسح QR هنا باستخدام الوصول للكاميرا
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      للتجربة: أدخل رمز QR يدوياً
                    </p>
                    <Input
                      type="text"
                      placeholder="أدخل رمز QR (مثال: TMK001)"
                      className="mb-4"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          const target = e.target as HTMLInputElement;
                          handleQRScan(target.value);
                          target.value = "";
                        }
                      }}
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => setShowScanner(false)}
                      variant="outline"
                      className="flex-1"
                    >
                      إلغاء
                    </Button>
                    <Button
                      onClick={() => handleQRScan("TMK001")}
                      className="flex-1 bg-gradient-to-r from-[#f7cd6f] to-[#eeb93c] text-[#2b3761] hover:shadow-lg"
                    >
                      مسح تجريبي
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </SidebarInset>
      </div>
    </AdminSidebarProvider>
  );
}
