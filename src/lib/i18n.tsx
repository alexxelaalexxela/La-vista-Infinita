import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'en' | 'es';

const LANGUAGE_STORAGE_KEY = 'la-vista-language';

type I18nDictionary = {
  nav: {
    home: string;
    areaAround: string;
    contactLocation: string;
  };
  hero: {
    subtitle: string;
    cta: string;
  };
  home: {
    sectionTitle: string;
    intro: string[];
    highlightsTitle: string;
    highlights: string[];
    closing: string[];
    photosTitle: string;
  };
  area: {
    title: string;
    subtitle: string;
    paragraphs: string[];
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
      areaAround: 'Area Around',
      contactLocation: 'Contact/Location',
    },
    hero: {
      subtitle: 'Surf City - La Libertad, El Salvador',
      cta: 'Contact / Location',
    },
    home: {
      sectionTitle: 'Exclusive Ocean View Land for Sale',
      intro: [
        'A rare opportunity to own a spectacular ocean-view property in one of the most sought-after locations in El Salvador\u2019s famous Surf City.',
        'Located directly above the harbor of La Libertad, this unique hillside property offers breathtaking panoramic views of the Pacific Ocean, Punta Roca, the coastline, and the vibrant Surf City lifestyle. The land already features multiple natural terraces and provides enormous potential for a luxury development, eco-retreat, boutique hotel, private villas, or an unforgettable glamping concept.',
        'The original vision for this property included exclusive glamping domes with jacuzzi areas and scenic lounge spaces overlooking the ocean. Important: the glamping domes have NOT been built yet, giving the new owner complete freedom to design and develop the project according to their own vision.',
      ],
      highlightsTitle: 'Prime Investment & Development Opportunity',
      highlights: [
        'Incredible elevated ocean views',
        'Multiple existing terraces',
        'Perfect climate with refreshing ocean breeze',
        'Minutes from beaches, restaurants, surfing, and nightlife',
        'Located in the heart of the rapidly growing Surf City',
        'Ideal for tourism, Airbnb, eco-resort, or luxury retreat projects',
      ],
      closing: [
        'The land offers extraordinary possibilities for investors, developers, or anyone looking to create a truly unique destination in El Salvador.',
        'Infinite views. Endless potential.',
      ],
      photosTitle: 'Photos of the Land',
    },
    area: {
      title: 'Area Around',
      subtitle: 'Surf City \u2014 lifestyle, surf, sunsets, and authentic culture.',
      paragraphs: [
        'Vista Infinita is perfectly located in the heart of Surf City, one of the most exciting and fastest-growing coastal destinations in Central America. From the house, you enjoy breathtaking panoramic views over the Pacific Ocean, the harbor of La Libertad, and directly toward Punta Roca \u2014 home of the world-famous WSL Surf League competitions, where international surf events attract surfers and visitors from all over the world. During major competitions and events, you can even watch the waves and surf action directly from the house.',
        'Only about 300 meters away, a direct path leads down to Playa El Obispo, one of the most popular beaches in the area. Here you will find beachfront restaurants, bars, caf\u00e9s, ocean pools, and a lively atmosphere that perfectly captures the unique Surf City lifestyle. During the day, Playa El Obispo offers relaxed beach vibes, surfing, swimming, and tropical sunsets, while in the evenings the area transforms into a vibrant nightlife destination with music, social gatherings, cocktails, and oceanfront dining.',
        'Just minutes away is the modern Sunset Park of Puerto La Libertad, a beautiful oceanfront recreation area featuring a ferris wheel, family attractions, food courts, live music, and spectacular sunset views over the Pacific. The nearby promenade and fish market are among the most iconic attractions of La Libertad, where visitors can experience the authentic local culture, buy fresh seafood directly from local fishermen, and enjoy restaurants serving freshly prepared fish and traditional Salvadoran cuisine.',
        'The famous Punta Roca area, visible directly from Vista Infinita, has become an international hotspot for surfing, yoga sessions, wellness activities, beach workouts, sunset gatherings, and social events. The park and oceanfront spaces around Punta Roca regularly host festivals, surf competitions, cultural events, and community activities that create a unique mix of luxury beach lifestyle, relaxation, and adventure.',
        'Whether you are looking for peaceful mornings overlooking the ocean, world-class surfing, tropical nightlife, or exciting tourism opportunities, the area around Vista Infinita offers an unmatched combination of nature, entertainment, lifestyle, and investment potential in one of the most desirable locations in El Salvador.',
      ],
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
      areaAround: 'Alrededores',
      contactLocation: 'Contacto/Ubicaci\u00f3n',
    },
    hero: {
      subtitle: 'Surf City - La Libertad, El Salvador',
      cta: 'Contacto / Ubicaci\u00f3n',
    },
    home: {
      sectionTitle: 'Terreno Exclusivo con Vista al Oc\u00e9ano en Venta',
      intro: [
        'Una oportunidad \u00fanica para adquirir una espectacular propiedad con vista al oc\u00e9ano en una de las ubicaciones m\u00e1s cotizadas del famoso Surf City de El Salvador.',
        'Ubicada directamente sobre el puerto de La Libertad, esta exclusiva propiedad en la ladera ofrece impresionantes vistas panor\u00e1micas del Oc\u00e9ano Pac\u00edfico, Punta Roca, la costa y el vibrante estilo de vida de Surf City. El terreno ya cuenta con m\u00faltiples terrazas naturales y ofrece un enorme potencial para desarrollar un proyecto de lujo, eco-retiro, hotel boutique, villas privadas o un inolvidable concepto de glamping.',
        'La visi\u00f3n original para esta propiedad inclu\u00eda exclusivos domos de glamping con \u00e1reas de jacuzzi y espacios lounge esc\u00e9nicos con vista al oc\u00e9ano. Importante: los domos de glamping NO han sido construidos todav\u00eda, lo que brinda al nuevo propietario total libertad para dise\u00f1ar y desarrollar el proyecto seg\u00fan su propia visi\u00f3n.',
      ],
      highlightsTitle: 'Oportunidad Prime de Inversi\u00f3n y Desarrollo',
      highlights: [
        'Incre\u00edbles vistas elevadas al oc\u00e9ano',
        'M\u00faltiples terrazas ya existentes',
        'Clima perfecto con refrescante brisa marina',
        'A pocos minutos de playas, restaurantes, surf y vida nocturna',
        'Ubicada en el coraz\u00f3n de la creciente Surf City',
        'Ideal para proyectos tur\u00edsticos, Airbnb, eco-resort o retiros de lujo',
      ],
      closing: [
        'El terreno ofrece posibilidades extraordinarias para inversionistas, desarrolladores o cualquier persona que desee crear un destino verdaderamente \u00fanico en El Salvador.',
        'Vistas infinitas. Potencial sin l\u00edmites.',
      ],
      photosTitle: 'Fotos del Terreno',
    },
    area: {
      title: 'Alrededores',
      subtitle: 'Surf City \u2014 estilo de vida, surf, atardeceres y cultura aut\u00e9ntica.',
      paragraphs: [
        'Vista Infinita est\u00e1 perfectamente ubicada en el coraz\u00f3n de Surf City, uno de los destinos costeros m\u00e1s emocionantes y de mayor crecimiento en Centroam\u00e9rica. Desde la casa, se disfruta de impresionantes vistas panor\u00e1micas al Oc\u00e9ano Pac\u00edfico, al puerto de La Libertad y directamente hacia Punta Roca, sede de las mundialmente famosas competencias de la WSL Surf League, donde eventos internacionales de surf atraen a surfistas y visitantes de todo el mundo. Durante las competencias y eventos importantes, incluso es posible observar las olas y toda la acci\u00f3n del surf directamente desde la casa.',
        'A solo unos 300 metros, un camino directo conduce hacia Playa El Obispo, una de las playas m\u00e1s populares de la zona. Aqu\u00ed encontrar\u00e1s restaurantes frente al mar, bares, caf\u00e9s, piscinas naturales en el oc\u00e9ano y un ambiente vibrante que refleja perfectamente el estilo de vida \u00fanico de Surf City. Durante el d\u00eda, Playa El Obispo ofrece un ambiente relajado de playa, surf, nataci\u00f3n y espectaculares atardeceres tropicales, mientras que por las noches el \u00e1rea se transforma en un animado destino de vida nocturna con m\u00fasica, reuniones sociales, c\u00f3cteles y cenas frente al oc\u00e9ano.',
        'A pocos minutos se encuentra el moderno Sunset Park de Puerto de La Libertad, una hermosa \u00e1rea recreativa frente al mar que cuenta con rueda de la fortuna, atracciones familiares, zonas gastron\u00f3micas, m\u00fasica en vivo y espectaculares vistas del atardecer sobre el Pac\u00edfico. El cercano malec\u00f3n y mercado de pescado son algunas de las atracciones m\u00e1s ic\u00f3nicas de La Libertad, donde los visitantes pueden experimentar la aut\u00e9ntica cultura local, comprar mariscos frescos directamente de los pescadores y disfrutar de restaurantes que sirven pescado reci\u00e9n preparado y cocina t\u00edpica salvadore\u00f1a.',
        'La famosa zona de Punta Roca, visible directamente desde Vista Infinita, se ha convertido en un punto internacional para el surf, sesiones de yoga, actividades de bienestar, entrenamientos en la playa, reuniones al atardecer y eventos sociales. El parque y las \u00e1reas frente al mar alrededor de Punta Roca albergan regularmente festivales, competencias de surf, eventos culturales y actividades comunitarias que crean una mezcla \u00fanica de lujo, relajaci\u00f3n, aventura y estilo de vida playero.',
        'Ya sea que busques ma\u00f1anas tranquilas con vista al oc\u00e9ano, surf de clase mundial, vibrante vida nocturna tropical o excelentes oportunidades tur\u00edsticas, el \u00e1rea alrededor de Vista Infinita ofrece una combinaci\u00f3n inigualable de naturaleza, entretenimiento, estilo de vida y potencial de inversi\u00f3n en una de las ubicaciones m\u00e1s deseadas de El Salvador.',
      ],
    },
    common: {
      photos: 'Fotos',
      pages: 'P\u00e1ginas',
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
