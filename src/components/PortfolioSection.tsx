import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle, PaintSplatter } from "./PaintDecorations";

import graphite1 from "@/assets/artwork-shivaji_maharaj.jpg";
import graphite12 from "@/assets/artwork-joker.jpg";
import graphite2 from "@/assets/artwork-ms_dhoni.jpg";
import graphite3 from "@/assets/artwork-baby_krishna.jpg";
import graphite4 from "@/assets/artwork-lord_ganesh.jpg";
import graphite5 from "@/assets/artwork-bahubali.jpg";
import graphite6 from "@/assets/artwork-arijit_singh.jpg";
import graphite7 from "@/assets/artwork-iron_man.jpg";
import graphite8 from "@/assets/artwork-narendra_modi.jpg";
import graphite9 from "@/assets/artwork-vicky_kaushal.jpg";
import graphite10 from "@/assets/artwork-stan_lee.jpg";
import graphite11 from "@/assets/artwork-lynn_mathew.jpg";
import graphite13 from "@/assets/artwork-abdul_kalam.jpg";
import graphite14 from "@/assets/artwork-radhakrishnan.jpg";
import graphite15 from "@/assets/artwork-subhash_chandra_bose.jpg";

import charcoal1 from "@/assets/artwork-batman.jpg";
import charcoal2 from "@/assets/artwork-dr_rajkumar.jpg";
import charcoal3 from "@/assets/artwork-shrimad_samyamindra_swamiji.jpg";
import charcoal4 from "@/assets/artwork-shrimad_vidyadheesh_swamiji.jpg";
import charcoal5 from "@/assets/artwork-harry_potter.jpg";
import charcoal6 from "@/assets/artwork-krishna_and_calf.jpg";
import charcoal7 from "@/assets/artwork-lord-rama.jpg";
import charcoal8 from "@/assets/artwork-lord_hanuman.jpg";
import charcoal9 from "@/assets/artwork-little_krishna.jpg";
import charcoal10 from "@/assets/artwork-tmkoc.jpg";
import charcoal11 from "@/assets/artwork-virat_kohli.jpg";

import colored1 from "@/assets/artwork-abtract_lion.jpg";
import colored2 from "@/assets/artwork-roronoa_zoro.jpg";
import colored3 from "@/assets/artwork-3D_butterfly.jpg";


import marker1 from "@/assets/artwork-lord_venkateshwara.jpg";
import marker2 from "@/assets/artwork-shree_krishna.jpg";
import marker3 from "@/assets/artwork-sharada_devi.jpg";
import marker4 from "@/assets/artwork-lord_ganesha.jpg";
import marker5 from "@/assets/artwork-onepiece.jpg";
import marker6 from "@/assets/artwork-minions.jpg";

interface Artwork {
  src: string;
  title: string;
  year: string;
  medium: string;
  category: string;
  description: string;
}

