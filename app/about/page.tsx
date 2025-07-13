import { Timeline } from "@/components/timeline";
import { FAQ } from "@/components/faq";
import { Team } from "@/components/team";
import {
  Calendar,
  MapPin,
  Target,
  Users,
  Lightbulb,
  Award,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d2a5e] via-[#1a3a73] to-[#2b4a8a]">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/20 backdrop-blur-sm border border-[#d4af37]/30 shadow-lg rounded-full px-6 py-3 mb-8">
            <div className="w-8 h-8 rounded-full bg-[#d4af37]/30 flex items-center justify-center">
              <Lightbulb className="h-5 w-5 text-[#d4af37]" />
            </div>
            <span className="text-sm font-medium text-[#d4af37]">
              حول الحدث
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#d4af37] to-[#f2f2f2] bg-clip-text text-transparent font-[Tajawal]">
            تمكين بريان 2025
          </h1>
          <p className="text-xl text-[#f2f2f2]/90 max-w-3xl mx-auto leading-relaxed">
            حدث شامل لتمكين الشباب في بريان، يهدف إلى تعزيز القدرات من خلال
            ورشات متخصصة في ريادة الأعمال والتوظيف وتطوير المهارات
          </p>
        </div>

        {/* Event Motto */}
        <div className="text-center mb-20">
          <div className="bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/10 backdrop-blur-sm border border-[#d4af37]/40 shadow-2xl rounded-3xl p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-4 font-[Tajawal]">
              "إبنِ مستقبلك، واصنع أثرًا في مجتمعك"
            </h2>
            <p className="text-[#f2f2f2] font-semibold text-lg">شعار الحدث</p>
          </div>
        </div>

        {/* Key Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: Calendar,
              title: "المدة",
              description: "8 أيام تدريب مكثف",
              detail: "22-29 أغسطس + 3 سبتمبر",
              iconColor: "text-blue-400",
              bgGradient: "from-blue-600/20 to-blue-700/10",
              borderColor: "border-blue-400/30",
            },
            {
              icon: MapPin,
              title: "المكان",
              description: "بريان، الجزائر",
              detail: "مركز التكوين المحلي",
              iconColor: "text-emerald-400",
              bgGradient: "from-emerald-600/20 to-emerald-700/10",
              borderColor: "border-emerald-400/30",
            },
            {
              icon: Users,
              title: "المشاركون",
              description: "شباب المنطقة",
              detail: "مسارات متخصصة",
              iconColor: "text-purple-400",
              bgGradient: "from-purple-600/20 to-purple-700/10",
              borderColor: "border-purple-400/30",
            },
            {
              icon: Award,
              title: "المخرجات",
              description: "مشاريع واقعية",
              detail: "حلول مبتكرة",
              iconColor: "text-[#d4af37]",
              bgGradient: "from-[#d4af37]/20 to-[#d4af37]/10",
              borderColor: "border-[#d4af37]/30",
            },
          ].map((item, index) => (
            <div key={index} className={`bg-gradient-to-br ${item.bgGradient} backdrop-blur-sm border ${item.borderColor} shadow-lg rounded-2xl p-6 hover:scale-105 hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
              
              <div className="w-12 h-12 rounded-xl bg-[#0d2a5e]/50 backdrop-blur-sm shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <item.icon className={`h-6 w-6 ${item.iconColor}`} />
              </div>
              <h3 className="text-lg font-bold text-[#f2f2f2] mb-2 relative z-10">{item.title}</h3>
              <p className="text-[#f2f2f2]/80 text-sm mb-1 relative z-10">{item.description}</p>
              <p className="text-xs text-[#f2f2f2]/60 relative z-10">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Main Objectives */}
        <div className="bg-gradient-to-br from-[#0d2a5e]/60 to-[#1a3a73]/40 backdrop-blur-sm border border-[#d4af37]/30 shadow-2xl rounded-3xl p-8 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center">
              <Target className="h-6 w-6 text-[#d4af37]" />
            </div>
            <h2 className="text-3xl font-bold text-[#d4af37] font-[Tajawal]">
              الأهداف الرئيسية
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              { [
                "تأهيل الشباب لولوج عالم ريادة الأعمال والتوظيف",
                "تمكين الشباب من مهارات عملية وتقنية وشخصية",
                "ربط الشركات المحلية بالشباب الواعد",
                "إيجاد حلول واقعية لمشاكل اقتصادية أو اجتماعية بالمنطقة",
              ].map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f2c55c] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#0d2a5e] text-xs font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-[#f2f2f2]/90 leading-relaxed">
                    {objective}
                  </span>
                </li>
              ))}
            </ul>
            <div className="bg-gradient-to-br from-[#d4af37]/15 to-[#d4af37]/5 border border-[#d4af37]/30 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-[#d4af37] mb-4">
                رؤية الحدث
              </h4>
              <p className="text-[#f2f2f2]/90 leading-relaxed">
                بناء جيل من الشباب القادر على المساهمة الفعالة في التنمية الاقتصادية والاجتماعية للمنطقة من خلال الابتكار وريادة الأعمال.
              </p>
            </div>
          </div>
        </div>

        {/* Program Phases */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Phase 1 */}
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/10 backdrop-blur-sm border border-blue-400/30 shadow-2xl rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold shadow-lg">1</div>
              <h3 className="text-2xl font-bold text-[#f2f2f2] font-[Tajawal]">
                المرحلة الأولى
              </h3>
            </div>

            <h4 className="text-xl font-semibold text-blue-400 mb-3">
              الورشات التدريبية
            </h4>
            <p className="text-blue-300 font-medium mb-4">
              22 إلى 29 أغسطس 2025
            </p>
            <p className="text-[#f2f2f2]/90 mb-6 leading-relaxed">
              جلسات تدريبية مكثفة تغطي مسارين متخصصين: ريادة الأعمال والمشاريع
              الناشئة، والاستعداد للتوظيف.
            </p>
            
            <div className="space-y-3 relative z-10">
              <div className="bg-blue-600/20 border border-blue-400/30 p-4 rounded-xl">
                <strong className="text-blue-400">المسار الأول:</strong>
                <span className="text-[#f2f2f2]/90 block mt-1">
                  ريادة الأعمال والمشاريع الناشئة
                </span>
              </div>
              <div className="bg-blue-600/20 border border-blue-400/30 p-4 rounded-xl">
                <strong className="text-blue-400">المسار الثاني:</strong>
                <span className="text-[#f2f2f2]/90 block mt-1">
                  التوظيف والاستعداد لسوق العمل
                </span>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-gradient-to-br from-emerald-600/20 to-emerald-700/10 backdrop-blur-sm border border-emerald-400/30 shadow-2xl rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white flex items-center justify-center font-bold shadow-lg">2</div>
              <h3 className="text-2xl font-bold text-[#f2f2f2] font-[Tajawal]">
                المرحلة الثانية
              </h3>
            </div>

            <h4 className="text-xl font-semibold text-emerald-400 mb-3">
              المعرض والمسابقة
            </h4>
            <p className="text-emerald-300 font-medium mb-4">3 سبتمبر 2025</p>
            <p className="text-[#f2f2f2]/90 mb-6 leading-relaxed">
              عروض المشاريع، معرض الشركات، وفرص التواصل بين الشركات والشباب
              والمنظمين.
            </p>
            
            <div className="space-y-2 relative z-10">
              { [
                {
                  time: "07:30-08:00",
                  activity: "الاستقبال والتسجيل",
                },
                {
                  time: "08:00-12:00",
                  activity: "عروض المشاريع الشبابية",
                },
                {
                  time: "18:00-20:30",
                  activity: "معرض الشركات والمشاريع",
                },
                {
                  time: "21:30-22:30",
                  activity: "جلسة نقاش مفتوحة",
                },
              ].map((item, index) => (
                <div key={index} className="bg-emerald-600/20 border border-emerald-400/30 p-3 rounded-lg flex justify-between items-center">
                  <span className="text-emerald-400 font-medium text-sm">
                    {item.time}
                  </span>
                  <span className="text-[#f2f2f2]/90 text-sm">
                    {item.activity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Components */}
        <Timeline />
        <Team />
        <FAQ />
      </div>
    </div>
  );
}
