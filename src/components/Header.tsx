import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import piriLogo from '@/assets/piri-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Repairs', path: '/boards' },
    { name: 'Custom', path: '/custom' },
    { name: 'Workshop', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" title="Go to homepage">
            <img
              src={piriLogo}
              alt="Piri's Ding Repair logo"
              className="h-10 w-10 rounded-full object-cover border transition-transform group-hover:scale-105"
            />
            <div>
              <h1 className="font-serif text-xl font-bold text-foreground">PIRI&apos;S DING REPAIR</h1>
              <p className="text-xs text-muted-foreground -mt-1">LA LIBERTAD, EL SALVADOR</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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