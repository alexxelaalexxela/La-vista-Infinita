import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import piriLogo from '@/assets/piri-logo.png';

const Hero = () => {
  const mapUrl = 'https://www.google.com/maps/search/?api=1&query=FMPG%2B8F7%2C%205%20Ave%20Sur%2C%20La%20Libertad%2C%20El%20Salvador';

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/pirys-hero.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <img
          src={piriLogo}
          alt="Piry's Ding Repair logo"
          className="h-24 w-24 md:h-28 md:w-28 rounded-full object-cover border border-white/60 mx-auto mb-6"
        />
        <a
          href={mapUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center mb-6 hover:underline"
        >
          <MapPin className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium tracking-wide uppercase">
            FMPG+8F7, 5 Ave Sur, La Libertad, El Salvador
          </span>
        </a>
        
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 leading-tight">Piry&apos;s Ding Repair</h1>
        <p className="text-lg md:text-xl opacity-90 mb-5 max-w-2xl mx-auto leading-relaxed">
          Fast and reliable surfboard ding repairs, lessons info, and accessories in La Libertad.
        </p>
        <a
          href="https://wa.me/50376717527"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center text-base font-medium hover:underline mb-10"
        >
          <Phone className="h-4 w-4 mr-2" />
          WhatsApp: +50376717527
        </a>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-foreground font-semibold px-8 py-3 rounded-full"
          >
            <Link to="/contact" className="flex items-center">Get a Repair Quote
            <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;