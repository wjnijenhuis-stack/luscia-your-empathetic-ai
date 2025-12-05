import { Bot, Phone, Mic } from "lucide-react";

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
            <div className="relative grid gap-6 lg:gap-10 lg:grid-cols-[1fr_auto_1fr] items-center">
              {/* Patient left */}
              <div className="overflow-hidden rounded-[32px] shadow-xl border border-border bg-card">
                <img
                  src="/hero/patient-phone.png"
                  alt="Patiënt in gesprek aan de telefoon"
                  className="w-full h-full object-cover aspect-[4/5] sm:aspect-[3/4]"
                  loading="lazy"
                />
              </div>

              {/* Phone mockup center */}
              <div className="relative flex justify-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-24 sm:w-32 md:w-40 opacity-50">
                    <img
                      src="/hero/heartbeat.png"
                      alt="Vriendelijke hartslag visual"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="relative bg-foreground rounded-[28px] p-3 shadow-2xl border border-border/30 w-[240px] sm:w-[260px] md:w-[280px]">
                  <div className="bg-card rounded-[22px] overflow-hidden">
                    <div className="bg-foreground h-6 flex items-center justify-center" />
                    <div className="p-5 space-y-5">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                          <Mic className="w-3.5 h-3.5 text-primary" />
                          Spraakgesprek actief
                        </span>
                        <span className="text-foreground font-semibold">02:34</span>
                      </div>
                      <div className="text-center space-y-1">
                        <div className="w-14 h-14 mx-auto rounded-full bg-luscia-blue-100 flex items-center justify-center">
                          <Phone className="w-7 h-7 text-primary" />
                        </div>
                        <p className="text-xs text-muted-foreground">Inkomend gesprek</p>
                        <p className="font-semibold text-foreground text-sm">Huisartsenpraktijk Centrum</p>
                        <p className="text-xs text-primary font-medium">Verbonden met Luscia</p>
                        <div className="flex items-center justify-center gap-1 mt-2 text-primary">
                          <span className="block w-1.5 h-6 rounded-full bg-primary animate-pulse-soft" />
                          <span className="block w-1.5 h-4 rounded-full bg-primary animate-pulse-soft delay-75" />
                          <span className="block w-1.5 h-7 rounded-full bg-primary animate-pulse-soft delay-150" />
                          <span className="block w-1.5 h-4 rounded-full bg-primary animate-pulse-soft delay-225" />
                          <span className="block w-1.5 h-6 rounded-full bg-primary animate-pulse-soft delay-300" />
                        </div>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="bg-luscia-50 rounded-2xl rounded-tl-sm p-3">
                          <p className="text-foreground">Goedemorgen, u spreekt met Luscia van Huisartsenpraktijk Centrum. Waarmee kan ik u helpen?</p>
                        </div>
                        <div className="bg-secondary rounded-2xl rounded-tr-sm p-3 ml-6">
                          <p className="text-foreground">Ik voel me niet zo lekker en wil graag een afspraak maken.</p>
                        </div>
                        <div className="bg-luscia-50 rounded-2xl rounded-tl-sm p-3">
                          <p className="text-foreground">Dat begrijp ik. Zou u mij kunnen vertellen wat uw klachten zijn?</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Assistant right */}
              <div className="overflow-hidden rounded-[32px] shadow-xl border border-border bg-card">
                <img
                  src="/hero/reception.png"
                  alt="Gastvrije assistent aan de balie"
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
