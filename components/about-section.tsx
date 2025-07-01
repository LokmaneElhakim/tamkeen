import { CheckCircle, Target, Users, Lightbulb, Award, Rocket, Building, Globe } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#ff6b35]/10 text-[#ff6b35] rounded-full px-6 py-3 text-sm font-semibold mb-6">
              <Target className="h-4 w-4" />
              حول تمكين غرداية
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              تمكين الشباب الجزائري
              <span className="block text-[#ff6b35] mt-2">لمستقبل أفضل</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              تمكين غرداية هو أول حدث شامل لتمكين الشباب في المنطقة، يهدف إلى بناء جيل من الشباب المؤهل والمبدع القادر
              على قيادة التنمية الاقتصادية والاجتماعية في الجزائر.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">لماذا تمكين غرداية؟</h3>
                <div className="space-y-4">
                  {[
                    "تدريب متخصص في ريادة الأعمال والتوظيف على مدى 8 أيام",
                    "ورشات عملية مع خبراء محليين ودوليين معتمدين",
                    "فرص تواصل مباشرة مع الشركات وأصحاب العمل",
                    "مسابقات ومعارض لعرض المواهب والمشاريع الإبداعية",
                    "شهادات معتمدة ومعترف بها في السوق المحلي",
                    "شبكة تواصل قوية مع رواد الأعمال والمهنيين",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-slate-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#ff6b35]/10 to-[#4767a7]/10 rounded-2xl p-8">
                <blockquote className="text-2xl font-bold text-slate-800 mb-4">
                  "إبنِ مستقبلك، واصنع أثرًا في مجتمعك"
                </blockquote>
                <cite className="text-slate-600 font-medium">شعار تمكين غرداية 2025</cite>
              </div>
            </div>

            {/* Right Visual Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#ff6b35] to-[#ff8a50] rounded-2xl p-8 text-white">
                  <Users className="h-10 w-10 mb-4" />
                  <h4 className="text-xl font-bold mb-3">مجتمع متنوع</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    شباب من مختلف التخصصات والخلفيات الأكاديمية والمهنية
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#4767a7] to-[#2b3761] rounded-2xl p-8 text-white">
                  <Award className="h-10 w-10 mb-4" />
                  <h4 className="text-xl font-bold mb-3">شهادات معتمدة</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    شهادات مشاركة وإنجاز معترف بها من الجهات المختصة
                  </p>
                </div>
              </div>
              <div className="space-y-6 pt-8">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white">
                  <Lightbulb className="h-10 w-10 mb-4" />
                  <h4 className="text-xl font-bold mb-3">أفكار مبتكرة</h4>
                  <p className="text-white/90 text-sm leading-relaxed">حلول إبداعية للتحديات المحلية والإقليمية</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white">
                  <Rocket className="h-10 w-10 mb-4" />
                  <h4 className="text-xl font-bold mb-3">إطلاق المشاريع</h4>
                  <p className="text-white/90 text-sm leading-relaxed">دعم حقيقي لإطلاق وتطوير المشاريع الناشئة</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-slate-50 rounded-2xl">
              <Building className="h-12 w-12 text-[#ff6b35] mx-auto mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-3">شراكات استراتيجية</h4>
              <p className="text-slate-600 leading-relaxed">
                تعاون مع أكبر الشركات والمؤسسات المحلية والوطنية لضمان أفضل الفرص للمشاركين
              </p>
            </div>
            <div className="text-center p-8 bg-slate-50 rounded-2xl">
              <Globe className="h-12 w-12 text-[#4767a7] mx-auto mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-3">رؤية عالمية</h4>
              <p className="text-slate-600 leading-relaxed">
                تطبيق أفضل الممارسات العالمية مع مراعاة الخصوصيات المحلية والثقافية
              </p>
            </div>
            <div className="text-center p-8 bg-slate-50 rounded-2xl">
              <Target className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-3">نتائج ملموسة</h4>
              <p className="text-slate-600 leading-relaxed">
                التركيز على تحقيق نتائج قابلة للقياس وتأثير حقيقي على المجتمع المحلي
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
