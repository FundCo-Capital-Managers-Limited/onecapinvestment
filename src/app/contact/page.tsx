import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

const COMMITMENTS = [
  { value: "Institutional", label: "& Press Enquiries Only" },
  { value: "2 Days", label: "Typical Response Time" },
  { value: "Lekki", label: "Lagos — Registered Office" },
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact OneCap Investment Limited in Lekki, Lagos — for institutional partners, co-investors, press, and due-diligence enquiries.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        title="Institutional Enquiries"
        subtitle="This channel is intended for institutional partners, co-investors, press, and due-diligence enquiries — not retail investment solicitations."
      />

      <section className="mx-auto max-w-5xl px-6 py-14 sm:py-20 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-brand mb-2">Registered Office</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            House 10, Heritage Gardens, Bridgegate Estate,
            <br />
            Agungi Road, Lekki-Epe Expressway,
            <br />
            Lekki, Lagos State, Nigeria
          </p>

          <h2 className="text-lg font-semibold text-brand mb-2">General Enquiries</h2>
          <p className="text-text-secondary mb-6">
            <a href="mailto:info@onecapinvestment.ng" className="hover:text-brand">
              info@onecapinvestment.ng
            </a>
          </p>

          <h2 className="text-lg font-semibold text-brand mb-2">Partnerships & Institutional</h2>
          <p className="text-text-secondary">
            <a href="mailto:partnerships@onecapinvestment.ng" className="hover:text-brand">
              partnerships@onecapinvestment.ng
            </a>
          </p>
        </div>

        <div>
          <p className="text-text-secondary mb-6">
            Fill out the form and a member of our team will respond.
          </p>
          <ContactForm />
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <ScrollReveal
          stagger={0.1}
          className="mx-auto max-w-5xl px-6 py-12 sm:py-14 grid gap-8 sm:grid-cols-3 text-center"
        >
          {COMMITMENTS.map((c) => (
            <div key={c.label}>
              <p className="text-2xl sm:text-3xl font-bold text-navy">{c.value}</p>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                {c.label}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </section>
    </>
  );
}
