import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone } from 'lucide-react';
import piriLogo from '@/assets/piri-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wood-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Logo */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={piriLogo}
                alt="Piri's Ding Repair logo"
                className="h-10 w-10 rounded-full object-cover border border-white/20"
              />
              <div>
                <h3 className="font-serif text-xl font-bold">PIRI&apos;S DING REPAIR</h3>
                <p className="text-sm opacity-80">SURFBOARD REPAIR WORKSHOP</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Reliable ding repairs, lessons info, and accessories in La Libertad, El Salvador.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/accessories" className="text-sm opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors">
                  Workshop Gallery
                </Link>
              </li>
              <li>
                <a 
                  href="https://wa.me/50376717527?text=Hi%20Piri%27s%20Ding%20Repair!%20I%20need%20help%20with%20my%20board."
                  className="text-sm opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors"
                >
                  Ding Repairs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-80">
                  <a href="https://www.google.com/maps/search/?api=1&query=FMPG%2B8F7%2C%205%20Ave%20Sur%2C%20La%20Libertad%2C%20El%20Salvador" target="_blank" rel="noreferrer" className="hover:underline">
                    Piri&apos;s Ding Repair<br />
                    FMPG+8F7, 5 Ave Sur<br />
                    La Libertad, El Salvador
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a 
                  href="https://wa.me/50376717527"
                  className="opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors"
                >
                  WhatsApp: +50376717527
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Hours</h4>
            <div className="flex items-start space-x-2 text-sm">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div className="opacity-80">
                <div>Monday - Saturday</div>
                <div>8:00 AM - 6:00 PM</div>
                <div className="mt-2">Sunday</div>
                <div>By WhatsApp request</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-wood-medium mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-60">
            © {currentYear} Piri&apos;s Ding Repair. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm opacity-60 hover:opacity-80 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm opacity-60 hover:opacity-80 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;