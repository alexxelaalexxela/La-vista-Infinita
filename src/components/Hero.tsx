import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n';

const Hero = () => {
  const { language, t } = useI18n();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    // Force muted autoplay for browsers that require an explicit play() call.
    videoEl.muted = true;
    videoEl.defaultMuted = true;
    videoEl.playsInline = true;

    const startPlayback = async () => {
      try {
        await videoEl.play();
        setAutoplayBlocked(false);
      } catch {
        setAutoplayBlocked(true);
      }
    };

    startPlayback();
  }, []);

  return (
    <section className="bg-background">
      <div className="w-full bg-black relative">
        <video
          ref={videoRef}
          src="/videos/house-hero.mp4"
          autoPlay
          muted
          defaultMuted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-house1.jpg"
          className="w-full h-[42vh] sm:h-[52vh] md:h-[62vh] object-cover"
        >
          {t.common.browserNoVideoSupport}
        </video>

        {autoplayBlocked && (
          <button
            type="button"
            onClick={() => videoRef.current?.play()}
            className="absolute bottom-4 right-4 rounded-full bg-black/70 text-white px-4 py-2 text-sm hover:bg-black/80 transition-colors"
          >
            {language === 'es' ? 'Reproducir video' : 'Play video'}
          </button>
        )}
      </div>

      <div className="text-center max-w-4xl mx-auto px-4 py-12 md:py-16">
        <img
          src="/images/la-vista-infinita-logo.png"
          alt="La Vista Infinita logo"
          className="h-28 w-28 md:h-36 md:w-36 rounded-full object-cover mx-auto mb-6 bg-white p-2 shadow-xl"
        />
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-3 leading-tight text-foreground">
          La Vista Infinita
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-10 py-6 text-lg rounded-full shadow-lg transition-all"
          >
            <Link to="/contact" className="flex items-center">
              {t.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
