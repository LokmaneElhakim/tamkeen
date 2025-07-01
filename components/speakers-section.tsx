import { Linkedin, Twitter, Mail } from "lucide-react"

export function SpeakersSection() {
  const speakers = [
    {
      name: "د. أمينة بوضياف",
      title: "خبيرة ريادة الأعمال",
      company: "جامعة غرداية",
      bio: "دكتوراه في إدارة الأعمال مع 15 سنة خبرة في تطوير المشاريع الناشئة",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "amina@example.com",
      },
    },
    {
      name: "كريم بن علي",
      title: "مؤسس ومدير تنفيذي",
      company: "تك إنوفيشن الجزائر",
      bio: "رائد أعمال ناجح أسس عدة شركات تقنية في الجزائر والمنطقة",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "karim@example.com",
      },
    },
    {
      name: "فاطمة شريف",
      title: "مديرة الموارد البشرية",
      company: "سوناطراك",
      bio: "خبيرة في التوظيف وتطوير المواهب مع خبرة 12 سنة في الشركات الكبرى",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "fatima@example.com",
      },
    },
    {
      name: "يوسف معمري",
      title: "مستشار أعمال",
      company: "غرفة التجارة غرداية",
      bio: "مستشار معتمد في تطوير الأعمال والاستراتيجيات التجارية",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "youcef@example.com",
      },
    },
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">المتحدثون الخبراء</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              نخبة من الخبراء والمختصين في ريادة الأعمال والتوظيف لنقل خبراتهم للشباب
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                  {/* Image */}
                  <div className="relative mb-6">
                    <img
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{speaker.name}</h3>
                      <p className="text-orange-600 font-medium">{speaker.title}</p>
                      <p className="text-slate-500 text-sm">{speaker.company}</p>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed">{speaker.bio}</p>

                    {/* Social Links */}
                    <div className="flex gap-3 pt-2">
                      <a
                        href={speaker.social.linkedin}
                        className="w-8 h-8 bg-slate-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Linkedin className="h-4 w-4 text-slate-600 hover:text-blue-600" />
                      </a>
                      <a
                        href={speaker.social.twitter}
                        className="w-8 h-8 bg-slate-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Twitter className="h-4 w-4 text-slate-600 hover:text-blue-600" />
                      </a>
                      <a
                        href={`mailto:${speaker.social.email}`}
                        className="w-8 h-8 bg-slate-100 hover:bg-orange-100 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Mail className="h-4 w-4 text-slate-600 hover:text-orange-600" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
