import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MediaSection from '@/components/MediaSection';

const House = () => {
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
          title="The House"
          subtitle="Tour the interior of La Vista Infinita — video and photos."
          videoSrc="/videos/house.mp4"
          videoPoster="/images/house-1.jpg"
          images={images}
        />
      </main>
      <Footer />
    </div>
  );
};

export default House;
