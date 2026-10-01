import * as React from "react";
import { servicesData } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { Snowflake, Flame, Sparkles, Zap, Wrench, Wind, Phone, ArrowRight, CheckCircle } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Snowflake: <Snowflake className="w-6 h-6 text-sky-600" />,
  Flame: <Flame className="w-6 h-6 text-orange-600" />,
  Sparkles: <Sparkles className="w-6 h-6 text-amber-600" />,
  Zap: <Zap className="w-6 h-6 text-yellow-600" />,
  Wrench: <Wrench className="w-6 h-6 text-emerald-600" />,
  Wind: <Wind className="w-6 h-6 text-teal-600" />,
};

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Comprehensive Residential Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Expert Heating, Cooling &amp; Heat Pump Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            From emergency middle-of-the-night breakdowns to energy-efficient system upgrades, our certified technicians have you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-7 hover:shadow-lg hover:border-sky-300 hover:bg-white transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[service.icon] || <Wrench className="w-6 h-6 text-sky-600" />}
                  </div>
                  {service.isPopular && (
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-orange-100 text-orange-700 px-2.5 py-0.5 rounded-full border border-orange-200">
                      Most Requested
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {service.shortDescription}
                </p>

                <ul className="mt-5 space-y-2 text-xs sm:text-sm text-slate-700">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between gap-3">
                <a
                  href="#request-service"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors group-hover:underline"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1"
                  aria-label={`Call to ask about ${service.title}`}
                >
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>Ask a Tech</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-sky-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">Not sure what kind of service you need?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Call us and speak directly with an experienced technician for honest advice.
            </p>
          </div>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm shadow-md transition-colors"
          >
            <Phone className="w-4 h-4 text-sky-600" />
            <span>Call {siteConfig.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
