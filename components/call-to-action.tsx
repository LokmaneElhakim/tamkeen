import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Rocket,
  Users,
  Calendar,
  Zap,
} from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0d2a5e] via-[#1a3a73] to-[#0d2a5e] text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-[#d4af37]/20 rounded-full blur-xl floating-animation"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-48 h-48 bg-[#f2f2f2]/10 rounded-full blur-xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl floating-animation"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-[#d4af37]/20 text-[#d4af37] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4 mr-2" />
            فرصة محدودة
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            لا تفوت الفرصة!
            <br />
            <span className="text-[#d4af37]">أماكن محدودة متاحة</span>
          </h2>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            انضم إلى أكثر من 500 مشارك في هذه التجربة التحويلية واكتشف إمكاناتك
            الحقيقية
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mb-16">
          <Button
            asChild
            size="lg"
            className="bg-[#d4af37] text-[#04174d] hover:bg-[#c09c20] hover:scale-105 transition-all duration-300 font-bold text-xl px-10 py-6 rounded-full shadow-2xl min-w-[280px] group"
          >
            <Link href="/register-participant">
              <Rocket className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              سجل الآن
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-transparent border-2 border-[#f2f2f2] text-[#f2f2f2] hover:bg-[#f2f2f2] hover:text-[#04174d] hover:scale-105 transition-all duration-300 font-bold text-xl px-10 py-6 rounded-full shadow-lg min-w-[280px] group"
          >
            <a
              href="https://chat.whatsapp.com/K5OLnUuKrA45VQBDD7yeS9?mode=r_t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-3 h-6 w-6 group-hover:bounce transition-transform" />
              انضم لمجموعة واتساب
            </a>
          </Button>
        </div>

        {/* Stats/Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#04174d]" />
            </div>
            <p className="text-3xl font-bold text-[#d4af37] mb-2">100+</p>
            <p className="text-lg font-semibold">مستفيد</p>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-[#04174d]" />
            </div>
            <p className="text-3xl font-bold text-[#d4af37] mb-2">8</p>
            <p className="text-lg font-semibold">جلسات مكثفة</p>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-[#04174d]" />
            </div>
            <p className="text-3xl font-bold text-[#d4af37] mb-2">3</p>
            <p className="text-lg font-semibold">أيام من الابتكار</p>
          </div>
        </div>
      </div>
    </section>
  );
}
