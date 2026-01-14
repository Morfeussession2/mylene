import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";

const eventDetails = {
  date: "08 de agosto de 2025",
  ceremonyTime: "16:00",
  partyTime: "18:00",
  venue: "Espaço Villa Garden",
  address: "Rua das Flores, 1234 - Jardim Primavera",
  city: "São Paulo, SP",
  mapsLink: "https://maps.google.com",
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

        {/* Event Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Date Card */}
          <div className="glass-card p-8 text-center group hover:neon-border transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-border group-hover:border-neon-blue transition-colors">
              <Calendar className="w-8 h-8 text-neon-blue" />
            </div>
            <h3 className="font-display text-xl mb-2">Data</h3>
            <p className="font-body text-muted-foreground">{eventDetails.date}</p>
          </div>

          {/* Time Card */}
          <div className="glass-card p-8 text-center group hover:neon-border transition-all duration-300">
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

          {/* Location Card */}
          <div className="glass-card p-8 text-center group hover:neon-border transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-border group-hover:border-neon-blue transition-colors">
              <MapPin className="w-8 h-8 text-neon-blue" />
            </div>
            <h3 className="font-display text-xl mb-2">Local</h3>
            <p className="font-body text-foreground font-medium mb-1">
              {eventDetails.venue}
            </p>
            <p className="font-body text-muted-foreground text-sm mb-1">
              {eventDetails.address}
            </p>
            <p className="font-body text-muted-foreground text-sm mb-4">
              {eventDetails.city}
            </p>
            <Button
              variant="minimal"
              size="sm"
              onClick={() => window.open(eventDetails.mapsLink, "_blank")}
              className="text-xs"
            >
              <ExternalLink className="w-3 h-3 mr-2" />
              Ver Mapa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
