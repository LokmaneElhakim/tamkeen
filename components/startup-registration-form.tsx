"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Loader2,
  CheckCircle,
  Building2,
  User,
  Mail,
  Phone,
  MapPin,
  Lightbulb,
  Target,
  Users,
  Rocket,
} from "lucide-react";

export type TamkeenStartupForm = {
  // Basic Startup Info
  projectName: string;
  sector: string; // e.g., IT, agriculture, education...
  region: string; // Wilaya or city
  website?: string;

  // Founder / Contact
  founderName: string;
  founderAge?: number;
  contactPhone: string;
  contactEmail: string;

  // Project Description
  problem: string;
  solution: string;
  targetAudience: string;
  stage: "idea" | "MVP" | "launched";
  techUsed?: string[];
  pitchDeckUrl?: string;

  // Team Info
  teamMembers?: {
    name: string;
    role: string;
    age?: number;
  }[];

  // Participation Goals
  lookingFor: ("mentorship" | "visibility" | "investment" | "partnerships")[];
  howDidYouHear: string;

  // Terms
  acceptedTerms: boolean;
};

export function StartupRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<TamkeenStartupForm>({
    projectName: "",
    sector: "",
    region: "",
    website: "",
    founderName: "",
    founderAge: undefined,
    contactPhone: "",
    contactEmail: "",
    problem: "",
    solution: "",
    targetAudience: "",
    stage: "idea",
    techUsed: [],
    pitchDeckUrl: "",
    teamMembers: [],
    lookingFor: [],
    howDidYouHear: "",
    acceptedTerms: false,
  });

  const [newTeamMember, setNewTeamMember] = useState({
    name: "",
    role: "",
    age: undefined,
  });
  const [techInput, setTechInput] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptedTerms) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Startup registration submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (field: keyof TamkeenStartupForm, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addTeamMember = () => {
    if (newTeamMember.name && newTeamMember.role) {
      setFormData((prev) => ({
        ...prev,
        teamMembers: [
          ...(prev.teamMembers || []),
          { ...newTeamMember, age: newTeamMember.age || undefined },
        ],
      }));
      setNewTeamMember({ name: "", role: "", age: undefined });
    }
  };

  const removeTeamMember = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      teamMembers: prev.teamMembers?.filter((_, i) => i !== index),
    }));
  };

  const addTech = () => {
    if (techInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        techUsed: [...(prev.techUsed || []), techInput.trim()],
      }));
      setTechInput("");
    }
  };

  const removeTech = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      techUsed: prev.techUsed?.filter((_, i) => i !== index),
    }));
  };

  const toggleLookingFor = (
    value: "mentorship" | "visibility" | "investment" | "partnerships"
  ) => {
    setFormData((prev) => ({
      ...prev,
      lookingFor: prev.lookingFor.includes(value)
        ? prev.lookingFor.filter((item) => item !== value)
        : [...prev.lookingFor, value],
    }));
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto">
        <div className="bg-gradient-to-br from-[#0d2a5e]/60 to-[#1a3a73]/40 backdrop-blur-sm border border-[#60a5fa]/30 shadow-2xl rounded-3xl p-8">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-[#60a5fa] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-[#60a5fa] mb-4 font-[Tajawal]">
              تم التسجيل بنجاح!
            </h3>
            <p className="text-[#f2f2f2]/90 mb-6 leading-relaxed">
              سنتواصل معك قريباً مع تفاصيل المشاركة والإعداد.
            </p>
            <Button
              asChild
              className="w-full bg-[#60a5fa] hover:bg-[#3b82f6] text-[#0d2a5e] font-bold py-3 rounded-xl"
            >
              <a href="/">العودة للرئيسية</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-[#0d2a5e]/60 to-[#1a3a73]/40 backdrop-blur-sm border border-[#60a5fa]/30 shadow-2xl rounded-3xl overflow-hidden">
        <div className="bg-gradient-to-br from-[#60a5fa]/20 to-[#60a5fa]/10 backdrop-blur-sm border-b border-[#60a5fa]/40 p-8">
          <h2 className="text-3xl font-bold text-[#60a5fa] mb-4 text-center font-[Tajawal]">
            تسجيل الشركات الناشئة
          </h2>
          <p className="text-[#f2f2f2]/90 text-center text-lg">
            سجل مشروعك الناشئ للمشاركة في معرض تمكين بريان 2025
          </p>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Project Information */}
            <div className="bg-gradient-to-br from-[#0d2a5e]/60 to-[#1a3a73]/40 backdrop-blur-sm border border-[#60a5fa]/30 shadow-lg rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#60a5fa]/20 border border-[#60a5fa]/40 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-[#60a5fa]" />
                </div>
                <h3 className="text-2xl font-bold text-[#60a5fa] font-[Tajawal]">
                  معلومات المشروع
                </h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="projectName"
                    className="text-[#f2f2f2] font-medium"
                  >
                    اسم المشروع *
                  </Label>
                  <Input
                    id="projectName"
                    value={formData.projectName}
                    onChange={(e) =>
                      handleInputChange("projectName", e.target.value)
                    }
                    className="bg-[#0d2a5e]/50 border-[#60a5fa]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right h-12 rounded-xl focus:border-[#60a5fa] focus:ring-[#60a5fa]/20"
                    dir="rtl"
                    placeholder="أدخل اسم مشروعك"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="sector"
                      className="text-[#f2f2f2] font-medium"
                    >
                      القطاع *
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("sector", value)
                      }
                    >
                      <SelectTrigger className="bg-[#0d2a5e]/50 border-[#60a5fa]/30 text-[#f2f2f2] text-right h-12 rounded-xl focus:border-[#60a5fa] focus:ring-[#60a5fa]/20">
                        <SelectValue placeholder="اختر قطاع المشروع" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0d2a5e] border-[#60a5fa]/30 rounded-xl">
                        <SelectItem
                          value="technology"
                          className="text-[#f2f2f2] hover:bg-[#60a5fa]/20"
                        >
                          تكنولوجيا المعلومات
                        </SelectItem>
                        <SelectItem
                          value="agriculture"
                          className="text-[#f2f2f2] hover:bg-[#60a5fa]/20"
                        >
                          الزراعة
                        </SelectItem>
                        <SelectItem
                          value="education"
                          className="text-[#f2f2f2] hover:bg-[#60a5fa]/20"
                        >
                          التعليم
                        </SelectItem>
                        <SelectItem
                          value="healthcare"
                          className="text-[#f2f2f2] hover:bg-[#60a5fa]/20"
                        >
                          الصحة
                        </SelectItem>
                        <SelectItem
                          value="finance"
                          className="text-[#f2f2f2] hover:bg-[#60a5fa]/20"
                        >
                          المالية
                        </SelectItem>
                        <SelectItem
                          value="ecommerce"
                          className="text-[#f2f2f2] hover:bg-[#60a5fa]/20"
                        >
                          التجارة الإلكترونية
                        </SelectItem>
                        <SelectItem
                          value="renewable-energy"
                          className="text-[#f2f2f2] hover:bg-[#60a5fa]/20"
                        >
                          الطاقة المتجددة
                        </SelectItem>
                        <SelectItem
                          value="social-enterprise"
                          className="text-[#f2f2f2] hover:bg-[#60a5fa]/20"
                        >
                          المؤسسة الاجتماعية
                        </SelectItem>
                        <SelectItem
                          value="other"
                          className="text-[#f2f2f2] hover:bg-[#60a5fa]/20"
                        >
                          أخرى
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="region"
                      className="text-[#f2f2f2] font-medium flex items-center gap-2"
                    >
                      <MapPin className="h-4 w-4 text-[#60a5fa]" />
                      المنطقة/الولاية *
                    </Label>
                    <Input
                      id="region"
                      value={formData.region}
                      onChange={(e) =>
                        handleInputChange("region", e.target.value)
                      }
                      className="bg-[#0d2a5e]/50 border-[#60a5fa]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right h-12 rounded-xl focus:border-[#60a5fa] focus:ring-[#60a5fa]/20"
                      dir="rtl"
                      placeholder="مثال: الجزائر، وهران، قسنطينة"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="website"
                    className="text-[#f2f2f2] font-medium"
                  >
                    الموقع الإلكتروني (اختياري)
                  </Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) =>
                      handleInputChange("website", e.target.value)
                    }
                    className="bg-[#0d2a5e]/50 border-[#60a5fa]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-left h-12 rounded-xl focus:border-[#60a5fa] focus:ring-[#60a5fa]/20"
                    dir="ltr"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>
            </div>

            {/* Founder Information */}
            <div className="bg-gradient-to-br from-[#0d2a5e]/60 to-[#1a3a73]/40 backdrop-blur-sm border border-[#60a5fa]/30 shadow-lg rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#60a5fa]/20 border border-[#60a5fa]/40 flex items-center justify-center">
                  <User className="h-6 w-6 text-[#60a5fa]" />
                </div>
                <h3 className="text-2xl font-bold text-[#60a5fa] font-[Tajawal]">
                  معلومات المؤسس
                </h3>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="founderName"
                      className="text-[#f2f2f2] font-medium"
                    >
                      اسم المؤسس *
                    </Label>
                    <Input
                      id="founderName"
                      value={formData.founderName}
                      onChange={(e) =>
                        handleInputChange("founderName", e.target.value)
                      }
                      className="bg-[#0d2a5e]/50 border-[#60a5fa]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right h-12 rounded-xl focus:border-[#60a5fa] focus:ring-[#60a5fa]/20"
                      dir="rtl"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="founderAge"
                      className="text-[#f2f2f2] font-medium"
                    >
                      العمر (اختياري)
                    </Label>
                    <Input
                      id="founderAge"
                      type="number"
                      min="18"
                      max="65"
                      value={formData.founderAge || ""}
                      onChange={(e) =>
                        handleInputChange(
                          "founderAge",
                          e.target.value ? parseInt(e.target.value) : undefined
                        )
                      }
                      className="bg-[#0d2a5e]/50 border-[#60a5fa]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 h-12 rounded-xl focus:border-[#60a5fa] focus:ring-[#60a5fa]/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="contactEmail"
                      className="text-[#f2f2f2] font-medium flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4 text-[#60a5fa]" />
                      البريد الإلكتروني *
                    </Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) =>
                        handleInputChange("contactEmail", e.target.value)
                      }
                      className="bg-[#0d2a5e]/50 border-[#60a5fa]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-left h-12 rounded-xl focus:border-[#60a5fa] focus:ring-[#60a5fa]/20"
                      dir="ltr"
                      placeholder="contact@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="contactPhone"
                      className="text-[#f2f2f2] font-medium flex items-center gap-2"
                    >
                      <Phone className="h-4 w-4 text-[#60a5fa]" />
                      رقم الهاتف *
                    </Label>
                    <Input
                      id="contactPhone"
                      type="tel"
                      value={formData.contactPhone}
                      onChange={(e) =>
                        handleInputChange("contactPhone", e.target.value)
                      }
                      className="bg-[#0d2a5e]/50 border-[#60a5fa]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-left h-12 rounded-xl focus:border-[#60a5fa] focus:ring-[#60a5fa]/20"
                      dir="ltr"
                      placeholder="+213 XXX XXX XXX"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div className="bg-gradient-to-br from-[#0d2a5e]/60 to-[#1a3a73]/40 backdrop-blur-sm border border-[#60a5fa]/30 shadow-lg rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#60a5fa]/20 border border-[#60a5fa]/40 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-[#60a5fa]" />
                </div>
                <h3 className="text-2xl font-bold text-[#60a5fa] font-[Tajawal]">
                  وصف المشروع
                </h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="problem"
                    className="text-[#f2f2f2] font-medium"
                  >
                    المشكلة التي يحلها مشروعك *
                  </Label>
                  <Textarea
                    id="problem"
                    value={formData.problem}
                    onChange={(e) =>
                      handleInputChange("problem", e.target.value)
                    }
                    className="bg-[#0d2a5e]/50 border-[#60a5fa]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right rounded-xl min-h-[100px] resize-none focus:border-[#60a5fa] focus:ring-[#60a5fa]/20"
                    dir="rtl"
                    placeholder="اشرح المشكلة التي يهدف مشروعك إلى حلها..."
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="solution"
                    className="text-[#f2f2f2] font-medium"
                  >
                    الحل المقترح *
                  </Label>
                  <Textarea
                    id="solution"
                    value={formData.solution}
                    onChange={(e) =>
                      handleInputChange("solution", e.target.value)
                    }
                    className="bg-[#0d2a5e]/50 border-[#60a5fa]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right rounded-xl min-h-[100px] resize-none focus:border-[#60a5fa] focus:ring-[#60a5fa]/20"
                    dir="rtl"
                    placeholder="كيف يحل مشروعك هذه المشكلة؟"
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="targetAudience"
                    className="text-[#f2f2f2] font-medium flex items-center gap-2"
                  >
                    <Target className="h-4 w-4 text-[#60a5fa]" />
                    الجمهور المستهدف *
                  </Label>
                  <Textarea
                    id="targetAudience"
                    value={formData.targetAudience}
                    onChange={(e) =>
                      handleInputChange("targetAudience", e.target.value)
                    }
                    className="bg-[#0d2a5e]/50 border-[#60a5fa]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right rounded-xl min-h-[80px] resize-none focus:border-[#60a5fa] focus:ring-[#60a5fa]/20"
                    dir="rtl"
                    placeholder="من هم عملاؤك المستهدفون؟"
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="stage"
                    className="text-[#f2f2f2] font-medium flex items-center gap-2"
                  >
                    <Rocket className="h-4 w-4 text-[#60a5fa]" />
                    مرحلة المشروع *
                  </Label>
                  <Select
                    onValueChange={(value: "idea" | "MVP" | "launched") =>
                      handleInputChange("stage", value)
                    }
                  >
                    <SelectTrigger className="bg-[#0d2a5e]/50 border-[#60a5fa]/30 text-[#f2f2f2] text-right h-12 rounded-xl focus:border-[#60a5fa] focus:ring-[#60a5fa]/20">
                      <SelectValue placeholder="اختر مرحلة مشروعك" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0d2a5e] border-[#60a5fa]/30 rounded-xl">
                      <SelectItem
                        value="idea"
                        className="text-[#f2f2f2] hover:bg-[#60a5fa]/20"
                      >
                        فكرة
                      </SelectItem>
                      <SelectItem
                        value="MVP"
                        className="text-[#f2f2f2] hover:bg-[#60a5fa]/20"
                      >
                        نموذج أولي (MVP)
                      </SelectItem>
                      <SelectItem
                        value="launched"
                        className="text-[#f2f2f2] hover:bg-[#60a5fa]/20"
                      >
                        تم الإطلاق
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Technology Stack */}
                <div className="space-y-2">
                  <Label className="text-[#f2f2f2] font-medium">
                    التقنيات المستخدمة (اختياري)
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      value={techInput}
                      onChange={(e) => setTechInput(e.target.value)}
                      className="bg-[#0d2a5e]/50 border-[#60a5fa]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right h-10 rounded-xl focus:border-[#60a5fa] focus:ring-[#60a5fa]/20"
                      dir="rtl"
                      placeholder="أضف تقنية"
                      onKeyPress={(e) =>
                        e.key === "Enter" && (e.preventDefault(), addTech())
                      }
                    />
                    <Button
                      type="button"
                      onClick={addTech}
                      className="bg-[#60a5fa]/20 hover:bg-[#60a5fa]/30 text-[#60a5fa] border border-[#60a5fa]/30 px-4 h-10 rounded-xl"
                    >
                      إضافة
                    </Button>
                  </div>
                  {formData.techUsed && formData.techUsed.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {formData.techUsed.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-[#60a5fa]/20 text-[#60a5fa] px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-[#60a5fa]/30"
                        >
                          {tech}
                          <button
                            type="button"
                            onClick={() => removeTech(index)}
                            className="text-[#60a5fa] hover:text-[#f2f2f2] text-xs"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="pitchDeckUrl"
                    className="text-[#f2f2f2] font-medium"
                  >
                    رابط العرض التقديمي (اختياري)
                  </Label>
                  <Input
                    id="pitchDeckUrl"
                    type="url"
                    value={formData.pitchDeckUrl}
                    onChange={(e) =>
                      handleInputChange("pitchDeckUrl", e.target.value)
                    }
                    className="bg-[#0d2a5e]/50 border-[#60a5fa]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-left h-12 rounded-xl focus:border-[#60a5fa] focus:ring-[#60a5fa]/20"
                    dir="ltr"
                    placeholder="https://drive.google.com/..."
                  />
                </div>
              </div>
            </div>

            {/* Team Information */}
            <div className="bg-gradient-to-br from-[#0d2a5e]/60 to-[#1a3a73]/40 backdrop-blur-sm border border-[#60a5fa]/30 shadow-lg rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#60a5fa]/20 border border-[#60a5fa]/40 flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#60a5fa]" />
                </div>
                <h3 className="text-2xl font-bold text-[#60a5fa] font-[Tajawal]">
                  معلومات الفريق
                </h3>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    placeholder="اسم عضو الفريق"
                    value={newTeamMember.name}
                    onChange={(e) =>
                      setNewTeamMember((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="bg-[#0d2a5e]/50 border-[#60a5fa]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right h-10 rounded-xl focus:border-[#60a5fa] focus:ring-[#60a5fa]/20"
                    dir="rtl"
                  />
                  <Input
                    placeholder="الدور/التخصص"
                    value={newTeamMember.role}
                    onChange={(e) =>
                      setNewTeamMember((prev) => ({
                        ...prev,
                        role: e.target.value,
                      }))
                    }
                    className="bg-[#0d2a5e]/50 border-[#60a5fa]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right h-10 rounded-xl focus:border-[#60a5fa] focus:ring-[#60a5fa]/20"
                    dir="rtl"
                  />
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      placeholder="العمر"
                      value={newTeamMember.age || ""}
                      onChange={(e) =>
                        setNewTeamMember((prev) => ({
                          ...prev,
                          age: e.target.value
                            ? parseInt(e.target.value)
                            : undefined,
                        }))
                      }
                      className="bg-[#0d2a5e]/50 border-[#60a5fa]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 h-10 rounded-xl focus:border-[#60a5fa] focus:ring-[#60a5fa]/20"
                    />
                    <Button
                      type="button"
                      onClick={addTeamMember}
                      className="bg-[#60a5fa]/20 hover:bg-[#60a5fa]/30 text-[#60a5fa] border border-[#60a5fa]/30 px-4 h-10 rounded-xl"
                    >
                      إضافة
                    </Button>
                  </div>
                </div>

                {formData.teamMembers && formData.teamMembers.length > 0 && (
                  <div className="space-y-3">
                    <Label className="text-[#f2f2f2] font-medium">
                      أعضاء الفريق:
                    </Label>
                    {formData.teamMembers.map((member, index) => (
                      <div
                        key={index}
                        className="bg-[#60a5fa]/10 border border-[#60a5fa]/30 rounded-xl p-4 flex justify-between items-center"
                      >
                        <div className="text-[#f2f2f2] text-right">
                          <div className="font-medium">{member.name}</div>
                          <div className="text-sm text-[#f2f2f2]/70">
                            {member.role} {member.age && `- ${member.age} سنة`}
                          </div>
                        </div>
                        <Button
                          type="button"
                          onClick={() => removeTeamMember(index)}
                          className="bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 px-3 py-1 h-8 rounded-lg text-xs"
                        >
                          حذف
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Participation Goals */}
            <div className="bg-gradient-to-br from-[#0d2a5e]/60 to-[#1a3a73]/40 backdrop-blur-sm border border-[#60a5fa]/30 shadow-lg rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#60a5fa]/20 border border-[#60a5fa]/40 flex items-center justify-center">
                  <Target className="h-6 w-6 text-[#60a5fa]" />
                </div>
                <h3 className="text-2xl font-bold text-[#60a5fa] font-[Tajawal]">
                  أهداف المشاركة
                </h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-[#f2f2f2] font-medium">
                    ما الذي تبحث عنه من خلال المشاركة؟ *
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries({
                      mentorship: "الإرشاد والتوجيه",
                      visibility: "زيادة الوعي بالمشروع",
                      investment: "الاستثمار والتمويل",
                      partnerships: "الشراكات التجارية",
                    }).map(([value, label]) => (
                      <div
                        key={value}
                        className="flex items-center space-x-3 space-x-reverse"
                      >
                        <Checkbox
                          id={value}
                          checked={formData.lookingFor.includes(value as any)}
                          onCheckedChange={() => toggleLookingFor(value as any)}
                          className="border-[#60a5fa]/30 data-[state=checked]:bg-[#60a5fa] data-[state=checked]:text-[#0d2a5e] w-5 h-5"
                        />
                        <Label
                          htmlFor={value}
                          className="text-[#f2f2f2] font-medium"
                        >
                          {label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="howDidYouHear"
                    className="text-[#f2f2f2] font-medium"
                  >
                    كيف سمعت عن تمكين بريان؟ *
                  </Label>
                  <Textarea
                    id="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={(e) =>
                      handleInputChange("howDidYouHear", e.target.value)
                    }
                    className="bg-[#0d2a5e]/50 border-[#60a5fa]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right rounded-xl min-h-[80px] resize-none focus:border-[#60a5fa] focus:ring-[#60a5fa]/20"
                    dir="rtl"
                    placeholder="مواقع التواصل الاجتماعي، أصدقاء، جامعة، إلخ..."
                    rows={3}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Terms & Submit */}
            <div className="bg-gradient-to-br from-[#0d2a5e]/60 to-[#1a3a73]/40 backdrop-blur-sm border border-[#60a5fa]/30 shadow-lg rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#60a5fa] mb-6 font-[Tajawal]">
                الشروط والأحكام
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <Checkbox
                    id="acceptedTerms"
                    checked={formData.acceptedTerms}
                    onCheckedChange={(checked) =>
                      handleInputChange("acceptedTerms", checked)
                    }
                    className="border-[#60a5fa]/30 data-[state=checked]:bg-[#60a5fa] data-[state=checked]:text-[#0d2a5e] w-5 h-5 mt-1"
                    required
                  />
                  <Label
                    htmlFor="acceptedTerms"
                    className="text-[#f2f2f2]/90 text-sm leading-relaxed"
                  >
                    أوافق على الشروط والأحكام وسياسة الخصوصية، وأؤكد صحة
                    المعلومات المقدمة *
                  </Label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <Button
                type="submit"
                className="bg-[#60a5fa] hover:bg-[#3b82f6] text-[#0d2a5e] font-bold text-lg px-12 py-4 h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                disabled={!formData.acceptedTerms || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    جاري التسجيل...
                  </>
                ) : (
                  "تسجيل المشروع"
                )}
              </Button>
              <p className="text-sm text-[#f2f2f2]/60 mt-4">
                سيتم مراجعة طلبك والتواصل معك خلال 48 ساعة
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
