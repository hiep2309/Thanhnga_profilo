"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ChevronDown,
  Coffee,
  GraduationCap,
  Heart,
  Laptop,
  Menu,
} from "lucide-react";
import { profile } from "@/lib/data";
import { socialPlatformConfigs } from "@/lib/social-config";
import { HeroBlossomFrame } from "./FloatingDecorations";
import SocialButton from "./SocialButton";

const introIcons = {
  graduation: GraduationCap,
  coffee: Coffee,
  laptop: Laptop,
  heart: Heart,
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative -mx-4 px-4 pb-8 pt-4 sm:-mx-5 sm:px-5 sm:pb-10 sm:pt-6 md:-mx-8 md:px-8 md:pb-14 md:pt-10"
    >
      <div className="mb-5 flex items-center justify-between sm:mb-6">
        <button
          type="button"
          className="touch-target flex items-center justify-center rounded-2xl bg-white/70 shadow-card backdrop-blur-sm transition-transform active:scale-95"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5 text-charcoal" />
        </button>
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart className="h-5 w-5 fill-primary-pink text-primary-pink" />
        </motion.div>
      </div>

      <HeroBlossomFrame />

      <motion.div
        className="relative flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="relative mb-4 sm:mb-5"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-pink/40 to-lavender/40 blur-xl" />
          <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-soft sm:h-32 sm:w-32 md:h-36 md:w-36">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 112px, 144px"
            />
          </div>
        </motion.div>

        <h1 className="font-serif text-[1.65rem] leading-tight font-semibold tracking-tight text-balance text-charcoal sm:text-3xl md:text-5xl">
          {profile.name}
        </h1>

        <p className="font-script mt-2 max-w-[18rem] text-lg leading-snug text-charcoal/80 sm:max-w-none sm:text-xl md:text-2xl">
          {profile.quote}
        </p>

        <ul className="mt-5 w-full max-w-xs space-y-2.5 sm:mt-6 sm:max-w-sm sm:space-y-3">
          {profile.intro.map((item, index) => {
            const Icon = introIcons[item.icon as keyof typeof introIcons];
            return (
              <motion.li
                key={item.text}
                className="flex items-center gap-3 text-left text-[13px] text-charcoal/85 sm:text-sm md:text-base"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/80 shadow-card">
                  <Icon className="h-4 w-4 text-primary-pink" />
                </span>
                <span className="min-w-0 flex-1">{item.text}</span>
              </motion.li>
            );
          })}
        </ul>

        {/* Mobile: horizontal scroll | Desktop: grid */}
        <div className="scrollbar-hide -mx-4 mt-6 flex w-[calc(100%+2rem)] gap-2.5 overflow-x-auto px-4 pb-1 snap-scroll-x sm:-mx-5 sm:mt-8 sm:w-[calc(100%+2.5rem)] sm:gap-3 sm:px-5 md:mx-0 md:grid md:max-w-md md:w-full md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0">
          {socialPlatformConfigs.map((platform, index) => (
            <SocialButton
              key={platform.id}
              platformId={platform.id}
              label={platform.title}
              variant={platform.primary ? "hero-primary" : "hero-outline"}
              className={platform.primary ? "md:col-span-2" : undefined}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-8 sm:mt-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-primary-pink/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