const artworks: Artwork[] = [
  { src: charcoal2, title: "Hiranyakashipu: The Dr. Rajkumar Legacy", year: "2025", medium: "Charcoal", category: "Portraits", description: "Capturing the raw intensity and dramatic shadows of the Nata Sarvabhouma's portrayal of the mighty Rakshasa King." },
  { src: charcoal1, title: "The Dark Knight", year: "2024", medium: "Charcoal", category: "Portraits", description: "Capturing the heavy silence and brooding intensity of Batman through the depth of Charcoal." },
  { src: charcoal3, title: "Srimad Samyamindra Swamiji", year: "2026", medium: "Charcoal", category: "Portraits", description: "Artwork of Kashipathadhipati Srimad Samyamindra Thirtha Swamiji." },
  { src: charcoal4, title: "Shrimad Vidyadheesh Swamiji", year: "2026", medium: "Charcoal", category: "Portraits", description: "Artwork of Parampoojya Shreemad Vidyadheesh Teertha Shreepad Vader Swamiji." },
  { src: charcoal5, title: "Harry Potter: The Boy Who Lived", year: "2023", medium: "Charcoal", category: "Portraits", description: "A monochromatic study of magic, bravery, and the boy behind the lightning bolt." },
  { src: charcoal6, title: "Gopala: The Divine Cowherd", year: "2025", medium: "Charcoal", category: "Religious Artworks", description: "A soulful charcoal study capturing the compassionate bond and divinity of Lord Krishna." },
  { src: charcoal7, title: "Rama", year: "2025", medium: "Charcoal", category: "Religious Artworks", description: "A soulful charcoal study capturing the compassionate bond and divinity of Lord Krishna." },
  { src: charcoal8, title: "Hanuman", year: "2025", medium: "Charcoal", category: "Religious Artworks", description: "A soulful charcoal study capturing the compassionate bond and divinity of Lord Krishna." },
  { src: charcoal9, title: "Little Krishna", year: "2025", medium: "Charcoal", category: "Religious Artworks", description: "A soulful charcoal study capturing the compassionate bond and divinity of Lord Krishna." },
  { src: charcoal10, title: "TMKOC", year: "2025", medium: "Charcoal", category: "Religious Artworks", description: "A soulful charcoal study capturing the compassionate bond and divinity of Lord Krishna." },
  { src: charcoal11, title: "Virat Kohli", year: "2025", medium: "Charcoal", category: "Religious Artworks", description: "A soulful charcoal study capturing the compassionate bond and divinity of Lord Krishna." },
  { src: marker1, title: "Lord Venkateswara: The Golden Radiance", year: "2024", medium: "Marker", category: "Religious Artworks", description: "Capturing the majestic beauty and divinity of Lord Venkateswara Tirupati Balaji." },
  { src: graphite1, title: "Legend of Chhatrapati Shivaji Maharaj", year: "2022", medium: "Graphite", category: "Portraits", description: "A detailed graphite tribute to the visionary founder of the Maratha Empire." },
  { src: colored1, title: "The Prismatic Lion", year: "2024", medium: "Colored Pencil", category: "Abstract Art", description: "A vibrant explosion of color capturing the majestic gaze of the beast." },
  { src: colored2, title: "Roronoa Zoro: Spirit of Three Swords", year: "2024", medium: "Colored Pencil", category: "Portraits", description: "Exploring the legendary green aura of One Piece's legendary pirate hunter." },
  { src: colored3, title: "3D Butterfly", year: "2024", medium: "Colored Pencil", category: "Portraits", description: "Exploring the legendary green aura of One Piece's legendary pirate hunter." },
  { src: marker5, title: "Onepiece", year: "2024", medium: "Marker", category: "Portraits", description: "Exploring the legendary green aura of One Piece's legendary pirate hunter." },
  { src: marker2, title: "Krishna", year: "2024", medium: "Marker", category: "Portraits", description: "Exploring the legendary green aura of One Piece's legendary pirate hunter." },
  { src: marker3, title: "Ganesha", year: "2024", medium: "Marker", category: "Portraits", description: "Exploring the legendary green aura of One Piece's legendary pirate hunter." },
  { src: marker4, title: "Sharada Devi", year: "2024", medium: "Marker", category: "Portraits", description: "Exploring the legendary green aura of One Piece's legendary pirate hunter." },
  { src: marker6, title: "Minions", year: "2024", medium: "Marker", category: "Portraits", description: "Exploring the legendary green aura of One Piece's legendary pirate hunter." },
  { src: graphite2, title: "MS Dhoni: Captain Cool", year: "2019", medium: "Graphite", category: "Portraits", description: "A monochromatic exploration of the grit and determination behind the No. 7" },
  { src: graphite3, title: "Krishna", year: "2019", medium: "Graphite", category: "Portraits", description: "A monochromatic exploration of the grit and determination behind the No. 7" },
  { src: graphite4, title: "Ganesh", year: "2019", medium: "Graphite", category: "Portraits", description: "A monochromatic exploration of the grit and determination behind the No. 7" },
  { src: graphite5, title: "Bahubali", year: "2019", medium: "Graphite", category: "Portraits", description: "A monochromatic exploration of the grit and determination behind the No. 7" },
  { src: graphite6, title: "Arijit Singh", year: "2019", medium: "Graphite", category: "Portraits", description: "A monochromatic exploration of the grit and determination behind the No. 7" },
  { src: graphite7, title: "Iron Man", year: "2019", medium: "Graphite", category: "Portraits", description: "A monochromatic exploration of the grit and determination behind the No. 7" },
  { src: graphite8, title: "Modiji", year: "2019", medium: "Graphite", category: "Portraits", description: "A monochromatic exploration of the grit and determination behind the No. 7" },
  { src: graphite9, title: "Vicky Kaushal", year: "2019", medium: "Graphite", category: "Portraits", description: "A monochromatic exploration of the grit and determination behind the No. 7" },
  { src: graphite10, title: "Stan Lee", year: "2019", medium: "Graphite", category: "Portraits", description: "A monochromatic exploration of the grit and determination behind the No. 7" },
  { src: graphite11, title: "Lynn Mathew", year: "2019", medium: "Graphite", category: "Portraits", description: "A monochromatic exploration of the grit and determination behind the No. 7" },
  { src: graphite12, title: "Joker", year: "2019", medium: "Graphite", category: "Portraits", description: "A monochromatic exploration of the grit and determination behind the No. 7" },
  { src: graphite13, title: "Abdul Kalam", year: "2019", medium: "Graphite", category: "Portraits", description: "A monochromatic exploration of the grit and determination behind the No. 7" },
  { src: graphite14, title: "Radhakrishnan", year: "2019", medium: "Graphite", category: "Portraits", description: "A monochromatic exploration of the grit and determination behind the No. 7" },
  { src: graphite15, title: "Subhash Chandra Bose", year: "2019", medium: "Graphite", category: "Portraits", description: "A monochromatic exploration of the grit and determination behind the No. 7" },
  
];

const mediumColors: Record<string, string> = {
  Charcoal: "border-paint-red/40",
  Graphite: "border-paint-blue/40",
  "Colored Pencil": "border-paint-yellow/40",
  Marker: "border-paint-purple/40",
};

const filters = {
  medium: ["All", "Charcoal-Graphite Mix", "Graphite", "Color Pencil", "Marker-Color pencil Mix"],
  category: ["All", "Portraits", "Religious Artworks", "Abstract Art"],
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
