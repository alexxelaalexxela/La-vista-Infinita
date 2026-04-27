import React from 'react';

type MediaSectionProps = {
  title: string;
  subtitle?: string;
  videoSrc: string;
  videoPoster?: string;
  images: { src: string; alt: string }[];
  photosTitle?: string;
  browserNoVideoSupportText?: string;
};

const MediaSection = ({
  title,
  subtitle,
  videoSrc,
  videoPoster,
  images,
  photosTitle = 'Photos',
  browserNoVideoSupportText = 'Your browser does not support the video tag.',
}: MediaSectionProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>

          {/* Video */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-xl bg-black">
            <video
              src={videoSrc}
              poster={videoPoster}
              controls
              playsInline
              className="w-full h-auto aspect-video"
            >
              {browserNoVideoSupportText}
            </video>
          </div>

          {/* Pictures */}
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">
            {photosTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-sand-light"
              >
                <img
                  src={img.src}
                  alt={img.alt}
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

export default MediaSection;
