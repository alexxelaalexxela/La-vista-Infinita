import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MediaSection from '@/components/MediaSection';
import { useI18n } from '@/lib/i18n';

const Land = () => {
  const { language, t } = useI18n();

  const images = [
    { src: '/images/land-1.jpg', alt: 'Garden' },
    { src: '/images/land-2.jpg', alt: 'Plot view' },
    { src: '/images/land-3.jpg', alt: 'Surroundings' },
    { src: '/images/land-4.jpg', alt: 'Vegetation' },
    { src: '/images/land-5.jpg', alt: 'Outdoor area' },
    { src: '/images/land-6.jpg', alt: 'Street access' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <MediaSection
          title={language === 'es' ? 'Terreno Extra' : 'Extra Land'}
          subtitle={
            language === 'es'
              ? 'Explora el espacio exterior y los alrededores de la propiedad.'
              : 'Explore the outdoor space and surroundings of the property.'
          }
          videoSrc="/videos/land.mp4"
          videoPoster="/images/land-1.jpg"
          images={images}
          photosTitle={t.common.photos}
          browserNoVideoSupportText={t.common.browserNoVideoSupport}
        />

        <section className="pb-16 -mt-4 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto rounded-xl bg-sand-light border border-sand-medium p-6 md:p-8">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                {language === 'es' ? 'Por que este terreno extra destaca' : 'Why this extra land stands out'}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                {language === 'es'
                  ? 'A solo 10 minutos del spot de surf Punta Roca, este espacio exterior combina tranquilidad y acceso rapido.'
                  : 'Only 10 minutes from the surf spot Punta Roca, this outdoor space offers a quiet atmosphere with quick access.'}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                {language === 'es'
                  ? 'Tienes suficiente area para relajarte, crear una zona de BBQ o disfrutar de tardes al aire libre con familia y amigos.'
                  : 'There is enough area to relax, create a BBQ corner, or enjoy open-air afternoons with family and friends.'}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'es'
                  ? 'Tambien estas cerca de supermercado, restaurantes y la playa, ideal para una estancia comoda en Surf City.'
                  : 'You are also close to supermarkets, restaurants, and the beach, making it ideal for a comfortable Surf City stay.'}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Land;
