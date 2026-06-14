import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useI18n } from '@/lib/i18n';

const AreaAround = () => {
  const { t } = useI18n();

  const gallery = Array.from({ length: 12 }, (_, i) => ({
    src: `/images/area-${i + 1}.jpg`,
    alt: `Surf City surroundings ${i + 1}`,
  }));

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t.area.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t.area.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {gallery.map((item) => (
                <div
                  key={item.src}
                  className="overflow-hidden rounded-xl shadow-md bg-sand-light border border-sand-medium"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-sand-light border border-sand-medium p-6 md:p-10">
              <div className="space-y-5 max-w-3xl mx-auto">
                {t.area.paragraphs.map((paragraph, idx) => (
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
      </main>
      <Footer />
    </div>
  );
};

export default AreaAround;
