import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PenTool, Palette, Pencil, Frame } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Charcoal & Graphite Portraits",
    desc: "Hyper-realistic charcoal and graphite portraits capturing depth, emotion, and lifelike detail.",
  },
  {
    icon: Palette,
    title: "Colored Pencil Artworks",
    desc: "Vibrant, richly layered colored pencil pieces with stunning color blending and texture.",
  },
  {
    icon: Pencil,
    title: "Marker Artworks",
    desc: "Bold, expressive marker illustrations bringing subjects to life with vivid strokes.",
  },
  {
    icon: Frame,
    title: "Custom Traditional Portraits",
    desc: "Personalized commissioned portraits in your preferred medium for special occasions.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 px-6 bg-card/30">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-body text-sm tracking-[0.25em] text-primary">SERVICES</p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Commission Work</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary/40" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group rounded-lg border border-border bg-card p-8 text-center transition-all hover:border-primary/30 hover:glow-border"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/5 transition-all group-hover:bg-primary/10">
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
