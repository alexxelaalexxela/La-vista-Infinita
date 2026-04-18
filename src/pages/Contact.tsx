import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Contact Piri&apos;s Ding Repair</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Send your board photos on WhatsApp for an estimate and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Visit The Workshop</h3>
                  <p className="text-muted-foreground">
                    Piri&apos;s Ding Repair<br />
                    FMPG+8F7, 5 Ave Sur<br />
                    La Libertad, El Salvador
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">WhatsApp</h3>
                  <Button asChild variant="outline" className="mb-2">
                    <a href="https://wa.me/50376717527">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      +50376717527
                    </a>
                  </Button>
                </div>
              </div>

              

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Hours</h3>
                  <div className="text-muted-foreground">
                    <div>Monday - Saturday: 8:00 AM - 6:00 PM</div>
                    <div>Sunday: By WhatsApp request</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-sand-light rounded-lg p-6">
              <h3 className="font-serif text-xl font-semibold mb-4">Find Us In La Libertad</h3>
              <div className="aspect-video rounded-md overflow-hidden">
                <iframe
                  title="Piri's Ding Repair La Libertad Location"
                  src="https://www.google.com/maps?q=FMPG%2B8F7%2C%205%20Ave%20Sur%2C%20La%20Libertad%2C%20El%20Salvador&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=FMPG%2B8F7%2C%205%20Ave%20Sur%2C%20La%20Libertad%2C%20El%20Salvador"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  Open in Google Maps
                </a>
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