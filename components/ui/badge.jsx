import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border border-transparent bg-[var(--surface-2)] text-[var(--text)]",
        secondary:
          "border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]",
        accent:
          "border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] font-bold",
        success:
          "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-medium",
        outline:
          "border border-[var(--border)] text-[var(--muted)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

