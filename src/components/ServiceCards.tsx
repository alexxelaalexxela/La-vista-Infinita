import React from 'react';
import { Link } from 'react-router-dom';
import { Waves, Wrench, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServiceCards = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Surf Repair',
      description: 'Main repairs we do every day with quick WhatsApp quotes.',
      features: ['Box fixing', 'Nose fixing', 'Sanded finish', 'Ask how much on WhatsApp'],
      cta: 'See Repair Types',
      action: () => window.location.assign('/boards')
    },
    {
      icon: Waves,
      title: 'Surf Lesson',
      description: 'Lessons available with local coaches.',
      features: ['Group lesson for beginners', 'Individual lesson 1h30', 'Friendly local coaching', 'Ask how much on WhatsApp'],
      cta: 'Ask Lesson Price',
      action: () => window.open('https://wa.me/50376717527?text=Hi%20Piri%27s%20Ding%20Repair!%20How%20much%20is%20a%20group%20lesson%20for%20beginners%20and%20an%20individual%201h30%20lesson%3F', '_blank')
    },
    {
      icon: ShoppingBag,
      title: 'Accessories',
      description: 'Small essentials and Piri’s Ding Repair tee-shirts.',
      features: ['Wax, screws, longboard screw', 'FCS and Futures fin screws', 'Tee-shirt: $15', 'Ask how much on WhatsApp'],
      cta: 'View Accessories',
      action: () => window.location.assign('/accessories')
    }
  ];

  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Workshop Services
              </h2>
              <div className="w-24 h-1 bg-ocean-medium mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Repair, lesson booking, and accessories in one place.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group transition-all duration-300 border">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-muted`}>
                      <service.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-ocean-medium rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={service.action}
                      className="w-full group"
                      variant="outline"
                    >
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <p className="text-lg text-muted-foreground mb-6">
                Need a timeline or estimate? Send a photo of your board and we&apos;ll answer quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="ocean-gradient text-white">
                  <Link to="/contact">
                    Contact Piri&apos;s Ding Repair
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ServiceCards;