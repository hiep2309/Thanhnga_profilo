import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Memories from "@/components/Memories";
import Favorites from "@/components/Favorites";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingDecorations from "@/components/FloatingDecorations";
import { SocialModalProvider } from "@/components/social/SocialModalProvider";

export default function Home() {
  return (
    <SocialModalProvider>
      <main className="mobile-page relative min-h-[100dvh] md:pb-12">
        <FloatingDecorations />
        <div className="mobile-container relative z-10 mx-auto w-full max-w-[430px] px-4 sm:max-w-lg sm:px-5 md:max-w-4xl md:px-8 lg:max-w-5xl">
          <Hero />
          <About />
          <Gallery />
          <Memories />
          <Favorites />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </SocialModalProvider>
  );
}
