"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  galleryFilters,
  galleryImages,
  type GalleryCategory,
  type GalleryImage,
} from "@/lib/data";
import FadeIn, { FadeInItem } from "./FadeIn";
import ImageModal from "./ImageModal";
import SectionHeader from "./SectionHeader";

const aspectHeights = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredImages = useMemo(() => {
    if (activeFilter === "all") return galleryImages;
    return galleryImages.filter((image) => image.category === activeFilter);
  }, [activeFilter]);

  const displayImages = showAll ? filteredImages : filteredImages.slice(0, 6);

  return (
    <FadeIn id="gallery" className="py-10 md:py-14">
      <SectionHeader
        title="Gallery"
        action={
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="flex items-center gap-1 text-sm font-medium text-primary-pink transition-opacity hover:opacity-80"
          >
            {showAll ? "Show less" : "See all"}
            <ArrowRight className="h-4 w-4" />
          </button>
        }
      />

      <div className="mb-4 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {galleryFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => setActiveFilter(filter.id)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all active:scale-95 ${
              activeFilter === filter.id
                ? "bg-primary-pink text-white shadow-soft"
                : "bg-white/70 text-charcoal/70 shadow-card"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="masonry-grid columns-2 md:columns-3 lg:columns-4">
        {displayImages.map((image, index) => (
          <FadeInItem key={image.id} delay={index * 0.05}>
            <motion.button
              type="button"
              className={`masonry-item group relative w-full overflow-hidden rounded-[20px] shadow-card md:rounded-[24px] ${aspectHeights[image.aspect]}`}
              onClick={() => setSelectedImage(image)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.button>
          </FadeInItem>
        ))}
      </div>

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </FadeIn>
  );
}
