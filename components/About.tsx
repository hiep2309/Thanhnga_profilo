"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/data";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

function FlowerIllustration() {
  return (
    <svg
      viewBox="0 0 120 140"
      fill="none"
      className="h-24 w-20 shrink-0 opacity-80 sm:h-28 sm:w-24 md:h-36 md:w-28"
      aria-hidden="true"
    >
      <rect x="52" y="90" width="16" height="40" rx="4" fill="#FBE7F0" />
      <ellipse cx="60" cy="88" rx="28" ry="8" fill="#EEDCFF" opacity="0.6" />
      <circle cx="60" cy="55" r="14" fill="#F8C8D8" opacity="0.5" />
      <circle cx="45" cy="65" r="10" fill="#EEDCFF" opacity="0.7" />
      <circle cx="75" cy="65" r="10" fill="#FBE7F0" opacity="0.8" />
      <circle cx="50" cy="45" r="8" fill="#D8B4FE" opacity="0.5" />
      <circle cx="70" cy="45" r="8" fill="#F8C8D8" opacity="0.6" />
      <path
        d="M95 110 L105 95 L115 110 Z"
        fill="#FBE7F0"
        stroke="#F8C8D8"
        strokeWidth="1"
      />
      <rect x="98" y="108" width="14" height="18" rx="3" fill="#FFF8F8" stroke="#F8C8D8" strokeWidth="1" />
    </svg>
  );
}

export default function About() {
  return (
    <FadeIn id="about" className="py-8 sm:py-10 md:py-14">
      <SectionHeader title="About Me" />

      <motion.div
        className="glass-card overflow-hidden rounded-[24px] p-4 shadow-card sm:rounded-[28px] sm:p-6 md:rounded-[32px] md:p-8"
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-start md:gap-8">
          <div className="flex-1">
            <p className="text-sm leading-relaxed text-charcoal/90 sm:text-[15px] md:text-base md:leading-7">
              {about.description}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3">
              {about.interests.map((interest) => (
                <div
                  key={interest.label}
                  className="flex items-center gap-1.5 rounded-2xl bg-secondary-pink/60 px-3 py-2.5 text-xs font-medium text-charcoal sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
                >
                  <span aria-hidden="true">{interest.emoji}</span>
                  <span className="truncate">{interest.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <FlowerIllustration />
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}
