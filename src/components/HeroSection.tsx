import { Bot, Mic, Volume2, Radio, Signal, Activity, Waves } from "lucide-react";

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
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start lg:items-start justify-center">
              {/* Patient left */}
              <div className="overflow-hidden rounded-[32px] shadow-xl border border-border bg-card w-full max-w-[360px] lg:max-w-[420px]">
                <img
                  src="/hero/patient-phone.png"
                  alt="Patiënt in gesprek aan de telefoon"
                  className="w-full h-full object-cover aspect-[4/5] sm:aspect-[3/4]"
                  loading="lazy"
                />
              </div>

              {/* Conversation bubbles and Luscia - bubbles above, Luscia below right */}
              <div className="relative w-full max-w-[360px] lg:max-w-[420px]">
                {/* Container with border */}
                <div className="overflow-hidden rounded-[32px] shadow-xl border border-border bg-card p-4 lg:p-6 flex flex-col aspect-[4/5] sm:aspect-[3/4]">
                  {/* Conversation bubbles - above Luscia */}
                  <div className="flex flex-col gap-3 mb-4 flex-1">
                    <div className="bg-background rounded-2xl rounded-tl-sm p-3 shadow-md border border-border flex items-start gap-2">
                      <span className="mt-0.5 text-primary">
                        <Bot className="w-4 h-4" />
                      </span>
                      <p className="text-sm text-foreground">U spreekt met Luscia de AI-assistent van Huisartsenpraktijk het Centrum. Waarmee kan ik u helpen?</p>
                    </div>
                    <div className="bg-secondary rounded-2xl rounded-tr-sm p-3 shadow-md border border-border/60 -ml-4">
                      <p className="text-sm text-foreground">Ik ben benieuwd naar de uitslag van mijn bloedonderzoek.</p>
                    </div>
                    <div className="bg-background rounded-2xl rounded-tl-sm p-3 shadow-md border border-border flex items-start gap-2">
                      <span className="mt-0.5 text-primary">
                        <Bot className="w-4 h-4" />
                      </span>
                      <p className="text-sm text-foreground">Ik begrijp het. Ik haal de uitslag direct uit ons systeem en laat het u weten.</p>
                    </div>
                  </div>

                  {/* Lucia - smaller, positioned right bottom */}
                  <div className="relative w-full max-w-[160px] lg:max-w-[200px] ml-auto mt-auto">
                    <div className="overflow-hidden rounded-[32px] shadow-xl">
                      <img
                        src="/hero/Luscia_transparant.png"
                        alt="Luscia AI assistent"
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Voice call indicator - outside container */}
                <div className="absolute -top-4 left-4 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-border shadow-lg text-xs font-medium text-foreground z-10">
                  <Mic className="w-4 h-4 text-primary" />
                  <span>Spraakgesprek met Luscia</span>
                  <span className="text-muted-foreground">02:34</span>
                </div>

                {/* Audio indicator - outside container */}
                <div className="absolute -top-4 right-4 text-primary z-10">
                  <Volume2 className="w-5 h-5 animate-pulse-soft" />
                </div>
              </div>

              {/* Reception right */}
              <div className="overflow-hidden rounded-[32px] shadow-xl border border-border bg-card w-full max-w-[360px] lg:max-w-[420px]">
                <img
                  src="/hero/reception.png"
                  alt="Receptie"
                  className="w-full h-full object-cover aspect-[4/5] sm:aspect-[3/4]"
                  loading="lazy"
                />
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
