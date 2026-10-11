import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "./Icon";
import { LawnScene } from "./LawnScene";
import { FloatingLeaves } from "./Decor";

export function CTASection({
  title = "Ready for the best lawn on the block?",
  text = "Tell us about your property and we'll put together a free, no-pressure quote — usually within one business day.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-x py-20 sm:py-28">
      <div data-reveal="zoom" className="relative isolate overflow-hidden rounded-[2rem] bg-forest-900 px-6 py-16 sm:px-14 sm:py-20 lg:rounded-[2.5rem]">
        <div data-parallax="0.12" className="absolute inset-0 -z-20">
          <LawnScene config={{ sky: "dusk", palms: [120, 1450], horizon: 620 }} seed={42} className="h-[130%] w-full opacity-60" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950 via-forest-950/85 to-forest-950/30" />
        <FloatingLeaves count={5} />
        <div className="relative max-w-2xl">
          <p className="eyebrow !text-lime-300">Free estimates</p>
          <h2 className="heading-lg mt-4 text-white">{title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">{text}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn btn-primary">
              Get a Free Quote <Icon name="arrow" className="btn-arrow h-4 w-4" />
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              <Icon name="phone" className="h-4 w-4" /> {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
