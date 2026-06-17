"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Camera, Heart, Home, Mail } from "lucide-react";
import { navItems } from "@/lib/data";

const iconMap = {
  home: Home,
  gallery: Camera,
  memories: Heart,
  contact: Mail,
};

export default function BottomNavigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems.map((item) => item.id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -48% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 md:hidden"
      aria-label="Main navigation"
    >
      <div className="glass-card mx-auto flex max-w-[430px] items-center justify-around rounded-[28px] px-1 py-1.5 shadow-soft backdrop-blur-xl">
        {navItems.map((item) => {
          const Icon = iconMap[item.id as keyof typeof iconMap];
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.href, item.id)}
              className="relative flex min-h-[52px] min-w-[64px] flex-1 flex-col items-center justify-center gap-0.5 rounded-2xl px-2 py-1.5 transition-colors"
              aria-current={isActive ? "page" : undefined}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-1 rounded-2xl bg-primary-pink/25"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon
                className={`relative h-5 w-5 transition-colors ${
                  isActive ? "text-primary-pink" : "text-charcoal/45"
                }`}
              />
              <span
                className={`relative text-[10px] font-semibold transition-colors ${
                  isActive ? "text-primary-pink" : "text-charcoal/45"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
