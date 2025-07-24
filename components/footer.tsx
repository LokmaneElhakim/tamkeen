import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#04174d] text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#d4af37]">روابط سريعة</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#d4af37] transition-colors">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#d4af37] transition-colors"
              >
                حول الحدث
              </Link>
            </li>
            <li>
              <Link
                href="/register-participant"
                className="hover:text-[#d4af37] transition-colors"
              >
                التسجيل
              </Link>
            </li>
            <li>
              <Link
                href="/register-startup"
                className="hover:text-[#d4af37] transition-colors"
              >
                تقديم مشروع
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-[#d4af37]">التسجيل</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/register-participant"
                className="hover:text-[#d4af37] transition-colors"
              >
                تسجيل مشارك
              </Link>
            </li>
            <li>
              <Link
                href="/register-startup"
                className="hover:text-[#d4af37] transition-colors"
              >
                تسجيل شركة ناشئة
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-[#d4af37]">تواصل معنا</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#d4af37]" />
              <span>info@tamkeenghardaia.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#d4af37]" />
              <span>+213 555 123 456</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#d4af37]" />
              <span>بريان، الجزائر</span>
            </li>
          </ul>
          <div className="flex space-x-4 space-x-reverse mt-4">
            <a
              href="#"
              className="text-white hover:text-[#d4af37] transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#d4af37] transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#d4af37] transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-12 border-t border-[#0d2a5e] pt-8">
        <p>&copy; 2025 تمكين بريان. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
