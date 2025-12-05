import { Bot } from "lucide-react";

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
          <div className="flex flex-col gap-6 lg:gap-10 items-center">
            {/* Two-up images with centered heartbeat overlay */}
            <div className="relative w-full">
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                <div className="overflow-hidden rounded-[32px] shadow-xl border border-border bg-card">
                  <img
                    src="/hero/patient-phone.png"
                    alt="Patiënt in gesprek aan de telefoon"
                    className="w-full h-full object-cover aspect-[4/5] sm:aspect-[4/5] md:aspect-[3/4]"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-[32px] shadow-xl border border-border bg-card">
                  <img
                    src="/hero/reception.png"
                    alt="Gastvrije assistent aan de balie"
                    className="w-full h-full object-cover aspect-[4/5] sm:aspect-[4/5] md:aspect-[3/4]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-28 sm:w-36 md:w-44 lg:w-52 drop-shadow-lg">
                    <img
                      src="/hero/heartbeat.png"
                      alt="Vriendelijke hartslag visual"
                      className="w-full h-full object-contain opacity-60 rounded-[32px]"
                      loading="lazy"
                    />
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/85 backdrop-blur-sm border border-border shadow-md text-sm font-medium text-foreground">
                    <Bot className="w-4 h-4 text-primary" />
                    <span>U spreekt met Luscia, AI assistent van huisarts Jansen</span>
                  </div>
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
