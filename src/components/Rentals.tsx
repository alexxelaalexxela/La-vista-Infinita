import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import rentals from '@/data/rentals.json';

const Rentals = () => {
  return (
    <section className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Board Rental</h2>
            <p className="text-muted-foreground mt-3">Quality boards for all levels. Daily and weekly rates available.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentals.slice(0, 6).map((item: any) => (
              <Card key={item.id} className="overflow-hidden border">
                <div className="relative">
                  <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{item.type} • {item.size} • {item.volume}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span><strong>Daily:</strong> {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(item.dailyRate)}</span>
                    <span><strong>Weekly:</strong> {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(item.weeklyRate)}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg">
              <a href="https://wa.me/50376717527?text=Hi%20Piri%27s%20Ding%20Repair!%20Can%20you%20help%20with%20board%20rental%20availability%3F">
                Book a Rental
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rentals;


