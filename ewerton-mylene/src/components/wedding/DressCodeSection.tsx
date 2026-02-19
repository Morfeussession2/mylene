const DressCodeSection = () => {
  return (
    <section id="dresscode" className="py-20 md:py-32 bg-[#E8E8E2]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body uppercase tracking-[0.3em] mb-4">
            O que vestir
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light">
            Dress Code
          </h2>
          <div className="w-16 h-px bg-neon-blue mx-auto mt-6" />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card p-10 md:p-16">
            <h3 className="font-display text-3xl md:text-4xl mb-6">
              Traje Esporte Fino
            </h3>

            <p className="font-body text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
              Pedimos aos nossos queridos convidados que compareçam com traje esporte fino.
              Elegância e conforto para celebrar conosco este momento especial.
            </p>

            {/* Visual Guide */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Men */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 border border-border flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-neon-blue"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 2a3 3 0 100 6 3 3 0 000-6z" />
                    <path d="M6 22v-5a6 6 0 0112 0v5" />
                    <path d="M12 10v12" />
                    <path d="M9 15l3-3 3 3" />
                  </svg>
                </div>
                <h4 className="font-display text-xl mb-3">Para Eles</h4>
                <ul className="font-body text-sm text-muted-foreground space-y-1">
                  <li>Calça social</li>
                  <li>Camisa social (com ou sem gravata)</li>
                  <li>Blazer opcional</li>
                  <li>Sapato social</li>
                </ul>
              </div>

              {/* Women */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 border border-border flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-neon-blue"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 2a3 3 0 100 6 3 3 0 000-6z" />
                    <path d="M12 10v2" />
                    <path d="M8 22l2-10h4l2 10" />
                    <path d="M6 15h12" />
                  </svg>
                </div>
                <h4 className="font-display text-xl mb-3">Para Elas</h4>
                <ul className="font-body text-sm text-muted-foreground space-y-1">
                  <li>Vestido midi ou longo</li>
                  <li>Conjunto social elegante</li>
                  <li>Evitar branco e tons claros</li>
                  <li>Salto ou sapatilha elegante</li>
                </ul>
              </div>
            </div>

            {/* Note */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                <span className="text-neon-blue">●</span> <strong>Cores proibidas:</strong> Branco, Off-white e Terracota.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;
