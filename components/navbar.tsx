"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#1d4241] shadow-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold text-[#ffd98e]">
          تمكين غرداية 2025
        </Link>

        <div className="hidden md:flex items-center space-x-8 space-x-reverse">
          <Link href="/" className="text-white hover:text-[#ffd98e] transition-colors font-medium">
            الرئيسية
          </Link>
          <Link href="/about" className="text-white hover:text-[#ffd98e] transition-colors font-medium">
            حول الحدث
          </Link>
          <Link href="/register-participant" className="text-white hover:text-[#ffd98e] transition-colors font-medium">
            التسجيل
          </Link>
          <Link href="/submit-project" className="text-white hover:text-[#ffd98e] transition-colors font-medium">
            تقديم مشروع
          </Link>
          <Button asChild className="bg-[#ffd98e] text-[#1d4241] hover:bg-white transition-colors font-bold shadow-md">
            <Link href="/register-participant">انضم الآن</Link>
          </Button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-[#1d4241] pb-4">
          <Link
            href="/"
            className="block py-2 px-6 text-center text-white hover:bg-[#123332]"
            onClick={() => setIsOpen(false)}
          >
            الرئيسية
          </Link>
          <Link
            href="/about"
            className="block py-2 px-6 text-center text-white hover:bg-[#123332]"
            onClick={() => setIsOpen(false)}
          >
            حول الحدث
          </Link>
          <Link
            href="/register-participant"
            className="block py-2 px-6 text-center text-white hover:bg-[#123332]"
            onClick={() => setIsOpen(false)}
          >
            التسجيل
          </Link>
          <Link
            href="/submit-project"
            className="block py-2 px-6 text-center text-white hover:bg-[#123332]"
            onClick={() => setIsOpen(false)}
          >
            تقديم مشروع
          </Link>
          <Link
            href="/register-participant"
            className="block py-2 px-6 text-center bg-[#ffd98e] text-[#1d4241] mx-6 mt-2 rounded-full font-bold hover:bg-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            انضم الآن
          </Link>
        </div>
      )}
    </header>
  )
}
