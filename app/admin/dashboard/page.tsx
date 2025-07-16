"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import {
  Users,
  Download,
  Scan,
  AlertTriangle,
  Edit,
  Trash2,
  Search,
  Plus,
  UserCheck,
  Calendar,
  BookUser,
  BarChart3,
  Clock,
  CheckCircle,
  XCircle,
  TrendingUp,
  TrendingDown,
  Activity,
} from "lucide-react";

// Enhanced workshop sessions for Tamkeen (8 days of training)
const entrepreneurshipSessions = [
  "تحديات ريادة الأعمال في الجزائر",
  "الأسس القانونية والإدارية للمشاريع",
  "دراسة السوق والتحقق من الأفكار",
  "بناء نموذج أولي MVP",
  "النماذج الاقتصادية والتمويل في الجزائر",
  "التسويق واكتساب العملاء",
  "مهارات القيادة وإدارة الفريق",
  "حفل الختام وإطلاق تحدي المشكلات المحلية",
];

const employmentSessions = [
  "فهم سوق العمل في الجزائر ومتطلبات الشركات",
  "إعداد السيرة الذاتية باحترافية",
  "بناء الهوية الرقمية والتواجد المهني",
  "مهارات شخصية أساسية",
  "ورشات مهنية حسب القطاعات",
  "ورشات تطبيقية أو جلسات مفتوحة",
  "ورشة المهارات الناعمة المشتركة",
  "حفل الختام وإطلاق تحدي المشكلات المحلية",
];

// Enhanced mock data for Tamkeen with attendance tracking
const mockParticipants = [
  {
    id: 1,
    name: "Ahmed Benali",
    email: "ahmed@email.com",
    phone: "+213555123456",
    age: 22,
    track: "Entrepreneurship & Startups",
    attendedSessions: [0, 1, 3, 4, 5, 6, 7],
    qrCode: "TMK001",
    group: "Group A",
    notes: "Highly motivated participant",
    contact: "ahmed@email.com",
    initialGroup: "Group A",
  },
  {
    id: 2,
    name: "Fatima Khelil",
    email: "fatima@email.com",
    phone: "+213555234567",
    age: 20,
    track: "Employment & Job Readiness",
    attendedSessions: [0, 1, 2, 3, 4, 5],
    qrCode: "TMK002",
    group: "Group B",
    notes: "Excellent attendance record",
    contact: "fatima@email.com",
    initialGroup: "Group B",
  },
  {
    id: 3,
    name: "Youcef Mammeri",
    email: "youcef@email.com",
    phone: "+213555345678",
    age: 24,
    track: "Entrepreneurship & Startups",
    attendedSessions: [0],
    qrCode: "TMK003",
    group: "Group A",
    notes: "Needs follow-up - low attendance",
    contact: "youcef@email.com",
    initialGroup: "Group A",
  },
  {
    id: 4,
    name: "Amina Cherif",
    email: "amina@email.com",
    phone: "+213555456789",
    age: 21,
    track: "Employment & Job Readiness",
    attendedSessions: [0, 2, 4, 6],
    qrCode: "TMK004",
    group: "Group C",
    notes: "Good progress",
    contact: "amina@email.com",
    initialGroup: "Group C",
  },
];

const mockMentors = [
  {
    id: 1,
    name: "Dr. Amina Boudiaf",
    specialty: "Entrepreneurship & Business Development",
    availability: ["Monday", "Wednesday", "Friday"],
    contact: "amina.boudiaf@tamkeen.dz",
  },
  {
    id: 2,
    name: "Karim Ben Ali",
    specialty: "Technology & Innovation",
    availability: ["Tuesday", "Thursday", "Saturday"],
    contact: "karim.benali@tamkeen.dz",
  },
  {
    id: 3,
    name: "Fatima Cherif",
    specialty: "Career Development & HR",
    availability: ["Monday", "Tuesday", "Wednesday"],
    contact: "fatima.cherif@tamkeen.dz",
  },
];

const mockSessions = [
  {
    id: 1,
    title: "Opening Ceremony",
    date: "2025-08-22",
    startTime: "09:00",
    endTime: "10:30",
    mentorId: 1,
    groupId: "All Groups",
    topic: "Leadership",
  },
  {
    id: 2,
    title: "Entrepreneurship Fundamentals",
    date: "2025-08-23",
    startTime: "10:00",
    endTime: "12:00",
    mentorId: 1,
    groupId: "Group A",
    topic: "Public Speaking",
  },
  {
    id: 3,
    title: "Career Planning Workshop",
    date: "2025-08-23",
    startTime: "14:00",
    endTime: "16:00",
    mentorId: 3,
    groupId: "Group B",
    topic: "Project Management",
  },
  {
    id: 4,
    title: "Tech Innovation Session",
    date: "2025-08-24",
    startTime: "09:00",
    endTime: "11:00",
    mentorId: 2,
    groupId: "Group C",
    topic: "Tech Skills",
  },
];

