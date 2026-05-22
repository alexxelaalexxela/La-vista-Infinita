import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useI18n } from '@/lib/i18n';

const Land = () => {
  const { t } = useI18n();

  const images = Array.from({ length: 17 }, (_, i) => ({
    src: `/images/land-${i + 1}.jpg`,
    alt: `Mountain & expansion view ${i + 1}`,
  }));

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {t.land.title}
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t.land.subtitle}
                </p>
              </div>

              {/* Photos */}
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">
                {t.common.photos}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-sand-light"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Mountain opportunity text */}
              <div className="rounded-xl bg-sand-light border border-sand-medium p-6 md:p-10">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">
                  {t.land.sectionTitle}
                </h2>
                <div className="space-y-4 max-w-3xl mx-auto">
                  {t.land.intro.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Land;
