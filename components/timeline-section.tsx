import { Calendar, Users, Trophy } from "lucide-react"

export function TimelineSection() {
  const phases = [
    {
      date: "يوليو 2025",
      title: "فتح التسجيل",
      description: "بداية استقبال طلبات التسجيل للمشاركين والشركات",
      icon: Users,
      color: "from-green-500 to-green-600",
      status: "upcoming",
    },
    {
      date: "22-29 أغسطس 2025",
      title: "الورشات التدريبية",
      description: "8 أيام من التدريب المكثف في المسارين المتخصصين",
      icon: Calendar,
      color: "from-blue-500 to-blue-600",
      status: "upcoming",
    },
    {
      date: "3 سبتمبر 2025",
      title: "المعرض والمسابقة",
      description: "عرض المشاريع، معرض الشركات، وفرص التواصل",
      icon: Trophy,
      color: "from-orange-500 to-orange-600",
      status: "upcoming",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">الجدول الزمني</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              رحلة تمكين مقسمة على مراحل متدرجة لضمان أقصى استفادة للمشاركين
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 rounded-full"></div>

            <div className="space-y-16">
              {phases.map((phase, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center`}
                        >
                          <phase.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-slate-500 font-medium">{phase.date}</div>
                          <h3 className="text-xl font-bold text-slate-900">{phase.title}</h3>
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div
                      className={`w-6 h-6 rounded-full bg-gradient-to-br ${phase.color} border-4 border-white shadow-lg`}
                    ></div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
