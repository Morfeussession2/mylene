import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const eventDetails = {
  date: "08 de agosto de 2026",
  ceremonyTime: "16:00",
  partyTime: "18:00",
  venue: "Vale Jardins",
  address: "Estr. da Batalha, 200 - Campo Grande",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Estr.+da+Batalha,+200+-+Campo+Grande",
};

const EventSection = () => {
  return (
    <section id="evento" className="py-20 md:py-32 bg-surface-medium">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Marque na agenda
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            O Grande Dia
          </h2>
          <div className="w-16 h-px bg-neon-blue mx-auto mt-6" />
        </div>

        {/* Event Cards Container */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Top Row: Date and Time */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Date Card */}
            <Reveal variant="fade-up" delay={0.2} className="h-full" width="100%">
              <div className="glass-card p-8 text-center group hover:neon-border transition-all duration-300 h-full">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-border group-hover:border-neon-blue transition-colors">
                  <Calendar className="w-8 h-8 text-neon-blue" />
                </div>
                <h3 className="font-display text-xl mb-2">Data</h3>
                <p className="font-body text-muted-foreground">{eventDetails.date}</p>
              </div>
            </Reveal>

            {/* Time Card */}
            <Reveal variant="fade-up" delay={0.3} className="h-full" width="100%">
              <div className="glass-card p-8 text-center group hover:neon-border transition-all duration-300 h-full">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-border group-hover:border-neon-blue transition-colors">
                  <Clock className="w-8 h-8 text-neon-blue" />
                </div>
                <h3 className="font-display text-xl mb-2">Horário</h3>
                <p className="font-body text-muted-foreground mb-1">
                  Cerimônia: {eventDetails.ceremonyTime}
                </p>
                <p className="font-body text-muted-foreground">
                  Festa: {eventDetails.partyTime}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Bottom Row: Location with Map */}
          <div className="glass-card p-8 group hover:neon-border transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1 text-center lg:text-left">
                <div className="w-16 h-16 mx-auto lg:mx-0 mb-6 flex items-center justify-center border border-border group-hover:border-neon-blue transition-colors">
                  <MapPin className="w-8 h-8 text-neon-blue" />
                </div>
                <h3 className="font-display text-2xl mb-4">Local</h3>
                <p className="font-body text-foreground font-medium text-lg mb-2">
                  {eventDetails.venue}
                </p>
                <p className="font-body text-muted-foreground mb-6">
                  {eventDetails.address}
                </p>
                <Button
                  variant="minimal"
                  size="default"
                  onClick={() => window.open(eventDetails.mapsLink, "_blank")}
                  className="mb-4"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Abrir no Google Maps
                </Button>
              </div>

              <div className="w-full lg:w-2/3 h-[300px] rounded-lg overflow-hidden border border-border/50">
                <iframe
                  title="Mapa do Local"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(eventDetails.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                />
                {/* Note: I'm using a fallback search URL or a simple placeholder if they don't have an API key configured. 
                    Actually, for standard embeds without API keys, we use the public embed URL. */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
