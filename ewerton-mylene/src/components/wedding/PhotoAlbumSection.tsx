import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";
import heroImage from "@/assets/hero-couple.jpg";

const photos = [
  { id: 1, src: heroImage, alt: "Ewerton & Mylene" },
  { id: 2, src: story1, alt: "Primeiro encontro" },
  { id: 3, src: story2, alt: "Jantar romântico" },
  { id: 4, src: story3, alt: "O pedido" },
  { id: 5, src: story4, alt: "Noivos felizes" },
  { id: 6, src: story1, alt: "Momentos especiais" },
];

const PhotoAlbumSection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(
    null
  );

  return (
    <section id="album" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Memórias que guardamos
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            Álbum do Casal
          </h2>
          <div className="w-16 h-px bg-neon-blue mx-auto mt-6" />
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="photo-card cursor-pointer group relative"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div
                className="overflow-hidden aspect-[4/5]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-surface-dark/0 group-hover:bg-surface-dark/40 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-dark/95 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.alt}
            className="max-w-full max-h-[90vh] object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default PhotoAlbumSection;
