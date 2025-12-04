import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center">
                  <span className="text-foreground font-display font-bold text-xl">L</span>
                </div>
                <span className="font-display text-2xl font-semibold">Intari</span>
              </div>
              <p className="text-background/70 max-w-md leading-relaxed mb-6">
                De empathische AI-assistent voor huisartsenpraktijken. 
                Technologie die zorgt voor rust, begrip en menselijke warmte.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-background/70 hover:text-background transition-colors">Features</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Demo</a></li>
                <li><a href="#pilot" className="text-background/70 hover:text-background transition-colors">Pilot programma</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Prijzen</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-background/70">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>info@luscia.nl</span>
                </li>
                <li className="flex items-start gap-2 text-background/70">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>+31 20 123 4567</span>
                </li>
                <li className="flex items-start gap-2 text-background/70">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Amsterdam, Nederland</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50">
              © 2024 Intari. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center gap-6 text-sm text-background/50">
              <a href="#" className="hover:text-background transition-colors">Privacy</a>
              <a href="#" className="hover:text-background transition-colors">Voorwaarden</a>
              <a href="#" className="hover:text-background transition-colors">AVG</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
