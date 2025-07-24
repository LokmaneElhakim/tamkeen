"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function StartupForm() {
  const [teamMembers, setTeamMembers] = useState([{ name: "", role: "" }]);

  const handleAddTeamMember = () => {
    setTeamMembers([...teamMembers, { name: "", role: "" }]);
  };

  const handleChangeTeamMember = (
    index: number,
    field: "name" | "role",
    value: string
  ) => {
    const updated = [...teamMembers];
    updated[index][field] = value;
    setTeamMembers(updated);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 text-right rtl">
      <div className="bg-gradient-to-br from-[#0d2a5e]/60 to-[#1a3a73]/40 backdrop-blur-sm border border-[#d4af37]/30 shadow-2xl rounded-3xl overflow-hidden">
        <div className="bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/10 backdrop-blur-sm border-b border-[#d4af37]/40 p-8">
          <h2 className="text-3xl font-bold text-[#d4af37] mb-4 text-center font-[Tajawal]">
            📋 استمارة التسجيل في فعالية تمكين
          </h2>
          <p className="text-[#f2f2f2]/90 text-center text-lg">
            يرجى ملء هذه الاستمارة بدقة. لا تقلق إن لم تكن لديك كل التفاصيل، فقط
            قدم أفضل ما لديك ❤️
          </p>
        </div>
        <div className="p-8">
          <form className="space-y-8">
            {/* Project Name */}
            <div className="space-y-2">
              <Label className="text-[#f2f2f2] font-medium">
                🌟 اسم المشروع الناشئ
              </Label>
              <Input
                className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right h-12 rounded-xl focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                placeholder="مثال: Tech4Farm"
                required
              />
              <p className="text-xs text-muted-foreground">
                اختر اسمًا يعبر عن مشروعك ويمكن تذكره بسهولة.
              </p>
            </div>
            {/* Founder Name */}
            <div className="space-y-2">
              <Label className="text-[#f2f2f2] font-medium">
                👤 اسم المؤسس / المؤسِسة
              </Label>
              <Input
                className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right h-12 rounded-xl focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                required
              />
            </div>
            {/* Email */}
            <div className="space-y-2">
              <Label className="text-[#f2f2f2] font-medium">
                📧 البريد الإلكتروني للتواصل
              </Label>
              <Input
                type="email"
                className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right h-12 rounded-xl focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                placeholder="example@mail.com"
                required
              />
            </div>
            {/* Phone */}
            <div className="space-y-2">
              <Label className="text-[#f2f2f2] font-medium">
                📞 رقم الهاتف (واتساب)
              </Label>
              <Input
                type="tel"
                className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right h-12 rounded-xl focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                placeholder="مثال: +213 6 00 00 00 00"
              />
            </div>
            {/* Team Members */}
            <div className="space-y-2">
              <Label className="text-[#f2f2f2] font-medium">
                👥 أعضاء الفريق
              </Label>
              {teamMembers.map((member, index) => (
                <div key={index} className="grid grid-cols-2 gap-2">
                  <Input
                    className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right h-12 rounded-xl focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                    placeholder="الاسم"
                    value={member.name}
                    onChange={(e) =>
                      handleChangeTeamMember(index, "name", e.target.value)
                    }
                  />
                  <Input
                    className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right h-12 rounded-xl focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                    placeholder="الدور (مثال: مطوّر، مصممة...)"
                    value={member.role}
                    onChange={(e) =>
                      handleChangeTeamMember(index, "role", e.target.value)
                    }
                  />
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={handleAddTeamMember}
                className="border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10 rounded-xl mt-2"
              >
                + أضف عضواً
              </Button>
            </div>
            {/* Idea Description */}
            <div className="space-y-2">
              <Label className="text-[#f2f2f2] font-medium">
                💡 وصف الفكرة
              </Label>
              <Textarea
                className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right rounded-xl min-h-[100px] resize-none focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                placeholder="اشرح الفكرة بإيجاز: ما هو المشكل؟ من هو المستفيد؟"
                required
              />
            </div>
            {/* BMC Link */}
            <div className="space-y-2">
              <Label className="text-[#f2f2f2] font-medium">
                🧩 رابط مخطط نموذج العمل (BMC)
              </Label>
              <Input
                type="url"
                className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right h-12 rounded-xl focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                placeholder="https://drive.google.com/..."
                required
              />
              <p className="text-xs text-muted-foreground">
                ارفع ملف BMC الخاص بك على Google Drive وشارك الرابط هنا.
              </p>
            </div>
            {/* MVP Link */}
            <div className="space-y-2">
              <Label className="text-[#f2f2f2] font-medium">
                🛠️ رابط النموذج الأولي (MVP) - اختياري
              </Label>
              <Input
                type="url"
                className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right h-12 rounded-xl focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                placeholder="https://drive.google.com/..."
              />
            </div>
            {/* Website */}
            <div className="space-y-2">
              <Label className="text-[#f2f2f2] font-medium">
                🌐 الموقع الإلكتروني للمشروع (اختياري)
              </Label>
              <Input
                type="url"
                className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60 text-right h-12 rounded-xl focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                placeholder="https://example.com"
              />
            </div>
            {/* Industry */}
            <div className="space-y-2">
              <Label className="text-[#f2f2f2] font-medium">🏭 القطاع</Label>
              <Select>
                <SelectTrigger className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] h-12 rounded-xl focus:border-[#d4af37] focus:ring-[#d4af37]/20">
                  <SelectValue placeholder="اختر القطاع المناسب" />
                </SelectTrigger>
                <SelectContent className="bg-[#0d2a5e] border-[#d4af37]/30 rounded-xl">
                  <SelectItem
                    value="agritech"
                    className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                  >
                    التكنولوجيا الزراعية (Agritech)
                  </SelectItem>
                  <SelectItem
                    value="edtech"
                    className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                  >
                    التعليم (EdTech)
                  </SelectItem>
                  <SelectItem
                    value="santé"
                    className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                  >
                    الصحة
                  </SelectItem>
                  <SelectItem
                    value="énergie"
                    className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                  >
                    الطاقة
                  </SelectItem>
                  <SelectItem
                    value="autre"
                    className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                  >
                    أخرى
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Stage */}
            <div className="space-y-2">
              <Label className="text-[#f2f2f2] font-medium">
                🚀 مرحلة المشروع
              </Label>
              <Select>
                <SelectTrigger className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] h-12 rounded-xl focus:border-[#d4af37] focus:ring-[#d4af37]/20">
                  <SelectValue placeholder="حدد المرحلة الحالية" />
                </SelectTrigger>
                <SelectContent className="bg-[#0d2a5e] border-[#d4af37]/30 rounded-xl">
                  <SelectItem
                    value="idee"
                    className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                  >
                    فكرة
                  </SelectItem>
                  <SelectItem
                    value="prototype"
                    className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                  >
                    نموذج أولي
                  </SelectItem>
                  <SelectItem
                    value="mvp"
                    className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                  >
                    MVP جاهز
                  </SelectItem>
                  <SelectItem
                    value="test"
                    className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                  >
                    اختبارات المستخدم
                  </SelectItem>
                  <SelectItem
                    value="marché"
                    className="text-[#f2f2f2] hover:bg-[#d4af37]/20"
                  >
                    متاح في السوق
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-center pt-6">
              <Button
                type="submit"
                className="bg-[#d4af37] hover:bg-[#c09c20] text-[#0d2a5e] font-bold text-lg px-12 py-4 h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-4"
              >
                ✅ إرسال التسجيل
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
