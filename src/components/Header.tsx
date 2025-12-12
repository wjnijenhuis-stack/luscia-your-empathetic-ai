import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Hoe Luscia helpt" },
    { href: "#about", label: "Over ons" },
    { href: "#pilot", label: "Pilot" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="section-padding">
        <div className="container-wide flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/hero/Luscia_transparant.png" 
              alt="Luscia" 
              className="w-8 h-8 object-contain"
            />
            <span className="font-display text-xl font-semibold text-foreground">Luscia</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <a href="#leer-luscia-kennen">Leer Luscia kennen</a>
            </Button>
            <Button variant="default">
              Contact
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu openen">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 sm:max-w-sm">
              <div className="flex flex-col gap-6 pt-10">
                {/* Mobile Navigation Links */}
                {navLinks.map((link) => (
                  <a 
                    key={link.href}
                    href={link.href} 
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </a>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="flex flex-col gap-4 mt-4 pt-6 border-t border-border">
                  <Button variant="ghost" className="w-full justify-start" asChild onClick={handleNavClick}>
                    <a href="#leer-luscia-kennen">Leer Luscia kennen</a>
                  </Button>
                  <Button variant="default" className="w-full" onClick={handleNavClick}>
                    Contact
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
