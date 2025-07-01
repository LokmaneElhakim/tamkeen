import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, MessageCircle, Rocket, Sparkles } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#2b3761] via-[#4767a7] to-[#2b3761] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#f7cd6f]/10 rounded-full blur-xl floating-animation"></div>
        <div
          className="absolute bottom-10 right-10 w-48 h-48 bg-[#eeb93c]/10 rounded-full blur-xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
          <Sparkles className="h-5 w-5 text-[#f7cd6f]" />
          <span className="font-semibold">انضم إلى الحركة</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          مستعد لتحويل <span className="text-[#f7cd6f]">مستقبلك؟</span>
        </h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto text-blue-100 leading-relaxed">
          لا تفوت هذه الفرصة لتكون جزءاً من أكبر مبادرة لتمكين الشباب في غرداية.
          <span className="text-[#f7cd6f] font-semibold"> أماكن محدودة متاحة</span> لـ 8 جلسات مكثفة.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#f7cd6f] to-[#eeb93c] text-[#2b3761] hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg px-8 py-4 rounded-full"
          >
            <Link href="/register-participant">
              <Rocket className="mr-2 h-5 w-5" />
              سجل الآن
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-[#f7cd6f] text-[#f7cd6f] hover:bg-[#f7cd6f] hover:text-[#2b3761] transition-all duration-300 font-bold text-lg px-8 py-4 rounded-full"
          >
            <a href="https://wa.me/213XXXXXXXXX" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              انضم لمجموعة واتساب
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-6 hover:neon-glow transition-all duration-300">
            <div className="text-2xl font-bold text-[#f7cd6f] mb-2">500+</div>
            <div className="text-sm text-blue-200">مشارك متوقع</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 hover:neon-glow transition-all duration-300">
            <div className="text-2xl font-bold text-[#f7cd6f] mb-2">8</div>
            <div className="text-sm text-blue-200">جلسات مكثفة</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 hover:neon-glow transition-all duration-300">
            <div className="text-2xl font-bold text-[#f7cd6f] mb-2">3</div>
            <div className="text-sm text-blue-200">أيام من الابتكار</div>
          </div>
        </div>
      </div>
    </section>
  )
}
