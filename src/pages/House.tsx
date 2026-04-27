import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MediaSection from '@/components/MediaSection';
import { useI18n } from '@/lib/i18n';

const House = () => {
  const { language, t } = useI18n();

  const images = [
    { src: '/images/house-1.jpg', alt: 'Living room' },
    { src: '/images/house-2.jpg', alt: 'Kitchen' },
    { src: '/images/house-3.jpg', alt: 'Bedroom' },
    { src: '/images/house-4.jpg', alt: 'Bathroom' },
    { src: '/images/house-5.jpg', alt: 'Terrace' },
    { src: '/images/house-6.jpg', alt: 'Exterior view' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <MediaSection
          title={language === 'es' ? 'La Casa' : 'The House'}
          subtitle={
            language === 'es'
              ? 'Recorre el interior de La Vista Infinita con video y fotos.'
              : 'Tour the interior of La Vista Infinita - video and photos.'
          }
          videoSrc="/videos/house.mp4"
          videoPoster="/images/house-1.jpg"
          images={images}
          photosTitle={t.common.photos}
          browserNoVideoSupportText={t.common.browserNoVideoSupport}
        />
      </main>
      <Footer />
    </div>
  );
};

export default House;
