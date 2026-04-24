import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MediaSection from '@/components/MediaSection';

const Land = () => {
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
          title="The Land"
          subtitle="Explore the outdoor space and surroundings of the property."
          videoSrc="/videos/land.mp4"
          videoPoster="/images/land-1.jpg"
          images={images}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Land;
