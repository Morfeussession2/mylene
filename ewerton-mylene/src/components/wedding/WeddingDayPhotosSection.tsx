import { Button } from "@/components/ui/button";
import { ExternalLink, Image } from "lucide-react";

const WeddingDayPhotosSection = () => {
  // Placeholder - será substituído pelo link do Google Drive após o casamento
  const googleDriveLink = "#";
  const hasPhotos = false;

  return (
    <section id="fotos-dia" className="py-20 md:py-32 bg-surface-medium">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Registros do nosso dia especial
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            POV / Fotos da sua visão do dia
          </h2>
          <div className="w-16 h-px bg-neon-blue mx-auto mt-6" />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center">
          {hasPhotos ? (
            // Quando houver fotos do casamento
            <div>
              {/* Grid de fotos do Google Drive será renderizado aqui */}
              <p className="font-body text-muted-foreground mb-6">
                Confira todas as fotos oficiais do nosso casamento!
              </p>
              <Button
                variant="neon"
                size="lg"
                onClick={() => window.open(googleDriveLink, "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver Álbum Completo
              </Button>
            </div>
          ) : (
            // Placeholder antes do casamento
            <div className="glass-card p-12 md:p-16">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center border border-border">
                <Image className="w-10 h-10 text-neon-blue" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4">
                Em Breve
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
                Após o casamento, as fotos oficiais estarão disponíveis aqui.
                Fique atento para reviver cada momento especial!
              </p>
              <div className="inline-block px-4 py-2 border border-border bg-surface-medium">
                <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                  <span className="text-neon-blue">●</span> Inserir link do
                  álbum do Google Drive aqui
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WeddingDayPhotosSection;
