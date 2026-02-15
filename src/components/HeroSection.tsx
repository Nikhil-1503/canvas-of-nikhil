import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import { PaintSplatter, PaintDot, BrushStroke } from "./PaintDecorations";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(340_82%_58%_/_0.06)_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_left,_hsl(210_90%_56%_/_0.05)_0%,_transparent_50%)]" />

      {/* Decorative paint splatters */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <PaintSplatter color="hsl(0 85% 60%)" className="-right-10 -top-10" delay={3.2} size={200} />
        <PaintSplatter color="hsl(210 90% 56%)" className="-left-8 top-1/4" delay={3.4} size={160} />
        <PaintSplatter color="hsl(45 95% 58%)" className="-bottom-10 right-1/4" delay={3.5} size={180} />
        <PaintSplatter color="hsl(270 70% 60%)" className="bottom-1/3 -left-4" delay={3.6} size={120} />
        <PaintSplatter color="hsl(185 85% 50%)" className="-right-4 top-1/2" delay={3.7} size={100} />

        {/* Scattered paint dots */}
        <PaintDot color="hsl(0 85% 60%)" className="top-[18%] left-[12%]" delay={3.8} size={5} />
        <PaintDot color="hsl(210 90% 56%)" className="top-[30%] right-[18%]" delay={3.9} size={7} />
        <PaintDot color="hsl(45 95% 58%)" className="top-[65%] right-[25%]" delay={4.0} size={4} />
        <PaintDot color="hsl(270 70% 60%)" className="top-[50%] left-[8%]" delay={4.1} size={6} />
        <PaintDot color="hsl(340 82% 58%)" className="top-[75%] left-[20%]" delay={4.0} size={5} />
        <PaintDot color="hsl(185 85% 50%)" className="top-[25%] left-[40%]" delay={4.2} size={3} />
        <PaintDot color="hsl(0 85% 60%)" className="top-[80%] right-[12%]" delay={4.3} size={4} />

        {/* Brush stroke accents */}
        <BrushStroke color="hsl(340 82% 58%)" className="right-[8%] top-[28%]" delay={3.8} width={90} angle={25} />
        <BrushStroke color="hsl(210 90% 56%)" className="left-[6%] bottom-[22%]" delay={4.0} width={70} angle={-15} />
        <BrushStroke color="hsl(45 95% 58%)" className="right-[15%] bottom-[35%]" delay={4.2} width={50} angle={40} />
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
            Bringing{" "}
            <span className="bg-gradient-to-r from-paint-red via-primary to-paint-purple bg-clip-text text-transparent">
              Realism
            </span>{" "}
            to Life Through Charcoal and{" "}
            <span className="bg-gradient-to-r from-paint-blue via-paint-cyan to-paint-green bg-clip-text text-transparent">
              Color
            </span>
          </h1>
          {/* <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:mx-0 lg:text-lg">
            Self-taught artist exploring charcoal, graphite, and colored pencil artworks with a focus on realism, texture, and expression.
          </p> */}
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:mx-0 lg:text-lg">
            A self-taught traditional artist passionate about realism, texture, and emotional storytelling. 
            I explore charcoal, graphite, and colored pencils to capture expressions, depth, and moments that feel alive on paper.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <button
              onClick={() => scrollTo("#portfolio")}
              className="rounded-sm bg-primary px-8 py-3 font-body text-sm font-medium tracking-[0.1em] text-primary-foreground transition-all hover:shadow-[0_0_25px_hsl(340_82%_58%_/_0.4)]"
            >
              VIEW GALLERY
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="rounded-sm border border-primary/30 px-8 py-3 font-body text-sm font-medium tracking-[0.1em] text-primary transition-all hover:border-primary hover:bg-primary/5"
            >
              REQUEST A COMMISSION
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
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-paint-red/20 via-paint-blue/15 to-paint-purple/20 blur-xl" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/30 via-transparent to-paint-cyan/20 blur-md" />
            <img
              src={profileImg}
              alt="Nikhil Shanbhag - Traditional Artist"
              className="relative h-64 w-64 rounded-full border-2 border-primary/30 object-cover shadow-2xl sm:h-80 sm:w-80"
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
