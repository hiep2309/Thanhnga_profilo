"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";
import { type GalleryImage } from "@/lib/data";

type ImageModalProps = {
  image: GalleryImage | null;
  onClose: () => void;
};

export default function ImageModal({ image, onClose }: ImageModalProps) {
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-md" />

          <motion.div
            className="relative z-10 max-h-[92dvh] w-full overflow-hidden rounded-t-[28px] shadow-soft sm:max-w-3xl sm:rounded-[28px]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="touch-target absolute right-3 top-3 z-20 flex items-center justify-center rounded-full bg-white/90 shadow-card backdrop-blur-sm transition-transform active:scale-95"
              aria-label="Close image"
            >
              <X className="h-5 w-5 text-charcoal" />
            </button>

            <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>

            <div className="bg-white/95 px-4 py-3 backdrop-blur-sm sm:px-5 sm:py-4">
              <p className="text-sm font-medium text-charcoal sm:text-base">
                {image.alt}
              </p>
              <p className="mt-1 text-xs capitalize text-muted sm:text-sm">
                {image.category}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
