import { useState, useEffect, useRef } from "react";
import { Phone, Globe, Heart, ArrowRight, Calendar, Shield, Clock, Settings, Lock, Stethoscope } from "lucide-react";

const categories = [
  {
    id: "01",
    title: "Spraak & Communicatie",
    description: "Natuurlijke telefonische communicatie met patiënten in meerdere talen, met een empathische en menselijke benadering.",
    features: [
      {
        icon: Phone,
        title: "Spraak Assistent",
        description: "Patiënten kunnen bellen naar uw praktijk en worden direct te woord gestaan door Luscia met natuurlijke spraakherkenning."
      },
      {
        icon: Globe,
        title: "Meerdere Talen",
        description: "Luscia spreekt vloeiend Nederlands, Engels, Duits, Frans, Spaans en Arabisch. Ideaal voor diverse patiëntenpopulaties."
      },
      {
        icon: Heart,
        title: "Empathische Tone-of-Voice",
        description: "Geen robotische antwoorden. Luscia reageert met warmte, geduld en begrip op elke patiënt."
      }
    ],
    demo: (
      <div className="space-y-6">
        <div className="flex items-center gap-4 p-5 bg-luscia-50 rounded-2xl">
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center animate-pulse-soft">
            <Phone className="w-7 h-7 text-primary-foreground" />
          </div>
          <div>
            <p className="font-semibold text-foreground">Inkomend gesprek</p>
            <p className="text-sm text-muted-foreground">+31 6 12 34 56 78</p>
          </div>
        </div>
        <div className="bg-card rounded-2xl p-5 border border-border">
          <p className="text-sm text-foreground italic">"Goedemorgen, u spreekt met Luscia van Huisartsenpraktijk Centrum. Ik begrijp dat u zich zorgen maakt. Waarmee kan ik u helpen?"</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Nederlands", "English", "Deutsch", "Français"].map((lang, i) => (
            <span key={lang} className={`px-3 py-1.5 rounded-full text-sm font-medium ${i === 0 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
              {lang}
            </span>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "02",
    title: "Slimme Zorg",
    description: "Intelligente triage en doorverwijzing met directe koppeling aan uw huisartsinformatiesysteem.",
    features: [
      {
        icon: ArrowRight,
        title: "Slimme Doorverwijzer",
        description: "Luscia beoordeelt de urgentie en verwijst door naar de juiste zorg: huisarts, HAP, of 112."
      },
      {
        icon: Stethoscope,
        title: "HIS Koppeling",
        description: "Directe koppeling met uw Huisarts Informatie Systeem voor up-to-date patiëntgegevens."
      },
      {
        icon: Shield,
        title: "Veilige Escalatie",
        description: "Bij spoedgevallen wordt direct doorgeschakeld naar een medewerker of alarmnummer."
      }
    ],
    demo: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
          <Stethoscope className="w-8 h-8 text-primary" />
          <div>
            <p className="font-medium text-foreground">HIS Integratie</p>
            <p className="text-xs text-muted-foreground">Promedico • Medicom • CGM</p>
          </div>
          <div className="ml-auto flex items-center gap-2 text-sm text-green-600">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>Verbonden</span>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { level: "Groen", desc: "Routine afspraak", color: "bg-green-100 text-green-700 border-green-200" },
            { level: "Geel", desc: "Vandaag contact", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
            { level: "Oranje", desc: "Spoed consult", color: "bg-orange-100 text-orange-700 border-orange-200" },
            { level: "Rood", desc: "Direct doorschakelen", color: "bg-red-100 text-red-700 border-red-200" }
          ].map((item) => (
            <div key={item.level} className={`p-3 rounded-xl border ${item.color} flex justify-between items-center`}>
              <span className="font-medium">{item.level}</span>
              <span className="text-xs">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "03",
    title: "Praktijkbeheer",
    description: "Automatiseer afspraken en configureer Luscia volledig naar de behoeften van uw praktijk.",
    features: [
      {
        icon: Calendar,
        title: "Afspraak Plannen",
        description: "Patiënten kunnen direct een afspraak inplannen. Luscia checkt beschikbaarheid in real-time."
      },
      {
        icon: Clock,
        title: "24/7 Beschikbaar",
        description: "Ook buiten kantooruren staat Luscia klaar. Minder gemiste oproepen, meer tevreden patiënten."
      },
      {
        icon: Settings,
        title: "Op Maat Configureren",
        description: "Volledig aan te passen aan uw werkwijze, openingstijden, en specifieke wensen."
      }
    ],
    demo: (
      <div className="space-y-5">
        <div className="text-center p-6 bg-luscia-50 rounded-2xl">
          <p className="text-4xl font-display font-bold text-primary">24/7</p>
          <p className="text-sm text-muted-foreground mt-1">Altijd bereikbaar</p>
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-5 gap-1 text-center text-xs">
            {["Ma", "Di", "Wo", "Do", "Vr"].map((day) => (
              <span key={day} className="text-muted-foreground font-medium">{day}</span>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-1">
            {[9, 10, 11, 12, 13].map((time, i) => (
              <div key={time} className={`p-2 rounded-lg text-xs text-center transition-all ${i === 2 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-luscia-100'}`}>
                {time}:00
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          {["Openingstijden", "Begroeting", "Triage regels"].map((setting) => (
            <div key={setting} className="flex items-center justify-between p-3 bg-secondary rounded-xl">
              <span className="text-sm font-medium text-foreground">{setting}</span>
              <Settings className="w-4 h-4 text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "04",
    title: "Veiligheid & Privacy",
    description: "AVG-compliant, EU-hosted, zonder Big Tech lock-in. Uw data blijft van u.",
    features: [
      {
        icon: Lock,
        title: "Privacy-First",
        description: "EU-hosted, AVG-compliant, geen Microsoft of OpenAI. Uw data blijft van u."
      },
      {
        icon: Shield,
        title: "ISO 27001",
        description: "Gecertificeerde informatiebeveiliging volgens de hoogste standaarden."
      },
      {
        icon: ArrowRight,
        title: "Geen Lock-in",
        description: "Flexibele contracten zonder langetermijnverplichtingen. U blijft in controle."
      }
    ],
    demo: (
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "EU Hosted", icon: "🇪🇺" },
            { label: "AVG Compliant", icon: "✓" },
            { label: "ISO 27001", icon: "🔒" },
            { label: "No Lock-in", icon: "🔓" }
          ].map((badge) => (
            <div key={badge.label} className="p-4 bg-luscia-50 rounded-xl text-center">
              <span className="text-2xl mb-2 block">{badge.icon}</span>
              <p className="text-sm font-medium text-primary">{badge.label}</p>
            </div>
          ))}
        </div>
        <div className="p-4 bg-card rounded-xl border border-border">
          <div className="flex items-center gap-3">
            <Lock className="w-6 h-6 text-primary" />
            <div>
              <p className="font-medium text-foreground">Data Locatie</p>
              <p className="text-sm text-muted-foreground">Amsterdam, Nederland</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

const FeatureSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect viewport for mobile/desktop differences
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // tailwind lg breakpoint
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll spy - detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerBottom = containerRef.current.getBoundingClientRect().bottom;
      
      // Only activate scroll spy when container is in view
      if (containerTop > window.innerHeight || containerBottom < 0) return;

      // Find which section is most visible
      let mostVisibleIndex = 0;
      let maxVisibility = 0;

      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        const rect = ref.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the section is visible
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(windowHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        
        // Weight sections that are more centered in the viewport
        const centerOffset = Math.abs((rect.top + rect.bottom) / 2 - windowHeight / 2);
        const centerWeight = 1 - (centerOffset / windowHeight);
        const visibility = visibleHeight * centerWeight;

        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleIndex = index;
        }
      });

      if (categories[mostVisibleIndex] && activeCategory.id !== categories[mostVisibleIndex].id) {
        setActiveCategory(categories[mostVisibleIndex]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeCategory.id, isMobile]);

  // Keep active tab in view on mobile
  useEffect(() => {
    if (!isMobile) return;
    const index = categories.findIndex((c) => c.id === activeCategory.id);
    const tab = tabRefs.current[index];
    if (tab?.scrollIntoView) {
      tab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [activeCategory.id, isMobile]);

  // Smooth scroll to section when clicking nav
  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index];
    if (section) {
      const offset = isMobile ? 80 : 120; // Account for sticky header
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setActiveCategory(categories[index]);
  };

  return (
    <section id="features" className="py-20 md:py-32 bg-background" ref={containerRef}>
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20 animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Features</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Alles wat u nodig heeft
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Een complete telefonische AI-assistent die uw praktijk ondersteunt van A tot Z.
            </p>
          </div>

          {/* Mobile: Horizontal scrollable tabs (sticky) */}
          <div className="lg:hidden sticky top-4 z-30 bg-background/95 backdrop-blur-sm py-3 px-4 mb-4 shadow-sm">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  ref={(el) => (tabRefs.current[index] = el)}
                  onClick={() => scrollToSection(index)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl whitespace-nowrap transition-all ${
                    activeCategory.id === category.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-secondary text-secondary-foreground hover:bg-luscia-100'
                  }`}
                >
                  <span className="font-mono text-sm opacity-70">{category.id}</span>
                  <span className="font-medium">{category.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Layout: mobile shows stacked sections; desktop shows grid with sticky side nav */}
          <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
            {/* Left - Sticky navigation (desktop) */}
            <div className="hidden lg:block">
              <div className="sticky top-32 space-y-2">
                {categories.map((category, index) => {
                  const isActive = activeCategory.id === category.id;
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => scrollToSection(index)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 group border ${
                        isActive 
                          ? 'bg-card shadow-lg border-primary/20' 
                          : 'bg-transparent border-transparent hover:bg-secondary/50 hover:border-border'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-xl font-bold transition-colors ${
                          isActive ? 'text-primary' : 'text-muted-foreground/40 group-hover:text-muted-foreground'
                        }`}>
                          {category.id}
                        </span>
                        <span className={`font-semibold transition-colors ${
                          isActive ? 'text-foreground' : 'text-foreground/70 group-hover:text-foreground'
                        }`}>
                          {category.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right - Scrollable content sections (stacked on mobile) */}
            <div className="space-y-12 lg:space-y-24">
              {categories.map((category, index) => {
                return (
                  <div
                    key={category.id}
                    ref={(el) => (sectionRefs.current[index] = el)}
                    className="scroll-mt-28 lg:scroll-mt-32"
                  >
                    {/* Section header */}
                    <div className="mb-6 lg:mb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-2xl lg:text-3xl font-bold text-primary">{category.id}</span>
                        <h3 className="text-xl lg:text-2xl font-display font-bold text-foreground">
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-base lg:text-lg max-w-2xl">
                        {category.description}
                      </p>
                    </div>

                    {/* Content card */}
                    <div className="bg-card rounded-3xl border border-border p-5 lg:p-10 shadow-xl">
                      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {/* Features list */}
                        <div className="space-y-5 lg:space-y-6">
                          {category.features.map((feature, featureIndex) => {
                            const Icon = feature.icon;
                            return (
                              <div key={featureIndex} className="flex gap-4">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-luscia-100 flex items-center justify-center flex-shrink-0">
                                  <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                                </div>
                                <div>
                                  <p className="font-semibold text-foreground text-base lg:text-lg">{feature.title}</p>
                                  <p className="text-muted-foreground mt-1 text-sm lg:text-base">{feature.description}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Demo area */}
                        <div className="bg-secondary/30 rounded-2xl p-5 lg:p-6">
                          {category.demo}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
