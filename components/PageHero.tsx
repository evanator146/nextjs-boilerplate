import Link from "next/link";
import { LawnScene, type SceneConfig } from "./LawnScene";
import { FloatingLeaves } from "./Decor";

export function PageHero({
  eyebrow,
  title,
  text,
  scene,
  crumb,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  scene: SceneConfig;
  crumb: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-950 pb-20 pt-44 sm:pb-28 sm:pt-52">
      <div data-parallax="0.25" className="absolute inset-0 -z-20 will-change-transform">
        <LawnScene config={scene} seed={crumb.length * 13} className="anim-kenburns h-[120%] w-full" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-950/80 via-forest-950/55 to-forest-950/90" />
      <div className="grain absolute inset-0 -z-10 opacity-[0.07] mix-blend-overlay" />
      <FloatingLeaves count={4} />
      <div className="container-x">
        <nav aria-label="Breadcrumb" className="anim-rise text-sm text-white/60">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="transition hover:text-lime-300">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-white">{crumb}</li>
          </ol>
        </nav>
        <p className="eyebrow anim-rise mt-8 !text-lime-300" style={{ animationDelay: "80ms" }}>{eyebrow}</p>
        <h1 className="heading-xl anim-rise mt-4 max-w-3xl text-white" style={{ animationDelay: "160ms" }}>{title}</h1>
        <p className="anim-rise mt-6 max-w-2xl text-lg leading-relaxed text-white/75" style={{ animationDelay: "260ms" }}>{text}</p>
      </div>
      <svg aria-hidden="true" viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute inset-x-0 -bottom-px h-10 w-full text-cream sm:h-16">
        <path d="M0 80V40C240 0 480 0 720 30s480 50 720 10v40Z" fill="currentColor" />
      </svg>
    </section>
  );
}
