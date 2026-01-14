import Navbar from "@/components/wedding/Navbar";
import Footer from "@/components/wedding/Footer";
import { MapPin, Hotel, Compass } from "lucide-react";

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

                    <div className="max-w-4xl mx-auto space-y-16">
                        {/* Hospedagem */}
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 flex items-center justify-center border border-neon-blue rounded-full">
                                    <Hotel className="w-6 h-6 text-neon-blue" />
                                </div>
                                <h2 className="font-display text-3xl">Onde Ficar</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="glass-card p-6">
                                    <h3 className="font-display text-xl mb-2">Hotel Recomendado 1</h3>
                                    <p className="font-body text-muted-foreground text-sm mb-4">
                                        Localizado a 5 minutos do local do evento. Oferece café da manhã e estacionamento.
                                    </p>
                                    <div className="flex items-center text-neon-blue text-sm">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        <span>Endereço do Hotel, 123</span>
                                    </div>
                                </div>

                                <div className="glass-card p-6">
                                    <h3 className="font-display text-xl mb-2">Pousada Charme</h3>
                                    <p className="font-body text-muted-foreground text-sm mb-4">
                                        Ambiente aconchegante e familiar. Ótima opção para quem busca tranquilidade.
                                    </p>
                                    <div className="flex items-center text-neon-blue text-sm">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        <span>Rua das Flores, 456</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Passeios */}
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 flex items-center justify-center border border-neon-blue rounded-full">
                                    <Compass className="w-6 h-6 text-neon-blue" />
                                </div>
                                <h2 className="font-display text-3xl">Passeios Sugeridos</h2>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="glass-card p-6">
                                    <h3 className="font-display text-lg mb-2">Ponto Turístico 1</h3>
                                    <p className="font-body text-muted-foreground text-sm">
                                        Uma vista incrível da cidade. Ideal para fotos no pôr do sol.
                                    </p>
                                </div>
                                <div className="glass-card p-6">
                                    <h3 className="font-display text-lg mb-2">Restaurante Típico</h3>
                                    <p className="font-body text-muted-foreground text-sm">
                                        Experimente a culinária local neste restaurante tradicional.
                                    </p>
                                </div>
                                <div className="glass-card p-6">
                                    <h3 className="font-display text-lg mb-2">Parque da Cidade</h3>
                                    <p className="font-body text-muted-foreground text-sm">
                                        Ótimo para uma caminhada relaxante antes da cerimônia.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Mapa Placeholder */}
                        <section className="mt-16">
                            <div className="glass-card p-4 h-96 flex items-center justify-center bg-surface-medium">
                                <div className="text-center">
                                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                    <p className="font-body text-muted-foreground">Mapa de Localização (Placeholder)</p>
                                </div>
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
