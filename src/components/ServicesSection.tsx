import { ClipboardCheck, Camera, Clock } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Thorough Inspection",
    desc: "Structural, electrical, plumbing, HVAC, roofing — every system checked.",
  },
  {
    icon: Camera,
    title: "Detailed Report",
    desc: "Clear, annotated photos so you know exactly what you're looking at.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Same-day or next-day reports so you can move forward on your timeline.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-20 bg-section-alt">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
          What You Get
        </h2>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-lg p-5 border border-border hover:shadow-md transition-shadow"
            >
              <s.icon className="w-5 h-5 text-muted-foreground mb-3" />
              <h3 className="text-sm font-bold text-card-foreground mb-1.5 font-serif">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
