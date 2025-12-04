import { useState } from "react";
import { Phone, Globe, Heart, ArrowRight, Calendar, Shield, Clock, Settings, Lock, Stethoscope } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Phone,
    title: "Spraak Assistent",
    subtitle: "Telefonisch bereikbaar",
    description: "Patiënten kunnen bellen naar uw praktijk en worden direct te woord gestaan door Intari. Natuurlijke spraakherkenning en menselijke intonatie.",
    demo: "phone"
  },
  {
    id: 2,
    icon: Globe,
    title: "Meerdere talen",
    subtitle: "Nederlands, Engels, en meer",
    description: "Intari spreekt vloeiend meerdere talen. Ideaal voor praktijken met een diverse patiëntenpopulatie.",
    demo: "languages"
  },
  {
    id: 3,
    icon: Heart,
    title: "Empathische tone-of-voice",
    subtitle: "Menselijk en begripvol",
    description: "Geen robotische antwoorden. Intari reageert met warmte, geduld en begrip op elke patiënt.",
    demo: "empathy"
  },
  {
    id: 4,
    icon: ArrowRight,
    title: "Slimme doorverwijzer",
    subtitle: "Triageondersteuning",
    description: "Intari beoordeelt de urgentie en verwijst door naar de juiste zorg: huisarts, HAP, of 112.",
    demo: "triage"
  },
  {
    id: 5,
    icon: Stethoscope,
    title: "Koppeling met HIS",
    subtitle: "Naadloze integratie",
    description: "Directe koppeling met uw Huisarts Informatie Systeem voor up-to-date patiëntgegevens.",
    demo: "his"
  },
  {
    id: 6,
    icon: Calendar,
    title: "Afspraak plannen",
    subtitle: "Automatisch inboeken",
    description: "Patiënten kunnen direct een afspraak inplannen. Intari checkt beschikbaarheid in real-time.",
    demo: "booking"
  },
  {
    id: 7,
    icon: Shield,
    title: "Veilige escalatie",
    subtitle: "Bij spoed direct actie",
    description: "Bij spoedgevallen wordt direct doorgeschakeld naar een medewerker of alarmnummer.",
    demo: "emergency"
  },
  {
    id: 8,
    icon: Clock,
    title: "24/7 beschikbaar",
    subtitle: "Altijd bereikbaar",
    description: "Ook buiten kantooruren staat Intari klaar. Minder gemiste oproepen, meer tevreden patiënten.",
    demo: "availability"
  },
  {
    id: 9,
    icon: Settings,
    title: "Op maat configureren",
    subtitle: "Uw praktijk, uw regels",
    description: "Volledig aan te passen aan uw werkwijze, openingstijden, en specifieke wensen.",
    demo: "config"
  },
  {
    id: 10,
    icon: Lock,
    title: "Privacy-first",
    subtitle: "Geen Big Tech lock-in",
    description: "EU-hosted, AVG-compliant, geen Microsoft of OpenAI. Uw data blijft van u.",
    demo: "privacy"
  }
];

