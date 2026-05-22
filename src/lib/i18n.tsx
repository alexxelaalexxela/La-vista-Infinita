import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'en' | 'es';

const LANGUAGE_STORAGE_KEY = 'la-vista-language';

type HouseSection = {
  title: string;
  paragraphs: string[];
};

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
  home: {
    intro: string[];
    sectionTitle: string;
    features: {
      pool: { label: string; value: string };
      furnished: { label: string; value: string };
      bedrooms: { label: string; value: string };
      bathrooms: { label: string; value: string };
      surfSpot: { label: string; value: string };
      surfBreak: { label: string; value: string };
    };
    closing: string;
  };
  house: {
    title: string;
    subtitle: string;
    heroTitle: string;
    intro: string[];
    sections: HouseSection[];
    closing: HouseSection;
    tourDayTitle: string;
    tourNightTitle: string;
  };
  land: {
    title: string;
    subtitle: string;
    sectionTitle: string;
    intro: string[];
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
      house: 'House',
      extraLand: 'Extra Land',
      areaAround: 'Area Around',
      contactLocation: 'Contact/Location',
    },
    hero: {
      subtitle: 'Surf City - La Libertad, El Salvador',
      cta: 'Contact / Location',
    },
    home: {
      intro: [
        'Discover La Vista Infinita, a modern tropical home above the harbor of La Libertad, in the heart of Surf City. With breathtaking views over the Pacific, La Libertad, and all the way to Punta Roca, this home brings together ocean breeze, smart living, and relaxed coastal luxury. Just minutes from the beach, restaurants, and surf spots, Vista Infinita is made for unforgettable sunsets, peaceful mornings, and the true lifestyle of El Salvador\u2019s Pacific coast.',
      ],
      sectionTitle: 'About the House',
      features: {
        pool: { label: 'Infinity Pool', value: '20 m' },
        furnished: { label: 'Fully Furnished', value: 'Move in ready' },
        bedrooms: { label: 'Bedrooms', value: '3' },
        bathrooms: { label: 'Bathrooms', value: '1' },
        surfSpot: { label: 'To Surf Spot', value: '10 min walk' },
        surfBreak: { label: 'Surf Break', value: 'Punta Roca' },
      },
      closing:
        'La Vista Infinita is more than a home \u2014 it is a newly built, fully furnished luxury residence above the Pacific \u2014 combining refined modern design, smart-home comfort, an infinity-pool lifestyle, and rare expansion potential in the heart of Surf City.',
    },
    house: {
      title: 'The House',
      subtitle: 'Vista Infinita \u2014 your dream home above the harbor of La Libertad.',
      heroTitle:
        'Vista Infinita \u2014 Your Dream Home Above the Harbor of La Libertad in Surf City, El Salvador',
      intro: [
        'Directly above the beautiful harbor of La Libertad, in the heart of Surf City, stands a home that fully deserves its name: Vista Infinita.',
        'A place where the sun rises over the Pacific in the morning, the sky glows in golden colors in the evening, and the fresh ocean breeze creates a pleasantly cool tropical living atmosphere all day long. From here, you enjoy a breathtaking view over La Libertad, the harbor, the ocean, and all the way to Punta Roca, one of the most famous surf spots in the region.',
        'Only about 300 meters away, a direct path leads to Playa El Obispo beach, with its restaurants, ocean pools, and the unmistakable lifestyle of El Salvador\u2019s Pacific coast.',
      ],
      sections: [
        {
          title: 'A Home That Combines Vacation, Luxury, and Freedom',
          paragraphs: [
            'The house features 2 bedrooms, a living room with kitchen and workspace, a bathroom, a separate TV room, and a spacious outdoor area made for relaxing days, social evenings, and unforgettable sunsets.',
            'The entire house is equipped with large glass doors and blinds that can be easily opened. This allows the indoor and outdoor spaces to blend together, making the ocean, the light, and the breeze part of everyday living.',
            'The absolute highlight is the impressive, approximately 20-meter-long infinity pool, which seems to open endlessly toward the Pacific. The pool lighting can be conveniently controlled via light switch or remote control and set to different colors. In the evening, Vista Infinita transforms into a private oasis with a magical atmosphere.',
          ],
        },
        {
          title: 'Modern Living with Smart Home Comfort',
          paragraphs: [
            'Vista Infinita is completely new, highly modern, and thoughtfully designed down to the smallest detail.',
            'The house has Starlink Internet, a water connection through Anda, regular electricity, as well as its own high-voltage power line. Three air-conditioning units ensure pleasant temperatures: one in the living room and one in each of the two bedrooms. In addition, there are three ceiling fans in the living room, bathroom, and TV room.',
            'The entire house is designed as a smart home. There are Alexas in every room, and all lights, the electrical system, and the pool pump control can be operated both via smartphone and voice control. A Dolby Surround system provides a modern entertainment experience.',
            'Security and comfort are also taken care of: a security camera system can be controlled via smartphone. In the entrance area, there is a Ring Doorbell, which is connected to the Alexas in the house and to the smartphone. Through the Alexa screen in the kitchen, you can immediately see who is ringing the doorbell.',
            'A fully automated Smart AI cleaning robot vacuums and mops the apartment independently with hot water.',
          ],
        },
        {
          title: 'Designer Kitchen with State-of-the-Art Equipment',
          paragraphs: [
            'The kitchen is not only functional but truly the heart of the home. It is equipped with the most modern appliances, including a modern refrigerator with ice maker, microwave, dishwasher, a modern induction cooktop including its own induction cookware, a modern electric oven with high-voltage connection, as well as a high-quality fully automatic coffee machine with touchscreen, which, for example, automatically froths milk for cappuccino.',
            'In addition, the equipment includes a kettle, toaster, a drinking water filtration system, and a modern sink with glass-washing function, temperature display, and many other features. On the kitchen wall, there is a stylish wine glass holder including wine glasses.',
            'The kitchen, dining table, chairs, beds, coffee table, computer desk, and all shelves were custom-made by a carpenter. This creates a unique, high-quality, and individual living style that perfectly matches the character of this home.',
          ],
        },
        {
          title: 'Living Area, Workspace, and Entertainment',
          paragraphs: [
            'The living room is open, bright, and modern in design. The couch can be folded out into an additional bed, while the surfboard-shaped coffee table charmingly reflects the Surf City lifestyle.',
            'The workspace is equipped with a curved monitor, speakers, and additional accessories, making it ideal for digital work, home office, or longer stays.',
            'The separate TV area offers a true cinema feeling: a huge 85-inch Smart TV with Netflix, Amazon Prime, Disney+, Internet, and additional functions invites you to enjoy relaxing evenings. Five different lighting systems, a fan, beanbags, and a rocking chair make this room a cozy retreat.',
          ],
        },
        {
          title: 'Bedrooms and Bathroom with Feel-Good Factor',
          paragraphs: [
            'The two bedrooms are modern and lovingly furnished. In addition to Alexa and air conditioning, they feature various lighting systems, including main light, light curtain, and string lights. Modern mattresses with comfortable mattress toppers ensure restful sleep.',
            'The bathroom combines modern design with comfort: a mirror with LED light, a modern gold-plated faucet, an extra-large rain shower, an instant hot water heater, bathroom ventilation fans, and a large ceiling fan create a high-quality, pleasant atmosphere.',
          ],
        },
        {
          title: 'Outdoor Area with Tropical Lifestyle',
          paragraphs: [
            'The entrance area and outdoor space of Vista Infinita have been designed with great attention to detail. A beautiful illuminated path leads to the house. There you will find a barbecue grill, surfboard holder, decorations, a motorcycle helmet compartment, a garden lounge, sun loungers, rocking chairs, a workout tower, string lights, banana plants, a palm tree, wall spotlights for the back wall, column lights for the house columns, a hammock, and a telescope with a view of Punta Roca to check the waves in the morning.',
            'The exterior wall is equipped with solar lights that impressively illuminate the entire house wall as well as the house name \u201cVista Infinita.\u201d',
            'In the storage area, there is plenty of space for cleaning supplies and personal belongings. A private washing machine is also available.',
            'The fresh water tank with its own pump system supplies the house with Anda drinking water. The septic tank of the house is so generously dimensioned that it never has to be emptied.',
          ],
        },
        {
          title: 'Great Expansion Potential \u2014 Private or as an Investment',
          paragraphs: [
            'Vista Infinita is not only a beautiful private home, but also an extraordinary investment opportunity.',
            'Underneath the infinity pool, there is an additional room that can be further expanded if desired. This could later be used separately or rented out additionally, for example.',
            'The structural engineering and all columns of the house were built reinforced, so that another two floors can be added. The cost for an additional floor including materials and a new roof is therefore only about 15,000 US dollars.',
            'This opens up enormous potential: the house is perfect as a private residence, a weekend home, a vacation retreat for the family, or as an attractive Airbnb project. Depending on usage, it can be rented on Airbnb for approximately 200 to 300 euros per night.',
            'By expanding the room underneath the infinity pool and potentially building a second or third floor with separate access, up to four separately rentable areas could be created. This could make a daily revenue of up to 1,000 euros possible.',
          ],
        },
      ],
      closing: {
        title: 'Vista Infinita \u2014 More Than a Home',
        paragraphs: [
          'Vista Infinita is not an ordinary house. It is a lifestyle.',
          'It is the first coffee with a view of the Pacific. It is the jump into the infinity pool at sunset. It is the sound of the waves, the cool breeze from the ocean, and the feeling of waking up every day in a place others only dream of. It is modern living, tropical lightness, smart home comfort, and investment potential all in one.',
          'Whether as a private dream home, luxurious weekend residence, Airbnb project, or the foundation for a larger hotel and glamping concept \u2014 Vista Infinita offers a rare combination of location, view, equipment, technology, expansion potential, and atmosphere.',
          'A home above the harbor of La Libertad. A view all the way to Punta Roca. An infinity pool above the Pacific. A place that fully lives up to its name:',
          'Vista Infinita \u2014 infinite views, infinite possibilities.',
        ],
      },
      tourDayTitle: 'Daytime Tour',
      tourNightTitle: 'Nighttime Tour',
    },
    land: {
      title: 'Extra Land',
      subtitle: 'The mountain behind the house \u2014 a rare expansion opportunity.',
      sectionTitle: 'Additional Opportunity: The Mountain Behind the House',
      intro: [
        'A special extra: the property, or nearly the remaining entire mountain behind the house, is also owned by the seller and can be purchased separately.',
        'This hillside offers a breathtaking view and already consists of various terraces. The original plan was to connect this area with the house into an exclusive hotel project \u2014 with glamping domes, Jacuzzi, and an incredible view over the ocean, harbor, and coastline.',
        'Please find in the pictures of my architectural plan where you can see the glamping domes, which are not built yet.',
        'In this concept, Vista Infinita could be used as the reception, check-in area, and pool area. An additional second floor could serve as a restaurant or bar for guests. This creates the opportunity to turn this already unique home into an exceptional tourism project in one of the most exciting places in El Salvador.',
      ],
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
      house: 'Casa',
      extraLand: 'Terreno Extra',
      areaAround: 'Alrededores',
      contactLocation: 'Contacto/Ubicaci\u00f3n',
    },
    hero: {
      subtitle: 'Surf City - La Libertad, El Salvador',
      cta: 'Contacto / Ubicaci\u00f3n',
    },
    home: {
      intro: [
        'Descubre Vista Infinita, una moderna casa tropical ubicada sobre el puerto de La Libertad, en el coraz\u00f3n de Surf City. Con impresionantes vistas al oc\u00e9ano Pac\u00edfico, a La Libertad y hasta Punta Roca, este hogar combina la brisa marina, la tecnolog\u00eda inteligente y el lujo relajado de la costa.',
        'A solo minutos de la playa, restaurantes y los mejores spots de surf, Vista Infinita est\u00e1 dise\u00f1ada para disfrutar atardeceres inolvidables, ma\u00f1anas tranquilas y el aut\u00e9ntico estilo de vida de la costa pac\u00edfica de El Salvador.',
      ],
      sectionTitle: 'Sobre la Casa',
      features: {
        pool: { label: 'Piscina Infinita', value: '20 m' },
        furnished: { label: 'Totalmente Amueblada', value: 'Lista para mudarse' },
        bedrooms: { label: 'Habitaciones', value: '3' },
        bathrooms: { label: 'Ba\u00f1os', value: '1' },
        surfSpot: { label: 'Al spot de surf', value: '10 min caminando' },
        surfBreak: { label: 'Punto de surf', value: 'Punta Roca' },
      },
      closing:
        'Vista Infinita es m\u00e1s que una casa: es una residencia de lujo reci\u00e9n construida y totalmente amueblada sobre el Pac\u00edfico, que combina un dise\u00f1o moderno y sofisticado, confort inteligente, un estilo de vida con piscina infinita y un excepcional potencial de expansi\u00f3n en el coraz\u00f3n de Surf City.',
    },
    house: {
      title: 'La Casa',
      subtitle: 'Vista Infinita \u2014 la casa de tus sue\u00f1os sobre el puerto de La Libertad.',
      heroTitle:
        'Vista Infinita \u2014 La casa de tus sue\u00f1os sobre el puerto de La Libertad en Surf City, El Salvador',
      intro: [
        'Directamente sobre el hermoso puerto de La Libertad, en pleno coraz\u00f3n de Surf City, se alza una casa que merece plenamente su nombre: Vista Infinita.',
        'Un lugar donde el sol sale por la ma\u00f1ana sobre el Pac\u00edfico, donde el cielo se ti\u00f1e de tonos dorados al atardecer y donde la fresca brisa del mar crea durante todo el d\u00eda una agradable sensaci\u00f3n de vida tropical. Desde aqu\u00ed se disfruta de una vista impresionante sobre La Libertad, el puerto, el oc\u00e9ano y hasta Punta Roca, uno de los spots de surf m\u00e1s famosos de la regi\u00f3n.',
        'A solo unos 300 metros, un camino directo conduce a la playa Playa El Obispo, con sus restaurantes, piscinas naturales del oc\u00e9ano y el inconfundible estilo de vida de la costa pac\u00edfica salvadore\u00f1a.',
      ],
      sections: [
        {
          title: 'Una casa que combina vacaciones, lujo y libertad',
          paragraphs: [
            'La casa cuenta con 2 dormitorios, una sala de estar con cocina y \u00e1rea de trabajo, un ba\u00f1o, una sala de televisi\u00f3n independiente y una amplia zona exterior creada para d\u00edas de descanso, tardes sociales y atardeceres inolvidables.',
            'Toda la casa est\u00e1 equipada con grandes puertas de vidrio y persianas que se pueden abrir f\u00e1cilmente. As\u00ed, los espacios interiores y exteriores se fusionan, haciendo que el mar, la luz y la brisa formen parte de la vida diaria.',
            'El punto m\u00e1s destacado es la impresionante piscina infinity de aproximadamente 20 metros de largo, que parece abrirse sin l\u00edmites hacia el Pac\u00edfico. La iluminaci\u00f3n de la piscina se puede controlar c\u00f3modamente mediante interruptor o control remoto y ajustarse en diferentes colores. Por la noche, Vista Infinita se transforma en un oasis privado con una atm\u00f3sfera m\u00e1gica.',
          ],
        },
        {
          title: 'Vida moderna con comodidad Smart Home',
          paragraphs: [
            'Vista Infinita es completamente nueva, altamente moderna y pensada hasta el m\u00e1s m\u00ednimo detalle.',
            'La casa dispone de internet Starlink, conexi\u00f3n de agua a trav\u00e9s de Anda, electricidad normal, as\u00ed como una propia l\u00ednea de corriente de alto voltaje. Tres aires acondicionados aseguran temperaturas agradables: uno en la sala de estar y uno en cada uno de los dos dormitorios. Adem\u00e1s, hay tres ventiladores de techo en la sala de estar, el ba\u00f1o y la sala de televisi\u00f3n.',
            'Toda la casa est\u00e1 dise\u00f1ada como Smart Home. Hay Alexas en todas las habitaciones, y todas las luces, la electricidad y el control de la bomba de la piscina pueden manejarse tanto desde el smartphone como por control de voz. Un sistema Dolby Surround proporciona una experiencia moderna de entretenimiento.',
            'La seguridad y la comodidad tambi\u00e9n est\u00e1n garantizadas: un sistema de c\u00e1maras de seguridad puede controlarse desde el smartphone. En la entrada se encuentra un Ring Doorbell, conectado tanto con las Alexas de la casa como con el smartphone. A trav\u00e9s de la pantalla Alexa en la cocina se puede ver inmediatamente qui\u00e9n est\u00e1 tocando el timbre.',
            'Un robot de limpieza Smart AI completamente automatizado aspira y friega la vivienda de forma independiente con agua caliente.',
          ],
        },
        {
          title: 'Cocina de dise\u00f1o con equipamiento de \u00faltima generaci\u00f3n',
          paragraphs: [
            'La cocina no solo es funcional, sino que es verdaderamente el coraz\u00f3n de la casa. Est\u00e1 equipada con los aparatos m\u00e1s modernos, entre ellos un refrigerador moderno con m\u00e1quina de hielo, microondas, lavavajillas, una moderna cocina de inducci\u00f3n con su propia vajilla y utensilios aptos para inducci\u00f3n, un horno el\u00e9ctrico moderno conectado a corriente de alto voltaje, as\u00ed como una cafetera autom\u00e1tica de alta calidad con pantalla t\u00e1ctil, que por ejemplo espuma autom\u00e1ticamente la leche para cappuccino.',
            'Adem\u00e1s, el equipamiento incluye hervidor de agua, tostadora, un sistema de filtraci\u00f3n de agua potable y un moderno fregadero con funci\u00f3n de lavado de vasos, indicador de temperatura y muchas otras funciones. En la pared de la cocina hay un elegante soporte para copas de vino, incluidas las copas.',
            'La cocina, la mesa del comedor, las sillas, las camas, la mesa de centro, el escritorio para computadora y todas las estanter\u00edas fueron hechas a medida por un carpintero. Esto crea un estilo de vida \u00fanico, de alta calidad e individual, que encaja perfectamente con el car\u00e1cter de esta casa.',
          ],
        },
        {
          title: 'Sala de estar, \u00e1rea de trabajo y entretenimiento',
          paragraphs: [
            'La sala de estar tiene un dise\u00f1o abierto, luminoso y moderno. El sof\u00e1 se puede convertir en una cama adicional, mientras que la mesa de centro en forma de tabla de surf refleja de forma encantadora el estilo de vida de Surf City.',
            'El \u00e1rea de trabajo est\u00e1 equipada con una pantalla curva, altavoces y otros accesorios, por lo que es ideal para trabajo digital, home office o estad\u00edas prolongadas.',
            'La sala de televisi\u00f3n independiente ofrece una aut\u00e9ntica sensaci\u00f3n de cine: un enorme Smart TV de 85 pulgadas con Netflix, Amazon Prime, Disney+, internet y otras funciones invita a disfrutar de noches relajadas. Cinco sistemas de iluminaci\u00f3n diferentes, un ventilador, pufs y una silla mecedora convierten esta habitaci\u00f3n en un refugio acogedor.',
          ],
        },
        {
          title: 'Dormitorios y ba\u00f1o con factor de bienestar',
          paragraphs: [
            'Los dos dormitorios est\u00e1n amueblados de forma moderna y con mucho cari\u00f1o. Adem\u00e1s de Alexa y aire acondicionado, cuentan con distintos sistemas de iluminaci\u00f3n, incluyendo luz principal, cortina de luces y guirnalda de luces. Colchones modernos con c\u00f3modos toppers aseguran un sue\u00f1o reparador.',
            'El ba\u00f1o combina dise\u00f1o moderno con comodidad: un espejo con luz LED, un grifo moderno dorado, una ducha de lluvia extra grande, un calentador instant\u00e1neo de agua caliente, ventiladores de extracci\u00f3n para el ba\u00f1o y un gran ventilador de techo crean un ambiente agradable y de alta calidad.',
          ],
        },
        {
          title: 'Zona exterior con estilo de vida tropical',
          paragraphs: [
            'La entrada y el \u00e1rea exterior de Vista Infinita han sido dise\u00f1adas con gran atenci\u00f3n al detalle. Un hermoso camino iluminado conduce a la casa. All\u00ed se encuentran una parrilla, soporte para tablas de surf, decoraciones, un compartimento para casco de motocicleta, una sala lounge de jard\u00edn, tumbonas, sillas mecedoras, una torre de entrenamiento, guirnaldas de luces, plantas de banano, una palmera, focos de pared para la pared trasera, luces para las columnas de la casa, una hamaca y un telescopio con vista a Punta Roca para revisar las olas por la ma\u00f1ana.',
            'La pared exterior est\u00e1 equipada con luces solares que iluminan de forma impresionante toda la pared de la casa, as\u00ed como el nombre \u201cVista Infinita.\u201d',
            'En el \u00e1rea de almacenamiento hay suficiente espacio para art\u00edculos de limpieza y objetos personales. Tambi\u00e9n hay una lavadora propia disponible.',
            'El tanque de agua fresca con su propio sistema de bombeo suministra la casa con agua potable de Anda. El tanque s\u00e9ptico de la casa est\u00e1 dimensionado de forma tan generosa que nunca necesita ser vaciado.',
          ],
        },
        {
          title: 'Gran potencial de ampliaci\u00f3n \u2014 privado o como inversi\u00f3n',
          paragraphs: [
            'Vista Infinita no es solo una hermosa vivienda privada, sino tambi\u00e9n una extraordinaria oportunidad de inversi\u00f3n.',
            'Debajo de la piscina infinity se encuentra una habitaci\u00f3n adicional que puede seguir ampli\u00e1ndose si se desea. Esta podr\u00eda utilizarse m\u00e1s adelante de forma independiente o alquilarse adicionalmente, por ejemplo.',
            'La estructura y todas las columnas de la casa fueron construidas reforzadas, de modo que se pueden a\u00f1adir dos pisos m\u00e1s. El costo de un piso adicional, incluyendo materiales y techo nuevo, asciende por ello a solo aproximadamente 15.000 d\u00f3lares estadounidenses.',
            'Esto abre un enorme potencial: la casa es perfecta como residencia privada, casa de fin de semana, refugio vacacional para la familia o como atractivo proyecto de Airbnb. Dependiendo del uso, puede alquilarse en Airbnb por aproximadamente 200 a 300 euros por noche.',
            'Mediante la ampliaci\u00f3n de la habitaci\u00f3n debajo de la piscina infinity y la posible construcci\u00f3n de un segundo o tercer piso con acceso separado, podr\u00edan crearse hasta cuatro \u00e1reas alquilables por separado. Esto podr\u00eda hacer posible un ingreso diario de hasta 1.000 euros.',
          ],
        },
      ],
      closing: {
        title: 'Vista Infinita \u2014 M\u00e1s que una casa',
        paragraphs: [
          'Vista Infinita no es una casa com\u00fan. Es un estilo de vida.',
          'Es el primer caf\u00e9 con vista al Pac\u00edfico. Es el salto a la piscina infinity al atardecer. Es el sonido de las olas, la brisa fresca del mar y la sensaci\u00f3n de despertar cada d\u00eda en un lugar con el que otros solo sue\u00f1an. Es vida moderna, ligereza tropical, comodidad Smart Home y potencial de inversi\u00f3n, todo en uno.',
          'Ya sea como casa privada de ensue\u00f1o, residencia de fin de semana de lujo, proyecto de Airbnb o base para un concepto hotelero y de glamping m\u00e1s grande, Vista Infinita ofrece una rara combinaci\u00f3n de ubicaci\u00f3n, vista, equipamiento, tecnolog\u00eda, potencial de ampliaci\u00f3n y atm\u00f3sfera.',
          'Una casa sobre el puerto de La Libertad. Una vista hasta Punta Roca. Una piscina infinity sobre el Pac\u00edfico. Un lugar que hace pleno honor a su nombre:',
          'Vista Infinita \u2014 vistas infinitas, posibilidades infinitas.',
        ],
      },
      tourDayTitle: 'Recorrido de d\u00eda',
      tourNightTitle: 'Recorrido de noche',
    },
    land: {
      title: 'Terreno Extra',
      subtitle: 'La monta\u00f1a detr\u00e1s de la casa \u2014 una oportunidad \u00fanica de expansi\u00f3n.',
      sectionTitle: 'Oportunidad adicional: la monta\u00f1a detr\u00e1s de la casa',
      intro: [
        'Un extra especial: el terreno, o casi toda la monta\u00f1a restante detr\u00e1s de la casa, tambi\u00e9n pertenece al vendedor y puede comprarse por separado.',
        'Esta ladera ofrece una vista impresionante y ya est\u00e1 formada por varias terrazas. El plan original era conectar esta \u00e1rea con la casa para convertirla en un exclusivo proyecto hotelero, con domos glamping, jacuzzi y una vista incre\u00edble sobre el oc\u00e9ano, el puerto y la costa.',
        'Por favor, encuentre en las im\u00e1genes de mi plano arquitect\u00f3nico d\u00f3nde se pueden ver los domos glamping, que a\u00fan no han sido construidos.',
        'En este concepto, Vista Infinita podr\u00eda utilizarse como recepci\u00f3n, \u00e1rea de check-in y zona de piscina. Un segundo piso adicional podr\u00eda servir como restaurante o bar para los hu\u00e9spedes. Esto crea la oportunidad de convertir esta casa ya \u00fanica en un proyecto tur\u00edstico excepcional en uno de los lugares m\u00e1s emocionantes de El Salvador.',
      ],
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
