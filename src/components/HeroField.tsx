"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const SHAPES = [
  { top: "8%", left: "6%", size: 120, rotate: 0, opacity: 0.14, dur: 9 },
  { top: "62%", left: "12%", size: 70, rotate: 12, opacity: 0.1, dur: 7 },
  { top: "18%", left: "82%", size: 160, rotate: -8, opacity: 0.12, dur: 11 },
  { top: "72%", left: "78%", size: 90, rotate: 20, opacity: 0.16, dur: 8 },
  { top: "40%", left: "48%", size: 220, rotate: 0, opacity: 0.06, dur: 13 },
];

export default function HeroField() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const shapes = Array.from(el.children) as HTMLElement[];
    const ctx = gsap.context(() => {
      shapes.forEach((shape, i) => {
        const cfg = SHAPES[i];
        gsap.to(shape, {
          y: i % 2 === 0 ? 22 : -22,
          x: i % 2 === 0 ? -14 : 14,
          rotate: cfg.rotate + (i % 2 === 0 ? 10 : -10),
          duration: cfg.dur,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div ref={ref} className="absolute inset-0">
        {SHAPES.map((s, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              opacity: s.opacity,
              transform: `rotate(${s.rotate}deg)`,
            }}
          >
            <div className="h-full w-full rotate-45 border-2 border-brand" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/10 via-transparent to-navy" />
    </div>
  );
}
