export function EventHighlights() {
  const highlights = [
    {
      icon: "📚",
      title: "مساران متخصصان",
      description: "ريادة الأعمال والتوظيف",
    },
    {
      icon: "👨‍🏫",
      title: "إرشاد من الخبراء",
      description: "مدربون محليون ودوليون",
    },
    {
      icon: "🏆",
      title: "مسابقة المشاريع",
      description: "فرصة للفوز ودعم مشروعك",
    },
    {
      icon: "🏢",
      title: "معرض الشركات",
      description: "تواصل مباشر مع سوق العمل",
    },
    {
      icon: "🛠️",
      title: "مهارات عملية",
      description: "تدريب تطبيقي مكثف",
    },
    {
      icon: "💼",
      title: "فرص التوظيف",
      description: "بناء سير ذاتية احترافية",
    },
    {
      icon: "💡",
      title: "التركيز على الابتكار",
      description: "تطوير حلول مبتكرة",
    },
    {
      icon: "🚀",
      title: "أطلق مستقبلك",
      description: "بناء قدراتك نحو النجاح",
    },
  ]

  return (
    <section className="py-16 bg-[#f9eee7]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1d4241]">لماذا تمكين غرداية؟</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
            >
              <span className="text-4xl mb-4 block">{highlight.icon}</span>
              <h3 className="text-xl font-bold mb-2 text-[#1d4241]">{highlight.title}</h3>
              <p className="text-sm text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mb-12">
          <div className="bg-[#1d4241] text-white p-6 rounded-xl shadow-lg">
            <p className="text-4xl font-extrabold text-[#ffd98e]">8</p>
            <p className="text-lg mt-2">أيام تدريب مكثف</p>
          </div>
          <div className="bg-[#1d4241] text-white p-6 rounded-xl shadow-lg">
            <p className="text-4xl font-extrabold text-[#ffd98e]">2</p>
            <p className="text-lg mt-2">مسارات متخصصة</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#register"
            className="bg-[#ef9c82] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition-colors shadow-lg"
          >
            سجل الآن واصنع فارقًا
          </a>
        </div>
      </div>
    </section>
  )
}
