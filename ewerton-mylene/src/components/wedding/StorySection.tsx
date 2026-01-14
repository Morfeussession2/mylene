import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";

const timelineEvents = [
  {
    year: "2019",
    title: "Primeiro Encontro",
    description:
      "Foi numa noite de verão que nossos caminhos se cruzaram. Um olhar, um sorriso, e o início de algo especial.",
    image: story1,
  },
  {
    year: "2020",
    title: "Pedido de Namoro",
    description:
      "Depois de meses de conversas e encontros, decidimos oficializar. Um jantar à luz de velas selou nosso compromisso.",
    image: story2,
  },
  {
    year: "2023",
    title: "O Pedido",
    description:
      "Com o coração acelerado, ele ajoelhou e fez a pergunta mais importante. E ela disse sim!",
    image: story3,
  },
  {
    year: "2025",
    title: "O Grande Dia",
    description:
      "E agora, estamos prontos para dar o próximo passo juntos. Uma nova jornada começa.",
    image: story4,
  },
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
              className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 md:mb-24 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Image Replacement - Text Placeholder */}
              <div className="w-full md:w-5/12 flex items-center justify-center p-8 bg-card/10 rounded-lg border border-border/50">
                <p className="font-body text-muted-foreground italic text-center">
                  (Foto substituída por texto - conteúdo a ser elaborado)
                </p>
              </div>

              {/* Center Dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-neon-blue rounded-full neon-glow z-10" />

              {/* Content */}
              <div
                className={`w-full md:w-5/12 text-center ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
              >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
