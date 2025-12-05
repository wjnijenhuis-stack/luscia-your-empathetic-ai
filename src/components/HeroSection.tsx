const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-20 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-24 w-72 h-72 rounded-full bg-luscia-blue-100 opacity-50 blur-3xl" />
        <div className="absolute bottom-1/3 -left-24 w-64 h-64 rounded-full bg-luscia-warm opacity-50 blur-3xl" />
      </div>

      <div className="section-padding relative z-10">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-12 items-center">
            {/* Image collage */}
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              <div className="sm:col-span-2">
                <div className="overflow-hidden rounded-3xl shadow-xl border border-border bg-card">
                  <img
                    src="/hero/reception.jpg"
                    alt="Gastvrije assistent aan de balie"
                    className="w-full h-full object-cover aspect-[3/2]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-3xl shadow-lg border border-border bg-card">
                  <img
                    src="/hero/patient-phone.jpg"
                    alt="Patiënt in gesprek aan de telefoon"
                    className="w-full h-full object-cover aspect-square"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl shadow-lg border border-border bg-card">
                  <img
                    src="/hero/heartbeat.jpg"
                    alt="Vriendelijke hartslag visual"
                    className="w-full h-full object-cover aspect-square"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex sm:hidden gap-3">
                <span className="px-3 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-md">
                  Menselijk & Warm
                </span>
                <span className="px-3 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium shadow-md">
                  Telefonisch bereikbaar
                </span>
              </div>
            </div>

            {/* Minimal accent badges (desktop) */}
            <div className="hidden sm:flex flex-col gap-3 animate-fade-up">
              <span className="self-start px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-md">
                Menselijk & Warm
              </span>
              <span className="self-start px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium shadow-md">
                Telefonisch bereikbaar
              </span>
              <span className="self-start px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium shadow-md">
                Voor uw praktijk
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
