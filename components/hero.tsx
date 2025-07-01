"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Clean gradient background similar to reference */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#CD853F]">
        {/* Abstract geometric elements on the right */}
        <div className="absolute inset-0">
          <svg
            className="absolute right-0 top-0 w-2/3 h-full"
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ff4500" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#dc143c" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Flowing abstract shapes */}
            <path d="M400 0 Q600 150 500 300 T700 500 L800 450 L800 0 Z" fill="url(#redGradient)" />
            <path d="M300 100 Q550 200 400 350 T650 550 L800 500 L800 100 Z" fill="url(#redGradient)" opacity="0.7" />
            <path d="M500 50 Q700 180 600 320 T800 480 L800 50 Z" fill="url(#redGradient)" opacity="0.5" />

            {/* Additional geometric elements */}
            <circle cx="650" cy="150" r="60" fill="#ff6b35" fillOpacity="0.3" />
            <circle cx="700" cy="300" r="40" fill="#ff4500" fillOpacity="0.4" />
            <circle cx="600" cy="400" r="80" fill="#dc143c" fillOpacity="0.2" />
          </svg>
        </div>

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content - Left aligned like reference */}
      <div className="relative container mx-auto px-6 py-20 pt-32">
        <div className="max-w-2xl">
          <div className="space-y-8">
            {/* Main Heading - Clean and bold */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              الحدث الرائد لتمكين الشباب في الجزائر
              <span className="block text-4xl md:text-5xl font-normal mt-4 text-white/90">- تمكين غرداية</span>
            </h1>

            {/* Description - Clean paragraph */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              انضم إلى رواد الأعمال العالميين، مبتكري التكنولوجيا، وقادة الصناعة لاكتشاف الاتجاهات المتطورة
              والاستراتيجيات والحلول التي تشكل المستقبل الرقمي للشباب الجزائري.
            </p>

            {/* Event Details */}
            <div className="text-xl md:text-2xl text-white font-medium">22 - 29 أغسطس، 2025، غرداية</div>

            {/* Single CTA Button like reference */}
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-[#ff6b35] hover:bg-[#ff4500] text-white font-bold text-lg px-12 py-6 rounded-none uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/register-participant" className="flex items-center gap-3">
                  احجز تذكرتك
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
