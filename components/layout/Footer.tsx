import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Phone, Mail, MapPin, Shield, Clock, Flame } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-slate-800 flex items-center justify-center text-white">
                <Flame className="w-5 h-5 text-sky-300" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                SUMMIT <span className="text-sky-400">AIR</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Dedicated to prompt, honest, and reliable heating, heat pump, and air conditioning services across the greater metropolitan area.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-sky-400" /> {siteConfig.licenseNumber}
              </p>
              <p>EPA Certified • Master Mechanical Licensed • Fully Insured</p>
            </div>
          </div>

          {/* Col 2: Quick Links / Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Heating & Cooling
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Emergency AC Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Furnace & Heating Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Heat Pump Installation & Rebates
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  21-Point Seasonal Tune-Ups
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Indoor Air Quality & Duct Solutions
                </a>
              </li>
              <li>
                <a href="#emergency" className="hover:text-orange-400 transition-colors text-orange-400 font-semibold">
                  24/7 Emergency Dispatch
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Service Areas
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-400">
              {siteConfig.serviceAreas.map((area) => (
                <a
                  key={area.city}
                  href="#service-areas"
                  className="hover:text-sky-400 transition-colors"
                >
                  {area.city}, {area.state}
                </a>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Fast dispatched trucks stationed in your neighborhood for faster response times.
            </p>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact & Hours
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-2.5 text-white font-bold hover:text-sky-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{siteConfig.phoneFormatted}</span>
              </a>
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{siteConfig.hours.regular}</p>
                  <p className="text-orange-400 font-semibold text-xs mt-0.5">{siteConfig.hours.emergency}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{siteConfig.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Demo Disclosure & Legal bottom bar */}
        <div className="pt-8 space-y-4">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
            <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
              <strong className="text-white">Sample website.</strong> Summit Air Heating &amp; Cooling is a fictional company created for demonstration purposes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
            <p>© {currentYear} {siteConfig.legalName}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-slate-400 transition-colors">
                Privacy Policy &amp; Terms
              </Link>
              <span>•</span>
              <a href="#request-service" className="hover:text-slate-400 transition-colors">
                Book Service Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
