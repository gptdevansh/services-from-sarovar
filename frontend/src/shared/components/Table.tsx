import type { ReactNode } from "react";

// Table — scrollable wrapper that applies the global .table-wrapper and
// .data-table CSS classes defined in globals.css.
// All styling lives in the global stylesheet — no per-instance overrides needed.

export function Table({ children }: { children: ReactNode }) {
  return (
    <div className="table-wrapper">
      <table className="data-table">{children}</table>
    </div>
  );
}
