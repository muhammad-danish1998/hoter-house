import * as React from "react";
import { reviewsData } from "@/lib/reviews";
import { Star, CheckCircle, Quote, Info } from "lucide-react";

export function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Real Customer Experiences
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Trusted by Hundreds of Local Homeowners
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            See what homeowners say about our prompt arrival, honest pricing, and quality HVAC repairs.
          </p>

          {/* Transparent Demo Notice Badge */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium">
            <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Sample reviews formatted for website demonstration.</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                    {review.serviceType}
                  </span>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic relative z-10">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-600">
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                    <span>{review.author}</span>
                    {review.verified && (
                      <span className="inline-flex items-center gap-0.5 text-emerald-600 font-semibold text-xs bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                        <CheckCircle className="w-3 h-3" /> Verified Homeowner
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-xs mt-0.5">{review.location}</p>
                </div>
                <span className="text-slate-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
