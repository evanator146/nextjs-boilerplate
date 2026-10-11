"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { gallery, galleryCategories } from "@/lib/gallery";
import { Icon } from "./Icon";
import { LawnScene } from "./LawnScene";

type Cat = (typeof galleryCategories)[number];

export function Gallery() {
  const [cat, setCat] = useState<Cat>("All");
  const [active, setActive] = useState<number | null>(null);
  const items = useMemo(() => (cat === "All" ? gallery : gallery.filter((g) => g.category === cat)), [cat]);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setActive(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback(
    (d: number) => setActive((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  const current = active !== null ? items[active] : null;

  return (
    <>
      <div role="group" aria-label="Filter gallery" className="flex flex-wrap justify-center gap-2" data-reveal>
        {galleryCategories.map((c) => {
          const count = c === "All" ? gallery.length : gallery.filter((g) => g.category === c).length;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              aria-pressed={cat === c}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                cat === c ? "bg-forest-900 text-white shadow-soft" : "bg-white text-forest-900/70 ring-1 ring-forest-900/10 hover:text-forest-900 hover:ring-moss-500"
              }`}
            >
              {c} <span className={`ml-1 text-xs ${cat === c ? "text-lime-300" : "text-forest-900/40"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <ul className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {items.map((item, i) => (
          <li key={`${cat}-${item.id}`} className="mb-5 break-inside-avoid anim-rise" style={{ animationDelay: `${i * 60}ms` }}>
            <button
              type="button"
              onClick={(e) => {
                lastTrigger.current = e.currentTarget;
                setActive(i);
              }}
              className="group relative block w-full overflow-hidden rounded-3xl bg-forest-900 text-left shadow-soft"
              aria-label={`View ${item.title}, ${item.location}`}
            >
              <div className={`${item.tall ? "aspect-[4/5]" : "aspect-[4/3]"} overflow-hidden`}>
                <LawnScene config={item.scene} seed={item.id * 11} className="h-full w-full transition-transform duration-[1.2s] ease-out-expo group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                <div className="translate-y-1 transition-transform duration-500 ease-out-expo group-hover:translate-y-0">
                  <span className="text-[0.7rem] font-semibold tracking-widest text-lime-300 uppercase">{item.category}</span>
                  <p className="mt-1 font-display text-xl text-white">{item.title}</p>
                  <p className="text-sm text-white/60">{item.location}, FL</p>
                </div>
                <span className="grid h-10 w-10 shrink-0 scale-75 place-items-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur transition-all duration-500 ease-out-expo group-hover:scale-100 group-hover:opacity-100">
                  <Icon name="expand" className="h-4 w-4" />
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-forest-950/90 p-4 backdrop-blur-md [animation:fade-in_.35s_ease-out_both]"
          onClick={close}
        >
          <div className="relative w-full max-w-[min(64rem,calc((100vh-10rem)*1.6))] [animation:rise_.6s_var(--ease-out-expo)_both]" onClick={(e) => e.stopPropagation()}>
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <LawnScene config={current.scene} seed={current.id * 11} className="aspect-[16/10] h-auto w-full" title={current.title} />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-white">
              <div>
                <p className="font-display text-2xl">{current.title}</p>
                <p className="text-sm text-white/60">
                  {current.category} · {current.location}, FL · {active! + 1} / {items.length}
                </p>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => step(-1)} aria-label="Previous image" className="grid h-12 w-12 place-items-center rounded-full bg-white/10 transition hover:bg-white/20">
                  <Icon name="left" />
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next image" className="grid h-12 w-12 place-items-center rounded-full bg-white/10 transition hover:bg-white/20">
                  <Icon name="right" />
                </button>
              </div>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close viewer"
              className="absolute -top-3 -right-3 grid h-11 w-11 place-items-center rounded-full bg-lime-300 text-forest-950 shadow-lift transition hover:rotate-90 sm:-top-5 sm:-right-5"
            >
              <Icon name="close" strokeWidth={2.4} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
