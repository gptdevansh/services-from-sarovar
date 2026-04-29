// ZoneBadge — pill badge for Core / Buffer zone type labels.
// Globally used in the safari rate table zone column.

type ZoneType = "core" | "buffer";

type ZoneBadgeProps = {
  zoneType: ZoneType;
};

const config: Record<ZoneType, { label: string; className: string }> = {
  core: {
    label: "🌳 Core Zone",
    className:
      "bg-emerald-100 text-emerald-800 border border-emerald-300",
  },
  buffer: {
    label: "🌿 Buffer Zone",
    className:
      "bg-sky-100 text-sky-800 border border-sky-300",
  },
};

export function ZoneBadge({ zoneType }: ZoneBadgeProps) {
  const { label, className } = config[zoneType];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${className}`}
    >
      {label}
    </span>
  );
}
