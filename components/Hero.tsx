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
      className="relative -mx-5 px-5 pb-10 pt-6 md:-mx-8 md:px-8 md:pb-14 md:pt-10"
    >
      <div className="mb-6 flex items-center justify-between">
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 shadow-card backdrop-blur-sm transition-transform active:scale-95"
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
          className="relative mb-5"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-pink/40 to-lavender/40 blur-xl" />
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-soft md:h-36 md:w-36">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              className="object-cover"
              priority
              sizes="144px"
            />
          </div>
        </motion.div>

        <h1 className="font-serif text-4xl font-semibold tracking-tight text-charcoal md:text-5xl">
          {profile.name}
        </h1>

        <p className="font-script mt-2 text-xl text-charcoal/80 md:text-2xl">
          {profile.quote}
        </p>

        <ul className="mt-6 space-y-3 text-left">
          {profile.intro.map((item, index) => {
            const Icon = introIcons[item.icon as keyof typeof introIcons];
            return (
              <motion.li
                key={item.text}
                className="flex items-center gap-3 text-sm text-charcoal/85 md:text-base"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/80 shadow-card">
                  <Icon className="h-4 w-4 text-primary-pink" />
                </span>
                {item.text}
              </motion.li>
            );
          })}
        </ul>

        <div className="mt-8 grid w-full max-w-md grid-cols-2 gap-3">
          {socialPlatformConfigs.map((platform, index) => (
            <SocialButton
              key={platform.id}
              platformId={platform.id}
              label={platform.title}
              variant={platform.primary ? "hero-primary" : "hero-outline"}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-primary-pink/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
