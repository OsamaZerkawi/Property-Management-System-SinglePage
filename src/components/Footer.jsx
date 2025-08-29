import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function Footer({ t }) {
  return (
    <footer id="contact" className="bg-sky-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
              <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold mr-3">Propoly</div>
            </div>
            <p className="text-sky-100 mb-6 max-w-md">{t.footerDesc}</p>

            {/* Social Links */}
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Button
                size="icon"
                variant="ghost"
                className="text-sky-100 hover:text-white hover:bg-sky-800"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-sky-100 hover:text-white hover:bg-sky-800"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-sky-100 hover:text-white hover:bg-sky-800"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-sky-100 hover:text-white hover:bg-sky-800"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-sky-100 hover:text-white transition-colors"
                >
                  {t.home}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sky-100 hover:text-white transition-colors"
                >
                  {t.services}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sky-100 hover:text-white transition-colors"
                >
                  {t.about}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sky-100 hover:text-white transition-colors"
                >
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Phone className="w-4 h-4" />
                <span className="text-sky-100">+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Mail className="w-4 h-4" />
                <span className="text-sky-100">info@propoly.com</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <MapPin className="w-4 h-4" />
                <span className="text-sky-100 uppercase">ITE Damascus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sky-800 mt-12 pt-8 text-center">
          <p className="text-sky-100">
            © {new Date().getFullYear()} {t.footerTitle}. {t.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
