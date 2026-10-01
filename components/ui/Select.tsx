import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, disabled, children, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          ref={ref}
          disabled={disabled}
          className={cn(
            "w-full appearance-none rounded-lg border bg-white px-3.5 py-2.5 pr-10 text-base text-slate-900 transition-colors",
            "min-h-[44px] focus:outline-none focus:ring-2 focus:ring-offset-1",
            error
              ? "border-red-400 focus:border-red-500 focus:ring-red-400/30"
              : "border-slate-300 hover:border-slate-400 focus:border-sky-600 focus:ring-sky-500/20",
            disabled && "bg-slate-100 text-slate-500 cursor-not-allowed",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-500">
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";
