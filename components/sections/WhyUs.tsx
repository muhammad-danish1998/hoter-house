import * as React from "react";
import { siteConfig } from "@/lib/site";
import { ShieldCheck, Clock, BadgeCheck, ThumbsUp, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-sky-600" />,
  Clock: <Clock className="w-8 h-8 text-emerald-600" />,
  BadgeCheck: <BadgeCheck className="w-8 h-8 text-blue-600" />,
  ThumbsUp: <ThumbsUp className="w-8 h-8 text-amber-600" />,
};

export function WhyUs() {
  return (
    <section id="why-us" className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Points */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-700 bg-sky-100/80 px-3 py-1 rounded-full">
              The Summit Air Standard
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Local Homeowners Trust Summit Air
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              When your heating or cooling fails, the last thing you need is guesswork, pushy sales reps, or hidden surprise fees. We believe in honest diagnostics, skilled craftsmanship, and lasting fixes.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 font-bold" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Upfront Quotes Before Work Begins</h3>
                  <p className="text-xs text-slate-600">You know the exact cost upfront. No surprise add-ons once the technician starts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 font-bold" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Trucks Stocked for Same-Day Repair</h3>
                  <p className="text-xs text-slate-600">Our vans carry the most common OEM replacement parts so 90% of repairs finish in a single visit.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 font-bold" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Respect For Your Home</h3>
                  <p className="text-xs text-slate-600">Technicians wear shoe covers, lay protective work mats, and leave your mechanical area spotless.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a href="#request-service">
                <Button variant="primary" size="md">
                  Book a Service Call
                </Button>
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="text-sm font-bold text-slate-700 hover:text-sky-600 flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call {siteConfig.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Feature Badges Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {siteConfig.badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                    {iconMap[badge.icon] || <ShieldCheck className="w-8 h-8 text-sky-600" />}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {badge.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
