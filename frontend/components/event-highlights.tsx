"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface HighlightItem {
  title: string;
  description: string | React.ReactNode;
  size?: "normal" | "large";
  colorVariant: number;
}

export function EventHighlights() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  // Define complementary color palettes with better contrast for dark background
  const colorVariants = [
    {
      // Primary Blue - Light for dark background
      bg: "bg-gradient-to-br from-blue-400/20 to-blue-600/20",
      border: "border-blue-400/50",
      accent: "bg-blue-500",
      text: "text-blue-200",
      glow: "bg-blue-400/30",
    },
    {
      // Sky Blue - Light for dark background
      bg: "bg-gradient-to-br from-sky-400/20 to-sky-600/20",
      border: "border-sky-400/50",
      accent: "bg-sky-500",
      text: "text-sky-200",
      glow: "bg-sky-400/30",
    },
    {
      // Cyan - Light for dark background
      bg: "bg-gradient-to-br from-cyan-400/20 to-cyan-600/20",
      border: "border-cyan-400/50",
      accent: "bg-cyan-500",
      text: "text-cyan-200",
      glow: "bg-cyan-400/30",
    },
    {
      // Indigo - Light for dark background
      bg: "bg-gradient-to-br from-indigo-400/20 to-indigo-600/20",
      border: "border-indigo-400/50",
      accent: "bg-indigo-500",
      text: "text-indigo-200",
      glow: "bg-indigo-400/30",
    },
  ];
  const highlights: HighlightItem[] = [
    {
      title: "أكاديمية التمكين",
      description: (
        <>
          <p>
            تكوين متخصص يجمع بين التدريب العملي والنظري في ريادة الأعمال
            والتوظيف
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>إشراف مباشر من موجهين ذوي خبرة محلية ودولية</li>
            <li>إعداد مشروع واقعي يعكس المهارات المكتسبة خلال البرنامج</li>
          </ul>
        </>
      ),
      size: "large",
      colorVariant: 0, // Gold
    },
    {
      title: "معرض المشاريع والمؤسسات",
      description:
        "مساحة لعرض المشاريع وربطها مع شركاء وفاعلين اقتصاديين محليين، مما يفتح فرصًا حقيقية للتشبيك والتعاون",
      colorVariant: 1, // Deep blue
    },
    {
      title: "ورشات المهارات المهنية",
      description:
        "تكوين عملي موجه حسب التخصصات (رقمية، تقنية، بناء، طاقة...) لرفع الجاهزية لسوق العمل والتأقلم مع متطلباته",
      colorVariant: 2, // Teal
    },
    {
      title: "تحديات واقعية وحلول مبتكرة",
      description:
        "في نهاية البرنامج، يشارك المشاركون في تحديات لحل مشكلات حقيقية تعاني منها المنطقة، من خلال تقديم أفكار مشاريع قابلة للتنفيذ في شكل نماذج أولية قابلة للتطوير والاحتضان.",
      size: "large",
      colorVariant: 3, // Purple
    },
    {
      title: "منصة التوظيف والتشبيك",
      description:
        "فرص مباشرة للقاء مؤسسات وعرض السير الذاتية والمقابلات الوظيفية في فضاء مخصص للتوظيف المحلي",
      colorVariant: 1, // Deep blue
    },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-60 pointer-events-none">
        {/* Moving gradient orbs with enhanced blue tones */}
        <div className="absolute h-[60vh] w-[60vh] rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-400/40 blur-[180px] animate-flow-elegant -top-[20vh] -right-[20vh]"></div>
        <div className="absolute h-[50vh] w-[50vh] rounded-full bg-gradient-to-r from-indigo-600/35 to-blue-700/45 blur-[160px] animate-flow-reverse-elegant -bottom-[15vh] -left-[20vh] animation-delay-3000"></div>
        <div className="absolute h-[40vh] w-[40vh] rounded-full bg-gradient-to-r from-cyan-400/25 to-blue-500/35 blur-[140px] animate-flow-elegant bottom-[30vh] right-[25vw] animation-delay-5000"></div>
        <div className="absolute h-[35vh] w-[35vh] rounded-full bg-gradient-to-r from-blue-400/20 to-indigo-500/30 blur-[120px] animate-flow-reverse-elegant top-[20vh] left-[15vw] animation-delay-7000"></div>

        {/* Moving particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 15}s`,
              }}
            />
          ))}
        </div>

        {/* Enhanced mesh pattern overlay */}
        <div className="absolute inset-0 bg-mesh-pattern animate-mesh-shift opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 font-[Tajawal]"
          dir="rtl"
        >
          لماذا تمكين بريان؟
        </motion.h2>

        {/* Clean Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* First Row - 3 items */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.slice(0, 3).map((highlight, index) => {
              const colorScheme = colorVariants[highlight.colorVariant];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={controls}
                  variants={{
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                        delay: index * 0.1,
                      },
                    },
                  }}
                  whileHover={{
                    scaleX: 1.02,
                    scaleY: 1,
                    transition: { duration: 0.3 },
                  }}
                  className={`${colorScheme.bg} backdrop-blur-md rounded-2xl shadow-lg ${colorScheme.border} border hover:border-opacity-90 transition-all duration-300 relative group overflow-hidden min-h-[280px]`}
                >
                  {/* Simple border accent */}
                  <div
                    className={`absolute top-0 left-0 w-full h-1 ${colorScheme.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="p-6 h-full flex flex-col">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl ${colorScheme.bg} ${colorScheme.border} border flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}
                    >
                      <div
                        className={`w-6 h-6 ${colorScheme.accent} opacity-80 rounded transform rotate-45`}
                      ></div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl font-bold mb-4 ${colorScheme.text} font-[Tajawal] leading-tight`}
                      dir="rtl"
                    >
                      {highlight.title}
                    </h3>

                    {/* Description */}
                    <div
                      className="text-gray-300 font-[Tajawal] leading-relaxed flex-1"
                      dir="rtl"
                    >
                      {highlight.description}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Second Row - 2 items centered */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {highlights.slice(3, 5).map((highlight, index) => {
              const colorScheme = colorVariants[highlight.colorVariant];
              const actualIndex = index + 3;

              return (
                <motion.div
                  key={actualIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={controls}
                  variants={{
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                        delay: actualIndex * 0.1,
                      },
                    },
                  }}
                  whileHover={{
                    scaleX: 1.02,
                    scaleY: 1,
                    transition: { duration: 0.3 },
                  }}
                  className={`${colorScheme.bg} backdrop-blur-md rounded-2xl shadow-lg ${colorScheme.border} border hover:border-opacity-90 transition-all duration-300 relative group overflow-hidden min-h-[320px]`}
                >
                  {/* Simple border accent */}
                  <div
                    className={`absolute top-0 left-0 w-full h-1 ${colorScheme.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="p-6 h-full flex flex-col">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl ${colorScheme.bg} ${colorScheme.border} border flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}
                    >
                      <div
                        className={`w-6 h-6 ${colorScheme.accent} opacity-80 rounded transform rotate-45`}
                      ></div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl font-bold mb-4 ${colorScheme.text} font-[Tajawal] leading-tight`}
                      dir="rtl"
                    >
                      {highlight.title}
                    </h3>

                    {/* Description */}
                    <div
                      className="text-gray-300 font-[Tajawal] leading-relaxed flex-1"
                      dir="rtl"
                    >
                      {highlight.description}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mb-16">
          {[
            { number: "8", text: "أيام تدريب مكثف", colorVariant: 0 },
            { number: "2", text: "مسارات متخصصة", colorVariant: 1 },
          ].map((item, index) => {
            const colorScheme = colorVariants[item.colorVariant];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.7,
                      ease: "easeOut",
                      delay: 0.2 * index,
                    },
                  },
                }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className={`${colorScheme.bg} backdrop-blur-lg p-10 rounded-3xl shadow-xl ${colorScheme.border} relative overflow-hidden group`}
              >
                {/* Border animation */}
                <div
                  className={`absolute top-0 left-0 w-0 h-1 ${colorScheme.accent} opacity-70 group-hover:w-full transition-all duration-1000 ease-out`}
                ></div>
                <div
                  className={`absolute top-0 right-0 h-0 w-1 ${colorScheme.accent} opacity-70 group-hover:h-full transition-all duration-1000 ease-out delay-200`}
                ></div>
                <div
                  className={`absolute bottom-0 right-0 w-0 h-1 ${colorScheme.accent} opacity-70 group-hover:w-full transition-all duration-1000 ease-out delay-400`}
                ></div>
                <div
                  className={`absolute bottom-0 left-0 h-0 w-1 ${colorScheme.accent} opacity-70 group-hover:h-full transition-all duration-1000 ease-out delay-600`}
                ></div>

                {/* Animated pattern background */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-grid-pattern animate-subtle-shift opacity-20"></div>
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 rounded-full ${colorScheme.glow} animate-float`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${5 + Math.random() * 10}s`,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <div className="inline-block mb-4 relative">
                    <span
                      className={`text-7xl font-extrabold ${colorScheme.text} group-hover:animate-pulse-fast`}
                    >
                      {item.number}
                    </span>
                    <div
                      className={`absolute -inset-3 rounded-full opacity-0 blur-lg ${colorScheme.glow} group-hover:opacity-70 transition-opacity duration-700 animate-pulse`}
                    ></div>
                  </div>
                  <p
                    className={`text-xl mt-2 ${colorScheme.text} font-[Tajawal]`}
                    dir="rtl"
                  >
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
            },
          }}
          className="text-center"
        >
          <a
            href="#register"
            className="relative inline-flex items-center px-10 py-4 overflow-hidden text-lg font-bold transition-all duration-500 ease-out rounded-full bg-gradient-to-r from-amber-500/20 to-amber-700/20 border border-amber-500/30 text-amber-400 hover:text-amber-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 group"
          >
            {/* Animated border effect */}
            <span className="absolute top-0 left-0 w-full h-full border border-amber-500/0 group-hover:border-amber-500/50 rounded-full transition-all duration-300"></span>
            <span className="absolute top-0 left-0 w-0 h-full bg-amber-500/10 group-hover:w-full transition-all duration-700 rounded-full"></span>
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-[200%] ease"></span>
            <span className="relative font-[Tajawal] text-xl" dir="rtl">
              سجل الآن واصنع فارقًا
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
