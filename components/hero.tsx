"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative text-white flex items-center min-h-screen overflow-hidden">
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

      <div className="container mx-auto px-6 relative z-10 text-right">
        <motion.div
          className="max-w-xl md:max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Event Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-cyan-400/30"
            variants={itemVariants}
          >
            <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center neon-glow">
              <Sparkles className="h-5 w-5 text-cyan-300" />
            </div>
            <span className="text-sm font-medium text-cyan-100">
              حدث تمكين الشباب الأول في بريان
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300"
            variants={itemVariants}
          >
            تمكين بريان 2025
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200 font-medium"
            variants={itemVariants}
          >
            إبنِ مستقبلك، واصنع أثرًا في مجتمعك
          </motion.p>

          {/* Event Details */}
          <motion.div className="space-y-2 mb-12" variants={itemVariants}>
            <div className="text-lg md:text-xl text-gray-200 flex items-center justify-end gap-2">
              <span className="flex items-center gap-2">
                <span>22-29 أغسطس 2025 | 3 سبتمبر 2025</span>
                <div className="w-8 h-8 rounded-full bg-blue-400/20 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-blue-300" />
                </div>
              </span>
            </div>
            <div className="text-lg md:text-xl text-gray-200 flex items-center justify-end gap-2">
              <span className="flex items-center gap-2">
                <span>بريان، الجزائر</span>
                <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-cyan-300" />
                </div>
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-end gap-4 mb-12"
            variants={itemVariants}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-400 hover:to-indigo-500 transition-all duration-300 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-blue-500/30 hover:scale-105"
            >
              <Link
                href="/register-participant"
                className="flex items-center gap-3"
              >
                سجل الآن
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:scale-105"
            >
              <Link href="/about">اعرف المزيد</Link>
            </Button>
          </motion.div>

          {/* Quick Info Cards with updated color scheme */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            variants={containerVariants}
          >
            {[
              {
                icon: Calendar,
                title: "22-29 أغسطس",
                description: "الورشات التدريبية",
                colorClass: "from-blue-400/20 to-cyan-500/20",
                borderClass: "border-blue-400/50",
                iconColorClass: "text-blue-300",
                titleColorClass: "text-blue-200",
                iconBgClass: "bg-blue-400/20",
              },
              {
                icon: MapPin,
                title: "بريان",
                description: "الجزائر",
                colorClass: "from-cyan-400/20 to-sky-500/20",
                borderClass: "border-cyan-400/50",
                iconColorClass: "text-cyan-300",
                titleColorClass: "text-cyan-200",
                iconBgClass: "bg-cyan-400/20",
              },
              {
                icon: Users,
                title: "3 سبتمبر",
                description: "المعرض والمسابقة",
                colorClass: "from-indigo-400/20 to-blue-500/20",
                borderClass: "border-indigo-400/50",
                iconColorClass: "text-indigo-300",
                titleColorClass: "text-indigo-200",
                iconBgClass: "bg-indigo-400/20",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`backdrop-blur-md rounded-xl p-5 text-center border ${item.borderClass} bg-gradient-to-br ${item.colorClass} hover:scale-105 transition-all duration-500 group relative overflow-hidden`}
                variants={itemVariants}
                whileHover={{
                  boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
                }}
              >
                {/* Simplifie
                d hover effect */}
                <div
                  className={`absolute top-0 left-0 w-full h-0.5 ${item.iconColorClass.replace(
                    "text-",
                    "bg-"
                  )} opacity-70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>

                <div className="relative">
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-full ${item.iconBgClass} flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                  >
                    <item.icon
                      className={`h-6 w-6 ${item.iconColorClass} group-hover:animate-pulse`}
                    />
                  </div>
                  <div
                    className={`text-sm font-semibold mb-1 ${item.titleColorClass}`}
                  >
                    {item.title}
                  </div>
                  <div className="text-xs text-gray-300">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
