import type { TaxiCategory, TaxiRoute } from "../types";

type TaxiRowProps = {
  category: TaxiCategory;
  route: TaxiRoute;
};

export function TaxiRow({ category, route }: TaxiRowProps) {
  return (
    <tr className="border-t border-zinc-100">
      <td className="px-4 py-3 text-sm capitalize">{category.type}</td>
      <td className="px-4 py-3 text-sm">{category.title}</td>
      <td className="px-4 py-3 text-sm">{route.location}</td>
      <td className="px-4 py-3 text-sm text-zinc-600">{route.pickupDrop}</td>
      <td className="px-4 py-3 text-sm font-medium">₹ {route.price.dzire.toLocaleString("en-IN")}</td>
      <td className="px-4 py-3 text-sm font-medium">₹ {route.price.ertiga.toLocaleString("en-IN")}</td>
      <td className="px-4 py-3 text-sm font-medium">₹ {route.price.innova.toLocaleString("en-IN")}</td>
      <td className="px-4 py-3 text-sm text-zinc-600">
        ₹ {route.extraWaiting.pricePerHour.toLocaleString("en-IN")}/hr
      </td>
    </tr>
  );
}
