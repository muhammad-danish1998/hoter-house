import * as React from "react";
import { siteConfig } from "@/lib/site";
import { Phone, ShieldCheck, Clock, Star, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background glow effects */}
      <div
        className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 -z-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline & Direct Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Same-day badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-semibold">
              <Zap className="w-4 h-4 text-sky-400" />
              <span>Same-Day Service Available • Fast Local Response</span>
            </div>

            {/* Main H1 - Clear & Direct */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Heating or AC Not Working?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-blue-200 block mt-1">
                We Restore Your Home&apos;s Comfort Today.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Fast, licensed HVAC technicians ready to diagnose and repair your heating or cooling system.
              Upfront pricing, no hidden dispatch charges, and 100% guaranteed workmanship.
            </p>

            {/* Conversion CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold text-lg shadow-lg shadow-emerald-950/30 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <Phone className="w-5 h-5 animate-pulse" />
                <span>Call {siteConfig.phoneFormatted}</span>
              </a>

              <a href="#request-service">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white">
                  Request Service Online
                </Button>
              </a>
            </div>

            {/* Key trust bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No Overtime Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1-Year Repair Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Dispatch & Trust Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl backdrop-blur-sm space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white">Emergency Response</h2>
                    <p className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Technicians on Standby
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-amber-400 justify-end">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">4.9 / 5.0 (Sample Score)</span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                    Fastest Service Method
                  </p>
                  <p className="text-sm font-bold text-white mt-0.5">
                    For active leaks, gas smells, or freezing temps:
                  </p>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="mt-2 inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call directly for priority dispatch
                  </a>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between py-1 border-b border-slate-700/60">
                    <span className="text-slate-400">Diagnostic Callout:</span>
                    <span className="font-semibold text-white">Waived with any repair</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-700/60">
                    <span className="text-slate-400">Service Territory:</span>
                    <span className="font-semibold text-white">Denver Metro &amp; Surrounding</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">Credentials:</span>
                    <span className="font-semibold text-white">{siteConfig.licenseNumber}</span>
                  </div>
                </div>
              </div>

              <a
                href="#request-service"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm text-center transition-colors shadow-md"
              >
                Schedule an Appointment Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
