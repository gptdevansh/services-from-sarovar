// PriceCell — renders TWO separate <td> columns: base rate | GST rate.
// Must be placed inside a <tr> that has matching two-column headers.

import { Fragment } from "react";

type PriceCellProps = {
  /** The base price before GST */
  base: number;
  /** The final price after 5% GST — shown prominently */
  final: number;
};

function formatINR(value: number) {
  return `₹\u00a0${value.toLocaleString("en-IN")}`;
}

export function PriceCell({ base, final }: PriceCellProps) {
  return (
    <Fragment>
      {/* Column 1: Base Rate */}
      <td className="px-4 py-3 align-middle text-sm font-semibold text-zinc-700">
        {formatINR(base)}
      </td>
      {/* Column 2: Rate + 5% GST — highlighted as the amount to pay */}
      <td className="px-4 py-3 align-middle">
        <span className="price-final">{formatINR(final)}</span>
      </td>
    </Fragment>
  );
}

// Single price (no GST breakdown) — used in pickup fares and taxi tables
type SinglePriceCellProps = { amount: number };

export function SinglePriceCell({ amount }: SinglePriceCellProps) {
  return (
    <td className="px-4 py-3 align-middle">
      <span className="price-final">{formatINR(amount)}</span>
    </td>
  );
}
