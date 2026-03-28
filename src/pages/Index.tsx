import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import GallerySection from "@/components/GallerySection";
import VideoSection from "@/components/VideoSection";
import MessageSection from "@/components/MessageSection";
import DuaSection from "@/components/DuaSection";
import FamilyNote from "@/components/FamilyNote";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <main className="bg-alabaster overflow-x-hidden">
      <HeroSection />
      <StorySection />
      <GallerySection />
      <VideoSection />
      <MessageSection />
      <DuaSection />
      <FamilyNote />
      <SiteFooter />
    </main>
  );
};

export default Index;
