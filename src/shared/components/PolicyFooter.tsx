// Global PolicyFooter — the "Important Terms" block at the bottom of every
// rate page. Red-themed, hard to miss.

type PolicyFooterProps = {
  title?: string;
  lines: string[];
};

export function PolicyFooter({
  title = "Important Terms & Policies",
  lines,
}: PolicyFooterProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-red-300">
      <div className="flex items-center gap-2 bg-red-700 px-4 py-3">
        <span className="text-lg" aria-hidden="true">⚠️</span>
        <h4 className="text-sm font-bold uppercase tracking-widest text-white">
          {title}
        </h4>
      </div>
      <ul className="space-y-2 bg-red-50 px-4 py-4">
        {lines.map((line) => (
          <li key={line} className="flex items-start gap-2 text-sm font-medium text-red-900">
            <span className="mt-0.5 shrink-0 text-red-500" aria-hidden="true">•</span>
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
