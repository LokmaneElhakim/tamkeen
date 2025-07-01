import { Timeline } from "@/components/timeline"
import { FAQ } from "@/components/faq"
import { Team } from "@/components/team"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">حول تمكين غرداية</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            حدث شامل لتمكين الشباب في غرداية، يهدف إلى تعزيز القدرات من خلال ورشات متخصصة في ريادة الأعمال والتوظيف
            وتطوير المهارات
          </p>
        </div>

        {/* Event Description */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">نظرة عامة على الحدث</h2>

          {/* Main Objectives */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-[#4767a7] mb-4">الأهداف الرئيسية</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-3">
                <li>تأهيل الشباب لولوج عالم ريادة الأعمال والتوظيف</li>
                <li>تمكين الشباب من مهارات عملية وتقنية وشخصية</li>
                <li>ربط الشركات المحلية بالشباب الواعد</li>
                <li>إيجاد حلول واقعية لمشاكل اقتصادية أو اجتماعية بالمنطقة</li>
              </ul>
              <div className="bg-gradient-to-br from-[#f7cd6f]/10 to-[#4767a7]/10 p-6 rounded-xl">
                <h4 className="font-bold text-[#2b3761] mb-3">شعار الحدث</h4>
                <p className="text-2xl font-bold text-[#4767a7] text-center">"إبنِ مستقبلك، واصنع أثرًا في مجتمعك"</p>
              </div>
            </div>
          </div>

          {/* Two Phases */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                المرحلة الأولى: الورشات التدريبية
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <strong>22 إلى 29 أغسطس 2025</strong>
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                جلسات تدريبية مكثفة تغطي مسارين متخصصين: ريادة الأعمال والمشاريع الناشئة، والاستعداد للتوظيف.
              </p>
              <div className="space-y-2">
                <div className="bg-[#f7cd6f]/10 p-3 rounded-lg">
                  <strong className="text-[#2b3761]">المسار الأول:</strong> ريادة الأعمال والمشاريع الناشئة
                </div>
                <div className="bg-[#4767a7]/10 p-3 rounded-lg">
                  <strong className="text-[#2b3761]">المسار الثاني:</strong> التوظيف والاستعداد لسوق العمل
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4">
                المرحلة الثانية: المعرض والمسابقة
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <strong>3 سبتمبر 2025</strong>
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                عروض المشاريع، معرض الشركات، وفرص التواصل بين الشركات والشباب والمنظمين.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>07:30-08:00: الاستقبال والتسجيل</div>
                <div>08:00-12:00: عروض المشاريع الشبابية</div>
                <div>18:00-20:30: معرض الشركات والمشاريع</div>
                <div>21:30-22:30: جلسة نقاش مفتوحة</div>
              </div>
            </div>
          </div>
        </div>

        <Timeline />
        <Team />
        <FAQ />
      </div>
    </div>
  )
}
