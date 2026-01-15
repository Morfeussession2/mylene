import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";
import { Reveal } from "@/components/ui/Reveal";

const timelineEvents = [
  {
    title: "Teste",
    description:
      "Foi numa noite de verão que nossos caminhos se cruzaram. Um olhar, um sorriso, e o início de algo especial.",
    image: story1,
  }
];

const StorySection = () => {
  return (
    <section id="historia" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Conheça nossa jornada
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            Nossa História
          </h2>
          <div className="w-16 h-px bg-neon-blue mx-auto mt-6" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px timeline-line" />

          {timelineEvents.map((event, index) => (
            <div
              key={event.year}
              className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-24 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Image Block */}
              <div className={`w-full md:w-1/2 flex items-center justify-center ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}>
                <Reveal variant="zoom-in" delay={0.2} width="100%">
                  <div className="w-full flex items-center justify-center p-8 bg-card/10 rounded-lg border border-border/50">
                    <img src={event.image} alt={event.title} className="max-w-full h-auto rounded-md shadow-md hover:scale-105 transition-transform duration-500" />
                  </div>
                </Reveal>
              </div>

              {/* Center Dot */}
              <Reveal variant="zoom-in" delay={0.4} className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                <div className="w-4 h-4 bg-neon-blue rounded-full neon-glow" />
              </Reveal>

              {/* Content Block */}
              <div
                className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12 text-left" : "md:pr-12 md:text-right"
                  }`}
              >
                <Reveal variant="fade-up" delay={0.3} width="100%">
                  <div>
                    <span className="inline-block font-display text-4xl md:text-5xl text-neon-blue mb-2">
                      {event.year}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl mb-4">
                      {event.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
