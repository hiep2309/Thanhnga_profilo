"use client";

import { motion } from "framer-motion";
import { socialPlatformConfigs } from "@/lib/social-config";
import { useSocialModal } from "@/components/social/SocialModalProvider";
import FadeIn, { FadeInItem } from "./FadeIn";
import SectionHeader from "./SectionHeader";
import SocialIcon from "./SocialIcon";

export default function ContactSection() {
  const { openModal } = useSocialModal();

  return (
    <FadeIn id="contact" className="py-8 sm:py-10 md:py-14">
      <SectionHeader title="Contact" />

      <p className="mb-5 font-serif text-xl font-medium text-charcoal sm:mb-6 sm:text-2xl md:text-3xl">
        Let&apos;s connect! <span className="text-primary-pink">♡</span>
      </p>

      <div className="space-y-2.5 sm:space-y-3">
        {socialPlatformConfigs.map((platform, index) => (
          <FadeInItem key={platform.id} delay={index * 0.08}>
            <motion.button
              type="button"
              onClick={() => openModal(platform.id)}
              className="glass-card flex w-full min-h-[64px] items-center gap-3 rounded-[20px] p-3.5 text-left shadow-card active:scale-[0.99] sm:min-h-[72px] sm:gap-4 sm:rounded-[24px] sm:p-4 md:rounded-[28px] md:p-5"
              whileTap={{ scale: 0.98 }}
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br sm:h-12 sm:w-12 sm:rounded-2xl md:h-14 md:w-14 ${platform.color} text-white shadow-card`}
              >
                <SocialIcon
                  id={platform.id}
                  className="h-5 w-5 md:h-6 md:w-6"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-charcoal sm:text-base">
                  {platform.title}
                </p>
                <p className="truncate text-xs text-muted sm:text-sm">
                  {platform.content}
                </p>
              </div>
            </motion.button>
          </FadeInItem>
        ))}
      </div>
    </FadeIn>
  );
}
