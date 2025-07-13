import { StartupRegistrationForm } from "@/components/startup-registration-form"

export default function RegisterStartupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d2a5e] via-[#1a3a73] to-[#2b4a8a]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#d4af37] to-[#f2f2f2] bg-clip-text text-transparent mb-4">تسجيل الشركات الناشئة</h1>
            <p className="text-lg text-[#f2f2f2]/90">
              اعرض ابتكارك وتواصل مع الشباب الموهوب
            </p>
          </div>
          <StartupRegistrationForm />
        </div>
      </div>
    </div>
  )
}
