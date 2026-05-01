import { type ReactNode } from "react";
import { HelpCircle } from "lucide-react";
import { UserToggle } from "@/features/user";
import { Container } from "./Container";
import { Section } from "./Section";
import { TopNav } from "./TopNav";
import { MainFooter } from "./MainFooter";
import FloatingWhatsApp from "./FloatingWhatsApp";
import { CONTACT_PHONE, WHATSAPP_NUMBER, BRAND_NAME } from "../constants/ui.constants";

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
        <div className="py-6 text-center">
          <h1 className="font-brand text-3xl font-black uppercase tracking-widest text-[color:var(--color-primary)] md:text-5xl">
            {BRAND_NAME}
          </h1>
          <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-[color:var(--color-accent)] opacity-50" />
        </div>

        <TopNav />

        {/* Assistance Line Block */}
        <div className="mt-4 mb-2 rounded-lg bg-[color:var(--color-secondary)]/10 px-4 py-3 text-center border border-[color:var(--color-secondary)]/20 shadow-sm flex items-center justify-center gap-3">
          <HelpCircle size={20} className="text-[color:var(--color-primary)]" />
          <p className="text-sm font-medium tracking-wide text-zinc-800 md:text-base">
            <span className="font-bold text-[color:var(--color-primary)]">Need Help?</span> For any queries or assistance, please{" "}
            <a href={`tel:${CONTACT_PHONE}`} className="font-bold text-blue-700 hover:underline">Call</a>
            {" or "}
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="font-bold text-green-600 hover:underline">WhatsApp</a>
            {" us 24/7."}
          </p>
        </div>

        {/* Brand Intro Line */}
        <div className="my-6 text-center max-w-3xl mx-auto">
          <p className="text-zinc-600 italic leading-relaxed">
            &quot;Experience the heart of the jungle with <span className="font-bold text-[color:var(--color-primary)]">Panthera Corbett Safari</span>. 
            We specialize in providing seamless, luxury travel and wildlife experiences tailored to your comfort and curiosity.&quot;
          </p>
        </div>

        <Section title={contentTitle}>{children}</Section>
      </Container>
      <MainFooter />
      <FloatingWhatsApp />
    </>
  );
}
