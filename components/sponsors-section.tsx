export function SponsorsSection() {
  const mainSponsors = [
    { name: "وزارة الشباب والرياضة", logo: "/placeholder.svg?height=80&width=200" },
    { name: "ولاية غرداية", logo: "/placeholder.svg?height=80&width=200" },
    { name: "جامعة غرداية", logo: "/placeholder.svg?height=80&width=200" },
    { name: "غرفة التجارة غرداية", logo: "/placeholder.svg?height=80&width=200" },
  ]

  const partners = [
    { name: "سوناطراك", logo: "/placeholder.svg?height=60&width=150" },
    { name: "موبيليس", logo: "/placeholder.svg?height=60&width=150" },
    { name: "بنك الجزائر الخارجي", logo: "/placeholder.svg?height=60&width=150" },
    { name: "اتصالات الجزائر", logo: "/placeholder.svg?height=60&width=150" },
    { name: "بريد الجزائر", logo: "/placeholder.svg?height=60&width=150" },
    { name: "الخطوط الجوية الجزائرية", logo: "/placeholder.svg?height=60&width=150" },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Sponsors */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">الرعاة الرئيسيون</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              شركاؤنا الاستراتيجيون الذين يدعمون رؤيتنا في تمكين الشباب الجزائري
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {mainSponsors.map((sponsor, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group-hover:border-orange-200">
                  <img
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    className="w-full h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Partners */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">شركاؤنا</h3>
            <p className="text-slate-600">الشركات والمؤسسات الداعمة لحدث تمكين</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="group">
                <div className="bg-slate-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-100">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
