import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        disabled={disabled}
        ref={ref}
        className={cn(
          "w-full rounded-lg border bg-white px-3.5 py-2.5 text-base text-slate-900 placeholder:text-slate-400 transition-colors",
          "min-h-[44px] focus:outline-none focus:ring-2 focus:ring-offset-1",
          error
            ? "border-red-400 focus:border-red-500 focus:ring-red-400/30"
            : "border-slate-300 hover:border-slate-400 focus:border-sky-600 focus:ring-sky-500/20",
          disabled && "bg-slate-100 text-slate-500 cursor-not-allowed",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
