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
      <main className="relative min-h-screen pb-28 md:pb-12">
        <FloatingDecorations />
        <div className="relative z-10 mx-auto max-w-2xl px-5 md:max-w-4xl md:px-8 lg:max-w-5xl">
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
