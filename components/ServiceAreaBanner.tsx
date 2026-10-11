import { serviceAreas } from "@/lib/site";

export function ServiceAreaBanner() {
  const items = [...serviceAreas, ...serviceAreas];
  return (
    <section aria-label="Service areas" className="relative overflow-hidden border-y border-forest-900/10 bg-forest-900 py-5 text-white">
      <div className="container-x flex flex-col items-center gap-4 md:flex-row">
        <p className="flex shrink-0 items-center gap-3 text-sm font-semibold">
          <span className="anim-pulse-ring h-2.5 w-2.5 rounded-full bg-lime-300" />
          Serving North Port &amp; surrounding areas
        </p>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <ul className="anim-marquee flex w-max gap-10 whitespace-nowrap text-sm text-white/65">
            {items.map((a, i) => (
              <li key={i} className="flex items-center gap-10" aria-hidden={i >= serviceAreas.length}>
                {a}
                <span className="text-lime-300/70">✦</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
