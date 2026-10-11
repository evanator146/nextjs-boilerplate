import Link from "next/link";
import { nav, serviceAreas, services, site } from "@/lib/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-white/70">
      <div className="topo absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="container-x relative grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-6 max-w-sm leading-relaxed">
            Premium lawn mowing and landscape maintenance for North Port and the Southwest Florida Gulf Coast.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
            {["Fully Insured*", "Locally Owned*", "Satisfaction Promise*"].map((b) => (
              <li key={b} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-lime-200">
                <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.6} /> {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold tracking-widest text-white uppercase">Company</h2>
          <ul className="mt-5 space-y-3">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition hover:text-lime-300">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold tracking-widest text-white uppercase">Services</h2>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="transition hover:text-lime-300">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold tracking-widest text-white uppercase">Contact</h2>
          <ul className="mt-5 space-y-4">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 transition hover:text-lime-300">
                <Icon name="phone" className="h-4 w-4 text-lime-300" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all transition hover:text-lime-300">
                <Icon name="mail" className="h-4 w-4 shrink-0 text-lime-300" /> {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-lime-300" /> {site.address}
            </li>
            <li className="flex items-start gap-3">
              <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-lime-300" />
              <span>Mon–Fri 7–6 · Sat 8–2</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x relative border-t border-white/10 py-6 text-xs">
        <p className="leading-relaxed text-white/50">
          Service areas: {serviceAreas.join(" · ")}
        </p>
        <div className="mt-4 flex flex-col gap-2 text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. Demo template.</p>
          <p>*Fictional business — names, credentials, reviews and contact details are placeholders.</p>
        </div>
      </div>
    </footer>
  );
}
