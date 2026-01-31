"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="font-heading font-bold text-xl tracking-tight text-foreground">
              Ecovision <span className="text-primary">Academy</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              About Us
            </Link>
            <Link
              href="/courses"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Courses
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors font-medium focus:outline-none"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-card border border-border ring-1 ring-black/5 transition-all duration-200 ease-out origin-top-left ${dropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="py-1">
                  <Link
                    href="/services#phd-guidance"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary"
                  >
                    PhD Guidance
                  </Link>
                  <Link
                    href="/services#career-counselling"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary"
                  >
                    Career Counselling
                  </Link>
                  <Link
                    href="/services#research-support"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary"
                  >
                    Research Support
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>

            <Link
              href="/admin"
              className="text-xs text-muted-foreground/50 hover:text-primary uppercase tracking-widest font-semibold border border-transparent hover:border-border px-2 py-1 rounded"
            >
              Use App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/courses"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted"
              onClick={toggleMenu}
            >
              Courses
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              href="/admin"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted"
              onClick={toggleMenu}
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
