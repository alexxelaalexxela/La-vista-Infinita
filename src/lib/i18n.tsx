import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'en' | 'es';

const LANGUAGE_STORAGE_KEY = 'la-vista-language';

type I18nDictionary = {
  nav: {
    home: string;
    house: string;
    extraLand: string;
    areaAround: string;
    contactLocation: string;
  };
  hero: {
    subtitle: string;
    cta: string;
  };
  common: {
    photos: string;
    pages: string;
    contact: string;
    browserNoVideoSupport: string;
  };
};

const dictionaries: Record<Language, I18nDictionary> = {
  en: {
    nav: {
      home: 'Home',
      house: 'House',
      extraLand: 'Extra Land',
      areaAround: 'Area Around',
      contactLocation: 'Contact/Location',
    },
    hero: {
      subtitle: 'Surf City - La Libertad, El Salvador',
      cta: 'Book / Contact',
    },
    common: {
      photos: 'Photos',
      pages: 'Pages',
      contact: 'Contact',
      browserNoVideoSupport: 'Your browser does not support the video tag.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      house: 'Casa',
      extraLand: 'Terreno Extra',
      areaAround: 'Alrededores',
      contactLocation: 'Contacto/Ubicacion',
    },
    hero: {
      subtitle: 'Surf City - La Libertad, El Salvador',
      cta: 'Reservar / Contacto',
    },
    common: {
      photos: 'Fotos',
      pages: 'Paginas',
      contact: 'Contacto',
      browserNoVideoSupport: 'Tu navegador no soporta la etiqueta de video.',
    },
  },
};

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: I18nDictionary;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const getInitialLanguage = (): Language => {
  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (storedLanguage === 'en' || storedLanguage === 'es') {
    return storedLanguage;
  }
  return 'en';
};

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: dictionaries[language],
    }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
