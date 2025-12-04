import { Users, Calendar, TrendingUp, Shield } from "lucide-react";

const metaBlocks = [
  {
    icon: Users,
    title: "Wie zijn wij?",
    description: "We geloven dat technologie moet zorgen voor rust en empathie. Ons team combineert expertise in AI, gezondheidszorg en gebruikerservaring om een assistent te bouwen die écht helpt.",
    items: [
      "Missie-gedreven team",
      "Achtergrond in zorg & technologie",
      "Focus op menselijke waarden"
    ]
  },
  {
    icon: Calendar,
    title: "Pilot Programma",
    description: "We zoeken huisartsenpraktijken die samen met ons Luscia willen verbeteren. In ruil krijgt u vroegtijdige toegang en directe invloed op de ontwikkeling.",
    items: [
      "12 weken pilot periode",
      "100 patiëntinteracties",
      "2 uur feedback per week",
      "Persoonlijke begeleiding"
    ]
  },
  {
    icon: TrendingUp,
    title: "Verwachte Impact",
    description: "Gebaseerd op onze testen en vergelijkbare implementaties verwachten we significante verbeteringen voor uw praktijk.",
    items: [
      "30% minder telefoondruk",
      "2 uur tijdwinst per dag",
      "Kortere wachttijden",
      "24/7 bereikbaarheid"
    ]
  },
  {
    icon: Shield,
    title: "Regelgeving & Privacy",
    description: "We nemen privacy en veiligheid uiterst serieus. Luscia is gebouwd met compliance als uitgangspunt, niet als bijzaak.",
    items: [
      "EU-gehoste data",
      "Volledig AVG-compliant",
      "Geen Big Tech afhankelijkheid",
      "Audit logging & transparantie"
    ]
  }
];

const MetaSection = () => {
  return (
    <section id="about" className="py-20 md:py-32" style={{ background: 'var(--gradient-hero)' }}>
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Over Luscia</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Gebouwd voor de zorg
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Geen black-box technologie, maar een transparante partner voor uw praktijk.
            </p>
          </div>

          {/* Meta blocks grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {metaBlocks.map((block, index) => {
              const Icon = block.icon;
              return (
                <div 
                  key={block.title}
                  className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-lg animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-luscia-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                      {block.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {block.description}
                  </p>

                  <ul className="space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetaSection;
