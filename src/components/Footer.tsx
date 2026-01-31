import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <span className="font-heading font-bold text-2xl tracking-tight text-white mb-4 block">
              Ecovision{" "}
              <span className="text-primary-foreground/80">Academy</span>
            </span>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Building strong foundations in Data Science, Statistics,
              Analytics, and Research Methodologies.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-primary-foreground transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-slate-300 hover:text-primary-foreground transition-colors text-sm"
                >
                  All Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-300 hover:text-primary-foreground transition-colors text-sm"
                >
                  PhD Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-primary-foreground transition-colors text-sm"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses Preview */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-white mb-4">
              Popular Courses
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/courses"
                  className="text-slate-300 hover:text-primary-foreground transition-colors text-sm"
                >
                  Excel for Data Science
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-slate-300 hover:text-primary-foreground transition-colors text-sm"
                >
                  Python with AI
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-slate-300 hover:text-primary-foreground transition-colors text-sm"
                >
                  STATA Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-slate-300 hover:text-primary-foreground transition-colors text-sm"
                >
                  Power BI
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground shrink-0" />
                <span className="text-slate-300 text-sm">
                  Kolkata, West Bengal, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground shrink-0" />
                <div className="flex flex-col">
                  <span className="text-slate-300 text-sm">7450882312</span>
                  <span className="text-slate-300 text-sm">7605844893</span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground shrink-0" />
                <span className="text-slate-300 text-sm">
                  info@ecovisionacademy.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Ecovision Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
