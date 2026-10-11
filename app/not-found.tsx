import Link from "next/link";
import { LawnScene } from "@/components/LawnScene";

export default function NotFound() {
  return (
    <section className="relative isolate grid min-h-[100svh] place-items-center overflow-hidden bg-forest-950 px-4 pt-24 text-center">
      <LawnScene config={{ sky: "dusk", overgrown: true, stripes: false, palms: [200, 1400] }} seed={404} className="absolute inset-0 -z-20 h-full w-full opacity-60" />
      <div className="absolute inset-0 -z-10 bg-forest-950/60" />
      <div>
        <p className="font-display text-8xl text-lime-300">404</p>
        <h1 className="mt-4 font-display text-4xl text-white">This patch hasn&apos;t been mowed yet.</h1>
        <p className="mt-4 text-white/70">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" className="btn btn-primary mt-8">Back to home</Link>
      </div>
    </section>
  );
}
