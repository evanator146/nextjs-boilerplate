import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/Decor";
import { Icon } from "@/components/Icon";
import { LawnScene, type SceneConfig } from "@/components/LawnScene";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lawn Care Services",
  description: "Lawn mowing, edging, weed control, yard cleanup, hedge trimming and seasonal maintenance in North Port, FL (fictional demo business).",
};

const scenes: SceneConfig[] = [
  { sky: "day", palms: [200, 1420], horizon: 520 },
  { sky: "morning", path: true, beds: true },
  { sky: "golden", beds: true, palms: [1300] },
  { sky: "day", house: true, palms: [1400] },
  { sky: "morning", hedge: true, palms: [800] },
  { sky: "dusk", water: true, palms: [220, 1350] },
];

const steps = [
  { n: "01", title: "Request a quote", text: "Tell us about your property online or by phone." },
  { n: "02", title: "Free walkthrough", text: "We measure, check your turf and recommend a plan." },
  { n: "03", title: "Pick your schedule", text: "Weekly, bi-weekly or one-time — your call." },
  { n: "04", title: "Enjoy your weekends", text: "We handle the yard and send a photo after each visit." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Our services"
        title={<>Complete lawn care, <em className="text-lime-300">done right.</em></>}
        text="Six core services, one dependable crew. Mix and match a plan that fits your North Port property and your budget."
        scene={{ sky: "day", palms: [150, 1450], beds: true, path: true }}
      />

      <nav aria-label="Service list" className="container-x -mt-2 py-10">
        <ul className="flex flex-wrap justify-center gap-2" data-reveal>
          {services.map((s) => (
            <li key={s.slug}>
              <a href={`#${s.slug}`} className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-forest-900 ring-1 ring-forest-900/10 transition hover:-translate-y-0.5 hover:ring-moss-500">
                <Icon name={s.icon} className="h-4 w-4 text-moss-500" /> {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container-x space-y-24 pb-24 sm:space-y-32">
        {services.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <section key={s.slug} id={s.slug} aria-labelledby={`${s.slug}-title`} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <div data-reveal={flip ? "right" : "left"} className={`group relative ${flip ? "lg:order-2" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
                  <LawnScene config={scenes[i]} seed={i * 17 + 3} className="h-full w-full transition-transform duration-[1.4s] ease-out-expo group-hover:scale-110" />
                </div>
                <span className="absolute -bottom-6 left-6 grid h-20 w-20 place-items-center rounded-3xl bg-forest-900 text-lime-300 shadow-lift transition-transform duration-500 ease-out-expo group-hover:-rotate-6 group-hover:scale-105">
                  <Icon name={s.icon} className="h-9 w-9" />
                </span>
              </div>
              <div data-reveal>
                <p className="eyebrow">Service {String(i + 1).padStart(2, "0")}</p>
                <h2 id={`${s.slug}-title`} className="heading-lg mt-4 text-forest-900">{s.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-ink/70">{s.description}</p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-ink/80">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime-200 text-forest-900">
                        <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link href={`/contact?service=${s.slug}`} className="btn btn-dark">
                    Quote {s.title.toLowerCase()} <Icon name="arrow" className="btn-arrow h-4 w-4" />
                  </Link>
                  <span className="inline-flex items-center gap-2 text-sm text-ink/60">
                    <Icon name="clock" className="h-4 w-4 text-moss-500" /> {s.frequency}
                  </span>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="topo bg-sand/60 py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="How it works" title="Getting started takes minutes." />
          <ol className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((st, i) => (
              <li key={st.n} data-reveal style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties} className="card group p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <span className="font-display text-5xl text-lime-300 transition-colors group-hover:text-moss-500 [-webkit-text-stroke:1px_var(--color-moss-600)]">{st.n}</span>
                <h3 className="mt-4 font-display text-xl text-forest-900">{st.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/65">{st.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection title="Not sure which service you need?" text="Book a free walkthrough and we'll recommend a plan that fits your yard, your schedule and your budget." />
    </>
  );
}
