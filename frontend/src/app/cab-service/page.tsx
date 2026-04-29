import { TaxiTable } from "@/features/taxi";
import { taxiData } from "@/data-source";
import { ServicePageShell, CallHeader } from "@/shared";

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
