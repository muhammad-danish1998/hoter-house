import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { ArrowLeft, Shield, Lock, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy policy and terms of demonstration for ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Legal &amp; Privacy
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Privacy Policy &amp; Demonstration Terms
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Last updated: October 2026
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm leading-relaxed">
          <strong>Important Demonstration Notice:</strong> {siteConfig.name} is a sample website created for demonstration and portfolio purposes.
          All contact numbers, addresses, and customer testimonials are simulated examples.
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Shield className="w-5 h-5 text-sky-600" />
            1. Information Collection and Use
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            When you interact with the service request forms on this demonstration site, any submitted information (such as name, phone number, address, and issue descriptions) is used strictly to simulate service intake workflows. We do not sell, rent, or trade your personal information to third parties for marketing purposes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Lock className="w-5 h-5 text-sky-600" />
            2. Data Security &amp; Protection
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            All form transmissions are encrypted using standard SSL/TLS cryptographic protocols in transit. Server endpoints validate and sanitize all incoming payloads to prevent unauthorized access or malicious activity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-sky-600" />
            3. Contact Information
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            For inquiries regarding this demonstration project, please contact{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-sky-600 font-semibold hover:underline">
              {siteConfig.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
