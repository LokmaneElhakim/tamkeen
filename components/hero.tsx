"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Users, Sparkles, Rocket, Code } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#2b3761] via-[#4767a7] to-[#2b3761] text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#f7cd6f]/20 rounded-full blur-xl floating-animation"></div>
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-[#eeb93c]/20 rounded-full blur-xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#f7cd6f]/30 rounded-full blur-lg floating-animation"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-[#eeb93c]/40 rounded-full blur-md floating-animation"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 py-32 pt-40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Sparkles className="h-5 w-5 text-[#f7cd6f]" />
              <span className="text-sm font-medium">حدث تمكين الشباب الأول في غرداية</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-[#f7cd6f]">تمكين</span>
              <span className="block gradient-text">غرداية</span>
              <span className="block text-white">2025</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              <span className="text-[#f7cd6f] font-bold text-2xl block mb-4">"إبنِ مستقبلك، واصنع أثرًا في مجتمعك"</span>
              انضم إلى أشمل برنامج لتمكين الشباب في غرداية.
              <span className="text-[#f7cd6f] font-semibold"> مساران متخصصان</span> في ريادة الأعمال والاستعداد للتوظيف.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="glass-effect rounded-2xl p-6 hover:neon-glow transition-all duration-300">
                <Calendar className="h-8 w-8 text-[#f7cd6f] mb-3 mx-auto" />
                <div className="text-lg font-semibold mb-1">22-29 أغسطس 2025</div>
                <div className="text-blue-200 text-sm">الورشات التدريبية</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 hover:neon-glow transition-all duration-300">
                <MapPin className="h-8 w-8 text-[#f7cd6f] mb-3 mx-auto" />
                <div className="text-lg font-semibold mb-1">غرداية، الجزائر</div>
                <div className="text-blue-200 text-sm">ولاية غرداية</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 hover:neon-glow transition-all duration-300">
                <Users className="h-8 w-8 text-[#f7cd6f] mb-3 mx-auto" />
                <div className="text-lg font-semibold mb-1">3 سبتمبر 2025</div>
                <div className="text-blue-200 text-sm">المعرض والمسابقة</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
                <Link href="/about">
                  <Code className="mr-2 h-5 w-5" />
                  اعرف المزيد
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
