import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import art from '@/data/art.json';

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold">Workshop Gallery</h1>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Real photos from Piry&apos;s Ding Repair in La Libertad, including workshop shots and tee-shirts ($15).
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {art.map((item: any) => (
              <div key={item.id} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-lg border bg-white">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="mt-3">
                  <h3 className="font-serif text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.technique}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;


