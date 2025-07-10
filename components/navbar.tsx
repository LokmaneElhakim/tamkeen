"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Initialize scroll state on component mount
    const checkScroll = () => setScrolled(window.scrollY > 10);
    checkScroll(); // Check initial scroll position

    // Add event listener
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0d2a5e]/90 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-extrabold text-[#d4af37]">
          <Image
            src={"/tamkeen-logo.png"}
            alt="Tamkeen Logo"
            width={100}
            height={35}
            className="inline-block mr-2"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8 space-x-reverse">
          <Link
            href="/"
            className={cn(
              "transition-colors font-medium",
              scrolled
                ? "text-white hover:text-[#d4af37]"
                : "text-white hover:text-[#d4af37]"
            )}
          >
            الرئيسية
          </Link>
          <Link
            href="/about"
            className={cn(
              "transition-colors font-medium",
              scrolled
                ? "text-white hover:text-[#d4af37]"
                : "text-white hover:text-[#d4af37]"
            )}
          >
            حول الحدث
          </Link>
          <Link
            href="/register-participant"
            className={cn(
              "transition-colors font-medium",
              scrolled
                ? "text-white hover:text-[#d4af37]"
                : "text-white hover:text-[#d4af37]"
            )}
          >
            التسجيل
          </Link>
          <Link
            href="/submit-project"
            className={cn(
              "transition-colors font-medium",
              scrolled
                ? "text-white hover:text-[#d4af37]"
                : "text-white hover:text-[#d4af37]"
            )}
          >
            المشاريع
          </Link>
          <Button
            asChild
            className={cn(
              "transition-all duration-300 font-medium",
              scrolled
                ? "bg-[#d4af37] text-[#04174d] hover:bg-[#c09c20] border-none"
                : "bg-[#d4af37] text-[#04174d] hover:bg-[#c09c20] border-none"
            )}
          >
            <Link href="/register-participant">انضم الآن</Link>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "md:hidden focus:outline-none",
            scrolled ? "text-[#d4af37]" : "text-white"
          )}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isOpen && (
        <div
          className={cn(
            "md:hidden pb-4 absolute w-full transition-all duration-300",
            "bg-[#0d2a5e]/95 backdrop-blur-sm"
          )}
        >
          <div className="space-y-1 p-2">
            <Link
              href="/"
              className="block py-2 px-4 text-white hover:bg-[#0d2a5e]/50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              الرئيسية
            </Link>
            <Link
              href="/about"
              className="block py-2 px-4 text-white hover:bg-[#0d2a5e]/50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              حول الحدث
            </Link>
            <Link
              href="/register-participant"
              className="block py-2 px-4 text-white hover:bg-[#0d2a5e]/50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              التسجيل
            </Link>
            <Link
              href="/submit-project"
              className="block py-2 px-4 text-white hover:bg-[#0d2a5e]/50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              المشاريع
            </Link>
            <div className="pt-2 px-4">
              <Link
                href="/register-participant"
                className="block py-2 px-4 text-center bg-[#d4af37] text-[#04174d] font-medium rounded-md hover:bg-[#c09c20] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                انضم الآن
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
