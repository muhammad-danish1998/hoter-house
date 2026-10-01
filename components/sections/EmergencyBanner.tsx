import * as React from "react";
import { siteConfig } from "@/lib/site";
import { Phone, AlertTriangle, Flame, ShieldAlert, Clock } from "lucide-react";

export function EmergencyBanner() {
  return (
    <section id="emergency" className="py-12 bg-gradient-to-r from-orange-600 via-emergency-600 to-amber-700 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left emergency info */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-amber-200" />
              <span>24/7 Priority Emergency Dispatch</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              HVAC Emergency? Don&apos;t Wait in Dangerous Temperatures.
            </h2>

            <p className="text-sm sm:text-base text-orange-100 max-w-2xl leading-relaxed">
              Whether your furnace failed during a sub-zero freeze or your AC stopped during a heatwave, our emergency dispatch units are active 24/7 with fully equipped parts trucks.
            </p>

            {/* Common emergency signs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-medium text-white/90">
              <div className="flex items-center gap-1.5 bg-black/20 px-2.5 py-2 rounded-lg">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>No Heat in Winter</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/20 px-2.5 py-2 rounded-lg">
                <Flame className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>Burning Smells</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/20 px-2.5 py-2 rounded-lg">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>Water Leaks from AC</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/20 px-2.5 py-2 rounded-lg">
                <Clock className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>Loud Screeching</span>
              </div>
            </div>
          </div>

          {/* Right Direct Call Box */}
          <div className="lg:col-span-4 flex flex-col items-stretch sm:items-center lg:items-end">
            <div className="w-full max-w-sm bg-white text-slate-900 rounded-2xl p-6 shadow-2xl text-center space-y-4">
              <p className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                Immediate Phone Dispatch
              </p>
              <div className="text-xl sm:text-2xl font-black text-slate-900">
                {siteConfig.emergencyPhoneFormatted}
              </div>
              <a
                href={`tel:${siteConfig.emergencyPhoneRaw}`}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-extrabold text-base shadow-lg transition-all active:scale-95"
                aria-label={`Call emergency dispatch now at ${siteConfig.emergencyPhoneFormatted}`}
              >
                <Phone className="w-5 h-5 animate-bounce" />
                <span>Call Emergency Line</span>
              </a>
              <p className="text-[11px] text-slate-500">
                Average response dispatch under 60-90 minutes across all serviced cities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
