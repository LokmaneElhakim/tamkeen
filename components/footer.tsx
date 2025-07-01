import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">تمكين غرداية</h3>
            <p className="text-gray-300 mb-4">
              تمكين الشباب الجزائري من خلال تطوير المهارات والابتكار وريادة الأعمال في غرداية.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  حول الحدث
                </Link>
              </li>
              <li>
                <Link href="/register-participant" className="text-gray-300 hover:text-blue-400 transition-colors">
                  التسجيل
                </Link>
              </li>
              <li>
                <Link href="/submit-project" className="text-gray-300 hover:text-blue-400 transition-colors">
                  تقديم مشروع
                </Link>
              </li>
            </ul>
          </div>

          {/* Registration */}
          <div>
            <h4 className="text-lg font-semibold mb-4">التسجيل</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/register-participant" className="text-gray-300 hover:text-blue-400 transition-colors">
                  تسجيل مشارك
                </Link>
              </li>
              <li>
                <Link href="/register-startup" className="text-gray-300 hover:text-blue-400 transition-colors">
                  تسجيل شركة
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">التواصل</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@tamkeen-ghardaia.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+213 XXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>غرداية، الجزائر</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 تمكين غرداية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
