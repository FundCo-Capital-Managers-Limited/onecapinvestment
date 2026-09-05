import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/onecap-logo-full-on-navy.png"
            alt="OneCap Investment Limited"
            width={1535}
            height={480}
            className="h-10 w-auto"
          />
          <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
            A Nigerian private investment and holding company deploying
            proprietary capital into high-impact alternative assets, real
            estate infrastructure, and transition energy across Sub-Saharan
            Africa.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-brand">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link href="/governance" className="hover:text-white transition-colors">Governance</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-brand">
            Corporate
          </h3>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li>RC 1767172</li>
            <li>Private company limited by shares</li>
            <li>Incorporated 8 March 2021</li>
            <li>Federal Republic of Nigeria</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-brand">
            Registered Office
          </h3>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li>House 10, Heritage Gardens,</li>
            <li>Bridgegate Estate, Agungi Road,</li>
            <li>Lekki-Epe Expressway, Lekki,</li>
            <li>Lagos State, Nigeria</li>
            <li className="pt-1">
              <a href="mailto:info@onecapinvestment.ng" className="hover:text-white transition-colors">
                info@onecapinvestment.ng
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} OneCap Investment Limited. All Rights Reserved.
      </div>
    </footer>
  );
}
