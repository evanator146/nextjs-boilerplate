import Link from "next/link";
import type { Service } from "@/lib/site";
import { Icon } from "./Icon";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      data-reveal
      style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as React.CSSProperties}
      className="card group relative flex h-full flex-col overflow-hidden p-7 transition-all duration-500 ease-out-expo hover:-translate-y-2 hover:border-moss-500/30 hover:shadow-lift sm:p-8"
    >
      <span aria-hidden="true" className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime-200/0 transition-all duration-700 ease-out-expo group-hover:scale-150 group-hover:bg-lime-200/40" />
      <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-forest-900 text-lime-300 transition-all duration-500 ease-out-expo group-hover:rotate-[-6deg] group-hover:bg-moss-500 group-hover:text-white">
        <Icon name={service.icon} className="icon-wiggle h-7 w-7" />
      </span>
      <h3 className="relative mt-6 font-display text-2xl text-forest-900">{service.title}</h3>
      <p className="relative mt-3 flex-1 leading-relaxed text-ink/65">{service.short}</p>
      <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-moss-600">
        Learn more
        <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </span>
    </Link>
  );
}
