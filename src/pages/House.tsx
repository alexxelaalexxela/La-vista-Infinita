import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useI18n } from '@/lib/i18n';

const House = () => {
  const { t } = useI18n();

  const images = Array.from({ length: 18 }, (_, i) => ({
    src: `/images/house-${i + 1}.jpg`,
    alt: `Vista Infinita view ${i + 1}`,
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
                  {t.house.title}
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t.house.subtitle}
                </p>
              </div>

              {/* Main feature video */}
              <div className="mb-12 rounded-xl overflow-hidden shadow-xl bg-black">
                <video
                  src="/videos/house-main.mp4"
                  poster="/images/house-1.jpg"
                  controls
                  playsInline
                  className="w-full h-auto aspect-video"
                >
                  {t.common.browserNoVideoSupport}
                </video>
              </div>

              {/* Long-form description */}
              <article className="max-w-3xl mx-auto mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">
                  {t.house.heroTitle}
                </h2>
                <div className="space-y-4 mb-10">
                  {t.house.intro.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-base md:text-lg text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {t.house.sections.map((section, sIdx) => (
                  <div key={sIdx} className="mb-10">
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-4">
                      {section.title}
                    </h3>
                    <div className="space-y-3">
                      {section.paragraphs.map((paragraph, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-base text-muted-foreground leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </article>

              {/* Photos */}
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">
                {t.common.photos}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
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

              {/* Day / Night tours (portrait videos) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="flex flex-col items-center">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3 text-center">
                    {t.house.tourDayTitle}
                  </h3>
                  <div className="rounded-xl overflow-hidden shadow-xl bg-black w-full max-w-xs">
                    <video
                      src="/videos/house-tour-day.mp4"
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-auto block"
                    >
                      {t.common.browserNoVideoSupport}
                    </video>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3 text-center">
                    {t.house.tourNightTitle}
                  </h3>
                  <div className="rounded-xl overflow-hidden shadow-xl bg-black w-full max-w-xs">
                    <video
                      src="/videos/house-tour-night.mp4"
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-auto block"
                    >
                      {t.common.browserNoVideoSupport}
                    </video>
                  </div>
                </div>
              </div>

              {/* Closing */}
              <article className="max-w-3xl mx-auto rounded-xl bg-sand-light border border-sand-medium p-6 md:p-10">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">
                  {t.house.closing.title}
                </h2>
                <div className="space-y-4">
                  {t.house.closing.paragraphs.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-base md:text-lg text-muted-foreground leading-relaxed text-center"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default House;
