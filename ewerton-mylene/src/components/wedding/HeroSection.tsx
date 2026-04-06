import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";


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
      {/* Background Image - Full Screen */}
      <div className="absolute inset-0 bg-[#FCEFE3]" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/capainicial2.png')` }}
      >
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* Content - Ajuste o valor de -translate-y-X para mover o texto para cima ou para baixo */}
      <div style={{ transform: 'translateY(-9rem)' }} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <Reveal variant="fade-in" delay={0.2} width="100%">
            <p className="font-secondary text-2xl md:text-4xl text-[#ffff] mb-6 drop-shadow-md">
              Celebre conosco
            </p>
          </Reveal>

          <Reveal variant="elastic-text" delay={0.4} width="100%">
            <h1 className="font-display inline-block text-4xl md:text-8xl lg:text-8xl lg:whitespace-nowrap lg:-translate-x-32 font-light text-[#ffff] mb-4 tracking-wide drop-shadow-lg text-left">
              Ewerton{" "}
              <span className="text-[#ffff] text-center">&</span>{" "}
              Mylene
            </h1>
          </Reveal>

          <div className="w-24 h-px bg-[#ffff] mx-auto my-8" />


        </div>
      </div>

      {/* Scroll Indicator */}
      <Reveal variant="fade-in" delay={1.0} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="animate-float">
          <ChevronDown className="w-8 h-8 text-white/80" />
        </div>
      </Reveal>
    </section>
  );
};

export default HeroSection;
