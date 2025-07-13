"use client";

import { useState, useEffect } from "react";
import { Clock, Calendar } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Animation variants for staggered animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    const targetDate = new Date("2025-08-22T09:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-slate-100 py-20 md:py-32 flex items-center min-h-[60vh] overflow-hidden">
      {/* Enhanced animated background elements to match event highlights */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-60 pointer-events-none">
        {/* Enhanced blue gradient orbs */}

        {/* Moving particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 12}s`,
              }}
            />
          ))}
        </div>

        {/* Enhanced mesh pattern */}
        <div className="absolute inset-0 bg-mesh-pattern animate-mesh-shift opacity-30"></div>
      </div>

      <motion.div
        className="relative container mx-auto px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-cyan-400/30"
          variants={itemVariants}
        >
          <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center neon-glow">
            <Clock className="h-5 w-5 text-cyan-300" />
          </div>
          <span className="font-semibold text-cyan-100">
            العد التنازلي للحدث
          </span>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300"
          variants={itemVariants}
        >
          العد التنازلي للحدث
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            {
              value: timeLeft.days,
              label: "أيام",
              icon: Calendar,
              colorScheme: {
                bg: "from-blue-400/20 to-cyan-500/20",
                border: "border-blue-400/50",
                icon: "text-blue-300",
                number: "text-blue-200",
                iconBg: "bg-blue-400/20",
              },
            },
            {
              value: timeLeft.hours,
              label: "ساعات",
              icon: Clock,
              colorScheme: {
                bg: "from-cyan-400/20 to-sky-500/20",
                border: "border-cyan-400/50",
                icon: "text-cyan-300",
                number: "text-cyan-200",
                iconBg: "bg-cyan-400/20",
              },
            },
            {
              value: timeLeft.minutes,
              label: "دقائق",
              icon: Clock,
              colorScheme: {
                bg: "from-indigo-400/20 to-blue-500/20",
                border: "border-indigo-400/50",
                icon: "text-indigo-300",
                number: "text-indigo-200",
                iconBg: "bg-indigo-400/20",
              },
            },
            {
              value: timeLeft.seconds,
              label: "ثواني",
              icon: Clock,
              colorScheme: {
                bg: "from-sky-400/20 to-blue-500/20",
                border: "border-sky-400/50",
                icon: "text-sky-300",
                number: "text-sky-200",
                iconBg: "bg-sky-400/20",
              },
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${item.colorScheme.bg} backdrop-blur-md rounded-2xl p-5 border ${item.colorScheme.border} hover:scale-105 transition-all duration-500 group relative overflow-hidden shadow-lg`}
              variants={itemVariants}
            >
              {/* Animated borders on hover */}
              <div
                className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${item.colorScheme.bg.replace(
                  "/20",
                  "/70"
                )} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Background patterns */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className={`absolute inset-0 bg-grid-pattern opacity-60 ${
                    index % 2 === 0
                      ? "animate-subtle-shift"
                      : "animate-subtle-shift-reverse"
                  }`}
                ></div>
              </div>

              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-full ${item.colorScheme.iconBg} border ${item.colorScheme.border} flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
              >
                <item.icon className={`h-6 w-6 ${item.colorScheme.icon}`} />
              </div>
              <div
                className={`text-5xl md:text-6xl font-extrabold ${item.colorScheme.number} mb-2 group-hover:scale-110 transition-transform duration-300`}
              >
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-lg mt-2 text-gray-300">{item.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-xl md:text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-cyan-300"
          variants={itemVariants}
        >
          أماكن محدودة متاحة! سارع بالتسجيل لتكون جزءًا من هذه التجربة.
        </motion.p>

        <motion.a
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          href="#register"
          className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
        >
          سجل الآن
        </motion.a>
      </motion.div>
    </section>
  );
}
