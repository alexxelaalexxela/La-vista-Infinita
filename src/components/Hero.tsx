import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.45)), url('/images/hero-house.jpg')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <img
          src="/images/la-vista-infinita-logo.png"
          alt="La Vista Infinita logo"
          className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover mx-auto mb-6 bg-white/90 p-2 shadow-xl"
        />
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-3 leading-tight drop-shadow-lg">
          La Vista Infinita
        </h1>
        <p className="text-lg md:text-2xl opacity-95 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
          Surf City — La Libertad, El Salvador
        </p>

        {/* CTA Button — styled to stand out above the background */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-10 py-6 text-lg rounded-full shadow-2xl ring-2 ring-white/40 hover:ring-white/60 transition-all"
          >
            <Link to="/contact" className="flex items-center">
              Book / Contact
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
