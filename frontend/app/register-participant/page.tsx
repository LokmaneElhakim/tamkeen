import { ParticipantRegistrationForm } from "@/components/participant-registration-form";
import { UserPlus } from "lucide-react";

export default function RegisterParticipantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d2a5e] via-[#1a3a73] to-[#2b4a8a]">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/20 backdrop-blur-sm border border-[#d4af37]/30 shadow-lg rounded-full px-6 py-3 mb-8">
            <div className="w-8 h-8 rounded-full bg-[#d4af37]/30 flex items-center justify-center">
              <UserPlus className="h-5 w-5 text-[#d4af37]" />
            </div>
            <span className="text-sm font-medium text-[#d4af37]">
              تسجيل المشاركين
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#d4af37] to-[#f2f2f2] bg-clip-text text-transparent font-[Tajawal]">
            انضم إلى تمكين بريان 2025
          </h1>
          <p className="text-xl text-[#f2f2f2]/90 max-w-3xl mx-auto leading-relaxed">
            ابدأ رحلتك نحو مستقبل مشرق وانضم إلى مئات الشباب الجزائري في هذه
            التجربة التحويلية
          </p>
        </div>

        <ParticipantRegistrationForm />
      </div>
    </div>
  );
}
