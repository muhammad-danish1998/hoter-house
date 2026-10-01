import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

export interface FieldErrorProps {
  id?: string;
  error?: string;
  className?: string;
}

export function FieldError({ id, error, className }: FieldErrorProps) {
  if (!error) return null;

  return (
    <p
      id={id}
      role="alert"
      className={cn("flex items-center gap-1.5 text-xs font-medium text-red-600 mt-1.5 animate-fadeIn", className)}
    >
      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
      <span>{error}</span>
    </p>
  );
}
