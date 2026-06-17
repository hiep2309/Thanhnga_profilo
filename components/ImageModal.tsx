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
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-md" />

          <motion.div
            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-[28px] shadow-soft"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-card backdrop-blur-sm transition-transform active:scale-95"
              aria-label="Close image"
            >
              <X className="h-5 w-5 text-charcoal" />
            </button>

            <div className="relative aspect-[4/5] w-full md:aspect-[3/4]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>

            <div className="bg-white/95 px-5 py-4 backdrop-blur-sm">
              <p className="font-medium text-charcoal">{image.alt}</p>
              <p className="mt-1 text-sm capitalize text-muted">
                {image.category}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
