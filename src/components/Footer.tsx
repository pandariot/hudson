import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Hudson Inspection Group" className="h-14 w-auto invert brightness-200 opacity-80" />
            <div>
              <p className="font-serif font-bold text-lg">Hudson Inspection Group</p>
              <p className="text-primary-foreground/60 text-sm">Covering All of New York State</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm">
            <a href="tel:6318974024" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4" />
              (631) 897-4024
            </a>
            <a href="mailto:chanwick@gmail.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4" />
              chanwick@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 mt-8 pt-6 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Hudson Inspection Group. All rights reserved. License #[INSERT LICENSE NUMBER]</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
