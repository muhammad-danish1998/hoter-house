"use client";

import * as React from "react";
import { siteConfig } from "@/lib/site";
import { Phone, Calendar } from "lucide-react";

export function StickyCallBar() {
  return (
    <aside
      aria-label="Quick Actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 p-2.5 shadow-2xl safe-area-pb"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-3 rounded-xl shadow-md active:scale-95 transition-all text-sm min-h-[48px]"
          aria-label={`Call now at ${siteConfig.phoneFormatted}`}
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <span>Call Now</span>
        </a>

        <a
          href="#request-service"
          className="flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-3 rounded-xl shadow-md active:scale-95 transition-all text-sm min-h-[48px]"
          aria-label="Request service online"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Online</span>
        </a>
      </div>
    </aside>
  );
}
