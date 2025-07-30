import { Calendar, Trophy, Users, Building } from "lucide-react"

export function Timeline() {
  const timelineEvents = [
    {
      date: "يوليو 2025",
      title: "فتح التسجيل",
      description: "بداية تسجيل المشاركين لكلا المسارين: ريادة الأعمال والاستعداد للتوظيف",
      status: "upcoming",
      icon: Users,
    },
    {
      date: "22-29 أغسطس 2025",
      title: "المرحلة الأولى: الورشات التدريبية",
      description: "8 أيام من التدريب المكثف في ريادة الأعمال والاستعداد للتوظيف",
      status: "upcoming",
      icon: Calendar,
    },
    {
      date: "3 سبتمبر 2025 - الصباح",
      title: "عروض المشاريع",
      description: "الشباب يقدمون حلولهم المبتكرة للتحديات المحلية (08:00-12:00)",
      status: "upcoming",
      icon: Trophy,
    },
    {
      date: "3 سبتمبر 2025 - المساء",
      title: "معرض الشركات",
      description: "الشركات تعرض الفرص وتتواصل مع المشاركين (18:00-20:30)",
      status: "upcoming",
      icon: Building,
    },
    {
      date: "3 سبتمبر 2025 - الليل",
      title: "جلسة نقاش مفتوحة وتواصل",
      description: "جلسة تواصل نهائية بين الشركات والشباب والمنظمين (21:30-22:30)",
      status: "upcoming",
      icon: Users,
    },
  ]

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">الجدول الزمني للحدث</h2>
      <div className="max-w-4xl mx-auto">
        {timelineEvents.map((event, index) => (
          <div key={index} className="flex items-start mb-8">
            <div className="flex-shrink-0 ml-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  event.status === "completed"
                    ? "bg-green-500"
                    : event.status === "current"
                      ? "bg-[#4767a7]"
                      : "bg-[#f7cd6f]"
                }`}
              >
                <event.icon className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex-grow">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-sm text-[#4767a7] dark:text-blue-400 font-medium mb-1">{event.date}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
