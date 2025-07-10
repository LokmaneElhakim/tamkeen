import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, MessageCircle, Rocket } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-16 bg-[#0d2a5e] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-xl floating-animation"></div>
        <div
          className="absolute bottom-10 right-10 w-48 h-48 bg-[#f2f2f2]/10 rounded-full blur-xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          لا تفوت الفرصة! أماكن محدودة متاحة.
        </h2>
        <p className="text-xl mb-8">
          انضم إلى أكثر من 500 مشارك في هذه التجربة التحويلية.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button
            asChild
            size="lg"
            className="bg-[#d4af37] text-[#04174d] hover:bg-[#c09c20] transition-all duration-300 font-bold text-lg px-8 py-4 rounded-full shadow-lg"
          >
            <Link href="/register-participant">
              <Rocket className="mr-2 h-5 w-5" />
              سجل الآن
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-[#f2f2f2] text-[#04174d] hover:bg-white transition-all duration-300 font-bold text-lg px-8 py-4 rounded-full shadow-lg"
          >
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              انضم لمجموعة واتساب
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg font-semibold">
          <p>✅ 500+ مشارك</p>
          <p>✅ 8 جلسات مكثفة</p>
          <p>✅ 3 أيام من الابتكار</p>
        </div>
      </div>
    </section>
  );
}
