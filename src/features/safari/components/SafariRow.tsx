import type { SafariRateRow } from "../types";

type SafariRowProps = {
  row: SafariRateRow;
};

export function SafariRow({ row }: SafariRowProps) {
  return (
    <tr className="border-t border-zinc-100">
      <td className="px-4 py-3 text-sm">{row.zone}</td>
      <td className="px-4 py-3 text-sm text-zinc-600">{row.timing.morning}</td>
      <td className="px-4 py-3 text-sm text-zinc-600">{row.timing.afternoon}</td>
      <td className="px-4 py-3 text-sm text-zinc-600">{row.distanceFromRamnagar}</td>
      <td className="px-4 py-3 text-sm font-medium">
        ₹ {row.gstRate.toLocaleString("en-IN")}
      </td>
    </tr>
  );
}
