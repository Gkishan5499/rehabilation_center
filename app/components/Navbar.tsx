"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Activity } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full bg-white shadow-md z-50 top-0 left-0 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Activity className="h-8 w-8 text-medical-primary" />
              <div>
                <span className="font-bold text-xl text-medical-dark block leading-tight">Maya</span>
                <span className="text-xs text-medical-primary font-medium tracking-wider uppercase">Physiotherapy</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-medical-primary ${pathname === link.href ? "text-medical-primary font-semibold" : "text-medical-muted"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact">
              <Button size="sm">Book Appointment</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-medical-dark hover:text-medical-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${pathname === link.href
                    ? "text-medical-primary bg-medical-primary-light/50"
                    : "text-medical-dark hover:text-medical-primary hover:bg-gray-50"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Book Appointment</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
