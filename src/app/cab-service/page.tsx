import { TaxiTable } from "@/features/taxi";
import { taxiData } from "@/data-source";
import { ServicePageShell, CallHeader } from "@/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corbett Cab & Taxi Services",
  description: "Luxury cab and taxi services in Jim Corbett National Park. Pick-up and drop-off from Ramnagar and various resort locations.",
};

export default function CabServicePage() {
  return (
    <ServicePageShell contentTitle="Cab Service Rates">
      <CallHeader
        title={taxiData.header.title}
        callText={taxiData.header.callText}
      />
      <TaxiTable />
    </ServicePageShell>
  );
}
