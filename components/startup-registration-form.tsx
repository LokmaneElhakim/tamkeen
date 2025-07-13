"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, CheckCircle } from "lucide-react"

export function StartupRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    activityType: "",
    description: "",
    website: "",
    socialLinks: "",
    boothNeeds: {
      electricity: false,
      table: false,
      internet: false,
      display: false,
    },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Startup registration submitted:", formData)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleBoothNeedChange = (need: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      boothNeeds: { ...prev.boothNeeds, [need]: Boolean(checked) },
    }))
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-[#0d2a5e]/80 to-[#1a3a73]/60 backdrop-blur-sm border border-[#d4af37]/30 shadow-2xl">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-[#d4af37] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#d4af37] mb-2">تم التسجيل بنجاح!</h3>
            <p className="text-[#f2f2f2]/90 mb-4">
              سنتواصل معك قريباً مع تفاصيل الجناح وتعليمات الإعداد.
            </p>
            <Button asChild className="w-full bg-[#d4af37] hover:bg-[#c09c20] text-[#0d2a5e] font-bold">
              <a href="/">العودة للرئيسية</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="py-10 px-4">
      <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-[#0d2a5e]/80 to-[#1a3a73]/60 backdrop-blur-sm border border-[#d4af37]/30 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-[#d4af37] text-2xl font-bold">تسجيل الشركات الناشئة</CardTitle>
          <CardDescription className="text-[#f2f2f2]/90">
            سجل شركتك الناشئة أو مشروعك للعرض في فعاليتنا
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-[#f2f2f2]">اسم الشركة/المشروع *</Label>
              <Input
                id="companyName"
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => handleInputChange("companyName", e.target.value)}
                placeholder="أدخل اسم شركتك"
                className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactName" className="text-[#f2f2f2]">اسم الشخص المسؤول *</Label>
              <Input
                id="contactName"
                type="text"
                required
                value={formData.contactName}
                onChange={(e) => handleInputChange("contactName", e.target.value)}
                placeholder="أدخل اسم الشخص المسؤول"
                className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#f2f2f2]">البريد الإلكتروني *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="contact@company.com"
                  className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#f2f2f2]">رقم الهاتف *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+213 XXX XXX XXX"
                  className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="activityType" className="text-[#f2f2f2]">نوع النشاط *</Label>
              <Select value={formData.activityType} onValueChange={(value) => handleInputChange("activityType", value)}>
                <SelectTrigger className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2]">
                  <SelectValue placeholder="اختر نوع نشاطك" />
                </SelectTrigger>
                <SelectContent className="bg-[#0d2a5e] border-[#d4af37]/30">
                  <SelectItem value="tech-startup" className="text-[#f2f2f2] hover:bg-[#d4af37]/20">شركة تقنية ناشئة</SelectItem>
                  <SelectItem value="e-commerce" className="text-[#f2f2f2] hover:bg-[#d4af37]/20">تجارة إلكترونية</SelectItem>
                  <SelectItem value="fintech" className="text-[#f2f2f2] hover:bg-[#d4af37]/20">تقنيات مالية</SelectItem>
                  <SelectItem value="healthtech" className="text-[#f2f2f2] hover:bg-[#d4af37]/20">تقنيات صحية</SelectItem>
                  <SelectItem value="edtech" className="text-[#f2f2f2] hover:bg-[#d4af37]/20">تقنيات تعليمية</SelectItem>
                  <SelectItem value="social-enterprise" className="text-[#f2f2f2] hover:bg-[#d4af37]/20">مؤسسة اجتماعية</SelectItem>
                  <SelectItem value="other" className="text-[#f2f2f2] hover:bg-[#d4af37]/20">أخرى</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-[#f2f2f2]">وصف النشاط التجاري *</Label>
              <Textarea
                id="description"
                required
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="صف منتجك/خدمتك والمشكلة التي يحلها"
                rows={4}
                className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="website" className="text-[#f2f2f2]">الموقع الإلكتروني</Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  placeholder="https://yourwebsite.com"
                  className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="socialLinks" className="text-[#f2f2f2]">روابط وسائل التواصل</Label>
                <Input
                  id="socialLinks"
                  type="text"
                  value={formData.socialLinks}
                  onChange={(e) => handleInputChange("socialLinks", e.target.value)}
                  placeholder="Instagram, LinkedIn, إلخ"
                  className="bg-[#0d2a5e]/50 border-[#d4af37]/30 text-[#f2f2f2] placeholder:text-[#f2f2f2]/60"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-[#f2f2f2]">متطلبات الجناح</Label>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries({
                  electricity: "كهرباء",
                  table: "طاولة وكراسي",
                  internet: "إنترنت",
                  display: "شاشة عرض",
                }).map(([key, label]) => (
                  <div key={key} className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id={key}
                      checked={formData.boothNeeds[key as keyof typeof formData.boothNeeds]}
                      onCheckedChange={(checked) => handleBoothNeedChange(key, Boolean(checked))}
                      className="border-[#d4af37]/30 data-[state=checked]:bg-[#d4af37] data-[state=checked]:text-[#0d2a5e]"
                    />
                    <Label htmlFor={key} className="text-sm text-[#f2f2f2]/90">
                      {label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#d4af37] hover:bg-[#c09c20] text-[#0d2a5e] font-bold"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  جاري التسجيل...
                </>
              ) : (
                "تسجيل الشركة الناشئة"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
