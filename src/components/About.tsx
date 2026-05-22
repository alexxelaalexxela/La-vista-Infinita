import React from 'react';
import { BedDouble, Bath, Footprints, Waves, Sofa, Droplets } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const About = () => {
  const { t } = useI18n();

  const features = [
    {
      icon: Droplets,
      label: t.home.features.pool.label,
      value: t.home.features.pool.value,
    },
    {
      icon: Sofa,
      label: t.home.features.furnished.label,
      value: t.home.features.furnished.value,
    },
    {
      icon: BedDouble,
      label: t.home.features.bedrooms.label,
      value: t.home.features.bedrooms.value,
    },
    {
      icon: Bath,
      label: t.home.features.bathrooms.label,
      value: t.home.features.bathrooms.value,
    },
    {
      icon: Footprints,
      label: t.home.features.surfSpot.label,
      value: t.home.features.surfSpot.value,
    },
    {
      icon: Waves,
      label: t.home.features.surfBreak.label,
      value: t.home.features.surfBreak.value,
    },
  ];

  return (
    <section className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.home.sectionTitle}
          </h2>
          <div className="w-24 h-1 bg-ocean-medium mx-auto mb-6"></div>
          {t.home.intro.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-lg text-muted-foreground leading-relaxed mb-4 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-background border border-sand-medium shadow-sm hover:shadow-md transition-shadow text-center"
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
            {t.home.closing}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
