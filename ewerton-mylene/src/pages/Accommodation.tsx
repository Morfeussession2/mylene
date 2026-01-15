import Navbar from "@/components/wedding/Navbar";
import Footer from "@/components/wedding/Footer";
import { MapPin, Hotel, Compass } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const hotels = [
    {
        name: "MAR Hotéis & Flats",
        highlight: "Melhor custo-benefício",
        description: "Café da manhã completo, estacionamento, WiFi. Avaliações excelentes (atendimento e limpeza).",
        icon: <Hotel className="w-6 h-6 text-neon-blue" />,
    },
    {
        name: "Hotel Casa Bonita",
        highlight: "A partir de R$ 239/diária",
        description: "Próximo à estação Campo Grande. Bom custo-benefício.",
        icon: <Hotel className="w-6 h-6 text-neon-blue" />,
    },
    {
        name: "Stone House (Pousada)",
        highlight: "Em Campo Grande",
        description: "Aconchegante e acessível. Ótimo para casais.",
        icon: <Hotel className="w-6 h-6 text-neon-blue" />,
    },
];

const tours = [
    {
        name: "Cachoeira do Mendanha",
        highlight: "Trilhas e cachoeiras",
        description: "Natureza pura, fácil acesso.",
    },
    {
        name: "Mirante da Posse",
        highlight: "Pôr do sol panorâmico",
        description: "Vista completa de Campo Grande. Acesso pela R. Francisco Fernandes da Cunha.",
    },
    {
        name: "Calçadão de Campo Grande",
        highlight: "Compras e Artesanato",
        description: "Mercado São Braz (pastel de jacaré famoso). Cultura e gastronomia.",
    },
];

const Accommodation = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-24 pb-20">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                            Dicas para sua estadia
                        </p>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
                            Hospedagem e Passeios
                        </h1>
                        <div className="w-24 h-px bg-neon-blue mx-auto mt-6" />
                    </div>

                    <div className="max-w-5xl mx-auto space-y-20">
                        {/* Hospedagem */}
                        <section>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 flex items-center justify-center border border-neon-blue rounded-full">
                                    <Hotel className="w-6 h-6 text-neon-blue" />
                                </div>
                                <h2 className="font-display text-3xl">Onde Ficar</h2>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {hotels.map((hotel, index) => (
                                    <Reveal key={hotel.name} variant="fade-up" delay={index * 0.1} className="h-full" width="100%">
                                        <div className="glass-card p-6 flex flex-col h-full border border-border/50 hover:border-neon-blue transition-colors duration-300">
                                            <h3 className="font-display text-xl mb-1">{hotel.name}</h3>
                                            <p className="text-neon-blue text-xs uppercase tracking-wider mb-4 font-medium">
                                                {hotel.highlight}
                                            </p>
                                            <p className="font-body text-muted-foreground text-sm leading-relaxed">
                                                {hotel.description}
                                            </p>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </section>

                        {/* Passeios */}
                        <section>
                            <div className="flex items-center gap-4 mb-10">
                                <Reveal variant="zoom-in" delay={0.2}>
                                    <div className="w-12 h-12 flex items-center justify-center border border-neon-blue rounded-full">
                                        <Compass className="w-6 h-6 text-neon-blue" />
                                    </div>
                                </Reveal>
                                <Reveal variant="fade-in" delay={0.3}>
                                    <h2 className="font-display text-3xl">O que fazer em Campo Grande</h2>
                                </Reveal>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {tours.map((tour, index) => (
                                    <Reveal key={tour.name} variant="fade-up" delay={index * 0.1} className="h-full" width="100%">
                                        <div className="glass-card p-6 flex flex-col h-full border border-border/50 hover:border-neon-blue transition-colors duration-300">
                                            <h3 className="font-display text-xl mb-1">{tour.name}</h3>
                                            <p className="text-neon-blue text-xs uppercase tracking-wider mb-4 font-medium">
                                                {tour.highlight}
                                            </p>
                                            <p className="font-body text-muted-foreground text-sm leading-relaxed">
                                                {tour.description}
                                            </p>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </section>

                        {/* Mapa */}
                        <section className="pt-10">
                            <div className="text-center mb-8">
                                <h3 className="font-display text-2xl mb-2">Explore a Região</h3>
                                <p className="font-body text-muted-foreground text-sm">Mapa dos arredores de Campo Grande</p>
                            </div>
                            <div className="glass-card p-2 rounded-xl h-[450px] overflow-hidden border border-border/50">
                                <iframe
                                    title="Mapa Regional"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    src="https://maps.google.com/maps?q=Campo+Grande+Rio+de+Janeiro&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Accommodation;
