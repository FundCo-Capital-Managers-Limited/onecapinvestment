import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "OneCap Investment Limited's principal holding is a 92.8% equity stake in FundCo Capital Managers Limited, a Nigerian investment manager with holdings across electric mobility, biogas, agriculture, and mini-grid power.",
};

const HOLDINGS = [
  {
    name: "E-Mobilite",
    logo: "/images/portfolio/e-mobilite-logo.png",
    sector: "Electric mobility financing",
    detail:
      "Owns, finances, and operates electric bicycles, tricycles, and 4-wheel EVs across Nigeria, leased to operators and drivers under structured agreements.",
  },
  {
    name: "Regenloop",
    logo: "/images/portfolio/regenloop-logo.png",
    sector: "Biogas & waste-to-energy",
    detail:
      "Converts organic and agricultural waste streams into biogas and clean energy outputs, supporting circular-economy infrastructure.",
  },
  {
    name: "Agronomie",
    logo: "/images/portfolio/agronomie-logo.png",
    sector: "Agriculture",
    detail:
      "Agricultural production and value-chain financing platform supporting food security and rural economic activity.",
  },
  {
    name: "Electrify Microgrid",
    logo: "/images/portfolio/electrify-microgrid-logo.svg",
    sector: "Mini-grid power",
    detail:
      "Develops and operates mini-grid power infrastructure, extending reliable electricity access to underserved communities.",
  },
];

export default function Portfolio() {
  return (
    <>
      <PageHero
        breadcrumb="Portfolio"
        title="Our Holdings"
        subtitle="OneCap's capital is deployed principally through FundCo Capital Managers Limited, an investment manager whose operating platforms span energy, mobility, and agriculture."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <ScrollReveal className="rounded-3xl bg-navy text-white p-8 sm:p-12 grid gap-10 lg:grid-cols-[auto_1fr] items-center">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 flex items-center justify-center">
            <Image
              src="/images/portfolio/fundco-logo.png"
              alt="FundCo Capital Managers Limited"
              width={480}
              height={200}
              className="h-20 w-auto object-contain"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
              92.8% Equity Stake &mdash; Principal Holding
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              FundCo Capital Managers Limited
            </h2>
            <p className="text-white/75 leading-relaxed mb-4">
              FundCo is a Nigerian investment manager with a mandate aligned
              to green and infrastructure-focused strategies. It structures
              and manages regulated investment vehicles &mdash; including a
              Clean Energy Fund and a Housing Solution Fund &mdash; and
              oversees a portfolio of operating companies across electric
              mobility, biogas and waste-to-energy, agriculture, and mini-grid
              power.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              FundCo holds its own regulatory posture as an investment
              manager aligned with the Nigerian SEC framework. OneCap, as
              majority shareholder, does not itself hold fund-management
              regulatory status &mdash; that status belongs to FundCo.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
              Indirect Holdings
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
              FundCo's Portfolio Companies
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Through its stake in FundCo, OneCap holds an indirect interest
              in the following operating platforms.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger={0.15} className="grid gap-6 sm:grid-cols-2">
            {HOLDINGS.map((h) => (
              <div
                key={h.name}
                className="rounded-3xl border border-border bg-white p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-14 mb-5 flex items-center">
                  <Image
                    src={h.logo}
                    alt={h.name}
                    width={200}
                    height={80}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand mb-3 self-start">
                  {h.sector}
                </span>
                <h3 className="text-lg font-bold text-navy mb-2">{h.name}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {h.detail}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24 text-center">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
            Investment Approach
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6">
            Long-Term Capital, Not Short-Term Trading
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            OneCap's investment horizon is structured around control and
            majority positions in platforms with durable, infrastructure-like
            cash flows &mdash; rather than short-dated trading strategies.
            Read more about our governance and investment mandate.
          </p>
          <Link
            href="/governance"
            className="inline-block rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
          >
            Governance & Mandate
          </Link>
        </ScrollReveal>
      </section>

      <JoinCta />
    </>
  );
}
