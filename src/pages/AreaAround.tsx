import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useI18n } from '@/lib/i18n';

const AreaAround = () => {
  const { language } = useI18n();

  const points =
    language === 'es'
      ? [
          '10 minutos al spot de surf Punta Roca.',
          '5 minutos al supermercado mas cercano.',
          '8 minutos a restaurantes y cafes en Surf City.',
          '10 minutos a la playa para surf o sunset.',
          'Acceso rapido a la carretera principal de La Libertad.',
        ]
      : [
          '10 minutes to Punta Roca surf spot.',
          '5 minutes to the closest supermarket.',
          '8 minutes to Surf City restaurants and cafes.',
          '10 minutes to the beach for surf or sunset.',
          'Quick access to the main La Libertad road.',
        ];

  const gallery = [
    { src: '/images/heros.jpg', alt: 'Ocean and coastline view' },
    { src: '/images/hero-house1.jpg', alt: 'Street and neighborhood view' },
    { src: '/images/land-3.jpg', alt: 'Natural surroundings near the property' },
    { src: '/images/house-6.jpg', alt: 'Area around the house' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                {language === 'es' ? 'Alrededores' : 'Area Around'}
              </h1>
              <p className="text-lg text-muted-foreground">
                {language === 'es'
                  ? 'Lugares utiles e interesantes a pocos minutos de La Vista Infinita.'
                  : 'Useful and interesting places just minutes from La Vista Infinita.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {gallery.map((item) => (
                <div
                  key={item.src}
                  className="overflow-hidden rounded-xl shadow-md bg-sand-light border border-sand-medium"
                >
                  <img src={item.src} alt={item.alt} className="w-full h-72 object-cover" />
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-sand-light border border-sand-medium p-6 md:p-8">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                {language === 'es' ? 'Puntos de interes' : 'Interesting nearby points'}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AreaAround;
