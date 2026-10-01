"use client";

import * as React from "react";
import { siteConfig } from "@/lib/site";
import { MapPin, Search, CheckCircle2, Phone, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function ServiceAreas() {
  const [query, setQuery] = React.useState("");
  const [searchResult, setSearchResult] = React.useState<"covered" | "not_covered" | null>(null);

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) {
      setSearchResult(null);
      return;
    }

    const isMatch = siteConfig.serviceAreas.some(
      (area) =>
        area.city.toLowerCase().includes(cleanQuery) ||
        area.zipCodes.some((zip) => zip.includes(cleanQuery))
    );

    setSearchResult(isMatch ? "covered" : "not_covered");
  };

  return (
    <section id="service-areas" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-700 bg-sky-100/80 px-3 py-1 rounded-full">
            Local Coverage Territory
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Service Areas &amp; Fast Dispatch Zones
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            We operate fully equipped mobile HVAC service vehicles stationed throughout the metropolitan area for prompt arrival.
          </p>

          {/* Quick Interactive ZIP code verification */}
          <div className="mt-8 max-w-md mx-auto">
            <form onSubmit={handleZipCheck} className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Enter your ZIP code or city..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    if (searchResult) setSearchResult(null);
                  }}
                  className="pl-10 text-sm shadow-sm"
                  aria-label="Enter your ZIP code or city to check coverage"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
              </div>
              <Button type="submit" variant="primary" size="md">
                Check Area
              </Button>
            </form>

            {searchResult === "covered" && (
              <div className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Great news! Summit Air provides same-day service in your area.</span>
              </div>
            )}

            {searchResult === "not_covered" && (
              <div className="mt-3 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold flex items-center justify-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-600" />
                <span>We may still cover your street! Call us at {siteConfig.phoneFormatted} to confirm.</span>
              </div>
            )}
          </div>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteConfig.serviceAreas.map((area) => (
            <div
              key={area.city}
              className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm hover:border-sky-300 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <MapPin className="w-5 h-5 text-sky-600 shrink-0" />
                <h3 className="text-base font-bold text-slate-900">
                  {area.city}, {area.state}
                </h3>
              </div>
              <p className="text-xs text-slate-500 mb-3">
                ZIP Codes: {area.zipCodes.join(", ")}
              </p>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Same-Day Available
                </span>
                <a
                  href="#request-service"
                  className="font-bold text-sky-600 hover:text-sky-700"
                >
                  Book Dispatch →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-xs text-slate-500">
          <span>Don&apos;t see your municipality listed? </span>
          <a href={`tel:${siteConfig.phoneRaw}`} className="text-sky-600 font-semibold hover:underline">
            Call our dispatch desk at {siteConfig.phoneFormatted}
          </a>
          <span> to verify technician availability in your neighborhood.</span>
        </div>
      </div>
    </section>
  );
}
