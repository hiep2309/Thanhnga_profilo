"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Heart, MapPin, Music, UtensilsCrossed } from "lucide-react";
import { favorites } from "@/lib/data";
import FadeIn, { FadeInItem } from "./FadeIn";
import SectionHeader from "./SectionHeader";

const iconMap = {
  music: Music,
  food: UtensilsCrossed,
  travel: MapPin,
  books: BookOpen,
};

export default function Favorites() {
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());

  const toggleLike = (id: string) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <FadeIn id="favorites" className="py-10 md:py-14">
      <SectionHeader title="Favorites" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {favorites.map((category, index) => {
          const Icon = iconMap[category.icon];
          const isLiked = likedIds.has(category.id);

          return (
            <FadeInItem key={category.id} delay={index * 0.08}>
              <motion.article
                className="glass-card relative overflow-hidden rounded-[28px] p-5 shadow-card md:rounded-[32px] md:p-6"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <motion.button
                  type="button"
                  onClick={() => toggleLike(category.id)}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white/60"
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Like ${category.title}`}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      isLiked
                        ? "fill-primary-pink text-primary-pink"
                        : "text-charcoal/35"
                    }`}
                  />
                </motion.button>

                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-secondary-pink to-lavender shadow-card">
                  <Icon className="h-6 w-6 text-charcoal/70" />
                </div>

                <span className="inline-block rounded-full bg-primary-pink/80 px-4 py-1.5 text-sm font-semibold text-white">
                  {category.title}
                </span>

                <ul className="mt-4 space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-charcoal/80 md:text-[15px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </FadeInItem>
          );
        })}
      </div>
    </FadeIn>
  );
}
