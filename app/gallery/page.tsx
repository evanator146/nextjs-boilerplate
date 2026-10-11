import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Gallery } from "@/components/Gallery";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Project Gallery",
  description: "A gallery of illustrated lawn, hedge and landscape projects for the Myakka Green demo website in North Port, FL.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        eyebrow="Our work"
        title={<>Lawns worth <em className="text-lime-300">slowing down for.</em></>}
        text="A look at the stripes, edges and transformations we deliver across North Port and the Gulf Coast. Tap any project to view it larger."
        scene={{ sky: "golden", palms: [200, 1400], stripes: true, horizon: 520 }}
      />
      <section className="container-x py-20 sm:py-24">
        <Gallery />
        <p className="mt-10 text-center text-sm text-ink/45">Gallery images are illustrations for this demo template — replace with real project photography.</p>
      </section>
      <CTASection title="Want your lawn in our gallery?" />
    </>
  );
}
