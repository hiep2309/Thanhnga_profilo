"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  type SocialPlatformId,
  socialPlatformMap,
} from "@/lib/social-config";
import SocialModal from "../SocialModal";

type SocialModalContextValue = {
  openModal: (platformId: SocialPlatformId) => void;
  closeModal: () => void;
  activePlatform: SocialPlatformId | null;
  isOpen: boolean;
};

const SocialModalContext = createContext<SocialModalContextValue | null>(null);

export function SocialModalProvider({ children }: { children: ReactNode }) {
  const [activePlatform, setActivePlatform] = useState<SocialPlatformId | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback((platformId: SocialPlatformId) => {
    setActivePlatform(platformId);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpenChange = useCallback((open: boolean) => {
    setIsOpen(open);
    if (!open) {
      window.setTimeout(() => setActivePlatform(null), 350);
    }
  }, []);

  const value = useMemo(
    () => ({
      openModal,
      closeModal,
      activePlatform,
      isOpen,
    }),
    [openModal, closeModal, activePlatform, isOpen]
  );

  const platform = activePlatform
    ? socialPlatformMap[activePlatform]
    : null;

  return (
    <SocialModalContext.Provider value={value}>
      {children}
      <SocialModal
        open={isOpen}
        onOpenChange={handleOpenChange}
        platform={platform}
      />
    </SocialModalContext.Provider>
  );
}

export function useSocialModal() {
  const context = useContext(SocialModalContext);
  if (!context) {
    throw new Error("useSocialModal must be used within SocialModalProvider");
  }
  return context;
}
