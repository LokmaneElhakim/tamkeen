"use client"

import { useState, useEffect } from "react"
import { Users, Calendar, Building, Trophy, Target, Award, Briefcase, Lightbulb } from "lucide-react"

export function StatsSection() {
  const [counts, setCounts] = useState({
    participants: 0,
    days: 0,
    companies: 0,
    projects: 0,
    sessions: 0,
    speakers: 0,
    certificates: 0,
    opportunities: 0,
  })

  useEffect(() => {
    const targets = {
      participants: 500,
      days: 8,
      companies: 25,
      projects: 100,
      sessions: 16,
      speakers: 12,
      certificates: 500,
      opportunities: 50,
    }

    const duration = 2500
    const steps = 60
    const stepTime = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = Math.min(currentStep / steps, 1)

      setCounts({
        participants: Math.floor(targets.participants * progress),
        days: Math.floor(targets.days * progress),
        companies: Math.floor(targets.companies * progress),
        projects: Math.floor(targets.projects * progress),
        sessions: Math.floor(targets.sessions * progress),
        speakers: Math.floor(targets.speakers * progress),
        certificates: Math.floor(targets.certificates * progress),
        opportunities: Math.floor(targets.opportunities * progress),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(targets)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [])

  const mainStats = [
    {
      icon: Users,
      value: counts.participants,
      suffix: "+",
      label: "مشارك متوقع",
      description: "من مختلف التخصصات",
      color: "from-[#ff6b35] to-[#ff8a50]",
    },
    {
      icon: Calendar,
      value: counts.days,
      suffix: "",
      label: "أيام من التدريب",
      description: "تدريب مكثف ومتخصص",
      color: "from-[#4767a7] to-[#2b3761]",
    },
    {
      icon: Building,
      value: counts.companies,
      suffix: "+",
      label: "شركة مشاركة",
      description: "تقدم فرص عمل حقيقية",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Trophy,
      value: counts.projects,
      suffix: "+",
      label: "مشروع متوقع",
      description: "حلول مبتكرة للتحديات",
      color: "from-purple-500 to-purple-600",
    },
  ]

  const additionalStats = [
    {
      icon: Target,
      value: counts.sessions,
      suffix: "",
      label: "جلسة تدريبية",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Award,
      value: counts.speakers,
      suffix: "",
      label: "خبير ومتحدث",
      color: "from-[#ff6b35] to-[#ff8a50]",
    },
    {
      icon: Briefcase,
      value: counts.certificates,
      suffix: "",
      label: "شهادة معتمدة",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Lightbulb,
      value: counts.opportunities,
      suffix: "+",
      label: "فرصة عمل",
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#ff6b35]/10 text-[#ff6b35] rounded-full px-6 py-3 text-sm font-semibold mb-6">
              <Trophy className="h-4 w-4" />
              تمكين بالأرقام
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              أرقام تعكس
              <span className="block text-[#ff6b35] mt-2">التأثير المتوقع</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              أرقام حقيقية تعكس حجم التأثير المتوقع لحدث تمكين غرداية على الشباب والمجتمع المحلي والاقتصاد الإقليمي
            </p>
          </div>

          {/* Main Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {mainStats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 group-hover:border-slate-300 group-hover:-translate-y-2">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="text-4xl font-bold text-slate-900">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="text-lg font-semibold text-slate-800">{stat.label}</div>
                    <div className="text-sm text-slate-600 leading-relaxed">{stat.description}</div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-6 w-full bg-slate-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out`}
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                {/* Hover effect background */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>
              </div>
            ))}
          </div>

          {/* Additional Stats */}
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">تفاصيل إضافية</h3>
              <p className="text-slate-600">معلومات تفصيلية حول محتوى وهيكل الحدث</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-sm font-medium text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#ff6b35] to-[#4767a7] rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">كن جزءاً من هذه الأرقام</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                انضم إلى مئات الشباب الطموح واجعل اسمك ضمن قصص النجاح في تمكين غرداية 2025
              </p>
              <button className="bg-white text-[#ff6b35] px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                سجل الآن وكن جزءاً من التغيير
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
