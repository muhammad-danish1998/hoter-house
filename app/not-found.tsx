import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Phone, ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
        <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-black text-slate-900">Page Not Found</h1>
          <p className="text-sm text-slate-600">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
          <p className="font-semibold text-slate-800 mb-1">Need immediate HVAC assistance?</p>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-1.5 font-bold text-sky-600 hover:text-sky-700 text-sm"
          >
            <Phone className="w-4 h-4" /> Call {siteConfig.phoneFormatted}
          </a>
        </div>

        <div className="pt-2">
          <Link href="/">
            <Button variant="primary" size="md" className="w-full">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
