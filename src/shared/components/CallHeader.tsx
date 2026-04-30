// CallHeader — the branded park name / phone number header block.
// Used at the top of service pages (Safari, Cab Service).

type CallHeaderProps = {
  title: string;
  tagline?: string;
  callText: string;
};

export function CallHeader({ title, tagline, callText }: CallHeaderProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-[color:var(--color-primary)]">
      {/* Park / Service Title */}
      <div className="bg-[color:var(--color-primary)] px-4 py-3 text-center">
        <h1 className="text-lg font-extrabold uppercase tracking-tight text-white md:text-xl">
          {title}
        </h1>
      </div>

      {/* Tagline */}
      {tagline && (
        <div className="bg-[color:var(--color-secondary)] px-4 py-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/90">
            {tagline}
          </p>
        </div>
      )}

      {/* Call strip */}
      <div className="bg-[color:var(--color-accent)] px-4 py-3 text-center">
        <a
          href={`tel:${callText.replace(/[^0-9+]/g, "")}`}
          className="text-lg font-extrabold tracking-tight text-zinc-900 hover:underline md:text-2xl"
        >
          📞 {callText}
        </a>
      </div>
    </div>
  );
}
