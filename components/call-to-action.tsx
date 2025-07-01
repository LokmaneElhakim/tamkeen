import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, Users, Trophy } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Elements with gradient colors */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-[#ff6b35]/15 via-[#ff8a50]/10 to-[#4767a7]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-[#4767a7]/15 via-[#2b3761]/10 to-[#ff6b35]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-[#ff8a50]/10 via-[#4767a7]/8 to-[#2b3761]/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ابدأ رحلتك مع{" "}
            <span className="bg-gradient-to-r from-[#ff6b35] via-[#ff8a50] to-[#4767a7] bg-clip-text text-transparent">
              تمكين
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            انضم إلى مئات الشباب الطموح في غرداية واكتسب المهارات والخبرات التي تحتاجها لبناء مستقبل مهني ناجح. أماكن
            محدودة متاحة.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#ff6b35] via-[#ff8a50] to-[#4767a7] hover:from-[#ff8a50] hover:via-[#4767a7] hover:to-[#2b3761] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/register-participant">
                سجل الآن - أماكن محدودة
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-gradient-to-r hover:from-[#ff6b35]/10 hover:to-[#4767a7]/10 font-semibold px-8 py-4 rounded-full backdrop-blur-sm bg-transparent"
            >
              <Link href="/about">اعرف المزيد</Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Calendar className="h-8 w-8 text-[#ff8a50] mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">8 أيام</div>
              <div className="text-slate-400">من التدريب المكثف</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-[#4767a7] mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">500+ مشارك</div>
              <div className="text-slate-400">من مختلف التخصصات</div>
            </div>
            <div className="text-center">
              <Trophy className="h-8 w-8 text-[#ff6b35] mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">25+ شركة</div>
              <div className="text-slate-400">تقدم فرص عمل</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
