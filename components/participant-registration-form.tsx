"use client";

import React, { useState } from "react";
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
  UserPlus,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";

const participantSchema = z.object({
  firstName: z.string().min(1, "الاسم الأول مطلوب"),
  email: z.string().email("البريد الإلكتروني غير صالح"),
  phone: z.string().min(10, "رقم الهاتف يجب أن يتكون من 10 أرقام على الأقل"),
  age: z
    .number({ invalid_type_error: "العمر مطلوب" })
    .min(18, "يجب أن يكون العمر 18 عامًا على الأقل")
    .max(35, "يجب ألا يتجاوز العمر 35 عامًا"),
  education: z.string().min(1, "المستوى التعليمي مطلوب"),
  currentStatus: z.string().min(1, "الوضع الحالي مطلوب"),
  track: z.string().min(1, "المسار مطلوب"),
  motivation: z.string().min(1, "سبب المشاركة مطلوب"),
  hasLaptop: z.boolean(),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "يجب الموافقة على الشروط والأحكام",
  }),
});

type ParticipantFormValues = z.infer<typeof participantSchema>;

export function ParticipantRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ParticipantFormValues>({
    resolver: zodResolver(participantSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data: ParticipantFormValues) => {
    try {
      setIsSubmitting(true);
      const response = await axios.post("/api/participants", data);
      alert("تم التسجيل بنجاح!");
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error: any) {
      alert(error.response?.data?.error || "حدث خطأ ما");
      setIsSubmitting(false);
    }
  };

  const hasLaptop = watch("hasLaptop");
  const agreeTerms = watch("agreeTerms");

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto">
        <div className="bg-gradient-to-br from-[#0d2a5e]/60 to-[#1a3a73]/40 backdrop-blur-sm border border-[#d4af37]/30 shadow-2xl rounded-3xl p-8">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-[#d4af37] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-[#d4af37] mb-4 font-[Tajawal]">
              تم التسجيل بنجاح!
            </h3>
            <p className="text-[#f2f2f2]/90 mb-6 leading-relaxed">
              سيتم إرسال رسالة تأكيد على بريدك الإلكتروني مع رمز QR الخاص بك.
            </p>
            <Button
              asChild
              className="w-full bg-[#d4af37] hover:bg-[#c09c20] text-[#0d2a5e] font-bold py-3 rounded-xl"
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
      <div className="bg-gradient-to-br from-[#0d2a5e]/60 to-[#1a3a73]/40 backdrop-blur-sm border border-[#d4af37]/30 shadow-2xl rounded-3xl overflow-hidden">
        <div className="bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/10 backdrop-blur-sm border-b border-[#d4af37]/40 p-8">
          <h2 className="text-3xl font-bold text-[#d4af37] mb-4 text-center font-[Tajawal]">
            نموذج التسجيل
          </h2>
          <p className="text-[#f2f2f2]/90 text-center text-lg">
            املأ البيانات التالية للانضمام إلى حدث تمكين بريان 2025
          </p>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-gradient-to-br from-[#0d2a5e]/60 to-[#1a3a73]/40 backdrop-blur-sm border border-[#d4af37]/30 shadow-lg rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center">
                  <UserPlus className="h-6 w-6 text-[#d4af37]" />
                </div>
                <h3 className="text-2xl font-bold text-[#d4af37] font-[Tajawal]">
                  المعلومات الشخصية
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="text-[#f2f2f2] font-medium"
                  >
                    الاسم الأول *
                  </Label>
                  <Input
                    id="firstName"
                    {...register("firstName")}
                    className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right h-12 rounded-xl focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                    dir="rtl"
                    required
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-[#f2f2f2] font-medium flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4 text-[#d4af37]" />
                    البريد الإلكتروني *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-left h-12 rounded-xl focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                    dir="ltr"
                    placeholder="your.email@example.com"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-[#f2f2f2] font-medium flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4 text-[#d4af37]" />
                    رقم الهاتف *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-left h-12 rounded-xl focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                    dir="ltr"
                    placeholder="+213 XXX XXX XXX"
                    required
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age" className="text-[#f2f2f2] font-medium">
                    العمر *
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    {...register("age", { valueAsNumber: true })}
                    className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 h-12 rounded-xl focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                    required
                  />
                  {errors.age && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.age.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Educational & Professional Background */}
            <div className="bg-gradient-to-br from-[#0d2a5e]/60 to-[#1a3a73]/40 backdrop-blur-sm border border-[#d4af37]/30 shadow-lg rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-[#d4af37]" />
                </div>
                <h3 className="text-2xl font-bold text-[#d4af37] font-[Tajawal]">
                  المؤهلات والخبرة
                </h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="education"
                    className="text-[#f2f2f2] font-medium"
                  >
                    المستوى التعليمي *
                  </Label>
                  <Select
                    onValueChange={(value) => setValue("education", value)}
                  >
                    <SelectTrigger className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] text-right h-12 rounded-xl focus:border-[#d4af37] focus:ring-[#d4af37]/20">
                      <SelectValue placeholder="اختر المستوى التعليمي" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0d2a5e] border-[#d4af37]/30 rounded-xl">
                      <SelectItem
                        value="secondary"
                        className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                      >
                        ثانوي
                      </SelectItem>
                      <SelectItem
                        value="bachelor"
                        className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                      >
                        بكالوريوس
                      </SelectItem>
                      <SelectItem
                        value="master"
                        className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                      >
                        ماجستير
                      </SelectItem>
                      <SelectItem
                        value="phd"
                        className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                      >
                        دكتوراه
                      </SelectItem>
                      <SelectItem
                        value="other"
                        className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                      >
                        أخرى
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="currentStatus"
                    className="text-[#f2f2f2] font-medium flex items-center gap-2"
                  >
                    <Briefcase className="h-4 w-4 text-[#d4af37]" />
                    الوضع الحالي *
                  </Label>
                  <Select
                    onValueChange={(value) => setValue("currentStatus", value)}
                  >
                    <SelectTrigger className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] text-right h-12 rounded-xl focus:border-[#d4af37] focus:ring-[#d4af37]/20">
                      <SelectValue placeholder="اختر وضعك الحالي" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0d2a5e] border-[#d4af37]/30 rounded-xl">
                      <SelectItem
                        value="student"
                        className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                      >
                        طالب
                      </SelectItem>
                      <SelectItem
                        value="unemployed"
                        className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                      >
                        باحث عن عمل
                      </SelectItem>
                      <SelectItem
                        value="employed"
                        className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                      >
                        موظف
                      </SelectItem>
                      <SelectItem
                        value="entrepreneur"
                        className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                      >
                        رائد أعمال
                      </SelectItem>
                      <SelectItem
                        value="freelancer"
                        className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                      >
                        عمل حر
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="track" className="text-[#f2f2f2] font-medium">
                    المسار المفضل *
                  </Label>
                  <Select onValueChange={(value) => setValue("track", value)}>
                    <SelectTrigger className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] text-right h-12 rounded-xl focus:border-[#d4af37] focus:ring-[#d4af37]/20">
                      <SelectValue placeholder="اختر المسار المناسب لك" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0d2a5e] border-[#d4af37]/30 rounded-xl">
                      <SelectItem
                        value="entrepreneurship"
                        className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                      >
                        ريادة الأعمال
                      </SelectItem>
                      <SelectItem
                        value="employment"
                        className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                      >
                        إعداد التوظيف
                      </SelectItem>
                      <SelectItem
                        value="both"
                        className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                      >
                        كلا المسارين
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="experience"
                    className="text-[#f2f2f2] font-medium"
                  >
                    الخبرة السابقة (اختياري)
                  </Label>
                  <Textarea
                    id="experience"
                    {...register("experience")}
                    placeholder="اذكر أي خبرة سابقة في ريادة الأعمال أو العمل..."
                    className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right rounded-xl min-h-[100px] resize-none focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                    dir="rtl"
                    rows={4}
                  />
                </div>
              </div>
            </div>

            {/* Motivation */}
            <div className="bg-gradient-to-br from-[#0d2a5e]/60 to-[#1a3a73]/40 backdrop-blur-sm border border-[#d4af37]/30 shadow-lg rounded-2xl p-8">
              <div className="space-y-2">
                <Label
                  htmlFor="motivation"
                  className="text-[#f2f2f2] font-medium text-lg"
                >
                  لماذا تريد المشاركة في تمكين بريان؟ *
                </Label>
                <Textarea
                  id="motivation"
                  {...register("motivation")}
                  placeholder="أخبرنا عن أهدافك وتطلعاتك..."
                  className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right rounded-xl min-h-[120px] resize-none focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                  dir="rtl"
                  rows={5}
                  required
                />
                {errors.motivation && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.motivation.message}
                  </p>
                )}
              </div>
            </div>

            {/* Additional Information & Terms */}
            <div className="bg-gradient-to-br from-[#0d2a5e]/60 to-[#1a3a73]/40 backdrop-blur-sm border border-[#d4af37]/30 shadow-lg rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#d4af37] mb-6 font-[Tajawal]">
                معلومات إضافية
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Checkbox
                    id="hasLaptop"
                    {...register("hasLaptop")}
                    className="border-[#d4af37]/30 data-[state=checked]:bg-[#d4af37] data-[state=checked]:text-[#0d2a5e] w-5 h-5"
                  />
                  <Label
                    htmlFor="hasLaptop"
                    className="text-[#f2f2f2] font-medium"
                  >
                    أملك جهاز كمبيوتر محمول
                  </Label>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <Checkbox
                    id="agreeTerms"
                    {...register("agreeTerms")}
                    className="border-[#d4af37]/30 data-[state=checked]:bg-[#d4af37] data-[state=checked]:text-[#0d2a5e] w-5 h-5 mt-1"
                    required
                  />
                  <Label
                    htmlFor="agreeTerms"
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
                className="bg-[#d4af37] hover:bg-[#c09c20] text-[#0d2a5e] font-bold text-lg px-12 py-4 h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                disabled={!agreeTerms || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    جاري التسجيل...
                  </>
                ) : (
                  "إرسال التسجيل"
                )}
              </Button>
              <p className="text-sm text-[#f2f2f2]/60 mt-4">
                سيتم إرسال رسالة تأكيد على بريدك الإلكتروني
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
