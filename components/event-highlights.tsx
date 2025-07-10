"use client";

import { useEffect } from "react";

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
  ];

  // Animation observer setup
  useEffect(() => {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section
      style={{ background: "var(--gradient-secondary)" }}
      className="py-20 text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-[var(--color-gold)] animate-on-scroll opacity-0 transition-all duration-700 translate-y-8 animate-in:opacity-100 animate-in:translate-y-0">
          لماذا تمكين غرداية؟
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-2xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)] hover:scale-105 transition-all duration-500 text-center animate-on-scroll opacity-0 translate-y-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-16 w-16 rounded-full bg-[var(--color-gold)] flex items-center justify-center text-4xl mx-auto mb-4 neon-glow">
                <span>{highlight.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--color-gold)]">
                {highlight.title}
              </h3>
              <p className="text-sm text-[var(--color-white)]">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mb-16">
          <div className="bg-[var(--color-navy-dark)] p-8 rounded-2xl shadow-[var(--shadow-soft)] animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-700 animate-in:opacity-100 animate-in:translate-x-0">
            <p className="text-5xl font-extrabold gradient-text">8</p>
            <p className="text-lg mt-2 text-[var(--color-light-gray)]">
              أيام تدريب مكثف
            </p>
          </div>
          <div className="bg-[var(--color-blue-deep)] p-8 rounded-2xl shadow-[var(--shadow-soft)] animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-700 animate-in:opacity-100 animate-in:translate-x-0">
            <p className="text-5xl font-extrabold text-[var(--color-gold)]">
              2
            </p>
            <p className="text-lg mt-2 text-[var(--color-light-gray)]">
              مسارات متخصصة
            </p>
          </div>
        </div>

        <div className="text-center animate-on-scroll opacity-0 scale-90 transition-all duration-700 animate-in:opacity-100 animate-in:scale-100">
          <a
            href="#register"
            className="bg-[var(--color-gold)] text-[var(--color-navy-dark)] px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block shadow-[var(--shadow-soft)] pulse-glow"
          >
            سجل الآن واصنع فارقًا
          </a>
        </div>
      </div>
    </section>
  );
}
