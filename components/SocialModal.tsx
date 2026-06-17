"use client";

import { AnimatePresence, motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { type SocialPlatformConfig } from "@/lib/social-config";
import { Button } from "@/components/ui/button";
import SocialIcon from "@/components/SocialIcon";
import { cn } from "@/lib/utils";

type SocialModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  platform: SocialPlatformConfig | null;
};

export default function SocialModal({
  open,
  onOpenChange,
  platform,
}: SocialModalProps) {
  const [copied, setCopied] = useState(false);
  const [displayPlatform, setDisplayPlatform] =
    useState<SocialPlatformConfig | null>(platform);

  useEffect(() => {
    if (platform) {
      setDisplayPlatform(platform);
    }
  }, [platform]);

  useEffect(() => {
    if (!open) {
      setCopied(false);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const handleAction = async (
    action: SocialPlatformConfig["actions"][number]["action"]
  ) => {
    if (!displayPlatform) return;

    switch (action) {
      case "close":
        onOpenChange(false);
        break;
      case "open":
        if (displayPlatform.openUrl) {
          window.open(displayPlatform.openUrl, "_blank", "noopener,noreferrer");
        }
        break;
      case "call":
        if (displayPlatform.tel) {
          window.location.href = displayPlatform.tel;
        }
        break;
      case "copy":
        if (displayPlatform.copyValue) {
          await navigator.clipboard.writeText(displayPlatform.copyValue);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2000);
        }
        break;
      case "mailto":
        if (displayPlatform.mailto) {
          window.location.href = displayPlatform.mailto;
        }
        break;
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && displayPlatform && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-50 bg-black/25 backdrop-blur-[8px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.div
                className={cn(
                  "glass-card fixed inset-x-0 bottom-0 z-[60] mx-auto w-full max-w-[480px]",
                  "rounded-t-[32px] border border-white/80 px-4 pb-[max(2rem,env(safe-area-inset-bottom))] pt-3 shadow-soft sm:px-6",
                  "focus:outline-none"
                )}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 32,
                  mass: 0.8,
                }}
              >
                <Dialog.Title className="sr-only">
                  {displayPlatform.title}
                </Dialog.Title>
                <Dialog.Description className="sr-only">
                  {displayPlatform.content}
                </Dialog.Description>

                <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-primary-pink/40" />

                <div className="flex flex-col items-center text-center">
                  <div
                    className={cn(
                      "mb-4 flex h-16 w-16 items-center justify-center rounded-full shadow-card",
                      displayPlatform.id === "phone"
                        ? "bg-primary-pink text-white"
                        : cn(
                            "bg-gradient-to-br text-white",
                            displayPlatform.color
                          )
                    )}
                  >
                    <SocialIcon
                      id={displayPlatform.id}
                      className="h-7 w-7"
                    />
                  </div>

                  <h2 className="font-serif text-xl font-semibold text-charcoal sm:text-2xl">
                    {displayPlatform.title}
                  </h2>

                  <p className="mt-2 break-all px-2 text-sm text-charcoal/75 sm:text-base">
                    {displayPlatform.content}
                  </p>

                  {copied && (
                    <motion.p
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 text-sm font-medium text-primary-pink"
                    >
                      Copied!
                    </motion.p>
                  )}
                </div>

                <div className="mt-8 space-y-3">
                  {displayPlatform.actions.map((action) => (
                    <Button
                      key={action.label}
                      type="button"
                      variant={
                        action.variant === "primary" ? "primary" : "secondary"
                      }
                      className="w-full"
                      onClick={() => handleAction(action.action)}
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
