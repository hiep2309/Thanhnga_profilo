"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type SocialPlatformId } from "@/lib/social-config";
import { Button } from "@/components/ui/button";
import SocialIcon from "@/components/SocialIcon";
import { useSocialModal } from "@/components/social/SocialModalProvider";

type SocialButtonProps = {
  platformId: SocialPlatformId;
  label: string;
  variant?: "hero-primary" | "hero-outline";
  className?: string;
  index?: number;
};

export default function SocialButton({
  platformId,
  label,
  variant = "hero-outline",
  className,
  index = 0,
}: SocialButtonProps) {
  const { openModal } = useSocialModal();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + index * 0.08, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(variant === "hero-primary" && "col-span-2", className)}
    >
      <Button
        type="button"
        variant={variant === "hero-primary" ? "social" : "social-outline"}
        className={cn(
          "w-full gap-2",
          variant === "hero-primary" &&
            "border-0 bg-primary-pink text-white hover:bg-primary-pink/90"
        )}
        onClick={() => openModal(platformId)}
      >
        <SocialIcon id={platformId} className="h-4 w-4 shrink-0" />
        {label}
      </Button>
    </motion.div>
  );
}
