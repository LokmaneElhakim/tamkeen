"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f7cd6f] to-[#4767a7] flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">تمكين غرداية</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-[#4767a7] transition-all duration-300 font-medium"
            >
              الرئيسية
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-[#4767a7] transition-all duration-300 font-medium"
            >
              حول الحدث
            </Link>
            <Link
              href="/register-participant"
              className="text-gray-700 dark:text-gray-300 hover:text-[#4767a7] transition-all duration-300 font-medium"
            >
              التسجيل
            </Link>
            <Link
              href="/submit-project"
              className="text-gray-700 dark:text-gray-300 hover:text-[#4767a7] transition-all duration-300 font-medium"
            >
              تقديم مشروع
            </Link>
            <Button className="bg-gradient-to-r from-[#f7cd6f] to-[#eeb93c] text-[#2b3761] hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold">
              انضم الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#4767a7]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/20">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-[#4767a7] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                href="/about"
                className="text-gray-700 dark:text-gray-300 hover:text-[#4767a7] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                حول الحدث
              </Link>
              <Link
                href="/register-participant"
                className="text-gray-700 dark:text-gray-300 hover:text-[#4767a7] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                تسجيل مشارك
              </Link>
              <Link
                href="/register-startup"
                className="text-gray-700 dark:text-gray-300 hover:text-[#4767a7] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                تسجيل شركة
              </Link>
              <Link
                href="/submit-project"
                className="text-gray-700 dark:text-gray-300 hover:text-[#4767a7] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                تقديم مشروع
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
