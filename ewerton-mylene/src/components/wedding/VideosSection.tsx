import { Play } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Save the Date",
    description: "Nosso convite especial para você",
    thumbnail: null, // Placeholder - URL do thumbnail será inserida depois
    embedUrl: "", // URL do YouTube/Vimeo será inserida depois
  },
  {
    id: 2,
    title: "Nossa História em Vídeo",
    description: "A jornada até aqui",
    thumbnail: null,
    embedUrl: "",
  },
  {
    id: 3,
    title: "Making Of",
    description: "Bastidores do ensaio fotográfico",
    thumbnail: null,
    embedUrl: "",
  },
  {
    id: 4,
    title: "Trailer do Casamento",
    description: "Em breve - após o grande dia",
    thumbnail: null,
    embedUrl: "",
  },
];

const VideosSection = () => {
  return (
    <section id="videos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Nossa história em movimento
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            Vídeos
          </h2>
          <div className="w-16 h-px bg-neon-blue mx-auto mt-6" />
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-surface-dark mb-4 overflow-hidden">
                {video.thumbnail ? (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-body text-xs uppercase tracking-wider text-primary-foreground/40">
                      Vídeo em breve
                    </span>
                  </div>
                )}
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-surface-dark/30 group-hover:bg-surface-dark/50 transition-colors duration-300">
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-2 border-primary-foreground/50 group-hover:border-neon-blue group-hover:neon-glow transition-all duration-300">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground fill-primary-foreground ml-1" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <h3 className="font-display text-xl mb-1 group-hover:text-neon-blue transition-colors">
                {video.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {video.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
