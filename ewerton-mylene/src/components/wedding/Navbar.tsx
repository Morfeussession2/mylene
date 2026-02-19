import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "Início", href: "/#inicio" },
  { label: "Contagem regressiva", href: "/#countdown" },
  { label: "Nossa História", href: "/#historia" },
  { label: "Álbum do casal", href: "/#album" },
  { label: "RSVP", href: "/#rsvp" },
  { label: "Dress Code", href: "/#dresscode" },
  { label: "Fotos do Dia", href: "/#fotos-dia" },
  { label: "Hospedagem e passeios", href: "/hospedagem" },
  { label: "Lista de presentes", href: "/lista-de-presentes" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith("/#")) {
      const hash = href.replace("/", "");
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(hash);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="w-full px-6 md:px-12">
        <div className="flex items-center h-16 md:h-20">
          {/* Logo (Left side) */}
          <div className="flex-1 flex justify-start">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("/#inicio");
              }}
              className="font-display text-xl md:text-3xl tracking-wider hover:text-neon-blue transition-colors duration-300"
            >
              <img src="/monograma.png" alt="Logo" className="w-20 h-20" />
            </a>
          </div>

          {/* Desktop Navigation (Center) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="font-body text-xs uppercase tracking-widest text-foreground/70 hover:text-neon-blue transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button / Placeholder (Right side) */}
          <div className="flex-1 flex justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-neon-blue transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border transition-all duration-300 ${isMobileMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="container mx-auto px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="block font-body text-sm uppercase tracking-widest text-foreground/70 hover:text-neon-blue transition-colors duration-300 py-2"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
