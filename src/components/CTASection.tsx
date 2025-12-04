import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const CTASection = () => {
  return (
    <section id="pilot" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-luscia-100 opacity-30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-luscia-200 opacity-20 blur-3xl" />
      </div>

      <div className="section-padding relative z-10">
        <div className="container-narrow">
          <div className="bg-card rounded-3xl border border-border p-8 md:p-12 lg:p-16 shadow-xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-luscia-50 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Pilot plaatsen beschikbaar</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Doe mee met de Luscia Pilot
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Wees een van de eerste praktijken die ervaren hoe een empathische AI-assistent 
              het verschil maakt. Beperkt aantal plaatsen beschikbaar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" className="w-full sm:w-auto">
                <span>Plan een gesprek</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="heroOutline" className="w-full sm:w-auto">
                <Play className="w-5 h-5 mr-2" />
                <span>Bekijk de demo</span>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Vertrouwd door zorgprofessionals</p>
              <div className="flex items-center justify-center gap-8 opacity-50">
                <span className="text-sm font-medium text-foreground">AVG Compliant</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm font-medium text-foreground">EU Hosted</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm font-medium text-foreground">No Lock-in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
