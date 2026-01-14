import Navbar from "@/components/wedding/Navbar";
import HeroSection from "@/components/wedding/HeroSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import StorySection from "@/components/wedding/StorySection";
import EventSection from "@/components/wedding/EventSection";
import DressCodeSection from "@/components/wedding/DressCodeSection";
import GiftsSection from "@/components/wedding/GiftsSection";
import PhotoAlbumSection from "@/components/wedding/PhotoAlbumSection";
import WeddingDayPhotosSection from "@/components/wedding/WeddingDayPhotosSection";
import VideosSection from "@/components/wedding/VideosSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CountdownSection />
      <StorySection />
      <EventSection />
      <PhotoAlbumSection />
      <RSVPSection />
      <DressCodeSection />
      <WeddingDayPhotosSection />
      <Footer />
    </div>
  );
};

export default Index;
