import React from 'react';
import { Home, BedDouble, Bath, Footprints, Waves, Ruler } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const About = () => {
  const { language } = useI18n();

  const features = [
    {
      icon: Ruler,
      label: language === 'es' ? 'Superficie' : 'Surface',
      value: '180 m²',
    },
    {
      icon: BedDouble,
      label: language === 'es' ? 'Habitaciones' : 'Bedrooms',
      value: '3',
    },
    {
      icon: Bath,
      label: language === 'es' ? 'Banos' : 'Bathrooms',
      value: '2',
    },
    {
      icon: Home,
      label: language === 'es' ? 'Terreno' : 'Land',
      value: '350 m²',
    },
    {
      icon: Footprints,
      label: language === 'es' ? 'Al spot de surf' : 'To Surf Spot',
      value: language === 'es' ? '10 min caminando' : '10 min walk',
    },
    {
      icon: Waves,
      label: language === 'es' ? 'Punto de surf' : 'Surf Break',
      value: 'La Punta Roca',
    },
  ];

  return (
    <section className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            {language === 'es' ? 'Sobre la Casa' : 'About the House'}
          </h2>
          <div className="w-24 h-1 bg-ocean-medium mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'es' ? (
              <>
                La Vista Infinita es una casa moderna y luminosa ubicada en el corazon
                de Surf City, La Libertad. A solo 10 minutos caminando del legendario
                spot de surf <span className="font-semibold text-foreground">La Punta Roca</span>,
                la propiedad ofrece amplios espacios interiores, jardin privado y acceso
                facil a restaurantes, mercados y la playa. Es una base ideal para viajes
                de surf, estadias en familia o una temporada larga junto al Pacifico.
              </>
            ) : (
              <>
                La Vista Infinita is a bright, modern home set in the heart of Surf City,
                La Libertad. Just a 10-minute walk from the legendary surf break{' '}
                <span className="font-semibold text-foreground">La Punta Roca</span>, the
                property offers generous living space, a private garden, and easy access
                to restaurants, markets, and the beach. A perfect base for surf trips,
                family stays, or a long-term retreat by the Pacific.
              </>
            )}
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
            {language === 'es'
              ? 'La casa esta totalmente amueblada y lista para vivir. Vecindario tranquilo, vegetacion tropical, espacio exterior para relajarte y solo una corta caminata hasta las mejores olas, cafes y tiendas de Surf City.'
              : "The house is fully furnished and ready to live in. Quiet neighborhood, tropical vegetation, outdoor space to relax, and only a short walk from Surf City's best waves, cafes, and shops."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
