"use client"

import { useState, useEffect } from "react"
import { Clock, Calendar, Users, MapPin } from "lucide-react"

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-08-22T09:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-r from-[#2b3761] to-[#4767a7] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,205,111,0.1)_0%,transparent_50%)]"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
          <Clock className="h-5 w-5 text-[#f7cd6f]" />
          <span className="font-semibold">العد التنازلي للحدث</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          تمكين يبدأ <span className="text-[#f7cd6f]">قريباً</span>
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          لا تفوت فرصتك لتكون جزءاً من أكبر مبادرة لتمكين الشباب في غرداية
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {[
            { value: timeLeft.days, label: "أيام", icon: Calendar },
            { value: timeLeft.hours, label: "ساعات", icon: Clock },
            { value: timeLeft.minutes, label: "دقائق", icon: Users },
            { value: timeLeft.seconds, label: "ثواني", icon: MapPin },
          ].map((item, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6 hover:neon-glow transition-all duration-300">
              <item.icon className="h-6 w-6 text-[#f7cd6f] mb-2 mx-auto" />
              <div className="text-3xl md:text-4xl font-bold text-[#f7cd6f] mb-2">{item.value}</div>
              <div className="text-sm uppercase tracking-wide text-blue-200 font-medium">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/10">
          <h3 className="text-2xl font-bold mb-4">مستعد للانضمام إلى تمكين؟</h3>
          <p className="text-blue-100 mb-6">أماكن محدودة متاحة. احجز مكانك في أحصري برنامج لتمكين الشباب في غرداية.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-2 text-[#f7cd6f]">
              <Users className="h-5 w-5" />
              <span className="font-semibold">مساران متخصصان</span>
            </div>
            <div className="flex items-center gap-2 text-[#f7cd6f]">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">8 أيام من التدريب</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
