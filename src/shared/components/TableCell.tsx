import type { ReactNode } from "react";

type TableCellProps = {
  children: ReactNode;
  className?: string;
};

export function TableCell({ children, className = "" }: TableCellProps) {
  return <td className={`px-4 py-3 text-sm ${className}`}>{children}</td>;
}
