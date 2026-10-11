export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-moss-400 to-forest-700 shadow-[inset_0_1px_0_rgb(255_255_255/0.35),0_8px_20px_-8px_rgb(35_119_74/0.8)]">
        <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
          <path d="M16 27V15" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M16 16c0-5.5 3.8-9 10-9 0 6.2-3.8 9-10 9Z" fill="#d6f5b6" />
          <path d="M16 19c0-4.2-3-7.2-9-7.2 0 5 3 7.2 9 7.2Z" fill="#fff" />
          <path d="M6 27h20" stroke="#fff" strokeOpacity=".6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block font-display text-xl tracking-tight ${light ? "text-white" : "text-forest-900"}`}>Myakka Green</span>
        <span className={`mt-1 block text-[0.62rem] font-semibold tracking-[0.25em] uppercase ${light ? "text-lime-300" : "text-moss-600"}`}>
          Lawn &amp; Landscape
        </span>
      </span>
    </span>
  );
}
