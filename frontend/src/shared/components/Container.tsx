import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <main className="mx-auto w-full max-w-5xl space-y-6 px-3 py-3 lg:px-6 lg:py-5">{children}</main>;
}
