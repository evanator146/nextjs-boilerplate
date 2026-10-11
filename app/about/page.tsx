import type { Metadata } from "next";
import { Counter } from "@/components/Counter";
import { CTASection } from "@/components/CTASection";
import { Blob, SectionHeading } from "@/components/Decor";
import { Icon } from "@/components/Icon";
import { LawnScene } from "@/components/LawnScene";
import { PageHero } from "@/components/PageHero";
import { serviceAreas, team, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "The (fictional) story of Myakka Green — a locally focused lawn care crew serving North Port, Florida and nearby communities.",
};

const timeline = [
  { year: "2014", text: "One mower, one pickup, twelve neighbors in North Port." },
  { year: "2017", text: "First full-time crew and expansion into Port Charlotte." },
  { year: "2020", text: "Launched weed control and seasonal maintenance plans." },
  { year: "2024", text: "Now serving the Wellen Park, Venice and Englewood areas." },
];

const avatarGradients = ["from-lime-300 to-moss-500", "from-moss-400 to-forest-700", "from-sun to-moss-500", "from-lime-200 to-moss-600"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About us"
        title={<>Local roots. <em className="text-lime-300">Lasting lawns.</em></>}
        text="We're a North Port crew building the lawn care company we always wished existed — dependable, detail-obsessed and genuinely local."
        scene={{ sky: "morning", house: true, palms: [180, 1420], hedge: true }}
      />

      {/* STORY */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <Blob className="-right-40 top-20 h-96 w-96 bg-lime-200/50" />
        <div className="container-x relative grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading align="left" eyebrow="Our story" title="It started on a single street off Price Boulevard." />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/70" data-reveal>
              <p>
                Our founder grew up mowing lawns between the canals and cul-de-sacs of North Port. He noticed the same thing every summer:
                crews that skipped weeks when the rains came, scalped St. Augustine in July, and left clippings all over the driveway.
              </p>
              <p>
                Myakka Green — named for the river that shapes this corner of Southwest Florida — was built to be the opposite. Consistent
                routes. The right blade height. Clean edges and a clean driveway, every single time.
              </p>
              <p className="text-sm text-ink/45">This story is fictional and written for this demo template.</p>
            </div>
          </div>
          <div data-reveal="right">
            <ol className="relative space-y-8 border-l-2 border-dashed border-moss-500/30 pl-8">
              {timeline.map((t) => (
                <li key={t.year} className="relative">
                  <span className="absolute -left-[2.6rem] top-1 grid h-5 w-5 place-items-center rounded-full bg-lime-300 ring-4 ring-cream">
                    <span className="h-2 w-2 rounded-full bg-forest-900" />
                  </span>
                  <p className="font-display text-3xl text-moss-600">{t.year}</p>
                  <p className="mt-1 text-lg text-ink/75">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* LOCAL FOCUS */}
      <section className="relative isolate overflow-hidden bg-forest-900 py-24 text-white sm:py-32">
        <div className="topo absolute inset-0 -z-10 opacity-40" />
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div data-reveal="left" className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
              <LawnScene config={{ sky: "golden", water: true, palms: [240, 1300] }} seed={77} className="h-full w-full" title="Illustration of a canal-front North Port backyard" />
            </div>
            <div className="glass absolute -bottom-6 right-4 rounded-2xl px-5 py-4 sm:right-8">
              <p className="font-display text-3xl text-lime-300"><Counter value={8} /></p>
              <p className="text-sm text-white/75">communities served</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              light
              align="left"
              eyebrow="Proudly North Port"
              title="We know these lawns — because we live here."
              text="Sandy soil, afternoon thunderstorms, canal-front setbacks, HOA standards and the occasional hurricane. Our routes are built around the realities of Southwest Florida yards."
            />
            <ul className="mt-8 flex flex-wrap gap-2" data-reveal>
              {serviceAreas.map((a) => (
                <li key={a} className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-sm">
                  <Icon name="pin" className="h-3.5 w-3.5 text-lime-300" /> {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Meet the team" title="The people behind the stripes." text="Illustrative team profiles for this template — swap in real photos and bios before launch." />
          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <li key={m.name} data-reveal style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties} className="card group overflow-hidden transition-all duration-500 ease-out-expo hover:-translate-y-2 hover:shadow-lift">
                <div className={`relative grid aspect-[4/3] place-items-center overflow-hidden bg-gradient-to-br ${avatarGradients[i]}`}>
                  <div className="topo absolute inset-0 opacity-70 transition-transform duration-1000 group-hover:scale-125" />
                  <span className="relative grid h-24 w-24 place-items-center rounded-full bg-white/90 font-display text-3xl text-forest-900 shadow-lift transition-transform duration-500 ease-out-expo group-hover:scale-110">
                    {m.initials}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-forest-900">{m.name}</h3>
                  <p className="text-sm font-semibold text-moss-600">{m.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{m.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* VALUES */}
      <section className="topo bg-sand/60 py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Our values" title="What we stand on." />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} data-reveal style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties} className="card group p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-lime-200 text-forest-900 transition-colors group-hover:bg-forest-900 group-hover:text-lime-300">
                  <Icon name={v.icon} className="icon-wiggle h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl text-forest-900">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/65">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Let's meet your lawn." />
    </>
  );
}
