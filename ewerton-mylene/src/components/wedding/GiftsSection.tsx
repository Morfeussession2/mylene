import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Gift } from "lucide-react";

const gifts = [
  {
    id: 1,
    name: "Viagem para a Disney",
    description: "Ajude a realizar o sonho da nossa lua de mel mágica!",
    value: "R$ 500",
  },
  {
    id: 2,
    name: "Jantar Romântico",
    description: "Um jantar especial para celebrar nossa nova vida juntos.",
    value: "R$ 150",
  },
  {
    id: 3,
    name: "Noite em Hotel",
    description: "Uma noite inesquecível em um hotel 5 estrelas.",
    value: "R$ 300",
  },
  {
    id: 4,
    name: "Dia de Spa",
    description: "Um dia de relaxamento e cuidados para o casal.",
    value: "R$ 200",
  },
  {
    id: 5,
    name: "Tour Gastronômico",
    description: "Experiência culinária única em um restaurante premiado.",
    value: "R$ 250",
  },
  {
    id: 6,
    name: "Passeio de Helicóptero",
    description: "Vista aérea da cidade em uma experiência memorável.",
    value: "R$ 400",
  },
];

const GiftsSection = () => {
  const [selectedGift, setSelectedGift] = useState<(typeof gifts)[0] | null>(
    null
  );

  return (
    <section id="presentes" className="py-20 md:py-32 bg-surface-medium">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Sua presença é nosso maior presente
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light">
            Lista de Presentes
          </h2>
          <div className="w-16 h-px bg-neon-blue mx-auto mt-6 mb-8" />
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Se desejar nos presentear, escolha uma das experiências abaixo e
            contribua via Pix.
          </p>
        </div>

        {/* Gift Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {gifts.map((gift) => (
            <div key={gift.id} className="gift-card group">
              <div className="p-6 md:p-8">
                <div className="w-12 h-12 mb-4 flex items-center justify-center border border-border group-hover:border-neon-blue transition-colors">
                  <Gift className="w-6 h-6 text-neon-blue" />
                </div>
                <h3 className="font-display text-xl mb-2">{gift.name}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  {gift.description}
                </p>
                <p className="font-body text-lg text-neon-blue font-medium mb-6">
                  {gift.value}
                </p>
                <Button
                  variant="neon"
                  className="w-full"
                  onClick={() => setSelectedGift(gift)}
                >
                  Presentear
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedGift && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-dark/90 backdrop-blur-sm"
          onClick={() => setSelectedGift(null)}
        >
          <div
            className="bg-background w-full max-w-md p-8 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-display text-2xl">{selectedGift.name}</h3>
              <button
                onClick={() => setSelectedGift(null)}
                className="p-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="font-body text-muted-foreground mb-6">
              {selectedGift.description}
            </p>

            <div className="text-center mb-6">
              <p className="font-body text-sm uppercase tracking-wider text-muted-foreground mb-2">
                Valor sugerido
              </p>
              <p className="font-display text-3xl text-neon-blue">
                {selectedGift.value}
              </p>
            </div>

            {/* QR Code Placeholder */}
            <div className="bg-surface-medium p-6 text-center mb-6">
              <div className="w-40 h-40 mx-auto mb-4 bg-foreground/10 flex items-center justify-center border border-border">
                <span className="font-body text-xs text-muted-foreground">
                  QR Code Pix
                </span>
              </div>
              <p className="font-body text-sm text-muted-foreground">
                Chave Pix: email@exemplo.com
              </p>
            </div>

            <p className="font-body text-xs text-muted-foreground text-center">
              Escaneie o QR Code ou use a chave Pix acima para realizar sua
              contribuição.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GiftsSection;
