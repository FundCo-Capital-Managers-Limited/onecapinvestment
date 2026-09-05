import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "Corporate facts, governance principles, and the investment mandate of OneCap Investment Limited (RC 1767172), a Nigerian private investment and holding company.",
};

const FACTS = [
  { label: "Legal Name", value: "OneCap Investment Limited" },
  { label: "RC Number", value: "RC 1767172" },
  { label: "Date of Incorporation", value: "8 March 2021" },
  { label: "Legal Form", value: "Private company limited by shares" },
  {
    label: "Registered Address",
    value:
      "House 10, Heritage Gardens, Bridgegate Estate, Agungi Road, Lekki-Epe Expressway, Lekki, Lagos State, Nigeria",
  },
  { label: "Jurisdiction", value: "Federal Republic of Nigeria" },
  {
    label: "Principal Holding",
    value: "FundCo Capital Managers Limited (92.8% equity stake)",
  },
];

export default function Governance() {
  return (
    <>
      <PageHero
        breadcrumb="Governance"
        title="Governance"
        subtitle="Corporate facts, governance principles, and investment mandate for OneCap Investment Limited."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <ScrollReveal className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
            Corporate Facts
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
            Registered Under the Companies and Allied Matters Act, 2020
          </h2>
        </ScrollReveal>

        <ScrollReveal className="rounded-3xl border border-border bg-white overflow-hidden divide-y divide-border">
          {FACTS.map((f) => (
            <div
              key={f.label}
              className="grid gap-1 sm:grid-cols-[220px_1fr] sm:gap-6 px-6 py-5 sm:px-8"
            >
              <span className="text-sm font-semibold text-brand uppercase tracking-wide">
                {f.label}
              </span>
              <span className="text-text-secondary leading-relaxed">
                {f.value}
              </span>
            </div>
          ))}
        </ScrollReveal>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <ScrollReveal className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
              Governance & Compliance
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
              Board Oversight and Regulatory Alignment
            </h2>
          </ScrollReveal>

          <ScrollReveal stagger={0.15} className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl bg-white border border-border p-7">
              <h3 className="text-lg font-bold text-navy mb-3">Board Oversight</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                OneCap operates under board-level oversight consistent with
                its status as a private company limited by shares under
                Nigerian company law, with governance responsibilities
                exercised in line with the Companies and Allied Matters Act,
                2020 (CAMA 2020).
              </p>
            </div>
            <div className="rounded-3xl bg-white border border-border p-7">
              <h3 className="text-lg font-bold text-navy mb-3">CAMA 2020 Compliance</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                As a company incorporated in the Federal Republic of Nigeria,
                OneCap maintains its statutory filings, registers, and
                corporate records in accordance with CAMA 2020 and the
                requirements of the Corporate Affairs Commission.
              </p>
            </div>
            <div className="rounded-3xl bg-white border border-border p-7">
              <h3 className="text-lg font-bold text-navy mb-3">Aligned Mandate</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Through its majority stake in FundCo Capital Managers
                Limited, OneCap's capital allocation is aligned with FundCo's
                green and infrastructure-focused investment mandate,
                including the Clean Energy Fund and Housing Solution Fund
                that FundCo manages.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
            Investment Mandate
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-6">
            Deploying Proprietary Capital for Long-Term Value
          </h2>
          <div className="space-y-5 text-text-secondary leading-relaxed">
            <p>
              OneCap Investment Limited exists to deploy proprietary capital
              into high-impact alternative assets, real estate
              infrastructure, and transition energy opportunities across
              Sub-Saharan Africa. As a private holding vehicle, OneCap does
              not raise capital from the public or market retail investment
              products &mdash; its balance sheet is deployed on a principal
              basis, primarily through majority-owned operating platforms.
            </p>
            <p>
              The firm's principal investment is its 92.8% equity stake in
              FundCo Capital Managers Limited, a Nigerian investment manager
              whose mandate centres on green and infrastructure-linked
              strategies. FundCo structures and manages regulated investment
              vehicles &mdash; including a Clean Energy Fund and a Housing
              Solution Fund &mdash; and oversees an operating portfolio
              spanning electric mobility, biogas and waste-to-energy,
              agriculture, and mini-grid power.
            </p>
            <p>
              OneCap's investment horizon is long-term. The firm prioritises
              control and majority positions in platforms with durable,
              infrastructure-like cash flows over short-dated trading
              strategies, reflecting a conviction that sustained value
              creation in West Africa's real economy requires patient,
              committed capital.
            </p>
            <p className="text-sm text-text-secondary/80">
              OneCap Investment Limited is a private holding company and is
              not itself a regulated fund manager. Regulatory status
              referenced on this site in relation to fund management and
              investment products belongs to FundCo Capital Managers
              Limited.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <JoinCta />
    </>
  );
}
