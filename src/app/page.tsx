import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import JoinCta from "@/components/JoinCta";
import HeroField from "@/components/HeroField";

const PILLARS = [
  {
    tag: "01",
    title: "Alternative Assets",
    detail:
      "Proprietary capital deployed into high-impact alternative asset strategies with strong risk-adjusted return profiles.",
  },
  {
    tag: "02",
    title: "Sustainable Infrastructure",
    detail:
      "Long-horizon exposure to sustainable infrastructure assets underpinning Nigeria's growth.",
  },
  {
    tag: "03",
    title: "Transition Energy",
    detail:
      "Strategic capital directed at the clean and transition energy value chain across Sub-Saharan Africa.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white min-h-[80vh] flex items-center">
        <Image
          src="/images/lagos-skyline-dusk.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-45"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-navy/40" />
        <HeroField />
        <ScrollReveal className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand mb-5">
            OneCap Investment Limited
          </p>
          <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Strategic Capital.
            <br />
            <span className="text-brand">Sustainable Impact.</span>
          </h1>
          <p className="mt-7 max-w-xl text-white/80 text-base sm:text-lg leading-relaxed">
            OneCap Investment Limited is a private investment and holding
            company deploying proprietary capital into high-impact
            alternative assets, sustainable infrastructure, and transition
            energy across Sub-Saharan Africa.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="inline-block rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 hover:bg-brand-dark hover:-translate-y-0.5 transition-all"
            >
              View Our Portfolio
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
            Who We Are
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
            A Private Investment Firm Built for Long-Term Value Creation
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            OneCap is a private, closely held investment and holding company
            incorporated in Nigeria. We deploy proprietary capital directly
            and through majority-owned operating platforms.
          </p>
        </ScrollReveal>

        <ScrollReveal stagger={0.15} className="grid gap-6 sm:grid-cols-3">
          {PILLARS.map((p) => (
            <div
              key={p.tag}
              className="rounded-3xl border border-border bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand mb-4">
                {p.tag}
              </span>
              <h3 className="text-lg font-bold text-navy mb-3">{p.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {p.detail}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </section>

      <section className="bg-navy text-white">
        <ScrollReveal className="mx-auto max-w-6xl px-6 py-16 sm:py-24 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
              Principal Holding
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
              Major Institutional Shareholder in FundCo Capital Managers Limited
            </h2>
            <p className="text-white/75 leading-relaxed mb-6">
              OneCap holds a majority equity stake in FundCo Capital Managers
              Limited, a Nigerian investment manager whose mandate is aligned
              with green and infrastructure-focused strategies. FundCo
              structures and manages regulated investment vehicles, including
              a Clean Energy Fund and a Housing Solution Fund, and oversees a
              portfolio of operating companies across electric mobility,
              biogas and waste-to-energy, agriculture, and mini-grid power.
            </p>
            <Link
              href="/portfolio"
              className="inline-block rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-all"
            >
              See the Full Portfolio
            </Link>
          </div>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-10 flex flex-col items-center justify-center text-center">
            <Image
              src="/images/portfolio/fundco-logo.png"
              alt="FundCo Capital Managers Limited"
              width={480}
              height={200}
              className="h-16 w-auto mb-6 object-contain"
            />
            <p className="text-3xl sm:text-4xl font-bold text-brand mb-2">Majority Stake</p>
            <p className="text-sm text-white/60 uppercase tracking-wide">
              Equity Held by OneCap
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24 text-center">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
            Corporate Profile
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-6">
            Incorporated and Governed Under Nigerian Law
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            OneCap Investment Limited (RC 1767172) is a private company
            limited by shares, incorporated on 8 March 2021 under the
            Companies and Allied Matters Act, 2020.
          </p>
          <Link
            href="/about-us"
            className="inline-block rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
          >
            About Us & Mandate
          </Link>
        </ScrollReveal>
      </section>

      <JoinCta />
    </>
  );
}
