import { Play, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-20 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-luscia-200 opacity-40 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-luscia-100 opacity-50 blur-3xl" />
      </div>

      <div className="section-padding relative z-10">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              {/* Problem statement */}
              <div className="space-y-4 animate-fade-up">
                <p className="text-lg md:text-xl text-muted-foreground font-medium">
                  Huisartsenpraktijken staan onder enorme druk.
                </p>
                <p className="text-base md:text-lg text-muted-foreground">
                  Chatbots missen empathie en lossen het probleem niet op.
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-4 animate-fade-up delay-200">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Daarom is er
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                  Intari
                </h1>
                <p className="text-2xl md:text-3xl font-display text-primary font-medium">
                  De Empathische AI Assistent
                </p>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Een telefonische AI-assistent die patiënten met warmte en begrip te woord staat, 
                  zodat uw praktijk rust en ruimte terugkrijgt.
                </p>
              </div>

              {/* Audio player */}
              <div className="animate-fade-up delay-300">
                <div className="inline-flex items-center gap-4 bg-card rounded-2xl p-4 pr-6 border border-border shadow-md">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
                  >
                    <Play className={`w-6 h-6 ${isPlaying ? 'hidden' : ''}`} fill="currentColor" />
                    {isPlaying && (
                      <div className="flex gap-1">
                        <span className="w-1 h-4 bg-primary-foreground rounded animate-pulse-soft" />
                        <span className="w-1 h-4 bg-primary-foreground rounded animate-pulse-soft delay-100" />
                        <span className="w-1 h-4 bg-primary-foreground rounded animate-pulse-soft delay-200" />
                      </div>
                    )}
                  </button>
                  <div>
                    <p className="text-sm font-medium text-foreground">Luister naar een voorbeeldgesprek</p>
                    <p className="text-xs text-muted-foreground">2:34 • Patient afspraak plannen</p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 animate-fade-up delay-400">
                <Button variant="hero">
                  Plan een gesprek
                </Button>
                <Button variant="heroOutline">
                  Bekijk de demo
                </Button>
              </div>
            </div>

            {/* Right - Phone mockup */}
            <div className="relative animate-fade-up delay-300 lg:delay-500">
              <div className="relative mx-auto max-w-[320px]">
                {/* Phone frame */}
                <div className="relative bg-foreground rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-card rounded-[2.5rem] overflow-hidden">
                    {/* Phone notch */}
                    <div className="bg-foreground h-8 flex items-center justify-center">
                      <div className="w-20 h-5 bg-foreground rounded-full" />
                    </div>
                    
                    {/* Phone content */}
                    <div className="p-6 space-y-6 min-h-[500px]">
                      {/* Call header */}
                      <div className="text-center space-y-2">
                        <div className="w-16 h-16 mx-auto rounded-full bg-luscia-100 flex items-center justify-center">
                          <Phone className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-xs text-muted-foreground">Inkomend gesprek</p>
                        <p className="font-semibold text-foreground">Huisartsenpraktijk Centrum</p>
                        <p className="text-sm text-primary font-medium">Verbonden met Intari</p>
                      </div>

                      {/* Conversation */}
                      <div className="space-y-3">
                        <div className="bg-luscia-50 rounded-2xl rounded-tl-sm p-3">
                          <p className="text-sm text-foreground">Goedemorgen, u spreekt met Intari van Huisartsenpraktijk Centrum. Waarmee kan ik u helpen?</p>
                        </div>
                        <div className="bg-secondary rounded-2xl rounded-tr-sm p-3 ml-8">
                          <p className="text-sm text-foreground">Ik voel me niet zo lekker en wil graag een afspraak maken.</p>
                        </div>
                        <div className="bg-luscia-50 rounded-2xl rounded-tl-sm p-3">
                          <p className="text-sm text-foreground">Dat begrijp ik. Zou u mij kunnen vertellen wat u klachten zijn?</p>
                        </div>
                      </div>

                      {/* Transcription indicator */}
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="flex gap-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft delay-100" />
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft delay-200" />
                        </div>
                        <span>Intari luistert...</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -right-4 top-20 bg-card rounded-xl p-3 shadow-lg border border-border animate-float">
                  <p className="text-xs font-medium text-primary">Empathisch</p>
                </div>
                <div className="absolute -left-4 bottom-32 bg-card rounded-xl p-3 shadow-lg border border-border animate-float delay-200">
                  <p className="text-xs font-medium text-primary">24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
