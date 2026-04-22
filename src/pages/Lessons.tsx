import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import lessons from '@/data/lessons.json';

const Lessons = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold">Surf Lessons</h1>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Book a lesson that fits your level. All lessons include equipment and are run by experienced local instructors.</p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lessons.map((item: any) => (
              <Card key={item.id} className="border">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{item.type}</CardTitle>
                  <CardDescription>{item.duration} • {item.level}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground mb-4 list-disc pl-5">
                    {item.includes.map((inc: string, idx: number) => (
                      <li key={idx}>{inc}</li>
                    ))}
                  </ul>
                  <div className="text-lg font-semibold">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(item.price)}{item.perPerson ? ' / person' : ''}
                  </div>
                  <Button asChild className="mt-4 w-full">
                    <a href={`https://wa.me/50376717527?text=${encodeURIComponent(`Hi Piry's Ding Repair! I'd like to book: ${item.type} (${item.duration}). Level: ${item.level}.`)}`}>
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

export default Lessons;


