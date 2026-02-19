import { Instagram, Facebook, ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 md:py-16 bg-[#F7F1E7] text-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Logo / Names */}
          <h3 className="font-display text-4xl md:text-5xl mb-4 tracking-wide whitespace-nowrap">
            <img src="/Brasão.png" alt="Logo" className="w-48 h-48" />
          </h3>

          {/* Info Row below Crest */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-4 opacity-80">
            <p className="font-body text-sm italic">
              Com amor, eternamente
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="p-2 border border-foreground/20 hover:border-foreground hover:text-foreground transition-colors rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 hover:opacity-100 transition-opacity"
            >
              <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              <span className="font-body text-xs uppercase tracking-wider">
                Voltar ao topo
              </span>
            </button>

            {/* Copyright */}
            <p className="font-body text-xs">
              08.08.2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
