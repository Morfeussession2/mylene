import { Instagram, Facebook, ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 md:py-16 bg-surface-dark text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Logo / Names */}
          <h3 className="font-display text-3xl md:text-4xl mb-4 tracking-wide">
            Ewerton <span className="neon-text">&</span> Mylene
          </h3>

          <p className="font-body text-sm text-primary-foreground/60 mb-8">
            Com amor, eternamente
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6 mb-10">
            <a
              href="#"
              className="p-2 border border-primary-foreground/20 hover:border-neon-blue hover:text-neon-blue transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-primary-foreground/20 mb-8" />

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-neon-blue transition-colors"
          >
            <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            <span className="font-body text-xs uppercase tracking-wider">
              Voltar ao topo
            </span>
          </button>

          {/* Copyright */}
          <p className="mt-10 font-body text-xs text-primary-foreground/40">
            08.08.2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
