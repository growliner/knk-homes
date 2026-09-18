import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import GallerySection from "@/components/WorkSample";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import SeoFaq from "@/components/SeoFaq";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C0C0C] flex flex-col">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <GallerySection />
      <ProcessSection />
      <Testimonials />
      <SeoFaq />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
