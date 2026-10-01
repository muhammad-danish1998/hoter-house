"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { serviceRequestSchema, type ServiceRequestInput } from "@/lib/validation";
import { siteConfig } from "@/lib/site";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { FieldError } from "@/components/ui/FieldError";
import {
  Phone,
  Clock,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

export function RequestService() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [submittedData, setSubmittedData] = React.useState<ServiceRequestInput | null>(null);

  const [apiError, setApiError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ServiceRequestInput>({
    resolver: zodResolver(serviceRequestSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      serviceType: "",
      urgency: "today",
      streetAddress: "",
      zipCode: "",
      issueDescription: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ServiceRequestInput) => {
    setApiError(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Failed to submit service request.");
      }

      setSubmittedData(data);
      setIsSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please call us directly.";
      setApiError(msg);
    }
  };

  const handleReset = () => {
    reset();
    setIsSubmitted(false);
    setSubmittedData(null);
    setApiError(null);
  };

  return (
    <section id="request-service" className="py-16 sm:py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Conversion Reassurance */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800">
              Fast Booking (&lt; 60 Seconds)
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Request Your Service Call Online
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Fill out this quick form, and our local dispatch team will call to confirm your appointment time and technician arrival window.
            </p>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                What happens after you request?
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center shrink-0 text-xs">
                    1
                  </span>
                  <span>We review your problem details and location immediately.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center shrink-0 text-xs">
                    2
                  </span>
                  <span>A dispatcher calls you within 15–30 minutes to confirm your window.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center shrink-0 text-xs">
                    3
                  </span>
                  <span>Our certified technician arrives in a fully-stocked service truck.</span>
                </li>
              </ul>
            </div>

            {/* Need immediate phone dispatch */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-950/40 to-slate-800 border border-orange-700/50 space-y-2">
              <div className="flex items-center gap-2 text-orange-400 font-bold text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>Need immediate emergency dispatch?</span>
              </div>
              <p className="text-xs text-slate-300">
                For active gas smells or extreme weather failures, call directly for instant live dispatch.
              </p>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 text-emerald-400 font-bold text-sm hover:text-emerald-300 pt-1"
              >
                <Phone className="w-4 h-4" /> Call {siteConfig.phoneFormatted}
              </a>
            </div>
          </div>

          {/* Right Column: Form or Success State */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-9 shadow-2xl border border-slate-200">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Service Request Received!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <strong className="text-slate-900">{submittedData?.fullName}</strong>. Our local dispatch team is reviewing your request for{" "}
                      <strong className="text-slate-900">{submittedData?.streetAddress}</strong>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs sm:text-sm text-slate-700 max-w-md mx-auto space-y-1.5">
                    <p className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <CalendarCheck className="w-4 h-4 text-emerald-600" />
                      Next Steps:
                    </p>
                    <p>
                      • We will call <strong className="text-slate-900">{submittedData?.phone}</strong> within 15–30 minutes to confirm your technician&apos;s arrival time.
                    </p>
                    <p>• Have an emergency question before then? Call {siteConfig.phoneFormatted}.</p>
                  </div>

                  <div className="pt-3">
                    <Button variant="outline" size="sm" onClick={handleReset}>
                      Submit Another Service Request
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Book a Service Technician
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      No upfront payment required. Honest diagnosis and quotes.
                    </p>
                  </div>

                  {apiError && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2 animate-fadeIn"
                    >
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Unable to submit online:</p>
                        <p className="mt-0.5">{apiError}</p>
                      </div>
                    </div>
                  )}

                  {/* Honeypot anti-spam (hidden) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_field">Leave empty</label>
                    <input id="hp_field" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Marcus Thompson"
                        error={Boolean(errors.fullName)}
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                        {...register("fullName")}
                      />
                      <FieldError id="fullName-error" error={errors.fullName?.message} />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="e.g. (555) 123-4567"
                        error={Boolean(errors.phone)}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        {...register("phone")}
                      />
                      <FieldError id="phone-error" error={errors.phone?.message} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="For confirmation receipt"
                        error={Boolean(errors.email)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        {...register("email")}
                      />
                      <FieldError id="email-error" error={errors.email?.message} />
                    </div>

                    {/* Service Type */}
                    <div>
                      <label htmlFor="serviceType" className="block text-xs font-bold text-slate-700 mb-1">
                        Service Needed <span className="text-red-500">*</span>
                      </label>
                      <Select
                        id="serviceType"
                        error={Boolean(errors.serviceType)}
                        aria-invalid={Boolean(errors.serviceType)}
                        aria-describedby={errors.serviceType ? "serviceType-error" : undefined}
                        {...register("serviceType")}
                      >
                        <option value="">Select a service category...</option>
                        <option value="ac-repair">Emergency AC Repair (Not Cooling)</option>
                        <option value="furnace-repair">Heating &amp; Furnace Repair (No Heat)</option>
                        <option value="heat-pump">Heat Pump Service / Installation</option>
                        <option value="ac-install">AC Unit Replacement / Installation</option>
                        <option value="maintenance">21-Point Seasonal Tune-Up</option>
                        <option value="indoor-air">Indoor Air Quality &amp; Ductwork</option>
                        <option value="other">Other / General Diagnostic</option>
                      </Select>
                      <FieldError id="serviceType-error" error={errors.serviceType?.message} />
                    </div>
                  </div>

                  {/* Urgency */}
                  <div>
                    <label htmlFor="urgency" className="block text-xs font-bold text-slate-700 mb-1">
                      How quickly do you need assistance? <span className="text-red-500">*</span>
                    </label>
                    <Select
                      id="urgency"
                      error={Boolean(errors.urgency)}
                      aria-invalid={Boolean(errors.urgency)}
                      aria-describedby={errors.urgency ? "urgency-error" : undefined}
                      {...register("urgency")}
                    >
                      <option value="emergency">Emergency — ASAP (Active breakdown/extreme temps)</option>
                      <option value="today">Today — Within regular business hours</option>
                      <option value="flexible">Flexible — Next 2–3 business days</option>
                    </Select>
                    <FieldError id="urgency-error" error={errors.urgency?.message} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Street Address */}
                    <div className="sm:col-span-2">
                      <label htmlFor="streetAddress" className="block text-xs font-bold text-slate-700 mb-1">
                        Service Street Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="streetAddress"
                        type="text"
                        placeholder="e.g. 742 Evergreen Terrace"
                        error={Boolean(errors.streetAddress)}
                        aria-invalid={Boolean(errors.streetAddress)}
                        aria-describedby={errors.streetAddress ? "streetAddress-error" : undefined}
                        {...register("streetAddress")}
                      />
                      <FieldError id="streetAddress-error" error={errors.streetAddress?.message} />
                    </div>

                    {/* Zip Code */}
                    <div>
                      <label htmlFor="zipCode" className="block text-xs font-bold text-slate-700 mb-1">
                        ZIP Code <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="zipCode"
                        type="text"
                        maxLength={5}
                        placeholder="e.g. 80202"
                        error={Boolean(errors.zipCode)}
                        aria-invalid={Boolean(errors.zipCode)}
                        aria-describedby={errors.zipCode ? "zipCode-error" : undefined}
                        {...register("zipCode")}
                      />
                      <FieldError id="zipCode-error" error={errors.zipCode?.message} />
                    </div>
                  </div>

                  {/* Issue Description */}
                  <div>
                    <label htmlFor="issueDescription" className="block text-xs font-bold text-slate-700 mb-1">
                      Briefly describe the issue <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="issueDescription"
                      rows={3}
                      placeholder="e.g. AC unit is humming and blowing lukewarm air since this morning..."
                      error={Boolean(errors.issueDescription)}
                      aria-invalid={Boolean(errors.issueDescription)}
                      aria-describedby={errors.issueDescription ? "issueDescription-error" : undefined}
                      {...register("issueDescription")}
                    />
                    <FieldError id="issueDescription-error" error={errors.issueDescription?.message} />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="emergency"
                      size="lg"
                      isLoading={isSubmitting}
                      className="w-full text-base font-extrabold tracking-wide"
                    >
                      Request Service
                    </Button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    🔒 We respect your privacy. Your information is only used to dispatch your HVAC service technician.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
