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
    <FadeIn id="memories" className="py-10 md:py-14">
      <SectionHeader
        title="Memories"
        action={
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="flex items-center gap-1 text-sm font-medium text-primary-pink transition-opacity hover:opacity-80"
          >
            {showAll ? "Show less" : "See more"}
            <ArrowRight className="h-4 w-4" />
          </button>
        }
      />

      <div className="timeline-line relative space-y-4 pl-12 md:pl-14">
        {displayMemories.map((memory, index) => {
          const isLiked = likedIds.has(memory.id);

          return (
            <FadeInItem key={memory.id} delay={index * 0.08}>
              <motion.article
                className="glass-card relative flex gap-4 rounded-[24px] p-4 shadow-card md:rounded-[28px] md:p-5"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="absolute -left-[34px] top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-primary-pink shadow-soft md:-left-[38px] md:block" />

                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl shadow-card md:h-24 md:w-24">
                  <Image
                    src={memory.image}
                    alt={memory.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-lg font-semibold text-charcoal md:text-xl">
                    {memory.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted md:text-sm">
                    {memory.date}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-charcoal/80">
                    {memory.description}
                  </p>
                </div>

                <motion.button
                  type="button"
                  onClick={() => toggleLike(memory.id)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center self-start rounded-xl bg-white/60 transition-colors"
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