const FeatureDemo = ({ feature }: { feature: typeof features[0] }) => {
  const demos: Record<string, React.ReactNode> = {
    phone: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-4 bg-luscia-50 rounded-xl">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center animate-pulse-soft">
            <Phone className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <p className="font-medium text-foreground">Inkomend gesprek</p>
            <p className="text-sm text-muted-foreground">+31 6 12 34 56 78</p>
          </div>
        </div>
        <div className="h-2 bg-luscia-100 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full w-3/4 animate-pulse-soft" />
        </div>
        <p className="text-sm text-muted-foreground text-center">Gesprek actief • 02:34</p>
      </div>
    ),
    languages: (
      <div className="grid grid-cols-2 gap-3">
        {["Nederlands", "English", "Deutsch", "Français", "Español", "العربية"].map((lang, i) => (
          <div key={lang} className={`p-3 rounded-xl border ${i === 0 ? 'border-primary bg-luscia-50' : 'border-border bg-card'} text-center transition-all`}>
            <p className={`text-sm font-medium ${i === 0 ? 'text-primary' : 'text-foreground'}`}>{lang}</p>
          </div>
        ))}
      </div>
    ),
    empathy: (
      <div className="space-y-4">
        <div className="bg-luscia-50 rounded-2xl p-4">
          <p className="text-sm text-foreground italic">"Ik begrijp dat u zich zorgen maakt. Dat is heel normaal. Laat me u helpen om snel de juiste zorg te krijgen."</p>
        </div>
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-accent" />
          <span className="text-sm text-muted-foreground">Empathie score: 98%</span>
        </div>
      </div>
    ),
    triage: (
      <div className="space-y-3">
        {[
          { level: "Groen", desc: "Routine afspraak", color: "bg-green-100 text-green-700 border-green-200" },
          { level: "Geel", desc: "Vandaag contact", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
          { level: "Oranje", desc: "Spoed consult", color: "bg-orange-100 text-orange-700 border-orange-200" },
          { level: "Rood", desc: "Direct doorschakelen", color: "bg-red-100 text-red-700 border-red-200" }
        ].map((item) => (
          <div key={item.level} className={`p-3 rounded-xl border ${item.color}`}>
            <div className="flex justify-between items-center">
              <span className="font-medium">{item.level}</span>
              <span className="text-xs">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    ),
    his: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
          <Stethoscope className="w-8 h-8 text-primary" />
          <div>
            <p className="font-medium text-foreground">HIS Integratie</p>
            <p className="text-xs text-muted-foreground">Promedico • Medicom • CGM</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-primary">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span>Verbonden • Realtime sync</span>
        </div>
      </div>
    ),
    booking: (
      <div className="space-y-3">
        <div className="grid grid-cols-5 gap-1 text-center text-xs">
          {["Ma", "Di", "Wo", "Do", "Vr"].map((day) => (
            <span key={day} className="text-muted-foreground font-medium">{day}</span>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-1">
          {[9, 10, 11, 12, 13].map((time, i) => (
            <div key={time} className={`p-2 rounded-lg text-xs text-center ${i === 2 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
              {time}:00
            </div>
          ))}
        </div>
        <p className="text-sm text-center text-primary font-medium">Woensdag 11:00 geselecteerd</p>
      </div>
    ),
    emergency: (
      <div className="space-y-4">
        <div className="p-4 bg-red-50 rounded-xl border border-red-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center animate-pulse">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-medium text-red-700">Spoed gedetecteerd</p>
              <p className="text-xs text-red-600">Doorschakelen naar medewerker...</p>
            </div>
          </div>
        </div>
      </div>
    ),
    availability: (
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto rounded-full bg-luscia-100 flex items-center justify-center">
          <Clock className="w-10 h-10 text-primary" />
        </div>
        <div>
          <p className="text-3xl font-display font-bold text-primary">24/7</p>
          <p className="text-sm text-muted-foreground">Altijd beschikbaar</p>
        </div>
      </div>
    ),
    config: (
      <div className="space-y-3">
        {["Openingstijden", "Begroeting", "Triage regels", "Notificaties"].map((setting, i) => (
          <div key={setting} className="flex items-center justify-between p-3 bg-secondary rounded-xl">
            <span className="text-sm font-medium text-foreground">{setting}</span>
            <Settings className="w-4 h-4 text-muted-foreground" />
          </div>
        ))}
      </div>
    ),
    privacy: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {["EU Data", "AVG", "ISO 27001", "No Lock-in"].map((badge) => (
            <div key={badge} className="p-3 bg-luscia-50 rounded-xl text-center">
              <p className="text-xs font-medium text-primary">{badge}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 justify-center">
          <Lock className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Uw data is veilig</span>
        </div>
      </div>
    )
  };

  return (
    <div className="animate-fade-in">
      {demos[feature.demo]}
    </div>
  );
};

const FeatureSection = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Features</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Alles wat u nodig heeft
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Een complete telefonische AI-assistent die uw praktijk ondersteunt van A tot Z.
            </p>
          </div>

          {/* Feature viewer */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left - Feature list */}
            <div className="space-y-2 lg:space-y-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeFeature.id === feature.id;
                
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature)}
                    className={`w-full text-left p-4 md:p-5 rounded-2xl transition-all duration-300 group ${
                      isActive 
                        ? 'bg-card shadow-lg border border-primary/20' 
                        : 'bg-transparent hover:bg-secondary/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground group-hover:bg-luscia-100'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-medium transition-colors ${isActive ? 'text-foreground' : 'text-foreground/80'}`}>
                          {feature.title}
                        </p>
                        <p className={`text-sm transition-colors ${isActive ? 'text-muted-foreground' : 'text-muted-foreground/60'}`}>
                          {feature.subtitle}
                        </p>
                      </div>
                      <ArrowRight className={`w-5 h-5 transition-all ${
                        isActive ? 'text-primary translate-x-0 opacity-100' : 'text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50'
                      }`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right - Demo area */}
            <div className="lg:sticky lg:top-32 h-fit">
              <div className="bg-card rounded-3xl border border-border p-8 md:p-10 shadow-xl min-h-[400px]">
                <div className="mb-8">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    {activeFeature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {activeFeature.description}
                  </p>
                </div>

                <div className="bg-secondary/30 rounded-2xl p-6">
                  <FeatureDemo feature={activeFeature} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
