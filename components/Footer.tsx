"use client";

import FadeIn from "./FadeIn";

export default function Footer() {
  return (
    <FadeIn className="py-10 pb-6 text-center md:py-14">
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-b from-secondary-pink/70 to-lavender/40 px-6 py-10 shadow-card">
        <svg
          viewBox="0 0 400 40"
          className="absolute inset-x-0 -top-px w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 40 Q100 0 200 20 T400 40 L400 0 L0 0 Z"
            fill="#FFF8F8"
          />
        </svg>

        <p className="font-script relative text-2xl text-charcoal md:text-3xl">
          Thank you for visiting! <span className="text-primary-pink">♡</span>
        </p>
        <p className="relative mt-3 text-xs text-muted md:text-sm">
          © {new Date().getFullYear()} Thanh Ngà. All rights reserved.
        </p>
      </div>
    </FadeIn>
  );
}
