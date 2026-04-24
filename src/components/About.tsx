import React from 'react';
import { Home, BedDouble, Bath, Footprints, Waves, Ruler } from 'lucide-react';

const About = () => {
  const features = [
    { icon: Ruler, label: 'Surface', value: '180 m²' },
    { icon: BedDouble, label: 'Bedrooms', value: '3' },
    { icon: Bath, label: 'Bathrooms', value: '2' },
    { icon: Home, label: 'Land', value: '350 m²' },
    { icon: Footprints, label: 'To Surf Spot', value: '10 min walk' },
    { icon: Waves, label: 'Surf Break', value: 'La Punta Roca' },
  ];

  return (
    <section className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            About the House
          </h2>
          <div className="w-24 h-1 bg-ocean-medium mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La Vista Infinita is a bright, modern home set in the heart of Surf City,
            La Libertad. Just a 10-minute walk from the legendary surf break{' '}
            <span className="font-semibold text-foreground">La Punta Roca</span>, the
            property offers generous living space, a private garden, and easy access
            to restaurants, markets, and the beach. A perfect base for surf trips,
            family stays, or a long-term retreat by the Pacific.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-background border border-sand-medium shadow-sm hover:shadow-md transition-shadow"
            >
              <f.icon className="h-8 w-8 text-primary mb-3" />
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                {f.label}
              </div>
              <div className="text-xl font-semibold text-foreground mt-1">
                {f.value}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-base text-muted-foreground leading-relaxed">
            The house is fully furnished and ready to live in. Quiet neighborhood,
            tropical vegetation, outdoor space to relax, and only a short walk from
            Surf City&apos;s best waves, cafés, and shops.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
