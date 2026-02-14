import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, PenTool, Eye } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-body text-sm tracking-[0.25em] text-primary">ABOUT THE ARTIST</p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">The Journey</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary/40" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
              I'm <span className="text-foreground font-medium">Nikhil Shanbhag</span>, a self-taught traditional artist with a deep passion for realism. My artistic journey began with a simple pencil and paper, driven by curiosity and an unrelenting desire to capture the world as I see it.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Working primarily in charcoal, graphite, and colored pencil, I focus on creating portraits and artworks that convey raw emotion and intricate detail. Every piece is a meditation on texture, light, and the stories written on human faces.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
              My work spans realistic portraits, religious artworks, and expressive traditional pieces — each crafted with patience, dedication, and a commitment to pushing creative boundaries.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { icon: PenTool, title: "Charcoal & Graphite", desc: "Deep contrasts and photorealistic detail" },
              { icon: Palette, title: "Colored Pencil", desc: "Vibrant, layered color artworks" },
              { icon: Eye, title: "Realism", desc: "Emotion captured in every stroke" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:glow-border"
              >
                <item.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h3 className="font-display text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
