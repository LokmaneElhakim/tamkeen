"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, User, GraduationCap, Target, ArrowRight, ArrowLeft } from "lucide-react"

export function ParticipantRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",

    // Education & Background
    educationLevel: "",
    fieldOfStudy: "",
    university: "",
    graduationYear: "",
    currentStatus: "",

    // Track & Motivation
    preferredTrack: "",
    motivation: "",
    expectations: "",
    previousExperience: "",

    // Additional Info
    hasLaptop: false,
    needsAccommodation: false,
    dietaryRestrictions: "",
    emergencyContact: "",
    emergencyPhone: "",

    // Agreements
    agreeToTerms: false,
    agreeToPhotos: false,
    subscribeNewsletter: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.phone &&
          formData.dateOfBirth &&
          formData.gender
        )
      case 2:
        return formData.educationLevel && formData.currentStatus
      case 3:
        return formData.preferredTrack && formData.motivation
      case 4:
        return formData.emergencyContact && formData.emergencyPhone && formData.agreeToTerms
      default:
        return false
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="border-0 shadow-2xl">
          <CardContent className="pt-12 pb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">تم التسجيل بنجاح!</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                شكراً لك على التسجيل في تمكين غرداية 2025. ستصلك رسالة تأكيد على بريدك الإلكتروني تحتوي على تفاصيل الحدث
                ورمز QR الخاص بك.
              </p>
              <div className="bg-slate-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-slate-900 mb-2">الخطوات التالية:</h4>
                <ul className="text-sm text-slate-600 space-y-2 text-right">
                  <li>• تحقق من بريدك الإلكتروني للحصول على رسالة التأكيد</li>
                  <li>• احفظ رمز QR الخاص بك للدخول إلى الفعاليات</li>
                  <li>• انضم إلى مجموعة واتساب للمشاركين</li>
                  <li>• ستصلك تذكيرات قبل بداية الحدث</li>
                </ul>
              </div>
              <Button asChild className="w-full bg-gradient-to-r from-orange-500 to-orange-600">
                <a href="/">العودة للرئيسية</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="border-0 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-t-lg">
          <CardTitle className="text-2xl">تسجيل مشارك - تمكين غرداية 2025</CardTitle>
          <CardDescription className="text-slate-200">
            املأ النموذج للانضمام إلى أكبر حدث لتمكين الشباب في غرداية
          </CardDescription>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-slate-200">الخطوة {currentStep} من 4</span>
              <span className="text-sm text-slate-200">{Math.round((currentStep / 4) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              ></div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">المعلومات الشخصية</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">الاسم الأول *</Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="أدخل اسمك الأول"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">اسم العائلة *</Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="أدخل اسم عائلتك"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الهاتف *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+213 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">تاريخ الميلاد *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>الجنس *</Label>
                    <RadioGroup
                      value={formData.gender}
                      onValueChange={(value) => handleInputChange("gender", value)}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">ذكر</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">أنثى</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Education & Background */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">التعليم والخلفية</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="educationLevel">المستوى التعليمي *</Label>
                    <Select onValueChange={(value) => handleInputChange("educationLevel", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر مستواك التعليمي" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-school">ثانوي</SelectItem>
                        <SelectItem value="bachelor">ليسانس</SelectItem>
                        <SelectItem value="master">ماستر</SelectItem>
                        <SelectItem value="phd">دكتوراه</SelectItem>
                        <SelectItem value="other">أخرى</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fieldOfStudy">مجال الدراسة</Label>
                    <Input
                      id="fieldOfStudy"
                      value={formData.fieldOfStudy}
                      onChange={(e) => handleInputChange("fieldOfStudy", e.target.value)}
                      placeholder="مثل: هندسة، إدارة أعمال، إلخ"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="university">الجامعة/المؤسسة</Label>
                    <Input
                      id="university"
                      value={formData.university}
                      onChange={(e) => handleInputChange("university", e.target.value)}
                      placeholder="اسم الجامعة أو المؤسسة التعليمية"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="graduationYear">سنة التخرج</Label>
                    <Input
                      id="graduationYear"
                      type="number"
                      min="2000"
                      max="2030"
                      value={formData.graduationYear}
                      onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                      placeholder="2024"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentStatus">الوضع الحالي *</Label>
                  <Select onValueChange={(value) => handleInputChange("currentStatus", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر وضعك الحالي" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">طالب</SelectItem>
                      <SelectItem value="employed">موظف</SelectItem>
                      <SelectItem value="unemployed">باحث عن عمل</SelectItem>
                      <SelectItem value="entrepreneur">رائد أعمال</SelectItem>
                      <SelectItem value="freelancer">عامل حر</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 3: Track & Motivation */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Target className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">المسار والدافع</h3>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredTrack">المسار المفضل *</Label>
                  <Select onValueChange={(value) => handleInputChange("preferredTrack", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر المسار الذي يناسبك" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entrepreneurship">ريادة الأعمال والمشاريع الناشئة</SelectItem>
                      <SelectItem value="employment">التوظيف والاستعداد لسوق العمل</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">لماذا تريد المشاركة في تمكين؟ *</Label>
                  <Textarea
                    id="motivation"
                    required
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    placeholder="اشرح دوافعك للمشاركة في هذا الحدث..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expectations">ما هي توقعاتك من الحدث؟</Label>
                  <Textarea
                    id="expectations"
                    value={formData.expectations}
                    onChange={(e) => handleInputChange("expectations", e.target.value)}
                    placeholder="ما الذي تأمل في تحقيقه أو تعلمه؟"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="previousExperience">الخبرة السابقة (إن وجدت)</Label>
                  <Textarea
                    id="previousExperience"
                    value={formData.previousExperience}
                    onChange={(e) => handleInputChange("previousExperience", e.target.value)}
                    placeholder="أي خبرة سابقة في ريادة الأعمال أو التدريب المهني؟"
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Additional Info & Agreements */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">معلومات إضافية</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">جهة الاتصال في الطوارئ *</Label>
                    <Input
                      id="emergencyContact"
                      required
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                      placeholder="اسم الشخص للاتصال به"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone">رقم هاتف الطوارئ *</Label>
                    <Input
                      id="emergencyPhone"
                      type="tel"
                      required
                      value={formData.emergencyPhone}
                      onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                      placeholder="+213 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasLaptop"
                      checked={formData.hasLaptop}
                      onCheckedChange={(checked) => handleInputChange("hasLaptop", checked as boolean)}
                    />
                    <Label htmlFor="hasLaptop">أملك جهاز كمبيوتر محمول</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="needsAccommodation"
                      checked={formData.needsAccommodation}
                      onCheckedChange={(checked) => handleInputChange("needsAccommodation", checked as boolean)}
                    />
                    <Label htmlFor="needsAccommodation">أحتاج إلى مساعدة في الإقامة</Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dietaryRestrictions">قيود غذائية أو حساسية</Label>
                  <Input
                    id="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={(e) => handleInputChange("dietaryRestrictions", e.target.value)}
                    placeholder="أي قيود غذائية أو حساسية يجب مراعاتها"
                  />
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-200">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                      required
                    />
                    <Label htmlFor="agreeToTerms" className="text-sm leading-relaxed">
                      أوافق على{" "}
                      <a href="#" className="text-orange-600 hover:underline">
                        الشروط والأحكام
                      </a>{" "}
                      وسياسة الخصوصية لحدث تمكين غرداية 2025 *
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeToPhotos"
                      checked={formData.agreeToPhotos}
                      onCheckedChange={(checked) => handleInputChange("agreeToPhotos", checked as boolean)}
                    />
                    <Label htmlFor="agreeToPhotos" className="text-sm leading-relaxed">
                      أوافق على التصوير واستخدام صوري في المواد الترويجية للحدث
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="subscribeNewsletter"
                      checked={formData.subscribeNewsletter}
                      onCheckedChange={(checked) => handleInputChange("subscribeNewsletter", checked as boolean)}
                    />
                    <Label htmlFor="subscribeNewsletter" className="text-sm leading-relaxed">
                      أرغب في تلقي النشرة الإخبارية وتحديثات الأحداث المستقبلية
                    </Label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 border-t border-slate-200">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2 bg-transparent"
              >
                <ArrowLeft className="h-4 w-4" />
                السابق
              </Button>

              {currentStep < 4 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 flex items-center gap-2"
                >
                  التالي
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting || !canProceed()}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 flex items-center gap-2"
                >
                  {isSubmitting ? "جاري التسجيل..." : "إتمام التسجيل"}
                  <CheckCircle className="h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
