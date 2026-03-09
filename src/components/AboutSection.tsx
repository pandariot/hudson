import { User, Wrench, Eye } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-section-alt">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="w-72 h-80 md:w-80 md:h-96 bg-secondary rounded-lg border border-border flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <User className="w-16 h-16 mx-auto mb-3 opacity-40" />
                <span className="text-sm">Photo coming soon</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Connor Hanwick
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Based in Ridgewood, Queens, Connor brings an engineering background in fiber optics to every inspection. He's wired — literally — to notice what others miss.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Detail-obsessed and thorough, Connor treats every home inspection like it's his own purchase. No cutting corners, no rushing through. Just an honest, careful look at the property you're investing in.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-3">
                <Wrench className="w-5 h-5 text-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Engineering Background</p>
                  <p className="text-muted-foreground text-sm">Fiber optics precision</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Detail-Obsessed</p>
                  <p className="text-muted-foreground text-sm">Nothing gets missed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
