import React from 'react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n';

const Contact = () => {
  const { language } = useI18n();
  const mapsUrl = 'https://maps.app.goo.gl/58JUeGmwcToqAT24A?g_st=aw';
  const phoneNumber = '+50379526551';
  const phoneHref = 'tel:+50379526551';
  const whatsappHref = 'https://wa.me/50379526551';

  // Embed URL for the exact coordinates: 13°29'17.2"N 89°18'52.8"W → 13.488111, -89.314667
  const embedSrc =
    'https://www.google.com/maps?q=13.488111,-89.314667&hl=en&z=16&output=embed';

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                {language === 'es' ? 'Contacto y ubicacion' : 'Contact/Location'}
              </h1>
              <p className="text-lg text-muted-foreground">
                {language === 'es'
                  ? 'Escribenos o visita La Vista Infinita.'
                  : 'Get in touch or come visit La Vista Infinita.'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-sand-light border border-sand-medium">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                        {language === 'es' ? 'Telefono' : 'Phone'}
                      </h3>
                      <a
                        href={phoneHref}
                        className="text-lg text-muted-foreground hover:text-primary transition-colors"
                      >
                        {phoneNumber}
                      </a>
                      <div className="mt-3">
                        <Button asChild variant="outline" size="sm">
                          <a href={whatsappHref} target="_blank" rel="noreferrer">
                            WhatsApp
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-sand-light border border-sand-medium">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                        {language === 'es' ? 'Ubicacion' : 'Location'}
                      </h3>
                      <p className="text-muted-foreground">
                        Surf City — La Libertad
                        <br />
                        El Salvador
                      </p>
                      <p className="text-sm text-muted-foreground mt-2 font-mono">
                        13°29&apos;17.2&quot;N 89°18&apos;52.8&quot;W
                      </p>
                      <div className="mt-3">
                        <Button asChild variant="outline" size="sm">
                          <a href={mapsUrl} target="_blank" rel="noreferrer">
                            {language === 'es' ? 'Abrir en Google Maps' : 'Open in Google Maps'}
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-xl min-h-[400px] h-full">
                <iframe
                  title="La Vista Infinita location"
                  src={embedSrc}
                  className="w-full h-full min-h-[400px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
