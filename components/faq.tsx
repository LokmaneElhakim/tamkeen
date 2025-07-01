"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "من يمكنه المشاركة في تمكين؟",
      answer:
        "تمكين مفتوح للشباب في غرداية المهتمين بريادة الأعمال والاستعداد للتوظيف وتطوير المهارات. كلا المسارين يرحبان بالمشاركين الذين يسعون لتعزيز قدراتهم.",
    },
    {
      question: "ما هما المساران المتاحان؟",
      answer:
        "المسار الأول: ريادة الأعمال والمشاريع الناشئة - يغطي أساسيات الأعمال وبحث السوق وتطوير النموذج الأولي والقيادة. المسار الثاني: التوظيف والاستعداد لسوق العمل - يركز على إعداد السيرة الذاتية والحضور الرقمي والمهارات الناعمة والورشات القطاعية.",
    },
    {
      question: "هل هناك رسوم تسجيل؟",
      answer: "لا، تمكين مجاني تماماً لجميع المشاركين. نحن نؤمن بجعل الفرص متاحة لجميع الشباب في غرداية.",
    },
    {
      question: "ماذا يحدث في 3 سبتمبر؟",
      answer:
        "3 سبتمبر هو يوم المعرض والمسابقة. الصباح: عروض المشاريع (08:00-12:00)، المساء: معرض الشركات (18:00-20:30)، الليل: جلسة نقاش مفتوحة وتواصل (21:30-22:30).",
    },
    {
      question: "هل سيتم توفير شهادات؟",
      answer: "نعم، جميع المشاركين الذين يكملون المسار المختار سيحصلون على شهادات مشاركة وإنجاز من تمكين.",
    },
    {
      question: "كيف يمكن للشركات المشاركة؟",
      answer:
        "يمكن للشركات المشاركة من خلال رعاية الحدث أو توفير المرشدين أو المشاركة في المعرض أو تقديم تحديات للشباب لحلها. تواصل مع فريق التنظيم لمزيد من التفاصيل.",
    },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">الأسئلة الشائعة</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <button
              className="w-full px-6 py-4 text-right flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600 dark:text-gray-300 text-right">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
