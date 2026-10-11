import type { SceneConfig } from "@/components/LawnScene";

export type GalleryItem = {
  id: number;
  title: string;
  location: string;
  category: "Mowing" | "Landscaping" | "Hedges" | "Cleanups";
  scene: SceneConfig;
  tall?: boolean;
};

export const galleryCategories = ["All", "Mowing", "Landscaping", "Hedges", "Cleanups"] as const;

export const heroScene: SceneConfig = { sky: "golden", house: true, palms: [180, 1380, 1500], stripes: true, beds: true, path: true };

export const gallery: GalleryItem[] = [
  { id: 1, title: "Diamond-stripe front lawn", location: "North Port", category: "Mowing", scene: { sky: "day", house: true, palms: [220, 1400], beds: true }, tall: true },
  { id: 2, title: "Canal-front estate mowing", location: "North Port", category: "Mowing", scene: { sky: "morning", water: true, palms: [1250], horizon: 520 } },
  { id: 3, title: "Paver walkway & bed refresh", location: "Venice", category: "Landscaping", scene: { sky: "golden", path: true, beds: true, palms: [150] } },
  { id: 4, title: "Viburnum privacy hedge", location: "Wellen Park", category: "Hedges", scene: { sky: "day", hedge: true, palms: [800], horizon: 600 }, tall: true },
  { id: 5, title: "Post-storm property recovery", location: "Port Charlotte", category: "Cleanups", scene: { sky: "morning", house: true, palms: [1380] } },
  { id: 6, title: "Golden-hour backyard", location: "Englewood", category: "Landscaping", scene: { sky: "dusk", palms: [260, 1300, 1460], water: true } },
  { id: 7, title: "Weekly route — Heron Creek", location: "North Port", category: "Mowing", scene: { sky: "golden", palms: [120, 1480], horizon: 500 } },
  { id: 8, title: "Foundation hedge shaping", location: "Rotonda West", category: "Hedges", scene: { sky: "morning", house: true, hedge: true } },
  { id: 9, title: "Seasonal bed & mulch refresh", location: "Venice", category: "Landscaping", scene: { sky: "day", beds: true, hedge: true, palms: [1200] }, tall: true },
  { id: 10, title: "Overgrown lot cleared", location: "Warm Mineral Springs", category: "Cleanups", scene: { sky: "day", palms: [400, 1100], path: true } },
  { id: 11, title: "Sunset lanai lawn", location: "Punta Gorda", category: "Mowing", scene: { sky: "dusk", house: true, palms: [200] } },
  { id: 12, title: "Clean edges, sharp lines", location: "North Port", category: "Hedges", scene: { sky: "golden", hedge: true, path: true } },
];
