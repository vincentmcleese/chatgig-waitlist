import { Hero } from "@/components/sections/Hero";
import { VideoDemo } from "@/components/sections/VideoDemo";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <VideoDemo />
      <Features />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
}
