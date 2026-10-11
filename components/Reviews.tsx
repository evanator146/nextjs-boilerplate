"use client";

import { useEffect, useState } from "react";
import { reviews } from "@/lib/site";
import { Icon } from "./Icon";

export function Reviews() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = reviews.length;

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 6500);
    return () => clearInterval(t);
  }, [paused, n]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <ul className="flex transition-transform duration-700 ease-out-expo" style={{ transform: `translateX(-${i * 100}%)` }} aria-live="polite">
          {reviews.map((r, idx) => (
            <li key={r.name} className="w-full shrink-0 px-1" aria-hidden={idx !== i}>
              <figure className="glass mx-auto max-w-3xl rounded-[2rem] p-8 text-center sm:p-12">
                <Icon name="quote" className="mx-auto h-10 w-10 text-lime-300" />
                <div className="mt-6 flex justify-center gap-1 text-sun" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                      <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-xl leading-relaxed text-white sm:text-2xl">“{r.text}”</blockquote>
                <figcaption className="mt-8 flex items-center justify-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-lime-300 to-moss-500 text-sm font-bold text-forest-950">
                    {r.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                  </span>
                  <span className="text-left">
                    <span className="block font-semibold text-white">{r.name}</span>
                    <span className="block text-sm text-white/55">{r.area} · Sample review</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex items-center justify-center gap-4">
        <button type="button" onClick={() => setI((i - 1 + n) % n)} aria-label="Previous review" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white/10">
          <Icon name="left" />
        </button>
        <div className="flex gap-2">
          {reviews.map((r, idx) => (
            <button
              key={r.name}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Show review ${idx + 1}`}
              aria-current={idx === i}
              className={`h-2 rounded-full transition-all duration-500 ${idx === i ? "w-8 bg-lime-300" : "w-2 bg-white/30 hover:bg-white/60"}`}
            />
          ))}
        </div>
        <button type="button" onClick={() => setI((i + 1) % n)} aria-label="Next review" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white/10">
          <Icon name="right" />
        </button>
      </div>
    </div>
  );
}
