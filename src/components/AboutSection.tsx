import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, PenTool, Eye } from "lucide-react";
import { SectionTitle, PaintSplatter, PaintDot } from "./PaintDecorations";
import profileImg from "@/assets/profile.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Paint decorations */}
      <PaintSplatter color="hsl(210 90% 56%)" className="-right-16 top-12" delay={0.2} size={200} />
      <PaintSplatter color="hsl(45 95% 58%)" className="-left-12 bottom-20" delay={0.4} size={150} />
      <PaintDot color="hsl(0 85% 60%)" className="top-20 left-[15%]" delay={0.6} size={5} />
      <PaintDot color="hsl(270 70% 60%)" className="bottom-32 right-[20%]" delay={0.8} size={6} />

      <div className="mx-auto max-w-6xl relative z-10" ref={ref}>
        <SectionTitle label="ABOUT THE ARTIST" title="The Journey" inView={inView} />

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:items-start"
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
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Profile image */}
            <div className="relative mb-10">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-paint-red/20 via-paint-blue/15 to-paint-purple/20 blur-xl" />
              <img
                src={profileImg}
                alt="Nikhil Shanbhag"
                className="relative h-48 w-48 rounded-full border-2 border-primary/30 object-cover shadow-2xl sm:h-64 sm:w-64"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 w-full">
            {[
              { icon: PenTool, title: "Charcoal & Graphite", desc: "Deep contrasts and photorealistic detail", color: "paint-red" },
              { icon: Palette, title: "Colored Pencil", desc: "Vibrant, layered color artworks", color: "paint-blue" },
              { icon: Eye, title: "Realism", desc: "Emotion captured in every stroke", color: "paint-purple" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:paint-glow"
              >
                <item.icon className={`mx-auto mb-3 h-8 w-8 text-${item.color}`} />
                <h3 className="font-display text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
