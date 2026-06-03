import React from 'react';
import { Eye, Layers, Wind, MapPin, Waves, Building2 } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const HIGHLIGHT_ICONS = [Eye, Layers, Wind, MapPin, Waves, Building2];

const About = () => {
  const { t } = useI18n();

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
              className="text-lg text-muted-foreground leading-relaxed mb-4 last:mb-0 text-left md:text-center"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">
            {t.home.highlightsTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.home.highlights.map((highlight, idx) => {
              const Icon = HIGHLIGHT_ICONS[idx % HIGHLIGHT_ICONS.length];
              return (
                <div
                  key={highlight}
                  className="flex items-start gap-4 p-6 rounded-xl bg-background border border-sand-medium shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-base text-foreground leading-relaxed">
                    {highlight}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center space-y-4">
          {t.home.closing.map((paragraph, idx) => (
            <p
              key={idx}
              className={
                idx === t.home.closing.length - 1
                  ? 'font-serif text-xl md:text-2xl text-foreground italic'
                  : 'text-base text-muted-foreground leading-relaxed'
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
