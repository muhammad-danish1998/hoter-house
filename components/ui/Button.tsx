import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "emergency" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading = false, children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-150 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

    const variantStyles = {
      primary: "bg-sky-600 hover:bg-sky-700 text-white shadow-sm shadow-sky-900/10 focus-visible:ring-sky-600",
      emergency:
        "bg-emergency-600 hover:bg-emergency-700 text-white shadow-md shadow-orange-900/20 focus-visible:ring-orange-600 animate-pulse-subtle",
      secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-sm focus-visible:ring-slate-900",
      outline:
        "border-2 border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 focus-visible:ring-slate-600",
      ghost: "hover:bg-slate-100 text-slate-700 hover:text-slate-900 focus-visible:ring-slate-400",
    };

    const sizeStyles = {
      sm: "min-h-[38px] px-3 py-1.5 text-sm gap-1.5",
      md: "min-h-[44px] px-5 py-2.5 text-base gap-2",
      lg: "min-h-[50px] px-6 py-3 text-lg gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-5 w-5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
