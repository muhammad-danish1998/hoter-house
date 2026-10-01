"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Phone, Shield, Clock, Menu, X, Flame } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top emergency trust strip */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available 24/7 for Heating & AC Emergencies
            </span>
            <span className="hidden sm:inline-block text-slate-400">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
              <Shield className="w-3.5 h-3.5 text-sky-400" />
              {siteConfig.licenseNumber}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {siteConfig.hours.regular}
            </span>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="text-white hover:text-sky-300 font-bold transition-colors inline-flex items-center gap-1"
              aria-label={`Call Summit Air 24/7 at ${siteConfig.phoneFormatted}`}
            >
              <Phone className="w-3 h-3 text-sky-400" />
              {siteConfig.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-600 rounded-lg p-1">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-600 to-slate-900 flex items-center justify-center text-white shadow-md shadow-sky-900/20 group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 text-sky-300" />
            </div>
            <div>
              <span className="block text-xl font-black tracking-tight text-slate-900">
                SUMMIT <span className="text-sky-600">AIR</span>
              </span>
              <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Heating & Air Conditioning
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-700 text-sm" aria-label="Main Navigation">
            <a href="#services" className="hover:text-sky-600 transition-colors py-2">
              Services
            </a>
            <a href="#emergency" className="hover:text-emergency-600 transition-colors py-2">
              24/7 Emergency
            </a>
            <a href="#why-us" className="hover:text-sky-600 transition-colors py-2">
              Why Us
            </a>
            <a href="#reviews" className="hover:text-sky-600 transition-colors py-2">
              Reviews
            </a>
            <a href="#service-areas" className="hover:text-sky-600 transition-colors py-2">
              Service Areas
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border-2 border-sky-600 text-sky-700 hover:bg-sky-50 font-bold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>{siteConfig.phoneFormatted}</span>
            </a>
            <a href="#request-service">
              <Button variant="emergency" size="md">
                Request Service
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2 font-medium text-slate-800" aria-label="Mobile Navigation">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-100"
            >
              Services
            </a>
            <a
              href="#emergency"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-100 text-emergency-600 font-bold"
            >
              24/7 Emergency Repair
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-100"
            >
              Why Choose Us
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-100"
            >
              Customer Reviews
            </a>
            <a
              href="#service-areas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-100"
            >
              Service Areas
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-sky-600 text-white font-bold text-center"
            >
              <Phone className="w-4 h-4" />
              Call {siteConfig.phoneFormatted}
            </a>
            <a
              href="#request-service"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 px-4 rounded-lg bg-slate-900 text-white font-bold text-center"
            >
              Request Service Online
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
