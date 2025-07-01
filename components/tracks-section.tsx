import { Rocket, Briefcase, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function TracksSection() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              اختر <span className="text-[#ff8a50]">مسارك</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              مساران متخصصان مصممان لتلبية احتياجات الشباب في مختلف مراحل رحلتهم المهنية
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Entrepreneurship Track */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff6b35] to-[#ff8a50] flex items-center justify-center">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">ريادة الأعمال</h3>
                    <p className="text-slate-400">والمشاريع الناشئة</p>
                  </div>
                </div>

                <p className="text-slate-300 mb-8 leading-relaxed">
                  مسار شامل لتعلم أساسيات ريادة الأعمال، من تطوير الفكرة إلى إطلاق المشروع، مع التركيز على السوق المحلي
                  والتحديات الإقليمية.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "تحديات ريادة الأعمال في الجزائر",
                    "الأسس القانونية والإدارية للمشاريع",
                    "دراسة السوق والتحقق من الأفكار",
                    "بناء نموذج أولي MVP",
                    "النماذج الاقتصادية والتمويل",
                    "التسويق واكتساب العملاء",
                    "مهارات القيادة وإدارة الفريق",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#ff8a50] rounded-full"></div>
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-[#ff6b35] to-[#ff8a50] hover:from-[#ff8a50] hover:to-[#e55100]"
                >
                  <Link href="/register-participant?track=entrepreneurship">
                    انضم لمسار ريادة الأعمال
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Employment Track */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">التوظيف</h3>
                    <p className="text-slate-400">والاستعداد لسوق العمل</p>
                  </div>
                </div>

                <p className="text-slate-300 mb-8 leading-relaxed">
                  مسار مخصص لإعداد الشباب لدخول سوق العمل بثقة، مع التركيز على المهارات المطلوبة والتحضير للمقابلات
                  والتطوير المهني.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "فهم سوق العمل في الجزائر",
                    "إعداد السيرة الذاتية باحترافية",
                    "بناء الهوية الرقمية والتواجد المهني",
                    "مهارات شخصية أساسية",
                    "ورشات مهنية حسب القطاعات",
                    "تقنيات المقابلات الشخصية",
                    "المهارات الناعمة والتواصل",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                >
                  <Link href="/register-participant?track=employment">
                    انضم لمسار التوظيف
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
