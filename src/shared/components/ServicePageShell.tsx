import type { ReactNode } from "react";
import { UserToggle } from "@/features/user";
import { Container } from "./Container";
import { Section } from "./Section";
import { TopNav } from "./TopNav";
import FloatingWhatsApp from "./FloatingWhatsApp";
import { CONTACT_PHONE, WHATSAPP_NUMBER } from "../constants/ui.constants";

type ServicePageShellProps = {
  contentTitle: string;
  children: ReactNode;
};

export function ServicePageShell({ contentTitle, children }: ServicePageShellProps) {
  return (
    <>
      {/* Sticky top bar — sticks to top on scroll, toggle right-aligned */}
      <div className="sticky top-0 z-50 flex justify-end bg-[color:var(--color-bg)]/90 px-3 py-2 backdrop-blur-sm">
        <UserToggle />
      </div>

      <Container>
        <TopNav />

        {/* Assistance Line Block */}
        <div className="mt-4 mb-2 rounded-lg bg-[color:var(--color-secondary)]/10 px-4 py-3 text-center border border-[color:var(--color-secondary)]/20 shadow-sm">
          <p className="text-sm font-medium tracking-wide text-zinc-800 md:text-base">
            <span className="font-bold text-[color:var(--color-primary)]">Need Help?</span> For any queries or assistance, please{" "}
            <a href={`tel:${CONTACT_PHONE}`} className="font-bold text-blue-700 hover:underline">Call</a>
            {" or "}
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="font-bold text-green-600 hover:underline">WhatsApp</a>
            {" us 24/7."}
          </p>
        </div>

        <Section title={contentTitle}>{children}</Section>
      </Container>
      <FloatingWhatsApp />
    </>
  );
}
