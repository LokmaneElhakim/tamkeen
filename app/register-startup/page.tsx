import { StartupRegistrationForm } from "@/components/startup-registration-form";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function RegisterStartupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d2a5e] via-[#1a3a73] to-[#0d2a5e]">
      <Navbar />

      <div className="relative">
        {/* Hero Section */}
        <div className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#60a5fa]/10 to-[#60a5fa]/5" />
          <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-10" />

          <div className="relative container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-[#60a5fa] mb-6 font-[Tajawal]">
                سجل مشروعك الناشئ
              </h1>
              <p className="text-xl md:text-2xl text-[#f2f2f2]/90 mb-8 leading-relaxed">
                انضم إلى معرض تمكين بريان 2025 وأعرض مشروعك أمام المستثمرين
                والخبراء
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-3 bg-[#60a5fa]/10 border border-[#60a5fa]/30 rounded-xl px-6 py-3">
                  <div className="w-3 h-3 rounded-full bg-[#60a5fa] animate-pulse"></div>
                  <span className="text-[#f2f2f2] font-medium">
                    التسجيل مفتوح الآن
                  </span>
                </div>
                <div className="text-[#f2f2f2]/70 text-sm">
                  آخر موعد: 31 يناير 2025
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="relative py-16">
          <div className="container mx-auto px-4">
            <StartupRegistrationForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
