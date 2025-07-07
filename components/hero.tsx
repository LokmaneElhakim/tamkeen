"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Users, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative hero-background text-white py-20 md:py-32 flex items-center min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#ffd98e]/20 rounded-full blur-xl floating-animation"></div>
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-[#ef9c82]/20 rounded-full blur-xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#ffd98e]/30 rounded-full blur-lg floating-animation"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-[#ef9c82]/40 rounded-full blur-md floating-animation"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-right">
        <div className="max-w-xl md:max-w-2xl">
          {/* Event Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <Sparkles className="h-5 w-5 text-[#ffd98e]" />
            <span className="text-sm font-medium">حدث تمكين الشباب الأول في غرداية</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-white">تمكين غرداية 2025</h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-8 text-white font-medium">إبنِ مستقبلك، واصنع أثرًا في مجتمعك</p>

          {/* Event Details */}
          <div className="space-y-2 mb-12">
            <p className="text-lg md:text-xl text-white flex items-center justify-end gap-2">
              <span>🗓️ 22-29 أغسطس 2025 | 3 سبتمبر 2025</span>
            </p>
            <p className="text-lg md:text-xl text-white flex items-center justify-end gap-2">
              <span>📍 غرداية، الجزائر</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-[#ffd98e] text-[#1d4241] hover:bg-white transition-all duration-300 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl pulse-glow"
            >
              <Link href="/register-participant" className="flex items-center gap-3">
                سجل الآن
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1d4241] transition-all duration-300 font-bold text-lg px-8 py-4 rounded-full shadow-lg"
            >
              <Link href="/about">اعرف المزيد</Link>
            </Button>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass-effect rounded-xl p-4 text-center hover:neon-glow transition-all duration-300">
              <Calendar className="h-6 w-6 text-[#ffd98e] mb-2 mx-auto" />
              <div className="text-sm font-semibold mb-1">22-29 أغسطس</div>
              <div className="text-xs text-white/80">الورشات التدريبية</div>
            </div>
            <div className="glass-effect rounded-xl p-4 text-center hover:neon-glow transition-all duration-300">
              <MapPin className="h-6 w-6 text-[#ffd98e] mb-2 mx-auto" />
              <div className="text-sm font-semibold mb-1">غرداية</div>
              <div className="text-xs text-white/80">الجزائر</div>
            </div>
            <div className="glass-effect rounded-xl p-4 text-center hover:neon-glow transition-all duration-300">
              <Users className="h-6 w-6 text-[#ffd98e] mb-2 mx-auto" />
              <div className="text-sm font-semibold mb-1">3 سبتمبر</div>
              <div className="text-xs text-white/80">المعرض والمسابقة</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f9eee7] to-transparent"></div>
    </section>
  )
}
