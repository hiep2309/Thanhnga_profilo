"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";
import { memories } from "@/lib/data";
import FadeIn, { FadeInItem } from "./FadeIn";
import SectionHeader from "./SectionHeader";

export default function Memories() {
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const displayMemories = showAll ? memories : memories.slice(0, 3);

  const toggleLike = (id: string) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <FadeIn id="memories" className="py-8 sm:py-10 md:py-14">
      <SectionHeader
        title="Memories"
        action={
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="flex shrink-0 items-center gap-1 text-xs font-medium text-primary-pink transition-opacity active:opacity-70 sm:text-sm"
          >
            {showAll ? "Show less" : "See more"}
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </button>
        }
      />

      <div className="timeline-line relative space-y-3 pl-10 sm:space-y-4 sm:pl-12 md:pl-14">
        {displayMemories.map((memory, index) => {
          const isLiked = likedIds.has(memory.id);

          return (
            <FadeInItem key={memory.id} delay={index * 0.08}>
              <motion.article
                className="glass-card relative flex gap-3 rounded-[20px] p-3 shadow-card sm:gap-4 sm:rounded-[24px] sm:p-4 md:rounded-[28px] md:p-5"
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="absolute -left-[26px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-white bg-primary-pink shadow-soft sm:-left-[30px] sm:h-3 sm:w-3 md:-left-[38px]" />

                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl shadow-card sm:h-20 sm:w-20 sm:rounded-2xl md:h-24 md:w-24">
                  <Image
                    src={memory.image}
                    alt={memory.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-base font-semibold leading-snug text-charcoal sm:text-lg md:text-xl">
                    {memory.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] text-muted sm:text-xs md:text-sm">
                    {memory.date}
                  </p>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-charcoal/80 sm:mt-2 sm:text-sm">
                    {memory.description}
                  </p>
                </div>

                <motion.button
                  type="button"
                  onClick={() => toggleLike(memory.id)}
                  className="touch-target flex shrink-0 items-center justify-center self-start rounded-xl bg-white/60 transition-colors"
                  whileTap={{ scale: 0.9 }}
                  aria-label={isLiked ? "Unlike memory" : "Like memory"}
                >
                  <Heart
                    className={`h-4 w-4 transition-colors ${
                      isLiked
                        ? "fill-primary-pink text-primary-pink"
                        : "text-charcoal/40"
                    }`}
                  />
                </motion.button>
              </motion.article>
            </FadeInItem>
          );
        })}
      </div>
    </FadeIn>
  );
}
