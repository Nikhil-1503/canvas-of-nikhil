import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const paintColors = [
  "hsl(0 85% 60%)",      // red
  "hsl(210 90% 56%)",    // blue
  "hsl(45 95% 58%)",     // yellow
  "hsl(185 85% 50%)",    // cyan
  "hsl(270 70% 60%)",    // purple
  "hsl(340 82% 58%)",    // pink/primary
];

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-8">
            {/* Paint splash SVG */}
            <motion.svg
              width="140"
              height="140"
              viewBox="0 0 140 140"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {/* Animated paint splashes radiating outward */}
              {paintColors.map((color, i) => {
                const angle = (i * 60) * (Math.PI / 180);
                const cx = 70 + Math.cos(angle) * 35;
                const cy = 70 + Math.sin(angle) * 35;
                return (
                  <motion.circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r="0"
                    fill={color}
                    animate={{ r: [0, 12 + i * 2, 8 + i], opacity: [0, 0.9, 0.7] }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                  />
                );
              })}
              {/* Center palette circle */}
              <motion.circle
                cx="70"
                cy="70"
                r="0"
                fill="hsl(220 20% 12%)"
                stroke="hsl(340 82% 58%)"
                strokeWidth="2"
                animate={{ r: 20 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "backOut" }}
              />
              {/* Brush stroke path */}
              <motion.path
                d="M30 70 Q50 40 70 65 Q90 90 110 60"
                stroke="hsl(340 82% 58%)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="200"
                strokeDashoffset="200"
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
              />
              {/* Secondary stroke */}
              <motion.path
                d="M25 85 Q55 70 70 80 Q85 90 115 75"
                stroke="hsl(45 95% 58%)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="200"
                strokeDashoffset="200"
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
              />
            </motion.svg>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h2 className="font-display text-2xl font-light tracking-[0.3em] text-primary">
                NIKHIL SHANBHAG
              </h2>
              <p className="mt-2 text-sm tracking-[0.2em] text-muted-foreground">
                TRADITIONAL ARTIST
              </p>
            </motion.div>

            {/* Animated color bar */}
            <div className="flex gap-1.5">
              {paintColors.map((color, i) => (
                <motion.div
                  key={i}
                  className="h-1 w-6 rounded-full origin-left"
                  style={{ backgroundColor: color }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 + i * 0.1 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
