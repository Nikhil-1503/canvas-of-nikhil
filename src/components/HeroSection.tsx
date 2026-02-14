import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(40_60%_55%_/_0.04)_0%,_transparent_70%)]" />

      {/* Decorative paint splatters */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top-right splatter cluster */}
        <motion.div
          className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-primary/10 blur-2xl sm:h-48 sm:w-48"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 3.4 }}
        />
        <motion.div
          className="absolute right-12 top-16 h-3 w-3 rounded-full bg-primary/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.6] }}
          transition={{ duration: 1, delay: 3.6 }}
        />
        <motion.div
          className="absolute right-24 top-8 h-2 w-2 rounded-full bg-accent/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5] }}
          transition={{ duration: 1, delay: 3.8 }}
        />
        <motion.div
          className="absolute right-8 top-28 h-1.5 w-1.5 rounded-full bg-primary/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 4 }}
        />

        {/* Bottom-left splatter cluster */}
        <motion.div
          className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-accent/5 blur-2xl sm:h-56 sm:w-56"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 3.5 }}
        />
        <motion.div
          className="absolute bottom-24 left-16 h-2.5 w-2.5 rounded-full bg-primary/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.7] }}
          transition={{ duration: 1, delay: 3.9 }}
        />
        <motion.div
          className="absolute bottom-32 left-8 h-1.5 w-1.5 rounded-full bg-accent/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 4.1 }}
        />
        <motion.div
          className="absolute bottom-16 left-28 h-2 w-2 rounded-full bg-primary/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8] }}
          transition={{ duration: 0.8, delay: 4.2 }}
        />

        {/* Scattered dots */}
        {[
          { top: "20%", left: "15%", size: "3px", opacity: 0.3, delay: 4.0 },
          { top: "35%", right: "20%", size: "4px", opacity: 0.25, delay: 4.1 },
          { top: "70%", right: "30%", size: "2px", opacity: 0.4, delay: 4.3 },
          { top: "55%", left: "10%", size: "3px", opacity: 0.2, delay: 4.4 },
          { top: "80%", right: "15%", size: "2px", opacity: 0.35, delay: 4.2 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary"
            style={{
              top: dot.top,
              left: dot.left,
              right: dot.right,
              width: dot.size,
              height: dot.size,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: dot.opacity }}
            transition={{ duration: 0.8, delay: dot.delay }}
          />
        ))}

        {/* Brush stroke accents */}
        <motion.div
          className="absolute right-[10%] top-[30%] h-[2px] w-16 origin-left rotate-[30deg] bg-gradient-to-r from-primary/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 4.0 }}
        />
        <motion.div
          className="absolute bottom-[25%] left-[8%] h-[2px] w-12 origin-left -rotate-[20deg] bg-gradient-to-r from-accent/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 4.2 }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 md:flex-row md:gap-16">
        {/* Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <p className="mb-4 font-body text-sm tracking-[0.25em] text-primary">SELF-TAUGHT ARTIST</p>
          <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Realistic Portraits &{" "}
            <span className="text-primary text-gold-glow">Traditional Art</span>{" "}
            that Brings Emotion to Life
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:mx-0 lg:text-lg">
            Self-taught artist exploring charcoal, graphite, and colored pencil artworks with a focus on realism, texture, and expression.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <button
              onClick={() => scrollTo("#portfolio")}
              className="rounded-sm bg-primary px-8 py-3 font-body text-sm font-medium tracking-[0.1em] text-primary-foreground transition-all hover:shadow-[0_0_20px_hsl(40_60%_55%_/_0.3)]"
            >
              VIEW PORTFOLIO
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="rounded-sm border border-primary/30 px-8 py-3 font-body text-sm font-medium tracking-[0.1em] text-primary transition-all hover:border-primary hover:bg-primary/5"
            >
              COMMISSIONS
            </button>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-md" />
            <img
              src={profileImg}
              alt="Nikhil Shanbhag - Traditional Artist"
              className="relative h-64 w-64 rounded-full border-2 border-primary/20 object-cover shadow-2xl sm:h-80 sm:w-80"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="h-8 w-5 rounded-full border border-primary/30 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-primary/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
