const ITEMS = [
  "RC 1767172",
  "Private Investment & Holding Company",
  "92.8% Equity Stake in FundCo Capital Managers Limited",
  "Aligned with the Clean Energy Fund & Housing Solution Fund",
  "Lekki, Lagos, Nigeria",
];

export default function TickerBar() {
  const track = [...ITEMS, ...ITEMS];
  return (
    <div className="relative z-50 overflow-hidden bg-dark text-white/70 border-b border-white/10">
      <div className="ticker-track flex w-max items-center gap-10 whitespace-nowrap py-2 text-[11px] font-semibold uppercase tracking-[0.15em]">
        {[...track, ...track].map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span>{item}</span>
            <span className="text-brand">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
