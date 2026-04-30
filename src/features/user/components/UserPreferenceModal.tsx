"use client";

import { useEffect } from "react";
import type { UserType } from "../types";

type UserPreferenceModalProps = {
  open: boolean;
  userType: UserType;
  onChange: (nextUserType: UserType) => void;
  onClose: () => void;
};

const preferenceOptions: Array<{ label: string; value: UserType; emoji: string }> = [
  { label: "Indian", value: "indian", emoji: "🇮🇳" },
  { label: "Foreigner", value: "foreigner", emoji: "✈️" },
];

export function UserPreferenceModal({ open, userType, onChange, onClose }: UserPreferenceModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 px-4 py-6 backdrop-blur-[2px]"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="user-preference-title"
        className="relative w-full max-w-[19rem] rounded-2xl bg-[color:var(--color-surface)] p-5 text-center shadow-[0_24px_70px_rgba(15,61,46,0.24)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close preference popup"
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-xl leading-none text-[color:var(--color-muted)] transition-colors hover:bg-black/5 hover:text-[color:var(--color-primary)]"
        >
          ×
        </button>

        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
          Quick preference
        </p>
        <h2
          id="user-preference-title"
          className="text-lg font-extrabold tracking-tight text-[color:var(--color-primary)]"
        >
          Indian or Foreigner?
        </h2>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">
          Choose the rate type you want to view.
        </p>

        <div className="mt-5 inline-flex w-full rounded-full bg-[color:var(--color-primary)] p-1 shadow-sm">
          {preferenceOptions.map((option) => {
            const active = userType === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  onClose();
                }}
                className={`flex-1 rounded-full px-3 py-2 text-sm font-bold transition-all duration-200 ${
                  active
                    ? "bg-[color:var(--color-accent)] text-zinc-900 shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {option.emoji} {option.label}
              </button>
            );
          })}
        </div>

        <p className="mt-3 text-xs text-[color:var(--color-muted)]">
          Default is Indian. You can change it anytime from the top toggle.
        </p>
      </div>
    </div>
  );
}
