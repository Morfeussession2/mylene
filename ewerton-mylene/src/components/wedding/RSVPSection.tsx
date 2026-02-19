import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Send, X } from "lucide-react";
import { toast } from "sonner";

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    shoeSize: "",
    companions: "0",
    dietary: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showShoeModal, setShowShoeModal] = useState(false);

  const shoeSizes = ["33/34", "35/36", "37/38", "39/40", "41/42"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.gender) {
      toast.error("Por favor, selecione seu gênero.");
      return;
    }

    if (formData.gender === "Mulher" && !formData.shoeSize) {
      setShowShoeModal(true);
      return;
    }

    setIsSubmitting(true);
    try {
      const dataToSend = {
        data: new Date().toLocaleString("pt-BR"),
        nome: formData.name,
        genero: formData.gender,
        tamanho_chinelo: formData.shoeSize || "-",
        acompanhantes: formData.companions,
        restricoes: formData.dietary,
        mensagem: formData.message,
      };

      const response = await fetch(
        "https://api.sheetbest.com/sheets/ca072f8a-5c8f-429e-96ca-853cecaa9626",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Presença confirmada com sucesso!");
      } else {
        throw new Error("Erro ao enviar");
      }
    } catch (error) {
      console.error("RSVP error:", error);
      toast.error("Ocorreu um erro ao confirmar sua presença. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
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
    <section id="rsvp" className="py-20 md:py-32 bg-[#94AA7D]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#F7F1E7] font-body uppercase tracking-[0.3em] mb-4">
            Esperamos por você
          </p>
          <h2 className="font-display text-4xl text-[#F7F1E7] md:text-5xl lg:text-6xl font-light">
            Confirme sua Presença
          </h2>
          <div className="w-16 h-px bg-neon-blue mx-auto mt-6" />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto glass-card p-8 md:p-10"
        >
          {/* Name & Gender */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block font-body text-xs uppercase tracking-wider text-muted-foreground mb-2"
            >
              Nome Completo *
            </label>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="flex-1 px-4 py-3 bg-background border border-border focus:border-neon-blue focus:outline-none transition-colors font-body"
                placeholder="Seu nome"
              />
              <div className="flex gap-2 h-[50px]">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, gender: "Homem", shoeSize: "" })}
                  className={`flex-1 md:w-24 border transition-all duration-300 flex items-center justify-center font-body text-xs uppercase tracking-widest ${formData.gender === "Homem"
                    ? "bg-neon-blue text-white border-neon-blue"
                    : "border-border text-muted-foreground hover:border-neon-blue/50"
                    }`}
                >
                  Homem
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, gender: "Mulher" });
                    setShowShoeModal(true);
                  }}
                  className={`flex-1 md:w-24 border transition-all duration-300 flex items-center justify-center font-body text-xs uppercase tracking-widest ${formData.gender === "Mulher"
                    ? "bg-neon-blue text-white border-neon-blue"
                    : "border-border text-muted-foreground hover:border-neon-blue/50"
                    }`}
                >
                  Mulher
                </button>
              </div>
            </div>
            {formData.gender === "Mulher" && formData.shoeSize && (
              <p className="mt-2 font-body text-xs text-neon-blue">
                Tamanho do chinelo selecionado: <strong>{formData.shoeSize}</strong>
              </p>
            )}
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
          <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin h-4 w-4 mr-3 border-2 border-white/30 border-t-white rounded-full" viewBox="0 0 24 24"></svg>
                Processando...
              </span>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Confirmar Presença
              </>
            )}
          </Button>
        </form>

        {/* Shoe Size Modal */}
        {showShoeModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-surface-dark/90 backdrop-blur-sm">
            <div className="bg-background w-full max-w-sm p-8 animate-scale-in relative border border-border">
              <button
                onClick={() => setShowShoeModal(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-6">
                <h3 className="font-display text-2xl mb-2">Tamanho do Chinelo</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Escolha seu tamanho para ganhar um mimo especial no dia!
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {shoeSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setFormData({ ...formData, shoeSize: size });
                      setShowShoeModal(false);
                    }}
                    className={`py-3 border transition-all duration-300 font-body ${formData.shoeSize === size
                      ? "bg-neon-blue text-white border-neon-blue"
                      : "border-border hover:border-neon-blue/50"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RSVPSection;
