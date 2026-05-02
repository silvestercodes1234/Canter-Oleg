import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full resize-none border border-ink-600 bg-ink-800 px-4 py-3 text-sm text-parchment-100 placeholder:text-parchment-500 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 focus-visible:border-gold-500 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
