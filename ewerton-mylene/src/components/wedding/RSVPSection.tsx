import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Send } from "lucide-react";

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    companions: "0",
    dietary: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria integrado com um backend para salvar as respostas
    console.log("RSVP submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 md:py-32 bg-surface-medium">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-neon-blue/10 border border-neon-blue">
              <Check className="w-10 h-10 text-neon-blue" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Confirmação Recebida!
            </h2>
            <p className="font-body text-muted-foreground">
              Obrigado por confirmar sua presença, {formData.name}! 
              Mal podemos esperar para celebrar com você.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 md:py-32 bg-surface-medium">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Esperamos por você
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            Confirme sua Presença
          </h2>
          <div className="w-16 h-px bg-neon-blue mx-auto mt-6" />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto glass-card p-8 md:p-10"
        >
          {/* Name */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block font-body text-xs uppercase tracking-wider text-muted-foreground mb-2"
            >
              Nome Completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border focus:border-neon-blue focus:outline-none transition-colors font-body"
              placeholder="Seu nome"
            />
          </div>

          {/* Companions */}
          <div className="mb-6">
            <label
              htmlFor="companions"
              className="block font-body text-xs uppercase tracking-wider text-muted-foreground mb-2"
            >
              Número de Acompanhantes
            </label>
            <select
              id="companions"
              name="companions"
              value={formData.companions}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border focus:border-neon-blue focus:outline-none transition-colors font-body"
            >
              <option value="0">Apenas eu</option>
              <option value="1">1 acompanhante</option>
              <option value="2">2 acompanhantes</option>
              <option value="3">3 acompanhantes</option>
              <option value="4">4+ acompanhantes</option>
            </select>
          </div>

          {/* Dietary */}
          <div className="mb-6">
            <label
              htmlFor="dietary"
              className="block font-body text-xs uppercase tracking-wider text-muted-foreground mb-2"
            >
              Restrições Alimentares
            </label>
            <input
              type="text"
              id="dietary"
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border focus:border-neon-blue focus:outline-none transition-colors font-body"
              placeholder="Vegetariano, vegano, alergias..."
            />
          </div>

          {/* Message */}
          <div className="mb-8">
            <label
              htmlFor="message"
              className="block font-body text-xs uppercase tracking-wider text-muted-foreground mb-2"
            >
              Mensagem para os Noivos (opcional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-background border border-border focus:border-neon-blue focus:outline-none transition-colors font-body resize-none"
              placeholder="Deixe sua mensagem de carinho..."
            />
          </div>

          {/* Submit */}
          <Button type="submit" variant="hero" className="w-full">
            <Send className="w-4 h-4 mr-2" />
            Confirmar Presença
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RSVPSection;
