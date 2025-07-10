"use client";

import { useState, useEffect } from "react";
import { Clock, Calendar, Users, MapPin } from "lucide-react";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
    <section className="py-16 bg-[#04174d] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1)_0%,transparent_50%)]"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
          <Clock className="h-5 w-5 text-[#d4af37]" />
          <span className="font-semibold">العد التنازلي للحدث</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          العد التنازلي للحدث
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[
            { value: timeLeft.days, label: "أيام", icon: Calendar },
            { value: timeLeft.hours, label: "ساعات", icon: Clock },
            { value: timeLeft.minutes, label: "دقائق", icon: Clock },
            { value: timeLeft.seconds, label: "ثواني", icon: Clock },
          ].map((item, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-6 hover:neon-glow transition-all duration-300 shadow-lg"
            >
              <item.icon className="h-6 w-6 text-[#d4af37] mb-2 mx-auto" />
              <div className="text-5xl md:text-6xl font-extrabold text-[#d4af37] mb-2">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-lg mt-2">{item.label}</div>
            </div>
          ))}
        </div>

        <p className="text-xl md:text-2xl font-semibold mb-4">
          أماكن محدودة متاحة! سارع بالتسجيل لتكون جزءًا من هذه التجربة.
        </p>

        <a
          href="#register"
          className="inline-block bg-[#d4af37] text-[#04174d] px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition-colors shadow-lg"
        >
          سجل الآن
        </a>
      </div>
    </section>
  );
}
