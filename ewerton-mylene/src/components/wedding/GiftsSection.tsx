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
    name: "Cobertor para a noiva estar sempre coberta de razão",
    description: "Cobertor para a noiva estar sempre coberta de razão, garantindo que ela se sinta confortável e protegida em todas as situações, especialmente quando estiver lidando com as opiniões e conselhos bem-intencionados, mas às vezes desnecessários, dos outros.",
    value: "R$ 150",
  },
  {
    id: 3,
    name: "Dose de paciência para o noivo",
    description: "Dose de paciência para o noivo, para que ele possa lidar com as situações do casamento e da vida a dois com calma, compreensão e serenidade, mesmo quando as coisas não saírem exatamente como planejado.",
    value: "R$ 300",
  },
  {
    id: 4,
    name: "Academia para o noivo continuar fortao",
    description: "Academia para o noivo continuar fortao, garantindo que ele esteja em forma e cheio de energia para aproveitar cada momento da festa e da vida a dois.",
    value: "R$ 200",
  },
  {
    id: 5,
    name: "Alvara para meter o louco na festa",
    description: "Alvará para meter o louco na festa, garantindo que a celebração seja animada e cheia de diversão do início ao fim.",
    value: "R$ 250",
  },
  {
    id: 6,
    name: "Passeio de Helicóptero",
    description: "Vista aérea da cidade em uma experiência memorável.",
    value: "R$ 400",
  },
  {
    id: 7,
    name: "Ajude a pagar a hora extra da festal",
    description: "Ajude a pagar a hora extra da festa para que possamos aproveitar cada momento sem nos preocupar com o horário de encerramento.",
    value: "R$ 800",
  },
  {
    id: 8,
    name: "Deus tocou no seu coração ",
    description: "Deus tocou no seu coração e você deseja nos presentear de uma forma especial? Entre em contato conosco para conversarmos sobre como podemos tornar isso possível.",
    value: "R$ 1200",
  },
  {
    id: 9,
    name: "Primeiro lugar na fila do buffet",
    description: "Primeiro lugar na fila do buffet para garantir que você seja o primeiro a saborear as delícias preparadas para a festa.",
    value: "R$ 450",
  },
  {
    id: 10,
    name: "Taxa para a noiva não jogar o buquê na sua namorada",
    description: "Taxa para a noiva não jogar o buquê na sua namorada, garantindo que ela tenha uma noite tranquila e sem surpresas indesejadas.",
    value: "R$ 600",
  },
  {
    id: 11,
    name: "Taxa para jogar o buquê na sua direção",
    description: "Taxa para jogar o buquê na sua direção, aumentando suas chances de ser a próxima a casar e garantindo uma noite divertida e cheia de emoção.",
    value: "R$ 180",
  },
  {
    id: 12,
    name: "So pra não dizer que não dei nada",
    description: "So pra não dizer que não dei nada, um presente simbólico para mostrar nosso carinho e gratidão pela sua presença em nosso grande dia.",
    value: "R$ 120",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
              <p className="font-body text-lg text-muted-foreground">
                Chave Pix: 4be30297-5b6f-4a6e-897a-f6f93b20620a
              </p>
            </div>

            <p className="font-body text-xs text-muted-foreground text-center">
              Use a chave Pix acima para realizar sua
              contribuição.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GiftsSection;
