import { Code, Users, Trophy, Lightbulb, Zap, Target, Star, Award, Rocket, Brain, Building } from "lucide-react"

export function EventHighlights() {
  const highlights = [
    {
      icon: Code,
      title: "مساران متخصصان",
      description: "مسار ريادة الأعمال والمشاريع الناشئة ومسار التوظيف والاستعداد لسوق العمل",
      color: "from-[#f7cd6f] to-[#eeb93c]",
      stats: "مساران",
    },
    {
      icon: Users,
      title: "إرشاد من الخبراء",
      description: "تعلم من قادة الصناعة ورجال الأعمال الناجحين وخبراء الأعمال المحليين",
      color: "from-[#4767a7] to-[#2b3761]",
      stats: "مدربون خبراء",
    },
    {
      icon: Trophy,
      title: "مسابقة المشاريع",
      description: "اعرض حلولك المبتكرة للتحديات المحلية وتنافس للحصول على التقدير",
      color: "from-[#eeb93c] to-[#f7cd6f]",
      stats: "حلول محلية",
    },
    {
      icon: Building,
      title: "معرض الشركات",
      description: "تواصل مباشر مع الشركات المحلية وأصحاب العمل المحتملين في غرداية",
      color: "from-[#2b3761] to-[#4767a7]",
      stats: "شركات محلية",
    },
    {
      icon: Brain,
      title: "مهارات عملية",
      description: "تطوير المهارات التقنية والشخصية والمهنية للتطبيق في العالم الحقيقي",
      color: "from-[#f7cd6f] to-[#4767a7]",
      stats: "تدريب عملي",
    },
    {
      icon: Target,
      title: "فرص التوظيف",
      description: "مسارات مباشرة لفرص العمل مع الشركات المحلية المشاركة",
      color: "from-[#4767a7] to-[#eeb93c]",
      stats: "روابط وظيفية",
    },
    {
      icon: Lightbulb,
      title: "التركيز على الابتكار",
      description: "حل التحديات الاقتصادية والاجتماعية الحقيقية في منطقة غرداية",
      color: "from-[#eeb93c] to-[#2b3761]",
      stats: "تأثير إقليمي",
    },
    {
      icon: Rocket,
      title: "أطلق مستقبلك",
      description: "ابن أساس مسيرتك المهنية واصنع تأثيراً دائماً في مجتمعك",
      color: "from-[#2b3761] to-[#f7cd6f]",
      stats: "نجاحك",
    },
  ]

  const achievements = [
    { icon: Star, number: "8", label: "أيام من التدريب" },
    { icon: Award, number: "2", label: "مسارات متخصصة" },
    { icon: Users, number: "محليون", label: "مدربون خبراء" },
    { icon: Building, number: "3 سبتمبر", label: "يوم المعرض" },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#f7cd6f]/10 rounded-full blur-2xl floating-animation"></div>
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-[#4767a7]/10 rounded-full blur-2xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#eeb93c]/10 rounded-full blur-xl floating-animation"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f7cd6f] to-[#eeb93c] text-[#2b3761] rounded-full px-8 py-3 mb-8 font-semibold shadow-lg">
            <Zap className="h-5 w-5" />
            لماذا تختار تمكين؟
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#2b3761] mb-8 leading-tight">
            حوّل <span className="gradient-text">مستقبلك</span>
            <br />
            <span className="text-3xl md:text-4xl text-gray-600 font-normal">في حدث الشباب الأول في غرداية</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            انضم إلى تمكين - أشمل برنامج لتمكين الشباب في غرداية. ابن مستقبلك واصنع تأثيراً في مجتمعك.
            <br />
            <span className="text-[#4767a7] font-semibold">"إبنِ مستقبلك، واصنع أثرًا في مجتمعك"</span>
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
            >
              <achievement.icon className="h-8 w-8 text-[#4767a7] mx-auto mb-3" />
              <div className="text-3xl font-bold text-[#2b3761] mb-1">{achievement.number}</div>
              <div className="text-sm text-gray-600 font-medium">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/20 overflow-hidden"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
              ></div>

              {/* Icon */}
              <div
                className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <highlight.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-[#2b3761] group-hover:text-[#4767a7] transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#f7cd6f] bg-[#f7cd6f]/10 px-2 py-1 rounded-full">
                    {highlight.stats}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">{highlight.description}</p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#f7cd6f]/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-[#2b3761] to-[#4767a7] rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              مستعد للانضمام إلى <span className="text-[#f7cd6f]">تمكين؟</span>
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              أماكن محدودة متاحة. احجز مكانك في أحصري برنامج لتمكين الشباب في غرداية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#f7cd6f] to-[#eeb93c] text-[#2b3761] px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                سجل الآن - أماكن محدودة
              </button>
              <button className="border-2 border-[#f7cd6f] text-[#f7cd6f] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#f7cd6f] hover:text-[#2b3761] transition-all duration-300">
                اعرف المزيد عن المسارات
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
