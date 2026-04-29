import type { ReactNode } from "react";

export function TableRow({ children }: { children: ReactNode }) {
  return <tr className="border-t border-zinc-100">{children}</tr>;
}
