"use client";

import { motion } from "framer-motion";

function Blossom({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="20" r="8" fill="#F8C8D8" opacity="0.7" />
      <circle cx="20" cy="28" r="7" fill="#FBE7F0" opacity="0.8" />
      <circle cx="44" cy="28" r="7" fill="#EEDCFF" opacity="0.7" />
      <circle cx="26" cy="40" r="6" fill="#F8C8D8" opacity="0.6" />
      <circle cx="38" cy="40" r="6" fill="#D8B4FE" opacity="0.5" />
    </svg>
  );
}

export default function FloatingDecorations() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute -left-6 top-24 md:left-8 md:top-32"
        animate={{ y: [0, -16, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Blossom className="h-16 w-16 opacity-60 md:h-24 md:w-24" />
      </motion.div>

      <motion.div
        className="absolute -right-4 top-48 md:right-12 md:top-56"
        animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Blossom className="h-12 w-12 opacity-50 md:h-20 md:w-20" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-8 hidden md:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Blossom className="h-14 w-14 opacity-40" />
      </motion.div>

      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-secondary-pink/80 via-secondary-pink/30 to-transparent sm:h-72" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-secondary-pink/50 to-transparent" />
    </div>
  );
}

export function HeroBlossomFrame() {
  return (
    <>
      <div className="pointer-events-none absolute -left-1 top-0 w-20 opacity-70 sm:-left-2 sm:w-28 sm:opacity-80 md:w-36">
        <svg viewBox="0 0 120 120" className="w-full" aria-hidden="true">
          <path
            d="M10 80 Q30 40 60 20 Q90 40 110 70"
            stroke="#F8C8D8"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
          <circle cx="60" cy="18" r="6" fill="#F8C8D8" opacity="0.6" />
          <circle cx="48" cy="28" r="5" fill="#EEDCFF" opacity="0.7" />
          <circle cx="72" cy="26" r="5" fill="#FBE7F0" opacity="0.8" />
          <circle cx="40" cy="42" r="4" fill="#D8B4FE" opacity="0.5" />
          <circle cx="80" cy="38" r="4" fill="#F8C8D8" opacity="0.6" />
        </svg>
      </div>
      <div className="pointer-events-none absolute -right-1 top-0 w-20 opacity-70 sm:-right-2 sm:w-28 sm:opacity-80 md:w-36">
        <svg viewBox="0 0 120 120" className="w-full" aria-hidden="true">
          <path
            d="M110 80 Q90 40 60 20 Q30 40 10 70"
            stroke="#F8C8D8"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
          <circle cx="60" cy="18" r="6" fill="#EEDCFF" opacity="0.7" />
          <circle cx="72" cy="28" r="5" fill="#F8C8D8" opacity="0.6" />
          <circle cx="48" cy="26" r="5" fill="#FBE7F0" opacity="0.8" />
          <circle cx="80" cy="42" r="4" fill="#F8C8D8" opacity="0.6" />
          <circle cx="40" cy="38" r="4" fill="#D8B4FE" opacity="0.5" />
        </svg>
      </div>
    </>
  );
}
