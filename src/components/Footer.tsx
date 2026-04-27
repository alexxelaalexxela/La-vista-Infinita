import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const Footer = () => {
  const { language, t } = useI18n();
  const currentYear = new Date().getFullYear();
  const mapsUrl = 'https://maps.app.goo.gl/58JUeGmwcToqAT24A?g_st=aw';

  return (
    <footer className="bg-wood-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Logo */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/images/la-vista-infinita-logo.png"
                alt="La Vista Infinita logo"
                className="h-12 w-12 rounded-full object-cover border border-white/20 bg-white"
              />
              <div>
                <h3 className="font-serif text-xl font-bold">LA VISTA INFINITA</h3>
                <p className="text-sm opacity-80">SURF CITY — LA LIBERTAD</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              {language === 'es'
                ? 'Una casa moderna a 10 minutos caminando de La Punta Roca, Surf City, El Salvador.'
                : 'A modern home a 10-minute walk from La Punta Roca, Surf City, El Salvador.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">{t.common.pages}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/house" className="text-sm opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors">
                  {t.nav.house}
                </Link>
              </li>
              <li>
                <Link to="/land" className="text-sm opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors">
                  {t.nav.extraLand}
                </Link>
              </li>
              <li>
                <Link to="/area-around" className="text-sm opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors">
                  {t.nav.areaAround}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors">
                  {t.nav.contactLocation}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">{t.common.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="opacity-80 hover:opacity-100 hover:underline"
                >
                  Surf City — La Libertad
                  <br />
                  El Salvador
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+50379526551"
                  className="opacity-80 hover:opacity-100 hover:text-ocean-light transition-colors"
                >
                  +50379526551
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-wood-medium mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-60">
            © {currentYear} La Vista Infinita.{' '}
            {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
