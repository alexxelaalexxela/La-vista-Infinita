import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const tshirtImages = [
  '/images/piri-shirt-1.png',
  '/images/piri-shirt-2.png',
  '/images/piri-shirt-3.png',
  '/images/piri-shirt-4.png',
  '/images/piri-shirt-5.png'
];

const Accessories = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold">Accessories</h1>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Tee-shirts and surf accessories available at Piry&apos;s Ding Repair.
            </p>
          </div>

          <section className="max-w-6xl mx-auto mb-14">
            <div className="flex items-end justify-between gap-4 mb-6">
              <h2 className="font-serif text-2xl font-semibold">Tee-shirts ($15)</h2>
              <Button asChild variant="outline">
                <a
                  href="https://wa.me/50376717527?text=Hi%20Piry%27s%20Ding%20Repair!%20How%20much%20for%20tee-shirts%20($15)%20and%20what%20sizes%20are%20available%3F"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ask Size & Availability
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tshirtImages.map((image, idx) => (
                <div key={image} className="rounded-lg border bg-white overflow-hidden">
                  <img src={image} alt={`Piry tee-shirt ${idx + 1}`} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-4xl mx-auto rounded-lg border bg-white p-6 md:p-8">
            <h2 className="font-serif text-2xl font-semibold mb-4">Other Accessories (no photo)</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>Wax</li>
              <li>Screws</li>
              <li>Longboard screw</li>
              <li>FCS fin screws</li>
              <li>Futures fin screws</li>
            </ul>
            <Button asChild className="mt-6">
              <a
                href="https://wa.me/50376717527?text=Hi%20Piry%27s%20Ding%20Repair!%20How%20much%20for%20wax,%20screws,%20longboard%20screw,%20FCS%20screws,%20and%20Futures%20screws%3F"
                target="_blank"
                rel="noreferrer"
              >
                Ask How Much On WhatsApp
              </a>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Accessories;
