import type { Metadata } from "next";
import { Blob } from "@/components/Decor";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description: "Request a free lawn care quote in North Port, FL. Demo contact form for a fictional business — no data is sent.",
};

const faqs = [
  { q: "How soon can you start?", a: "Most new routes begin within a week, and one-time cleanups can often be scheduled within 48 hours." },
  { q: "Do I need a contract?", a: "No long-term contracts. Seasonal plans are month-to-month and you can pause while you're away." },
  { q: "What if it rains on my day?", a: "We shift to the next dry window and text you the updated time — no skipped weeks." },
];

export default function ContactPage() {
  const cards = [
    { icon: "phone" as const, label: "Call or text", value: site.phone, href: site.phoneHref },
    { icon: "mail" as const, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: "pin" as const, label: "Based in", value: site.address },
  ];
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Free quote"
        title={<>Let&apos;s get your lawn <em className="text-lime-300">looking its best.</em></>}
        text="Share a few details about your property and we'll follow up with a free, no-obligation quote. All contact details on this demo site are placeholders."
        scene={{ sky: "day", house: true, palms: [220, 1380], beds: true }}
      />

      <section className="relative overflow-hidden py-16 sm:py-24">
        <Blob className="-left-40 top-40 h-96 w-96 bg-lime-200/50" />
        <div className="container-x relative grid gap-10 lg:grid-cols-12">
          <div className="card p-6 sm:p-10 lg:col-span-7" data-reveal>
            <h2 className="font-display text-3xl text-forest-900">Request a free quote</h2>
            <p className="mt-2 text-ink/60">Fields marked <span className="text-moss-600">*</span> are required.</p>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-5" aria-label="Contact information">
            <div className="relative overflow-hidden rounded-3xl bg-forest-900 p-8 text-white" data-reveal="right">
              <div className="topo absolute inset-0 opacity-40" aria-hidden="true" />
              <div className="relative">
                <span className="rounded-full bg-lime-300/15 px-3 py-1 text-[0.7rem] font-bold tracking-widest text-lime-300 uppercase">Placeholder info</span>
                <ul className="mt-6 space-y-5">
                  {cards.map((c) => {
                    const inner = (
                      <>
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-lime-300 transition-colors group-hover:bg-lime-300 group-hover:text-forest-950">
                          <Icon name={c.icon} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm text-white/55">{c.label}</span>
                          <span className="block break-words font-semibold">{c.value}</span>
                        </span>
                      </>
                    );
                    return (
                      <li key={c.label}>
                        {c.href ? (
                          <a href={c.href} className="group flex items-center gap-4">{inner}</a>
                        ) : (
                          <div className="group flex items-center gap-4">{inner}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="flex items-center gap-2 text-sm font-semibold"><Icon name="clock" className="h-4 w-4 text-lime-300" /> Office hours</p>
                  <dl className="mt-3 space-y-1.5 text-sm">
                    {site.hours.map((h) => (
                      <div key={h.days} className="flex justify-between text-white/70">
                        <dt>{h.days}</dt>
                        <dd className="text-white">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            <div className="card p-8" data-reveal="right" style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
              <h2 className="font-display text-xl text-forest-900">Areas we serve</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {serviceAreas.map((a) => (
                  <li key={a} className="rounded-full bg-cream px-3 py-1.5 text-sm text-forest-900 ring-1 ring-forest-900/5">{a}</li>
                ))}
              </ul>
            </div>

            <div className="card divide-y divide-forest-900/5 px-8 py-2" data-reveal="right" style={{ "--reveal-delay": "200ms" } as React.CSSProperties}>
              {faqs.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-forest-900 [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cream text-moss-600 transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-ink/65">{f.a}</p>
                </details>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
