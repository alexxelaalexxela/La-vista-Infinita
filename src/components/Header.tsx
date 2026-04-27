import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useI18n();

  const navItems = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.house, path: '/house' },
    { name: t.nav.extraLand, path: '/land' },
    { name: t.nav.areaAround, path: '/area-around' },
    { name: t.nav.contactLocation, path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" title="Go to homepage">
            <img
              src="/images/la-vista-infinita-logo.png"
              alt="La Vista Infinita logo"
              className="h-12 w-12 rounded-full object-cover border transition-transform group-hover:scale-105 bg-white"
            />
            <div>
              <h1 className="font-serif text-xl font-bold text-foreground">LA VISTA INFINITA</h1>
              <p className="text-xs text-muted-foreground -mt-1">SURF CITY — LA LIBERTAD</p>
            </div>
          </Link>

          {/* Desktop Language Switch + Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center rounded-full border border-sand-medium bg-background px-1 py-1">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                  language === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-sand-light'
                }`}
                aria-label="Switch language to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                  language === 'es'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-sand-light'
                }`}
                aria-label="Cambiar idioma a espanol"
              >
                ES
              </button>
            </div>

          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-primary relative ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-foreground'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-sand-medium">
            <div className="flex flex-col space-y-3 mt-4">
              <div className="flex items-center gap-2 px-3">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                    language === 'en'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-sand-light'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('es')}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                    language === 'es'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-sand-light'
                  }`}
                >
                  ES
                </button>
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium py-2 px-3 rounded-md transition-colors ${
                    isActive(item.path)
                      ? 'text-primary bg-sand-light'
                      : 'text-foreground hover:text-primary hover:bg-sand-light'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
