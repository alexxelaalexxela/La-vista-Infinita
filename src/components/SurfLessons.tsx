import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SurfLessons = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Surf Lessons</h2>
            <p className="text-muted-foreground mb-6">
              Need coaching in La Libertad? We can connect you with trusted local instructors.
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• Certified instructors</li>
              <li>• All skill levels</li>
              <li>• Small groups or private</li>
              <li>• Equipment included</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <a href="https://wa.me/50376717527?text=Hi%20Piri%27s%20Ding%20Repair!%20Can%20you%20help%20me%20book%20a%20surf%20lesson%3F">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="/contact">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1516375195449-0b5451565661?q=80&w=1400&auto=format&fit=crop" alt="Surf lessons" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurfLessons;


