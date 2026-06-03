import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useI18n } from '@/lib/i18n';

const LandPhotos = () => {
  const { t } = useI18n();
  const images = Array.from({ length: 17 }, (_, i) => ({
    src: `/images/land-${i + 1}.jpg`,
    alt: `La Vista Infinita land view ${i + 1}`,
  }));

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.home.photosTitle}
            </h2>
            <div className="w-24 h-1 bg-ocean-medium mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <LandPhotos />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
