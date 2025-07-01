"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              {/* Modern geometric logo with orange and blue */}
              <div className="w-12 h-12 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35] to-[#ff8a50] rounded-lg transform rotate-12"></div>
                <div className="absolute inset-1 bg-gradient-to-br from-[#4767a7] to-[#2b3761] rounded-lg flex items-center justify-center">
                  <div className="text-white font-bold text-lg">ت</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#2b3761]">TAMKEEN</span>
              <span className="text-xs text-[#4767a7] font-medium -mt-1">GHARDAIA 2025</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#4767a7] transition-colors font-medium text-sm uppercase tracking-wide"
            >
              الرئيسية
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#4767a7] transition-colors font-medium text-sm uppercase tracking-wide"
            >
              حول الحدث
            </Link>
            <Link
              href="/register-participant"
              className="text-gray-700 hover:text-[#4767a7] transition-colors font-medium text-sm uppercase tracking-wide"
            >
              التسجيل
            </Link>
            <Link
              href="/submit-project"
              className="text-gray-700 hover:text-[#4767a7] transition-colors font-medium text-sm uppercase tracking-wide"
            >
              المشاريع
            </Link>
            <Button className="bg-gradient-to-r from-[#ff6b35] to-[#ff8a50] text-white hover:shadow-lg hover:scale-105 transition-all duration-300 font-bold text-sm px-6 py-2 rounded-full uppercase tracking-wide">
              احجز مكانك
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-[#4767a7]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200/20">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#4767a7] transition-colors font-medium text-sm uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#4767a7] transition-colors font-medium text-sm uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                حول الحدث
              </Link>
              <Link
                href="/register-participant"
                className="text-gray-700 hover:text-[#4767a7] transition-colors font-medium text-sm uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                التسجيل
              </Link>
              <Link
                href="/submit-project"
                className="text-gray-700 hover:text-[#4767a7] transition-colors font-medium text-sm uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                المشاريع
              </Link>
              <Button className="bg-gradient-to-r from-[#ff6b35] to-[#ff8a50] text-white font-bold text-sm px-6 py-2 rounded-full uppercase tracking-wide w-fit">
                احجز مكانك
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
