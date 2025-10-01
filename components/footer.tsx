import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-teal-400" />
              <span className="text-2xl font-bold">HS Global Solutions</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your trusted partner in mortgage, banking, and insurance
              solutions. We provide expert financial guidance to help you
              achieve your goals.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-teal-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-slate-400 hover:text-teal-400 cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-slate-400 hover:text-teal-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/services"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                >
                  Mortgage Solutions
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                >
                  Banking Services
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                >
                  Insurance Coverage
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                >
                  Financial Planning
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                >
                  Investment Advisory
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/about"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/about#team"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                >
                  Our Team
                </a>
              </li>
              {/* <li>
                <a
                  href="/careers"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                >
                  Careers
                </a>
              </li> */}
              {/* <li>
                <span className="text-slate-500">News & Updates</span>
              </li> */}
              <li>
                <a
                  href="/contact"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">
                  123 Financial District
                  <br />
                  New York, NY 10004
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <span className="text-slate-300">
                  info@hsglobalsolutions.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2024 HS Global Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <span className="text-slate-500">Privacy Policy</span>
              <span className="text-slate-500">Terms of Service</span>
              <span className="text-slate-500">Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
