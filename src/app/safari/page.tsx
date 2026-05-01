import { SafariTable } from "@/features/safari";
import { ServicePageShell } from "@/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corbett Safari Rates & Booking",
  description: "Check the latest Jeep and Canter safari rates for Jim Corbett National Park. Easy booking for Bijrani, Jhirna, Dhikala, and more.",
};

export default function SafariPage() {
  return (
    <ServicePageShell contentTitle="Corbett Safari Rate">
        <SafariTable />
    </ServicePageShell>
  );
}
