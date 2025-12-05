import { Bot, Mic } from "lucide-react";

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
          <div className="flex flex-col gap-8 lg:gap-12">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start lg:items-center justify-center">
              {/* Patient left */}
              <div className="overflow-hidden rounded-[32px] shadow-xl border border-border bg-card w-full max-w-[360px] lg:max-w-[420px]">
                <img
                  src="/hero/patient-phone.png"
                  alt="Patiënt in gesprek aan de telefoon"
                  className="w-full h-full object-cover aspect-[4/5] sm:aspect-[3/4]"
                  loading="lazy"
                />
              </div>

              {/* Lucia center/right */}
              <div className="relative w-full max-w-[360px] lg:max-w-[420px]">
                <div className="overflow-hidden rounded-[32px] shadow-xl">
                  <img
                    src="/hero/Luscia_transparant.png"
                    alt="Luscia AI assistent"
                    className="w-full h-full object-contain aspect-[4/5] sm:aspect-[3/4]"
                    loading="lazy"
                  />
                </div>

                {/* Voice call indicator */}
                <div className="absolute -top-4 left-4 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-border shadow-lg text-xs font-medium text-foreground">
                  <Mic className="w-4 h-4 text-primary" />
                  <span>Spraakgesprek met Luscia</span>
                  <span className="text-muted-foreground">02:34</span>
                </div>

                {/* Conversation bubbles */}
                <div className="absolute -left-4 bottom-6 flex flex-col gap-3 w-[240px] sm:w-[260px] max-w-[70vw]">
                  <div className="bg-card rounded-2xl rounded-tl-sm p-3 shadow-md border border-border flex items-start gap-2">
                    <span className="mt-0.5 text-primary">
                      <Bot className="w-4 h-4" />
                    </span>
                    <p className="text-sm text-foreground">U spreekt met Luscia de AI-assistent van Huisartsenpraktijk het Centrum. Waarmee kan ik u helpen?</p>
                  </div>
                  <div className="bg-secondary rounded-2xl rounded-tr-sm p-3 shadow-md border border-border/60">
                    <p className="text-sm text-foreground">Ik ben benieuwd naar de uitslag van mijn bloedonderzoek.</p>
                  </div>
                  <div className="bg-card rounded-2xl rounded-tl-sm p-3 shadow-md border border-border flex items-start gap-2">
                    <span className="mt-0.5 text-primary">
                      <Bot className="w-4 h-4" />
                    </span>
                    <p className="text-sm text-foreground">Ik begrijp het. Ik haal de uitslag direct uit ons systeem en laat het u weten.</p>
                  </div>
                </div>

                {/* Waveform near status */}
                <div className="absolute -top-4 right-4 flex items-end gap-1 text-primary">
                  <span className="block w-1.5 h-5 rounded-full bg-primary animate-pulse-soft" />
                  <span className="block w-1.5 h-7 rounded-full bg-primary animate-pulse-soft delay-75" />
                  <span className="block w-1.5 h-4 rounded-full bg-primary animate-pulse-soft delay-150" />
                  <span className="block w-1.5 h-6 rounded-full bg-primary animate-pulse-soft delay-225" />
                  <span className="block w-1.5 h-5 rounded-full bg-primary animate-pulse-soft delay-300" />
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 justify-center animate-fade-up">
              <span className="px-4 py-2 rounded-full bg-luscia-warm text-foreground text-sm font-medium shadow-md">
                Menselijk & Warm
              </span>
              <span className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium shadow-md">
                Telefonisch bereikbaar
              </span>
              <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-md">
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
