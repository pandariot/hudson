import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Service Area", href: "#area" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-baseline gap-1.5">
          <span className="text-lg font-extrabold tracking-tight text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Hudson
          </span>
          <span className="text-lg font-light tracking-wide text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Inspection Group
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
          <a href="tel:6318974024" className="inline-flex items-center gap-2 h-9 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border px-6 py-4 space-y-3">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1">
              {link.label}
            </a>
          ))}
          <a href="tel:6318974024" className="inline-flex items-center gap-2 h-9 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium mt-2">
            <Phone className="w-3.5 h-3.5" />
            (631) 897-4024
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
