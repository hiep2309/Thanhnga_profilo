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
    <FadeIn id="contact" className="py-10 md:py-14">
      <SectionHeader title="Contact" />

      <p className="mb-6 font-serif text-2xl font-medium text-charcoal md:text-3xl">
        Let&apos;s connect! <span className="text-primary-pink">♡</span>
      </p>

      <div className="space-y-3">
        {socialPlatformConfigs.map((platform, index) => (
          <FadeInItem key={platform.id} delay={index * 0.08}>
            <motion.button
              type="button"
              onClick={() => openModal(platform.id)}
              className="glass-card flex w-full items-center gap-4 rounded-[24px] p-4 text-left shadow-card transition-shadow hover:shadow-soft md:rounded-[28px] md:p-5"
              whileHover={{ x: 4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${platform.color} text-white shadow-card md:h-14 md:w-14`}
              >
                <SocialIcon
                  id={platform.id}
                  className="h-5 w-5 md:h-6 md:w-6"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-semibold text-charcoal">{platform.title}</p>
                <p className="truncate text-sm text-muted">{platform.content}</p>
              </div>
            </motion.button>
          </FadeInItem>
        ))}
      </div>
    </FadeIn>
  );
}
