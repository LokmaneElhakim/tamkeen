import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#123332] text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#ffd98e]">روابط سريعة</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#ffd98e] transition-colors">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#ffd98e] transition-colors">
                حول الحدث
              </Link>
            </li>
            <li>
              <Link href="/register-participant" className="hover:text-[#ffd98e] transition-colors">
                التسجيل
              </Link>
            </li>
            <li>
              <Link href="/submit-project" className="hover:text-[#ffd98e] transition-colors">
                تقديم مشروع
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-[#ffd98e]">التسجيل</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/register-participant" className="hover:text-[#ffd98e] transition-colors">
                تسجيل مشارك
              </Link>
            </li>
            <li>
              <Link href="/register-startup" className="hover:text-[#ffd98e] transition-colors">
                تسجيل شركة ناشئة
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-[#ffd98e]">تواصل معنا</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@tamkeenghardaia.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+213 555 123 456</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>غرداية، الجزائر</span>
            </li>
          </ul>
          <div className="flex space-x-4 space-x-reverse mt-4">
            <a href="#" className="text-white hover:text-[#ffd98e] transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-[#ffd98e] transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-[#ffd98e] transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-12 border-t border-gray-700 pt-8">
        <p>&copy; 2025 تمكين غرداية. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  )
}
