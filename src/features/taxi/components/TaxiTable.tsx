"use client";

import { taxiData } from "@/data-source";
import {
  Table,
  SinglePriceCell,
  SectionBanner,
  PolicyFooter,
} from "@/shared";
import type { TaxiCategory } from "../types";

/** Categories where a "Duration" column is not relevant */
const NO_DURATION_TYPES: TaxiCategory["type"][] = ["railway", "airport", "serviceArea"];

export function TaxiTable() {
  return (
    <div className="space-y-8">
      {taxiData.categories.map((category) => {
        const showDuration = !NO_DURATION_TYPES.includes(category.type);

        return (
          <section key={`${category.type}-${category.title}`} className="space-y-3">
            {/* Section header */}
            <SectionBanner
              category={category.type}
              title={category.title}
              subtitle={category.subtitle}
            />

            {/* Route Rate Table */}
            <Table>
              <thead>
                <tr>
                  <th>Destination</th>
                  <th>Trip Type</th>
                  {showDuration && <th>Duration</th>}
                  <th>Dzire / Etios</th>
                  <th>Ertiga</th>
                  <th>Innova / Crysta</th>
                  <th>Extra Waiting</th>
                </tr>
              </thead>
              <tbody>
                {category.routes.map((route, routeIdx) => (
                  <tr
                    key={`${category.type}-${routeIdx}-${route.location}`}
                  >
                    <td className="px-4 py-3 font-bold text-[color:var(--color-primary)]">
                      {route.location}
                    </td>
                    <td className="px-4 py-3 text-sm text-[color:var(--color-muted)]">
                      {route.pickupDrop}
                    </td>
                    {showDuration && (
                      <td className="px-4 py-3 text-sm font-medium text-zinc-700">
                        {route.duration ?? "—"}
                      </td>
                    )}
                    <SinglePriceCell amount={route.price.dzire} />
                    <SinglePriceCell amount={route.price.ertiga} />
                    <SinglePriceCell amount={route.price.innova} />
                    <td className="px-4 py-3 text-xs text-[color:var(--color-muted)]">
                      ₹&nbsp;{route.extraWaiting.pricePerHour.toLocaleString("en-IN")} / hr
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Covering Points (local sightseeing only) */}
            {category.routes.some((r) => (r.coveringPoints?.length ?? 0) > 0) && (
              <div className="space-y-2 rounded-xl border border-[color:var(--cat-current-border)] bg-[color:var(--cat-current-bg)] p-4">
                <h4 className="text-sm font-bold uppercase tracking-wide text-[color:var(--cat-current-accent)]">
                  🗺️ Covering Points
                </h4>
                <div className="space-y-2">
                  {category.routes
                    .filter((r) => (r.coveringPoints?.length ?? 0) > 0)
                    .map((route, i) => (
                      <div
                        key={`${category.type}-${i}-points`}
                        className="rounded-lg bg-white p-3 shadow-sm"
                      >
                        <p className="mb-1.5 text-sm font-semibold text-[color:var(--color-text)]">
                          {route.duration
                            ? `${route.location} (${route.duration})`
                            : route.location}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {route.coveringPoints?.map((point) => (
                            <span
                              key={point}
                              className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 border border-emerald-200"
                            >
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </section>
        );
      })}

      {/* ── Policy footer ── */}
      <PolicyFooter
        title="Important Booking Terms"
        lines={taxiData.policies}
      />
    </div>
  );
}
