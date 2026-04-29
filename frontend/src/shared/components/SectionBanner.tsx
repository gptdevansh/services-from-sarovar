// Colored section banner — category-aware header block used at the top
// of every safari/taxi section. Color scheme maps to CSS custom properties.

import type { ReactNode } from "react";
import { ZoneBadge } from "./ZoneBadge";

type Category = "current" | "prebooking" | "combined" | "local" | "hillStation" | "serviceArea" | "transfer";

const categoryConfig: Record<
  Category,
  { label: string; bg: string; border: string; text: string; labelStyle: string }
> = {
  current: {
    label: "Current Booking",
    bg: "bg-[color:var(--cat-current-bg)]",
    border: "border-[color:var(--cat-current-border)]",
    text: "text-[color:var(--cat-current-accent)]",
    labelStyle: "bg-emerald-700 text-white",
  },
  prebooking: {
    label: "Pre-Booking",
    bg: "bg-[color:var(--cat-prebooking-bg)]",
    border: "border-[color:var(--cat-prebooking-border)]",
    text: "text-[color:var(--cat-prebooking-accent)]",
    labelStyle: "bg-amber-700 text-white",
  },
  combined: {
    label: "Buffer / Combined",
    bg: "bg-[color:var(--cat-combined-bg)]",
    border: "border-[color:var(--cat-combined-border)]",
    text: "text-[color:var(--cat-combined-accent)]",
    labelStyle: "bg-sky-700 text-white",
  },
  local: {
    label: "Local Sightseeing",
    bg: "bg-[color:var(--cat-current-bg)]",
    border: "border-[color:var(--cat-current-border)]",
    text: "text-[color:var(--cat-current-accent)]",
    labelStyle: "bg-[color:var(--color-primary)] text-white",
  },
  hillStation: {
    label: "Hill Station",
    bg: "bg-[color:var(--cat-combined-bg)]",
    border: "border-[color:var(--cat-combined-border)]",
    text: "text-[color:var(--cat-combined-accent)]",
    labelStyle: "bg-[color:var(--color-secondary)] text-white",
  },
  serviceArea: {
    label: "Taxi Service Areas",
    bg: "bg-amber-50",
    border: "border-amber-300",
    text: "text-amber-900",
    labelStyle: "bg-[color:var(--color-accent)] text-zinc-900",
  },
  transfer: {
    label: "Transfer",
    bg: "bg-zinc-50",
    border: "border-zinc-200",
    text: "text-zinc-900",
    labelStyle: "bg-zinc-700 text-white",
  },
};

type SectionBannerProps = {
  category: Category;
  title: string;
  subtitle?: string;
  /** The "Includes: Jeep, Guide, Permit…" line */
  inclusionText?: string;
  /** Optional zone type badge to show next to the title */
  zoneType?: "core" | "buffer";
  children?: ReactNode;
};

export function SectionBanner({
  category,
  title,
  subtitle,
  inclusionText,
  zoneType,
  children,
}: SectionBannerProps) {
  const cfg = categoryConfig[category];

  return (
    <div
      className={`rounded-xl border px-4 py-3 ${cfg.bg} ${cfg.border} ${cfg.text}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-base font-extrabold uppercase tracking-tight text-[color:var(--color-primary)] md:text-lg">{title}</h3>
        {zoneType && <ZoneBadge zoneType={zoneType} />}
      </div>

      {subtitle && (
        <p className="mt-1 text-sm font-semibold opacity-80">{subtitle}</p>
      )}

      {inclusionText && (
        <p className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-current/20 bg-white/60 px-2.5 py-1 text-xs font-medium">
          {inclusionText}
        </p>
      )}

      {children}
    </div>
  );
}
