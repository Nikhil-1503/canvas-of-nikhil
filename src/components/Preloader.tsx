import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 2500);
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
            {/* Pencil SVG animation */}
            <motion.svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Drawing circle */}
              <motion.circle
                cx="60"
                cy="60"
                r="45"
                stroke="hsl(40 60% 55%)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset="283"
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              {/* Inner flourish */}
              <motion.path
                d="M40 60 Q50 40 60 55 Q70 70 80 50"
                stroke="hsl(40 60% 55%)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="200"
                strokeDashoffset="200"
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.8, delay: 0.3, ease: "easeInOut" }}
              />
              <motion.path
                d="M35 70 Q55 80 60 60 Q65 40 85 50"
                stroke="hsl(40 60% 55% / 0.5)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="200"
                strokeDashoffset="200"
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.8, delay: 0.6, ease: "easeInOut" }}
              />
            </motion.svg>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h2 className="font-display text-2xl font-light tracking-[0.3em] text-primary">
                NIKHIL SHANBHAG
              </h2>
              <p className="mt-2 text-sm tracking-[0.2em] text-muted-foreground">
                TRADITIONAL ARTIST
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
