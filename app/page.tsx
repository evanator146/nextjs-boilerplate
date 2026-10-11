import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTASection } from "@/components/CTASection";
import { Counter } from "@/components/Counter";
import { Blob, FloatingLeaves, SectionHeading } from "@/components/Decor";
import { Icon } from "@/components/Icon";
import { LawnScene } from "@/components/LawnScene";
import { Reviews } from "@/components/Reviews";
import { ServiceAreaBanner } from "@/components/ServiceAreaBanner";
import { ServiceCard } from "@/components/ServiceCard";
import { heroScene } from "@/lib/gallery";
import { reasons, services, site, stats } from "@/lib/site";

const trust = [
  { icon: "shield" as const, label: "Licensed & Insured*" },
  { icon: "award" as const, label: "Top-Rated Locally*" },
  { icon: "truck" as const, label: "Same Crew Weekly" },
  { icon: "spark" as const, label: "Satisfaction Promise*" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-forest-950 pb-24 pt-40">
        <div data-parallax="0.3" className="absolute inset-0 -z-20 will-change-transform">
          <LawnScene config={heroScene} seed={21} className="anim-kenburns h-[125%] w-full" title="Illustration of a freshly striped Florida lawn in front of a home at golden hour" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/90 via-forest-950/60 to-forest-950/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950/80 via-transparent to-forest-950/40" />
        <div className="grain absolute inset-0 -z-10 opacity-[0.08] mix-blend-overlay" />
        <FloatingLeaves count={7} />

        <div className="container-x grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="anim-rise inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-md" style={{ animationDelay: "100ms" }}>
              <span className="anim-pulse-ring h-2 w-2 rounded-full bg-lime-300" />
              North Port, FL · Now booking weekly routes
            </p>
            <h1 className="mt-7 font-display text-[3.3rem] leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[5.5rem]">
              <span className="anim-rise block" style={{ animationDelay: "200ms" }}>Your Lawn.</span>
              <span className="anim-rise block italic text-lime-300" style={{ animationDelay: "340ms" }}>Our Craft.</span>
            </h1>
            <p className="anim-rise mt-7 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl" style={{ animationDelay: "480ms" }}>
              Meticulous mowing, razor-sharp edging and year-round lawn care for homes across North Port and the Gulf Coast — built for Florida grass and Florida weather.
            </p>
            <div className="anim-rise mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "620ms" }}>
              <Link href="/contact" className="btn btn-primary !px-8 !py-4 text-base">
                Get a Free Quote <Icon name="arrow" className="btn-arrow h-4 w-4" />
              </Link>
              <Link href="/services" className="btn btn-ghost !px-8 !py-4 text-base">
                View Our Services
              </Link>
            </div>
          </div>

          <div className="anim-rise hidden sm:block lg:col-span-5 lg:justify-self-end" style={{ animationDelay: "800ms" }}>
            <div className="glass anim-float w-full max-w-sm rounded-3xl p-6 text-white shadow-lift [animation-duration:9s]">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["DR", "MT", "LP", "CM"].map((i, k) => (
                    <span key={i} className="grid h-9 w-9 place-items-center rounded-full border-2 border-forest-900 text-[0.65rem] font-bold text-forest-950" style={{ background: ["#b6e889", "#4cbb78", "#d6f5b6", "#f2b84b"][k] }}>
                      {i}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="flex text-sun" aria-hidden="true">{"★★★★★"}</div>
                  <p className="text-sm text-white/75">4.9 average · sample reviews</p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="font-display text-3xl text-lime-300">48h</p>
                  <p className="mt-1 text-white/70">Typical first visit</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="font-display text-3xl text-lime-300">$0</p>
                  <p className="mt-1 text-white/70">Quotes &amp; estimates</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#intro" aria-label="Scroll to introduction" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
          <span className="flex h-11 w-7 justify-center rounded-full border-2 border-white/40 pt-2">
            <span className="anim-scroll-dot h-2 w-1 rounded-full bg-white" />
          </span>
        </a>
      </section>

      <ServiceAreaBanner />

      {/* INTRO */}
      <section id="intro" className="relative overflow-hidden py-24 sm:py-32">
        <Blob className="-left-40 top-10 h-96 w-96 bg-lime-200/50" />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div data-reveal="left" className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift sm:aspect-[5/5]">
              <LawnScene config={{ sky: "morning", palms: [260, 1350], beds: true, hedge: true }} seed={5} className="h-full w-full transition-transform duration-[1.5s] ease-out-expo hover:scale-105" title="Illustration of a manicured lawn with palms and flower beds" />
            </div>
            <div className="card absolute -bottom-8 -right-2 w-56 p-5 sm:-right-8">
              <p className="font-display text-4xl text-forest-900">
                <Counter value={12} suffix="+" />
              </p>
              <p className="mt-1 text-sm text-ink/60">years caring for Gulf Coast lawns</p>
            </div>
            <div className="anim-float absolute -left-4 -top-6 grid h-20 w-20 place-items-center rounded-3xl bg-lime-300 text-forest-950 shadow-lift">
              <Icon name="sun" className="h-9 w-9" />
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Rooted in North Port"
              title={<>Lawn care that treats your yard <em className="text-moss-600">like our own.</em></>}
              text="Myakka Green started with a single mower and a simple idea: Florida homeowners deserve a lawn crew that shows up on time, sweats the details and actually understands Southwest Florida grass."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2" data-reveal style={{ "--reveal-delay": "150ms" } as React.CSSProperties}>
              {["St. Augustine, Bahia & Zoysia experts", "Weekly or bi-weekly routes", "Photo update after every visit", "Hurricane-season cleanups"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink/80">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime-200 text-forest-900">
                    <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3" data-reveal style={{ "--reveal-delay": "250ms" } as React.CSSProperties}>
              <Link href="/about" className="btn btn-dark">Our story <Icon name="arrow" className="btn-arrow h-4 w-4" /></Link>
              <a href={site.phoneHref} className="btn btn-outline"><Icon name="phone" className="h-4 w-4" /> {site.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES + STATS */}
      <section aria-label="Company highlights" className="container-x">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} data-reveal style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties} className="card p-6 text-center sm:p-8">
              <p className="font-display text-4xl text-forest-900 sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </p>
              <p className="mt-2 text-sm text-ink/60">{s.label}</p>
            </div>
          ))}
        </div>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold text-forest-900/70" data-reveal>
          {trust.map((t) => (
            <li key={t.label} className="flex items-center gap-2">
              <Icon name={t.icon} className="h-5 w-5 text-moss-500" /> {t.label}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-center text-xs text-ink/40">*Sample credentials for a fictional business.</p>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="topo relative py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we do"
            title="Everything your yard needs, handled by one crew."
            text="From weekly mowing to post-storm cleanups, every service is tuned for North Port's sandy soil, summer rains and year-round growing season."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center" data-reveal>
            <Link href="/services" className="btn btn-outline">View all services <Icon name="arrow" className="btn-arrow h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative isolate overflow-hidden bg-forest-900 py-24 text-white sm:py-32">
        <div className="topo absolute inset-0 -z-10 opacity-40" />
        <Blob className="-right-32 -top-32 -z-10 h-[28rem] w-[28rem] bg-moss-500/30" />
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              light
              align="left"
              eyebrow="Why choose us"
              title="The difference is in the details."
              text="Anyone can cut grass. We build routines, communicate clearly, and finish every visit like it's being photographed — because it is."
            />
            <div className="mt-10" data-reveal>
              <Link href="/contact" className="btn btn-primary">Get your free quote <Icon name="arrow" className="btn-arrow h-4 w-4" /></Link>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-lime-300/40 hover:bg-white/[0.08]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-lime-300/15 text-lime-300 transition-colors group-hover:bg-lime-300 group-hover:text-forest-950">
                  <Icon name={r.icon} className="icon-wiggle h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-white/65">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Before & after" title="See the transformation." text="Drag the slider to compare a typical overgrown North Port yard with the result after our first visit." />
          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div data-reveal="left">
              <BeforeAfter label="Front yard restoration" seed={8} before={{ sky: "day", house: true, palms: [1380], hedge: true, beds: true }} after={{ sky: "day", house: true, palms: [1380], hedge: true, beds: true }} />
            </div>
            <div data-reveal="right">
              <BeforeAfter label="Backyard & walkway cleanup" seed={14} before={{ sky: "golden", path: true, palms: [200, 1400], debris: true }} after={{ sky: "golden", path: true, palms: [200, 1400] }} />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative isolate overflow-hidden bg-forest-950 py-24 sm:py-32">
        <div data-parallax="0.15" className="absolute inset-0 -z-20">
          <LawnScene config={{ sky: "dusk", palms: [100, 1300, 1500], water: true }} seed={33} className="h-[130%] w-full opacity-50" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-950 via-forest-950/70 to-forest-950" />
        <div className="container-x">
          <SectionHeading light eyebrow="Kind words" title="Neighbors who love their lawns." text="Sample testimonials for this demo template — written to show how real reviews would appear." />
          <div className="mt-14" data-reveal="zoom">
            <Reviews />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
