import { Linkedin, Mail } from "lucide-react"

export function Team() {
  const teamMembers = [
    {
      name: "د. أمينة بوضياف",
      role: "مديرة الحدث",
      bio: "خبيرة في تنمية الشباب وتعليم ريادة الأعمال",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "كريم بن علي",
      role: "منسق تقني",
      bio: "مهندس برمجيات ومرشد للمشاريع الناشئة",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "فاطمة شريف",
      role: "مديرة المجتمع",
      bio: "خبيرة وسائل التواصل الاجتماعي ومدافعة عن الشباب",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "يوسف معمري",
      role: "مدير اللوجستيات",
      bio: "متخصص في تخطيط الفعاليات والعمليات",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">فريق التنظيم</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <img
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.role}</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.bio}</p>
            <div className="flex justify-center gap-2">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
