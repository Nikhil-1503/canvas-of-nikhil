import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PenTool, Palette, Pencil, Frame } from "lucide-react";
import { SectionTitle, PaintSplatter } from "./PaintDecorations";

const services = [
  {
    icon: PenTool,
    title: "Charcoal & Graphite Portraits",
    desc: "Hyper-realistic charcoal and graphite portraits capturing depth, emotion, and lifelike detail.",
    gradient: "from-paint-red/20 to-paint-orange/10",
    borderColor: "hover:border-paint-red/40",
  },
  {
    icon: Palette,
    title: "Colored Pencil Artworks",
    desc: "Vibrant, richly layered colored pencil pieces with stunning color blending and texture.",
    gradient: "from-paint-blue/20 to-paint-cyan/10",
    borderColor: "hover:border-paint-blue/40",
  },
  {
    icon: Pencil,
    title: "Marker Artworks",
    desc: "Bold, expressive marker illustrations bringing subjects to life with vivid strokes.",
    gradient: "from-paint-purple/20 to-primary/10",
    borderColor: "hover:border-paint-purple/40",
  },
  {
    icon: Frame,
    title: "Custom Traditional Portraits",
    desc: "Personalized commissioned portraits in your preferred medium for special occasions.",
    gradient: "from-paint-yellow/20 to-paint-green/10",
    borderColor: "hover:border-paint-yellow/40",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 px-6 bg-card/30 overflow-hidden">
      <PaintSplatter color="hsl(45 95% 58%)" className="-right-12 top-16" delay={0.2} size={160} />
      <PaintSplatter color="hsl(270 70% 60%)" className="-left-16 bottom-24" delay={0.4} size={140} />

      <div className="mx-auto max-w-6xl relative z-10" ref={ref}>
        <SectionTitle label="SERVICES" title="Commission Work" inView={inView} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className={`group rounded-lg border border-border bg-card p-8 text-center transition-all ${s.borderColor} hover:paint-glow`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${s.gradient} transition-all`}>
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