// Mock attendance data
const mockAttendance = [
  { id: 1, participantId: 1, date: "2025-08-22", status: "Present" },
  { id: 2, participantId: 2, date: "2025-08-22", status: "Present" },
  { id: 3, participantId: 3, date: "2025-08-22", status: "Present" },
  { id: 4, participantId: 4, date: "2025-08-22", status: "Present" },
  { id: 5, participantId: 1, date: "2025-08-23", status: "Present" },
  { id: 6, participantId: 2, date: "2025-08-23", status: "Absent" },
  { id: 7, participantId: 3, date: "2025-08-23", status: "Absent" },
  { id: 8, participantId: 4, date: "2025-08-23", status: "Present" },
  { id: 9, participantId: 1, date: "2025-08-24", status: "Present" },
  { id: 10, participantId: 2, date: "2025-08-24", status: "Present" },
  { id: 11, participantId: 3, date: "2025-08-24", status: "Absent" },
  { id: 12, participantId: 4, date: "2025-08-24", status: "Absent" },
];

export default function AdminDashboard() {
  const [participants, setParticipants] =
    useState<typeof mockParticipants>(mockParticipants);
  const [mentors, setMentors] = useState<typeof mockMentors>(mockMentors);
  const [sessions, setSessions] = useState<typeof mockSessions>(mockSessions);
  const [attendance, setAttendance] =
    useState<typeof mockAttendance>(mockAttendance);
  const [activeView, setActiveView] = useState("dashboard");
  const [showScanner, setShowScanner] = useState(false);
  const [editingParticipant, setEditingParticipant] = useState<
    (typeof mockParticipants)[0] | null
  >(null);
  const [editingMentor, setEditingMentor] = useState<
    (typeof mockMentors)[0] | null
  >(null);
  const [editingSession, setEditingSession] = useState<
    (typeof mockSessions)[0] | null
  >(null);
  const [addingParticipant, setAddingParticipant] = useState(false);
  const [addingMentor, setAddingMentor] = useState(false);
  const [addingSession, setAddingSession] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const [newParticipant, setNewParticipant] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    track: "",
    group: "",
    notes: "",
    attendedSessions: [] as number[],
  });

  const [newMentor, setNewMentor] = useState({
    name: "",
    specialty: "",
    availability: [] as string[],
    contact: "",
  });

  const [newSession, setNewSession] = useState({
    title: "",
    date: "",
    startTime: "09:00",
    endTime: "10:00",
    mentorId: "",
    groupId: "",
    topic: "",
  });

  const config = {
    eventStartDate: "2025-08-22",
    eventEndDate: "2025-08-29",
    maxTotalAbsences: 2,
    groups: ["Group A", "Group B", "Group C", "Group D", "Group E"],
    topics: [
      "Public Speaking",
      "Project Management",
      "Leadership",
      "Tech Skills",
    ],
  };

  // Calculate attendance statistics
  const attendanceStats = useMemo(() => {
    const participantAbsences: Record<
      number,
      { total: number; name: string; id: number }
    > = {};
    participants.forEach((p) => {
      participantAbsences[p.id] = { total: 0, name: p.name, id: p.id };
    });

    attendance.forEach((att) => {
      if (att.status === "Absent" && participantAbsences[att.participantId]) {
        participantAbsences[att.participantId].total++;
      }
    });

    const absenceData = Object.values(participantAbsences);
    const atRisk = absenceData.filter((p) => p.total === 1).length;
    const excluded = absenceData.filter((p) => p.total >= 2).length;
    const onTrack = participants.length - atRisk - excluded;

    return { atRisk, excluded, onTrack, absenceData };
  }, [participants, attendance]);

  const getSessionsForTrack = (track: string) => {
    return track === "Entrepreneurship & Startups"
      ? entrepreneurshipSessions
      : employmentSessions;
  };

  const handleQRScan = (qrCode: string) => {
    const currentSessionIndex = 0;
    setParticipants((prev) =>
      prev.map((p) => {
        if (
          p.qrCode === qrCode &&
          !p.attendedSessions.includes(currentSessionIndex)
        ) {
          return {
            ...p,
            attendedSessions: [...p.attendedSessions, currentSessionIndex],
          };
        }
        return p;
      })
    );
    setShowScanner(false);
  };

  const exportToCSV = (data: any[], filename: string) => {
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
  };

  const handleEditParticipant = (participant: any) => {
    setEditingParticipant({ ...participant });
  };

  const handleSaveParticipant = () => {
    if (editingParticipant) {
      setParticipants((prev) =>
        prev.map((p) =>
          p.id === editingParticipant.id ? editingParticipant : p
        )
      );
    }
    setEditingParticipant(null);
  };

  const handleDeleteParticipant = (id: number) => {
    if (confirm("Are you sure you want to delete this participant?")) {
      setParticipants((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleAddParticipant = () => {
    const id = Math.max(...participants.map((p) => p.id)) + 1;
    const qrCode = `TMK${String(id).padStart(3, "0")}`;
    setParticipants((prev) => [
      ...prev,
      {
        ...newParticipant,
        id,
        qrCode,
        age: Number.parseInt(newParticipant.age),
        contact: newParticipant.email,
        initialGroup: newParticipant.group,
      },
    ]);
    setNewParticipant({
      name: "",
      email: "",
      phone: "",
      age: "",
      track: "",
      group: "",
      notes: "",
      attendedSessions: [],
    });
    setAddingParticipant(false);
  };

  const handleAddMentor = () => {
    const id = Math.max(...mentors.map((m) => m.id)) + 1;
    setMentors((prev) => [...prev, { ...newMentor, id }]);
    setNewMentor({
      name: "",
      specialty: "",
      availability: [],
      contact: "",
    });
    setAddingMentor(false);
  };

  const handleAddSession = () => {
    const id = Math.max(...sessions.map((s) => s.id)) + 1;
    setSessions((prev) => [...prev, { ...newSession, id }]);
    setNewSession({
      title: "",
      date: "",
      startTime: "09:00",
      endTime: "10:00",
      mentorId: "",
      groupId: "",
      topic: "",
    });
    setAddingSession(false);
  };

  const handleSessionToggle = (
    sessionIndex: number,
    participant: any,
    isEditing = false
  ) => {
    if (isEditing) {
      const updatedSessions = participant.attendedSessions.includes(
        sessionIndex
      )
        ? participant.attendedSessions.filter((s: number) => s !== sessionIndex)
        : [...participant.attendedSessions, sessionIndex];

      setEditingParticipant({
        ...participant,
        attendedSessions: updatedSessions,
      });
    } else {
      const updatedSessions = newParticipant.attendedSessions.includes(
        sessionIndex
      )
        ? newParticipant.attendedSessions.filter((s) => s !== sessionIndex)
        : [...newParticipant.attendedSessions, sessionIndex];

      setNewParticipant({
        ...newParticipant,
        attendedSessions: updatedSessions,
      });
    }
  };

  const handleStatusChange = (
    participantId: number,
    date: string,
    newStatus: string
  ) => {
    const existingIndex = attendance.findIndex(
      (att) => att.participantId === participantId && att.date === date
    );

    if (existingIndex >= 0) {
      setAttendance((prev) =>
        prev.map((att, index) =>
          index === existingIndex ? { ...att, status: newStatus } : att
        )
      );
    } else {
      const newId = Math.max(...attendance.map((a) => a.id)) + 1;
      setAttendance((prev) => [
        ...prev,
        { id: newId, participantId, date, status: newStatus },
      ]);
    }
  };

  const getParticipantRowClass = (participantId: number) => {
    const absences =
      attendanceStats.absenceData.find((p: any) => p.id === participantId)
        ?.total || 0;
    if (absences >= 2) return "bg-red-500 text-white";
    if (absences === 1) return "bg-red-400 text-white";
    return "bg-white";
  };

  const getParticipantNameClass = (participantId: number) => {
    const absences =
      attendanceStats.absenceData.find((p: any) => p.id === participantId)
        ?.total || 0;
    return absences >= 2 ? "line-through" : "";
  };

  const filteredParticipants = participants.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.track.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    totalParticipants: participants.length,
    totalMentors: mentors.length,
    totalSessions: sessions.length,
    attendanceToday: participants.filter((p) => p.attendedSessions.length > 0)
      .length,
    atRisk: attendanceStats.atRisk,
    excluded: attendanceStats.excluded,
    onTrack: attendanceStats.onTrack,
  };

  const upcomingSessions = sessions
    .filter((s) => s.date >= new Date().toISOString().slice(0, 10))
    .sort(
      (a, b) =>
        new Date(a.date + "T" + a.startTime).getTime() -
        new Date(b.date + "T" + b.startTime).getTime()
    )
    .slice(0, 3);

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "participants", label: "Participants", icon: Users },
    { id: "mentors", label: "Mentors", icon: BookUser },
    { id: "schedule", label: "Schedule", icon: Calendar },
    { id: "attendance", label: "Attendance", icon: UserCheck },
  ];

  const eventDates = useMemo(() => {
    const dates = [];
    const currentDate = new Date(config.eventStartDate + "T00:00:00");
    const endDate = new Date(config.eventEndDate + "T00:00:00");
    while (currentDate <= endDate) {
      dates.push(currentDate.toISOString().slice(0, 10));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }, [config.eventStartDate, config.eventEndDate]);

  const sessionsByDate = useMemo(() => {
    const grouped: { [key: string]: any[] } = {};
    sessions.forEach((s) => {
      if (!grouped[s.date]) {
        grouped[s.date] = [];
      }
      grouped[s.date].push(s);
    });
    for (const date in grouped) {
      grouped[date].sort((a, b) => a.startTime.localeCompare(b.startTime));
    }
    return grouped;
  }, [sessions]);

  const attendanceMap = useMemo(() => {
    const map = new Map();
    attendance.forEach((att) => {
      const key = `${att.participantId}-${att.date}`;
      map.set(key, { status: att.status, id: att.id });
    });
    return map;
  }, [attendance]);

  const StatusButton = ({
    currentStatus,
    onClick,
  }: {
    currentStatus: string;
    onClick: (status: string) => void;
  }) => {
    const statusInfo = {
      Present: {
        icon: <CheckCircle className="text-green-600" />,
        next: "Absent",
      },
      Absent: { icon: <XCircle className="text-red-600" />, next: "Excused" },
      Excused: {
        icon: <AlertTriangle className="text-yellow-600" />,
        next: "Present",
      },
    };
    const info =
      statusInfo[currentStatus as keyof typeof statusInfo] ||
      statusInfo.Present;

    return (
      <button
        onClick={() => onClick(info.next)}
        className="p-2 rounded-full hover:bg-gray-200 transition-colors"
      >
        {info.icon}
      </button>
    );
  };

  const renderView = () => {
    switch (activeView) {
      case "dashboard":
        return (
          <div>
            <h1 className="text-4xl font-bold text-[#1d4241] mb-8">
              Tamkeen Event Analytics Dashboard
            </h1>

            {/* Enhanced Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-[#1d4241] to-[#123332] text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-100">
                        Total Participants
                      </p>
                      <p className="text-3xl font-bold">
                        {stats.totalParticipants}
                      </p>
                      <p className="text-xs text-blue-200 mt-1">
                        Registered for event
                      </p>
                    </div>
                    <Users className="h-8 w-8 text-[#ffd98e]" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-100">
                        On Track
                      </p>
                      <p className="text-3xl font-bold">{stats.onTrack}</p>
                      <p className="text-xs text-green-200 mt-1">
                        Good attendance
                      </p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-100" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-yellow-100">
                        At Risk
                      </p>
                      <p className="text-3xl font-bold">{stats.atRisk}</p>
                      <p className="text-xs text-yellow-200 mt-1">1 absence</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-yellow-100" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-red-500 to-pink-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-red-100">
                        Excluded
                      </p>
                      <p className="text-3xl font-bold">{stats.excluded}</p>
                      <p className="text-xs text-red-200 mt-1">2+ absences</p>
                    </div>
                    <TrendingDown className="h-8 w-8 text-red-100" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-[#ffd98e] to-[#ef9c82] text-[#1d4241]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-[#1d4241]/70">
                        Active Mentors
                      </p>
                      <p className="text-3xl font-bold">{stats.totalMentors}</p>
                      <p className="text-xs text-[#1d4241]/60 mt-1">
                        Expert instructors
                      </p>
                    </div>
                    <BookUser className="h-8 w-8 text-[#1d4241]" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-purple-100">
                        Total Sessions
                      </p>
                      <p className="text-3xl font-bold">
                        {stats.totalSessions}
                      </p>
                      <p className="text-xs text-purple-200 mt-1">
                        Training workshops
                      </p>
                    </div>
                    <Calendar className="h-8 w-8 text-purple-100" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-100">
                        Attendance Rate
                      </p>
                      <p className="text-3xl font-bold">
                        {Math.round(
                          ((stats.onTrack + stats.atRisk) /
                            stats.totalParticipants) *
                            100
                        )}
                        %
                      </p>
                      <p className="text-xs text-blue-200 mt-1">
                        Overall performance
                      </p>
                    </div>
                    <Activity className="h-8 w-8 text-blue-100" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-[#1d4241] to-[#123332] text-white rounded-t-lg">
                  <CardTitle className="text-2xl">Upcoming Sessions</CardTitle>
                  <CardDescription className="text-blue-100">
                    Next scheduled training sessions
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {upcomingSessions.length > 0 ? (
                      upcomingSessions.map((session) => (
                        <div
                          key={session.id}
                          className="p-4 bg-[#f9eee7] rounded-lg flex items-center justify-between"
                        >
                          <div>
                            <p className="font-semibold text-[#1d4241]">
                              {session.title}
                            </p>
                            <p className="text-sm text-gray-600">
                              {new Date(
                                session.date + "T00:00:00"
                              ).toDateString()}{" "}
                              at {session.startTime}
                            </p>
                            <p className="text-xs text-gray-500">
                              Mentor:{" "}
                              {mentors.find((m) => m.id === session.mentorId)
                                ?.name || "TBA"}
                            </p>
                          </div>
                          <div className="text-right">
                            <Badge
                              variant="outline"
                              className="text-[#1d4241] border-[#1d4241] mb-1"
                            >
                              {session.topic}
                            </Badge>
                            <p className="text-xs text-gray-500">
                              {session.groupId}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500">No upcoming sessions.</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">Attendance Alerts</CardTitle>
                  <CardDescription className="text-red-100">
                    Participants needing immediate attention
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {attendanceStats.absenceData
                      .filter((p: any) => p.total > 0)
                      .sort((a: any, b: any) => b.total - a.total)
                      .slice(0, 5)
                      .map((alert: any) => (
                        <div
                          key={alert.id}
                          className={`p-3 rounded-lg border flex items-center justify-between ${
                            alert.total >= 2
                              ? "bg-red-100 border-red-300"
                              : alert.total === 1
                              ? "bg-yellow-100 border-yellow-300"
                              : "bg-green-100 border-green-300"
                          }`}
                        >
                          <p
                            className={`font-semibold ${
                              alert.total >= 2
                                ? "text-red-800 line-through"
                                : alert.total === 1
                                ? "text-yellow-800"
                                : "text-green-800"
                            }`}
                          >
                            {alert.name}
                          </p>
                          <div className="text-right text-sm">
                            <p
                              className={`font-bold ${
                                alert.total >= 2
                                  ? "text-red-700"
                                  : alert.total === 1
                                  ? "text-yellow-700"
                                  : "text-green-700"
                              }`}
                            >
                              {alert.total} absence
                              {alert.total !== 1 ? "s" : ""}
                            </p>
                            <p className="text-xs text-gray-600">
                              {alert.total >= 2
                                ? "EXCLUDED"
                                : alert.total === 1
                                ? "AT RISK"
                                : "ON TRACK"}
                            </p>
                          </div>
                        </div>
                      ))}
                    {attendanceStats.absenceData.filter((p: any) => p.total > 0)
                      .length === 0 && (
                      <p className="text-gray-500">
                        All participants have perfect attendance! 🎉
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "participants":
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-[#1d4241]">
                Tamkeen Participants
              </h1>
              <div className="flex gap-3">
                <Button
                  onClick={() => setAddingParticipant(true)}
                  className="bg-gradient-to-r from-[#ffd98e] to-[#ef9c82] text-[#1d4241] hover:shadow-lg transition-all duration-300"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Participant
                </Button>
                <Button
                  onClick={() => setShowScanner(true)}
                  className="bg-gradient-to-r from-[#1d4241] to-[#123332] text-white hover:shadow-lg transition-all duration-300"
                >
                  <Scan className="mr-2 h-4 w-4" />
                  Scan QR Code
                </Button>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[#1d4241] to-[#123332] text-white rounded-t-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl">
                      Participant Management
                    </CardTitle>
                    <CardDescription className="text-blue-100">
                      Manage participant registrations and track workshop
                      attendance
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search participants..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                      />
                    </div>
                    <Button
                      onClick={() =>
                        exportToCSV(participants, "tamkeen-participants.csv")
                      }
                      variant="secondary"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Export CSV
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#f9eee7]">
                      <TableHead className="font-semibold">Name</TableHead>
                      <TableHead className="font-semibold">Email</TableHead>
                      <TableHead className="font-semibold">Track</TableHead>
                      <TableHead className="font-semibold">Group</TableHead>
                      <TableHead className="font-semibold">
                        Sessions Attended
                      </TableHead>
                      <TableHead className="font-semibold">Status</TableHead>
                      <TableHead className="font-semibold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredParticipants.map((participant) => {
                      const absences =
                        attendanceStats.absenceData.find(
                          (p: any) => p.id === participant.id
                        )?.total || 0;
                      return (
                        <TableRow
                          key={participant.id}
                          className={getParticipantRowClass(participant.id)}
                        >
                          <TableCell
                            className={`font-medium ${getParticipantNameClass(
                              participant.id
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
                                {participant.attendedSessions.length}/8
                              </span>
                              <div className="flex gap-1">
                                {Array.from({ length: 8 }).map((_, index) => (
                                  <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full ${
                                      participant.attendedSessions.includes(
                                        index
                                      )
                                        ? "bg-green-500"
                                        : "bg-gray-300"
                                    }`}
                                    title={`Session ${index + 1}`}
                                  />
                                ))}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                absences >= 2
                                  ? "destructive"
                                  : absences === 1
                                  ? "secondary"
                                  : "default"
                              }
                            >
                              {absences >= 2
                                ? "Excluded"
                                : absences === 1
                                ? "At Risk"
                                : "On Track"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                  handleEditParticipant(participant)
                                }
                                className="h-8 w-8 p-0"
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
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        );

      case "mentors":
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-[#1d4241]">
                Tamkeen Mentors
              </h1>
              <Button
                onClick={() => setAddingMentor(true)}
                className="bg-gradient-to-r from-[#ffd98e] to-[#ef9c82] text-[#1d4241] hover:shadow-lg transition-all duration-300"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Mentor
              </Button>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[#ffd98e] to-[#ef9c82] text-[#1d4241] rounded-t-lg">
                <CardTitle className="text-2xl">Mentor Management</CardTitle>
                <CardDescription className="text-[#1d4241]/70">
                  Manage mentors and their specialties
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#f9eee7]">
                      <TableHead className="font-semibold">Name</TableHead>
                      <TableHead className="font-semibold">Specialty</TableHead>
                      <TableHead className="font-semibold">Contact</TableHead>
                      <TableHead className="font-semibold">
                        Availability
                      </TableHead>
                      <TableHead className="font-semibold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mentors.map((mentor) => (
                      <TableRow
                        key={mentor.id}
                        className="hover:bg-[#f9eee7]/50"
                      >
                        <TableCell className="font-medium">
                          {mentor.name}
                        </TableCell>
                        <TableCell>{mentor.specialty}</TableCell>
                        <TableCell>{mentor.contact}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {mentor.availability.map((day) => (
                              <Badge
                                key={day}
                                variant="outline"
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
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                setMentors((prev) =>
                                  prev.filter((m) => m.id !== mentor.id)
                                )
                              }
                              className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
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
          </div>
        );

      case "schedule":
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-[#1d4241]">
                Event Schedule
              </h1>
              <Button
                onClick={() => setAddingSession(true)}
                className="bg-gradient-to-r from-[#ffd98e] to-[#ef9c82] text-[#1d4241] hover:shadow-lg transition-all duration-300"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Session
              </Button>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[#1d4241] to-[#123332] text-white rounded-t-lg">
                <CardTitle className="text-2xl">
                  Weekly Schedule Overview
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Manage training sessions and schedule
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table
                    className="min-w-full border-separate"
                    style={{ borderSpacing: 0 }}
                  >
                    <thead className="bg-[#f9eee7]">
                      <tr>
                        {eventDates.map((date) => (
                          <th
                            key={date}
                            className="px-4 py-3 text-left text-sm font-semibold text-[#1d4241] uppercase tracking-wider border-b border-l first:border-l-0"
                          >
                            {new Date(date + "T00:00:00").toLocaleDateString(
                              "en-US",
                              {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {eventDates.map((date) => (
                          <td
                            key={date}
                            className="align-top p-2 border-l border-b first:border-l-0 h-96"
                          >
                            <div className="space-y-2">
                              {sessionsByDate[date]
                                ? sessionsByDate[date].map((session) => (
                                    <div
                                      key={session.id}
                                      className="bg-gradient-to-r from-[#1d4241]/10 to-[#ffd98e]/20 p-3 rounded-md border border-[#1d4241]/20"
                                    >
                                      <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                          <p className="font-semibold text-[#1d4241] text-sm">
                                            {session.title}
                                          </p>
                                          <p className="text-xs text-gray-600 flex items-center mt-1">
                                            <Clock className="inline h-3 w-3 mr-1" />
                                            {session.startTime} -{" "}
                                            {session.endTime}
                                          </p>
                                          <p className="text-xs text-gray-600">
                                            {mentors.find(
                                              (m) => m.id === session.mentorId
                                            )?.name || "TBA"}
                                          </p>
                                          <Badge
                                            variant="outline"
                                            className="text-xs mt-1"
                                          >
                                            {session.groupId}
                                          </Badge>
                                        </div>
                                        <div className="flex flex-col items-end space-y-1 flex-shrink-0 ml-2">
                                          <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() =>
                                              setEditingSession(session)
                                            }
                                            className="h-6 w-6 p-0 text-blue-600 hover:text-blue-800"
                                          >
                                            <Edit size={12} />
                                          </Button>
                                          <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() =>
                                              setSessions((prev) =>
                                                prev.filter(
                                                  (s) => s.id !== session.id
                                                )
                                              )
                                            }
                                            className="h-6 w-6 p-0 text-red-600 hover:text-red-800"
                                          >
                                            <Trash2 size={12} />
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  ))
                                : null}
                            </div>
                            <Button
                              onClick={() => {
                                setSelectedDate(date);
                                setAddingSession(true);
                              }}
                              variant="outline"
                              className="mt-2 w-full text-xs py-1 h-8 border-dashed border-[#1d4241]/30 text-[#1d4241]/70 hover:bg-[#1d4241]/5"
                            >
                              <Plus className="h-3 w-3 mr-1" /> Add Session
                            </Button>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "attendance":
        return (
          <div>
            <h1 className="text-3xl font-bold text-[#1d4241] mb-6">
              Attendance Tracker
            </h1>
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[#1d4241] to-[#123332] text-white rounded-t-lg">
                <CardTitle className="text-2xl">
                  Daily Attendance Management
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Track participant attendance for each session - Click status
                  icons to change
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#f9eee7]">
                      <tr>
                        <th className="sticky left-0 bg-[#f9eee7] px-6 py-3 text-left text-xs font-medium text-[#1d4241] uppercase tracking-wider z-10">
                          Participant
                        </th>
                        {eventDates.map((date) => (
                          <th
                            key={date}
                            className="px-6 py-3 text-center text-xs font-medium text-[#1d4241] uppercase tracking-wider"
                          >
                            {new Date(date + "T00:00:00").toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </th>
                        ))}
                        <th className="px-6 py-3 text-center text-xs font-medium text-[#1d4241] uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {participants.map((participant) => {
                        const absences =
                          attendanceStats.absenceData.find(
                            (p: any) => p.id === participant.id
                          )?.total || 0;
                        const rowClass = getParticipantRowClass(participant.id);
                        return (
                          <tr key={participant.id} className={rowClass}>
                            <td
                              className={`sticky left-0 px-6 py-4 whitespace-nowrap text-sm font-medium z-10 ${rowClass} ${getParticipantNameClass(
                                participant.id
                              )}`}
                            >
                              {participant.name}
                            </td>
                            {eventDates.map((date) => {
                              const key = `${participant.id}-${date}`;
                              const att = attendanceMap.get(key);
                              return (
                                <td
                                  key={date}
                                  className="px-6 py-4 whitespace-nowrap text-center text-sm"
                                >
                                  <StatusButton
                                    currentStatus={att?.status || "Present"}
                                    onClick={(newStatus) =>
                                      handleStatusChange(
                                        participant.id,
                                        date,
                                        newStatus
                                      )
                                    }
                                  />
                                </td>
                              );
                            })}
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <Badge
                                variant={
                                  absences >= 2
                                    ? "destructive"
                                    : absences === 1
                                    ? "secondary"
                                    : "default"
                                }
                              >
                                {absences >= 2
                                  ? "Excluded"
                                  : absences === 1
                                  ? "At Risk"
                                  : "On Track"}
                              </Badge>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9eee7] to-blue-50">
      <div className="flex h-screen">
        {/* Enhanced Sidebar */}
        <nav className="w-16 md:w-64 bg-[#1d4241] text-white flex flex-col shadow-xl">
          <div className="flex items-center justify-center md:justify-start md:pl-6 h-20 border-b border-[#123332]">
            <UserCheck className="h-8 w-8 text-[#ffd98e]" />
            <span className="hidden md:inline ml-3 text-xl font-bold text-[#ffd98e]">
              Tamkeen Admin
            </span>
          </div>
          <ul className="flex-1 mt-6">
            {navItems.map((item) => (
              <li key={item.id} className="px-2 md:px-4">
                <button
                  onClick={() => setActiveView(item.id)}
                  className={`w-full flex items-center justify-center md:justify-start p-3 my-1 rounded-lg transition-all duration-200 ${
                    activeView === item.id
                      ? "bg-[#ffd98e] text-[#1d4241] shadow-lg"
                      : "text-gray-300 hover:bg-[#123332] hover:text-white"
                  }`}
                >
                  <item.icon className="h-6 w-6" />
                  <span className="hidden md:inline ml-4 font-medium">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div className="p-4 border-t border-[#123332]">
            <div className="bg-[#123332] p-3 rounded-lg">
              <p className="text-xs text-gray-400 text-center">Event Status</p>
              <p className="text-sm font-bold text-[#ffd98e] text-center">
                Active
              </p>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-br from-[#f9eee7] to-blue-50 p-4 md:p-8">
            {renderView()}
          </div>
        </main>
      </div>

      {/* Enhanced Modals */}
      {/* Add Participant Dialog */}
      {addingParticipant && (
        <Dialog open={addingParticipant} onOpenChange={setAddingParticipant}>
          <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-[#1d4241]">
                Add New Tamkeen Participant
              </DialogTitle>
              <DialogDescription>
                Enter participant information and select their track and group
                assignment.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="add-name">Full Name *</Label>
                  <Input
                    id="add-name"
                    value={newParticipant.name}
                    onChange={(e) =>
                      setNewParticipant({
                        ...newParticipant,
                        name: e.target.value,
                      })
                    }
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <Label htmlFor="add-email">Email *</Label>
                  <Input
                    id="add-email"
                    type="email"
                    value={newParticipant.email}
                    onChange={(e) =>
                      setNewParticipant({
                        ...newParticipant,
                        email: e.target.value,
                      })
                    }
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="add-phone">Phone</Label>
                  <Input
                    id="add-phone"
                    value={newParticipant.phone}
                    onChange={(e) =>
                      setNewParticipant({
                        ...newParticipant,
                        phone: e.target.value,
                      })
                    }
                    placeholder="+213 XXX XXX XXX"
                  />
                </div>
                <div>
                  <Label htmlFor="add-age">Age</Label>
                  <Input
                    id="add-age"
                    type="number"
                    value={newParticipant.age}
                    onChange={(e) =>
                      setNewParticipant({
                        ...newParticipant,
                        age: e.target.value,
                      })
                    }
                    placeholder="Age"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="add-track">Track *</Label>
                  <Select
                    onValueChange={(value) =>
                      setNewParticipant({ ...newParticipant, track: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select track" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Entrepreneurship & Startups">
                        Entrepreneurship & Startups
                      </SelectItem>
                      <SelectItem value="Employment & Job Readiness">
                        Employment & Job Readiness
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="add-group">Group *</Label>
                  <Select
                    onValueChange={(value) =>
                      setNewParticipant({ ...newParticipant, group: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select group" />
                    </SelectTrigger>
                    <SelectContent>
                      {config.groups.map((group) => (
                        <SelectItem key={group} value={group}>
                          {group}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="add-notes">Notes</Label>
                <Textarea
                  id="add-notes"
                  value={newParticipant.notes}
                  onChange={(e) =>
                    setNewParticipant({
                      ...newParticipant,
                      notes: e.target.value,
                    })
                  }
                  placeholder="Additional notes about the participant"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setAddingParticipant(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={handleAddParticipant}
                className="bg-[#1d4241] hover:bg-[#123332]"
                disabled={
                  !newParticipant.name ||
                  !newParticipant.email ||
                  !newParticipant.track ||
                  !newParticipant.group
                }
              >
                Add Participant
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Add Mentor Dialog */}
      {addingMentor && (
        <Dialog open={addingMentor} onOpenChange={setAddingMentor}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-[#1d4241]">
                Add New Mentor
              </DialogTitle>
              <DialogDescription>
                Enter mentor information and availability schedule.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div>
                <Label htmlFor="mentor-name">Full Name *</Label>
                <Input
                  id="mentor-name"
                  value={newMentor.name}
                  onChange={(e) =>
                    setNewMentor({ ...newMentor, name: e.target.value })
                  }
                  placeholder="Enter mentor's full name"
                />
              </div>
              <div>
                <Label htmlFor="mentor-specialty">Specialty *</Label>
                <Input
                  id="mentor-specialty"
                  value={newMentor.specialty}
                  onChange={(e) =>
                    setNewMentor({ ...newMentor, specialty: e.target.value })
                  }
                  placeholder="e.g., Entrepreneurship & Business Development"
                />
              </div>
              <div>
                <Label htmlFor="mentor-contact">Contact Email *</Label>
                <Input
                  id="mentor-contact"
                  type="email"
                  value={newMentor.contact}
                  onChange={(e) =>
                    setNewMentor({ ...newMentor, contact: e.target.value })
                  }
                  placeholder="mentor@tamkeen.dz"
                />
              </div>
              <div>
                <Label>Availability</Label>
                <div className="grid grid-cols-3 gap-2 mt-2">
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
                        newMentor.availability.includes(day)
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      onClick={() => {
                        const newAvailability = newMentor.availability.includes(
                          day
                        )
                          ? newMentor.availability.filter((d) => d !== day)
                          : [...newMentor.availability, day];
                        setNewMentor({
                          ...newMentor,
                          availability: newAvailability,
                        });
                      }}
                      className={
                        newMentor.availability.includes(day)
                          ? "bg-[#1d4241] hover:bg-[#123332]"
                          : "border-[#1d4241] text-[#1d4241] hover:bg-[#1d4241] hover:text-white"
                      }
                    >
                      {day.slice(0, 3)}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setAddingMentor(false)}>
                Cancel
              </Button>
              <Button
                onClick={handleAddMentor}
                className="bg-[#1d4241] hover:bg-[#123332]"
                disabled={
                  !newMentor.name || !newMentor.specialty || !newMentor.contact
                }
              >
                Add Mentor
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Add Session Dialog */}
      {addingSession && (
        <Dialog open={addingSession} onOpenChange={setAddingSession}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-[#1d4241]">
                Add New Session
              </DialogTitle>
              <DialogDescription>
                Schedule a new training session with mentor and group
                assignment.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div>
                <Label htmlFor="session-title">Session Title *</Label>
                <Input
                  id="session-title"
                  value={newSession.title}
                  onChange={(e) =>
                    setNewSession({ ...newSession, title: e.target.value })
                  }
                  placeholder="e.g., Entrepreneurship Fundamentals"
                />
              </div>
              <div>
                <Label htmlFor="session-date">Date *</Label>
                <Input
                  id="session-date"
                  type="date"
                  value={newSession.date || selectedDate || ""}
                  onChange={(e) =>
                    setNewSession({ ...newSession, date: e.target.value })
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="session-start">Start Time *</Label>
                  <Input
                    id="session-start"
                    type="time"
                    value={newSession.startTime}
                    onChange={(e) =>
                      setNewSession({
                        ...newSession,
                        startTime: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="session-end">End Time *</Label>
                  <Input
                    id="session-end"
                    type="time"
                    value={newSession.endTime}
                    onChange={(e) =>
                      setNewSession({ ...newSession, endTime: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="session-mentor">Mentor</Label>
                <Select
                  onValueChange={(value) =>
                    setNewSession({ ...newSession, mentorId: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select mentor" />
                  </SelectTrigger>
                  <SelectContent>
                    {mentors.map((mentor) => (
                      <SelectItem key={mentor.id} value={mentor.id.toString()}>
                        {mentor.name} - {mentor.specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="session-group">Group *</Label>
                  <Select
                    onValueChange={(value) =>
                      setNewSession({ ...newSession, groupId: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Groups">All Groups</SelectItem>
                      {config.groups.map((group) => (
                        <SelectItem key={group} value={group}>
                          {group}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="session-topic">Topic *</Label>
                  <Select
                    onValueChange={(value) =>
                      setNewSession({ ...newSession, topic: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select topic" />
                    </SelectTrigger>
                    <SelectContent>
                      {config.topics.map((topic) => (
                        <SelectItem key={topic} value={topic}>
                          {topic}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setAddingSession(false)}>
                Cancel
              </Button>
              <Button
                onClick={handleAddSession}
                className="bg-[#1d4241] hover:bg-[#123332]"
                disabled={
                  !newSession.title ||
                  !newSession.date ||
                  !newSession.groupId ||
                  !newSession.topic
                }
              >
                Add Session
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Edit Participant Dialog */}
      {editingParticipant && (
        <Dialog
          open={!!editingParticipant}
          onOpenChange={() => setEditingParticipant(null)}
        >
          <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-[#1d4241]">
                Edit Tamkeen Participant
              </DialogTitle>
              <DialogDescription>
                Make changes to participant information and session attendance.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="edit-name">Name</Label>
                  <Input
                    id="edit-name"
                    value={editingParticipant.name}
                    onChange={(e) =>
                      setEditingParticipant({
                        ...editingParticipant,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="edit-email">Email</Label>
                  <Input
                    id="edit-email"
                    value={editingParticipant.email}
                    onChange={(e) =>
                      setEditingParticipant({
                        ...editingParticipant,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="edit-phone">Phone</Label>
                  <Input
                    id="edit-phone"
                    value={editingParticipant.phone}
                    onChange={(e) =>
                      setEditingParticipant({
                        ...editingParticipant,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="edit-age">Age</Label>
                  <Input
                    id="edit-age"
                    type="number"
                    value={editingParticipant.age}
                    onChange={(e) =>
                      setEditingParticipant({
                        ...editingParticipant,
                        age: Number.parseInt(e.target.value),
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <Label>Track: {editingParticipant.track}</Label>
              </div>
              <div>
                <Label>Sessions Attended</Label>
                <div className="grid grid-cols-1 gap-3 mt-2 max-h-48 overflow-y-auto border rounded-lg p-4">
                  {getSessionsForTrack(editingParticipant.track).map(
                    (session, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Checkbox
                          id={`edit-session-${index}`}
                          checked={editingParticipant.attendedSessions.includes(
                            index
                          )}
                          onCheckedChange={() =>
                            handleSessionToggle(index, editingParticipant, true)
                          }
                        />
                        <Label
                          htmlFor={`edit-session-${index}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          <span className="font-semibold text-[#1d4241]">
                            Day {index + 1}:
                          </span>{" "}
                          {session}
                        </Label>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setEditingParticipant(null)}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSaveParticipant}
                className="bg-[#1d4241] hover:bg-[#123332]"
              >
                Save Changes
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* QR Scanner Modal */}
      {showScanner && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-40">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <h3 className="text-2xl font-bold text-[#1d4241] mb-6 text-center">
              Tamkeen QR Scanner
            </h3>
            <div className="bg-gradient-to-br from-[#f9eee7] to-blue-50 rounded-xl p-8 text-center mb-6">
              <Scan className="h-16 w-16 text-[#1d4241] mx-auto mb-4" />
              <p className="text-gray-600 mb-4">
                QR Scanner would be implemented here using camera access
              </p>
              <p className="text-sm text-gray-500 mb-4">
                For demo: Enter QR code manually
              </p>
              <Input
                type="text"
                placeholder="Enter QR Code (e.g., TMK001)"
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
                Cancel
              </Button>
              <Button
                onClick={() => handleQRScan("TMK001")}
                className="flex-1 bg-gradient-to-r from-[#ffd98e] to-[#ef9c82] text-[#1d4241] hover:shadow-lg"
              >
                Demo Scan
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
