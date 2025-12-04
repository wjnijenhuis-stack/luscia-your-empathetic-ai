import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="section-padding">
        <div className="container-wide flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">L</span>
            </div>
            <span className="font-display text-xl font-semibold text-foreground">Intari</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Over ons
            </a>
            <a href="#pilot" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pilot
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:flex">
              Demo bekijken
            </Button>
            <Button variant="default">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
