"use client";

import { useState } from "react";
import { LawnScene, type SceneConfig } from "./LawnScene";

export function BeforeAfter({
  before,
  after,
  label,
  seed = 3,
}: {
  before: SceneConfig;
  after: SceneConfig;
  label: string;
  seed?: number;
}) {
  const [pos, setPos] = useState(50);

  return (
    <figure className="group relative">
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-forest-900 shadow-lift select-none">
        <LawnScene config={after} seed={seed} className="absolute inset-0 h-full w-full" title={`${label} — after`} />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <LawnScene config={{ ...before, overgrown: true, stripes: false }} seed={seed} className="h-full w-full" title={`${label} — before`} />
        </div>

        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-forest-950/70 px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase backdrop-blur">Before</span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold tracking-wider text-forest-950 uppercase">After</span>

        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
          <div className="absolute inset-y-0 -left-px w-0.5 bg-white shadow-[0_0_20px_rgb(0_0_0/0.4)]" />
          <div className="absolute top-1/2 -left-6 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-white/25 text-white shadow-lift backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="m9 6-5 6 5 6M15 6l5 6-5 6" />
            </svg>
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Compare before and after: ${label}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-4 flex items-center justify-between text-sm text-ink/60">
        <span className="font-semibold text-forest-900">{label}</span>
        <span>Drag to compare · Illustration</span>
      </figcaption>
    </figure>
  );
}
