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
        "fixed w-full top-0 z-50 transition-all duration-700 ease-out bg-white/12 backdrop-blur-2xl border-b border-white/25 shadow-xl"
      )}
    >
      {/* Primary glass base layer */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-700 ease-out",
          scrolled
            ? "bg-gradient-to-b from-white/20 to-white/10 backdrop-blur-3xl"
            : "bg-transparent"
        )}
      />

      {/* Secondary frosted overlay */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-700 ease-out",
          scrolled
            ? "bg-gradient-to-r from-white/8 via-white/15 to-white/8 backdrop-blur-2xl"
            : "bg-transparent"
        )}
      />

      {/* Tertiary shimmer effect */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-700 ease-out",
          scrolled
            ? "bg-gradient-to-br from-transparent via-white/5 to-blue-200/10 backdrop-blur-xl"
            : "bg-transparent"
        )}
      />

      {/* Subtle noise texture overlay */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-700 ease-out opacity-30",
          scrolled
            ? "bg-gradient-to-t from-gray-100/5 to-white/10 backdrop-blur-sm"
            : "bg-transparent"
        )}
      />

      <nav
        className={cn(
          "relative container mx-auto px-6 flex justify-between items-center transition-all duration-500",
          scrolled ? "py-3" : "py-4"
        )}
      >
        <Link
          href="/"
          className="text-xl font-extrabold text-[#d4af37] relative z-10"
        >
          <Image
            src={"/logo-white.svg"}
            alt="Tamkeen Logo"
            width={60}
            height={35}
            className="inline-block mr-2 drop-shadow-lg"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8 space-x-reverse relative z-10">
          <Link
            href="/"
            className={cn(
              "transition-all duration-300 font-medium relative",
              scrolled
                ? "text-white hover:text-[#d4af37] drop-shadow-sm"
                : "text-white hover:text-[#d4af37] drop-shadow-md",
              "hover:scale-105 hover:drop-shadow-lg"
            )}
          >
            الرئيسية
          </Link>
          <Link
            href="/about"
            className={cn(
              "transition-all duration-300 font-medium relative",
              scrolled
                ? "text-white hover:text-[#d4af37] drop-shadow-sm"
                : "text-white hover:text-[#d4af37] drop-shadow-md",
              "hover:scale-105 hover:drop-shadow-lg"
            )}
          >
            حول الحدث
          </Link>
          <Link
            href="/register-participant"
            className={cn(
              "transition-all duration-300 font-medium relative",
              scrolled
                ? "text-white hover:text-[#d4af37] drop-shadow-sm"
                : "text-white hover:text-[#d4af37] drop-shadow-md",
              "hover:scale-105 hover:drop-shadow-lg"
            )}
          >
            التسجيل
          </Link>
          <Link
            href="/submit-project"
            className={cn(
              "transition-all duration-300 font-medium relative",
              scrolled
                ? "text-white hover:text-[#d4af37] drop-shadow-sm"
                : "text-white hover:text-[#d4af37] drop-shadow-md",
              "hover:scale-105 hover:drop-shadow-lg"
            )}
          >
            المشاريع
          </Link>
          <Button
            asChild
            size="lg"
            className="bg-[#d4af37] text-[#04174d] hover:bg-[#c09c20] transition-all duration-300 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl pulse-glow hover:scale-105 backdrop-blur-sm border border-white/20 relative z-10"
          >
            <Link href="/register-participant">انضم الآن</Link>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "md:hidden focus:outline-none relative z-10 transition-all duration-300",
            scrolled
              ? "text-[#d4af37] drop-shadow-sm"
              : "text-white drop-shadow-md",
            "hover:scale-110 hover:drop-shadow-lg"
          )}
        >
          {isOpen ? (
            <X className="h-12 w-12 sm:w-6 sm:h-6" />
          ) : (
            <Menu className="h-12 w-12 sm:w-6 sm:h-6" />
          )}
        </button>
      </nav>

      {isOpen && (
        <div
          className={cn(
            "md:hidden pb-4 absolute w-full transition-all duration-500 ease-out",
            "bg-white/10 backdrop-blur-3xl border-b border-white/50 shadow-2xl shadow-black/40"
          )}
        >
          {/* Multiple enhanced glass layers for mobile menu */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/10 backdrop-blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/8 via-white/15 to-white/8 backdrop-blur-2xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-blue-200/10 backdrop-blur-xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100/5 to-white/10 backdrop-blur-sm opacity-30" />

          <div className="relative space-y-1 p-2 z-10">
            <Link
              href="/"
              className="block py-3 px-4 text-white hover:bg-white/20 rounded-lg transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/30 hover:shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              الرئيسية
            </Link>
            <Link
              href="/about"
              className="block py-3 px-4 text-white hover:bg-white/20 rounded-lg transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/30 hover:shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              حول الحدث
            </Link>
            <Link
              href="/register-participant"
              className="block py-3 px-4 text-white hover:bg-white/20 rounded-lg transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/30 hover:shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              التسجيل
            </Link>
            <Link
              href="/submit-project"
              className="block py-3 px-4 text-white hover:bg-white/20 rounded-lg transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/30 hover:shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              المشاريع
            </Link>
            <div className="pt-2 px-4">
              <Link
                href="/register-participant"
                className="block py-3 px-4 text-center bg-[#d4af37] text-[#0d2a5e] font-medium rounded-lg hover:bg-[#c09c20] shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-105"
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
