import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import rentals from '@/data/rentals.json';

const RentalsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold">Board Rentals</h1>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Daily and weekly rentals for all levels. Message us for availability and delivery options.</p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentals.map((item: any) => (
              <Card key={item.id} className="border overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground mb-3">{item.type} • {item.size} • {item.volume}</div>
                  <div className="flex items-center justify-between text-sm">
                    <span><strong>Daily:</strong> {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(item.dailyRate)}</span>
                    <span><strong>Weekly:</strong> {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(item.weeklyRate)}</span>
                  </div>
                  <Button asChild className="mt-4 w-full">
                    <a href={`https://wa.me/50376717527?text=${encodeURIComponent(`Hi Piri's Ding Repair! I'd like to rent: ${item.name} (${item.size}, ${item.volume}). Please share availability.`)}`}>
                      Book on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RentalsPage;


