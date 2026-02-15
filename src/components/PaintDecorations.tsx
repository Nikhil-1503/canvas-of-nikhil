import { motion } from "framer-motion";

/** Reusable paint splatter decorations for section backgrounds */
export const PaintSplatter = ({
  color,
  className,
  delay = 0,
  size = 120,
}: {
  color: string;
  className?: string;
  delay?: number;
  size?: number;
}) => (
  <motion.div
    className={`absolute rounded-full blur-2xl pointer-events-none ${className}`}
    style={{
      width: size,
      height: size,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 0.15, scale: 1 }}
    transition={{ duration: 1.2, delay }}
  />
);

export const PaintDot = ({
  color,
  className,
  delay = 0,
  size = 6,
}: {
  color: string;
  className?: string;
  delay?: number;
  size?: number;
}) => (
  <motion.div
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={{
      width: size,
      height: size,
      backgroundColor: color,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 0.6, scale: 1 }}
    transition={{ duration: 0.6, delay, type: "spring" }}
  />
);

export const BrushStroke = ({
  color,
  className,
  delay = 0,
  width = 80,
  angle = 0,
}: {
  color: string;
  className?: string;
  delay?: number;
  width?: number;
  angle?: number;
}) => (
  <motion.div
    className={`absolute h-[3px] origin-left pointer-events-none rounded-full ${className}`}
    style={{
      width,
      background: `linear-gradient(90deg, ${color}, transparent)`,
      transform: `rotate(${angle}deg)`,
    }}
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{ scaleX: 1, opacity: 0.5 }}
    transition={{ duration: 0.8, delay }}
  />
);

/** Section title with colorful brush stroke underline */
export const SectionTitle = ({
  label,
  title,
  inView,
}: {
  label: string;
  title: string;
  inView: boolean;
}) => (
  <motion.div
    className="mb-16 text-center"
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
  >
    <p className="mb-2 font-body text-sm tracking-[0.25em] text-primary">{label}</p>
    <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
    <div className="mx-auto mt-4 flex items-center justify-center gap-1">
      <div className="h-[3px] w-6 rounded-full bg-paint-red" />
      <div className="h-[3px] w-6 rounded-full bg-paint-blue" />
      <div className="h-[3px] w-6 rounded-full bg-paint-yellow" />
      <div className="h-[3px] w-6 rounded-full bg-paint-purple" />
    </div>
  </motion.div>
);
