import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle, PaintSplatter } from "./PaintDecorations";

import charcoal1 from "@/assets/artwork-charcoal-1.jpg";
import charcoal2 from "@/assets/artwork-charcoal-2.jpg";
import graphite1 from "@/assets/artwork-graphite-1.jpg";
import graphite2 from "@/assets/artwork-graphite-2.jpg";
import colored1 from "@/assets/artwork-colored-1.jpg";
import colored2 from "@/assets/artwork-colored-2.jpg";
import marker1 from "@/assets/artwork-marker-1.jpg";

interface Artwork {
  src: string;
  title: string;
  year: string;
  medium: string;
  category: string;
  description: string;
}

const artworks: Artwork[] = [
  { src: charcoal1, title: "Wisdom in Lines", year: "2025", medium: "Charcoal", category: "Portraits", description: "A study of age, experience, and character rendered in deep charcoal strokes." },
  { src: graphite1, title: "Silent Gaze", year: "2025", medium: "Graphite", category: "Portraits", description: "Graphite portrait capturing quiet strength and contemplation." },
  { src: colored1, title: "Divine Melody", year: "2024", medium: "Colored Pencil", category: "Religious Artworks", description: "Lord Krishna rendered in vibrant colored pencils, celebrating devotion." },
  { src: charcoal2, title: "Innocence", year: "2024", medium: "Charcoal", category: "Portraits", description: "The joy and purity of childhood captured in charcoal." },
  { src: marker1, title: "Wild Spirit", year: "2025", medium: "Marker", category: "Traditional Art", description: "Bold marker artwork bringing a tiger's fierce beauty to life." },
  { src: graphite2, title: "Teardrops", year: "2024", medium: "Graphite", category: "Portraits", description: "An emotive graphite study of eyes filled with vulnerability." },
  { src: colored2, title: "Grace & Heritage", year: "2025", medium: "Colored Pencil", category: "Portraits", description: "A portrait celebrating traditional beauty and cultural elegance." },
];

const mediumColors: Record<string, string> = {
  Charcoal: "border-paint-red/40",
  Graphite: "border-paint-blue/40",
  "Colored Pencil": "border-paint-yellow/40",
  Marker: "border-paint-purple/40",
};

const filters = {
  medium: ["All", "Charcoal", "Graphite", "Colored Pencil", "Marker"],
  category: ["All", "Portraits", "Religious Artworks", "Traditional Art"],
};

const PortfolioSection = () => {
  const [activeMedium, setActiveMedium] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = artworks.filter((a) => {
    if (activeMedium !== "All" && a.medium !== activeMedium) return false;
    if (activeCategory !== "All" && a.category !== activeCategory) return false;
    return true;
  });

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const nextImage = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <section id="portfolio" className="relative py-24 px-6 overflow-hidden">
      <PaintSplatter color="hsl(340 82% 58%)" className="-left-16 top-20" delay={0.2} size={180} />
      <PaintSplatter color="hsl(210 90% 56%)" className="-right-12 bottom-32" delay={0.4} size={160} />

      <div className="mx-auto max-w-7xl relative z-10" ref={ref}>
        <SectionTitle label="PORTFOLIO" title="Selected Works" inView={inView} />

        {/* Filters */}
        <motion.div
          className="mb-10 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-2">
            {filters.medium.map((m) => (
              <button
                key={m}
                onClick={() => setActiveMedium(m)}
                className={`rounded-sm px-4 py-1.5 font-body text-xs tracking-[0.1em] transition-all ${
                  activeMedium === m
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {m.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {filters.category.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`rounded-sm px-4 py-1.5 font-body text-xs tracking-[0.1em] transition-all ${
                  activeCategory === c
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {c.toUpperCase()}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((art, i) => (
              <motion.div
                key={art.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group cursor-pointer overflow-hidden rounded-lg border-2 ${mediumColors[art.medium] || "border-border"} bg-card transition-all hover:paint-glow`}
                onClick={() => openLightbox(i)}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={art.src}
                    alt={art.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="font-display text-lg font-semibold text-foreground">{art.title}</h3>
                    <p className="font-body text-xs tracking-wider text-primary">{art.medium} · {art.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">No artworks match the current filters.</p>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-foreground/70 hover:text-foreground z-10" aria-label="Close">
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground z-10"
              aria-label="Next"
            >
              <ChevronRight size={36} />
            </button>

            <motion.div
              className="flex max-h-[90vh] max-w-4xl flex-col items-center gap-4 px-4"
              onClick={(e) => e.stopPropagation()}
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                className="max-h-[70vh] w-auto rounded-lg object-contain"
              />
              <div className="text-center">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {filtered[lightboxIndex].title}
                </h3>
                <p className="mt-1 font-body text-sm text-primary">
                  {filtered[lightboxIndex].medium} · {filtered[lightboxIndex].year} · {filtered[lightboxIndex].category}
                </p>
                <p className="mt-2 max-w-md font-body text-sm text-muted-foreground">
                  {filtered[lightboxIndex].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
