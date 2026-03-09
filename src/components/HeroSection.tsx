import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center text-center px-6">
        <div className="mb-3 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <img
            src={logo}
            alt="Hudson Inspection Group — Covering All of New York State"
            className="w-[34rem] md:w-[48rem] lg:w-[56rem] mx-auto"
          />
        </div>

        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 opacity-0 animate-fade-up max-w-lg" style={{ animationDelay: "0.3s" }}>
          Thorough Home Inspections You Can Trust
        </h1>

        <p className="text-muted-foreground text-sm md:text-base mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          All Five Boroughs &middot; Long Island &middot; Hudson Valley
        </p>

        <div className="flex flex-col sm:flex-row gap-3 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-11 px-7 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm"
          >
            Schedule an Inspection
          </a>
          <a
            href="tel:6318974024"
            className="inline-flex items-center justify-center h-11 px-7 rounded-md border border-border text-foreground font-medium hover:bg-muted transition-colors text-sm"
          >
            (631) 897-4024
          </a>
        </div>
      </div>

      <a href="#services" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground/50 hover:text-foreground transition-colors">
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
