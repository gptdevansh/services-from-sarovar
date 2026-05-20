import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <main className="mx-auto w-full max-w-6xl space-y-7 px-3 py-4 lg:px-6 lg:py-6">{children}</main>;
}
