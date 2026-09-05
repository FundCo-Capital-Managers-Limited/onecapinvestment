import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

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
          <p className="text-text-secondary mb-6">
            <a href="mailto:partnerships@onecapinvestment.ng" className="hover:text-brand">
              partnerships@onecapinvestment.ng
            </a>
          </p>

          <h2 className="text-lg font-semibold text-brand mb-2">Principal Holding</h2>
          <p className="text-text-secondary">
            FundCo Capital Managers Limited (92.8% equity stake)
          </p>
        </div>

        <div>
          <p className="text-text-secondary mb-6">
            Fill out the form and a member of our team will respond.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
