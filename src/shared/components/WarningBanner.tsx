// Global WarningBanner — unmissable red alert strip.
// Used for "No refund / No exchange" notices anywhere on the site.

type WarningBannerProps = {
  message: string;
};

export function WarningBanner({ message }: WarningBannerProps) {
  return (
    <div
      role="alert"
      className="flex items-start gap-2 rounded-xl border border-red-700 bg-red-600 px-4 py-3 text-white"
    >
      <span className="mt-0.5 shrink-0 text-base" aria-hidden="true">
        ⚠️
      </span>
      <p className="text-sm font-semibold uppercase tracking-wide leading-snug">
        {message}
      </p>
    </div>
  );
}
