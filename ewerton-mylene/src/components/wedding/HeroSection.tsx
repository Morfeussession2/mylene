import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";


const HeroSection = () => {
  const handleScrollToDetails = () => {
    const element = document.querySelector("#evento");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#F4F1EA]"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div
          className="w-full h-[85vh] max-w-7xl bg-cover bg-center rounded-2xl shadow-xl opacity-90"
          style={{ backgroundImage: `url('/capainicial.png')` }}
        >
          {/* Gentle Overlay for Text Readability inside image if needed, or we place text outside? 
              User says "fundo atras da cor bege". Text is usually over the image. 
              Let's add a light gradient overlay on the image. */}
          <div className="absolute inset-0 bg-black/20 rounded-2xl" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-white/90 mb-6 drop-shadow-md">
            Celebre conosco
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white mb-4 tracking-wide drop-shadow-lg">
            Ewerton{" "}
            <span className="text-secondary-foreground/80">&</span>{" "}
            Mylene
          </h1>

          <div className="w-24 h-px bg-white/80 mx-auto my-8" />

          <p className="font-display text-xl md:text-2xl lg:text-3xl text-white/95 italic mb-12 drop-shadow-md">
            08 de agosto de 2025
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-20">
        <ChevronDown className="w-8 h-8 text-white/80" />
      </div>
    </section>
  );
};

export default HeroSection;
