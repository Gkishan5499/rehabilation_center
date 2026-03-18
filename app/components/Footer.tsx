import Link from "next/link";
import { MapPin, Phone, Mail, Activity, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-medical-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Intro */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Activity className="h-8 w-8 text-medical-primary-light" />
              <div>
                <span className="font-bold text-xl block leading-tight">Maya</span>
                <span className="text-xs text-medical-primary-light font-medium tracking-wider uppercase">Physiotherapy</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              Providing expert physiotherapy and rehabilitation services to help you recover faster and live a pain-free life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              Quick Links
              <span className="ml-2 w-8 h-1 bg-medical-primary rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-gray-300">
              {["Home", "About Us", "Services", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`} className="hover:text-medical-primary-light transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight className="h-3 w-3 text-medical-primary" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
             <h3 className="text-lg font-semibold mb-6 flex items-center">
              Our Services
              <span className="ml-2 w-8 h-1 bg-medical-primary rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-3 w-3 text-medical-primary mt-1 flex-shrink-0" />
                Pain Management
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-3 w-3 text-medical-primary mt-1 flex-shrink-0" />
                Sports Injury Rehab
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-3 w-3 text-medical-primary mt-1 flex-shrink-0" />
                Post Surgery Rehab
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-3 w-3 text-medical-primary mt-1 flex-shrink-0" />
                Neurological Rehab
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
             <h3 className="text-lg font-semibold mb-6 flex items-center">
              Contact Us
              <span className="ml-2 w-8 h-1 bg-medical-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-medical-primary shrink-0 mt-0.5" />
                <span>MIG 6, KDA Colony Rd, Lal Bangla, Kanpur, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-medical-primary shrink-0" />
                <a href="tel:+919889197771" className="hover:text-medical-primary-light transition-colors">+91 98891 97771</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-medical-primary shrink-0 mt-0.5" />
                <span>
                  Mon - Sat: 9:00 AM - 8:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Maya Physiotherapy. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
