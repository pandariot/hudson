import { MapPin } from "lucide-react";

const areas = [
  "Manhattan",
  "Brooklyn",
  "Queens",
  "The Bronx",
  "Staten Island",
  "Long Island",
  "Hudson Valley",
];

const ServiceAreaSection = () => {
  return (
    <section id="area" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Service Area
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Covering all five boroughs of New York City, Long Island, and communities up the Hudson Valley. Need an inspection somewhere else? Just ask — we're willing to travel.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-full text-sm font-medium text-foreground"
              >
                <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
