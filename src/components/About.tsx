import React from 'react';
import { Waves, Heart, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Waves,
      title: 'Repair Expertise',
      description: 'From pressure dings to rail cracks, each repair is done with careful prep, strong lamination, and clean finishing.'
    },
    {
      icon: Heart,
      title: 'Built by Surfers',
      description: 'Piry&apos;s Ding Repair is run by people who surf La Libertad and understand what your board needs after heavy sessions.'
    },
    {
      icon: Users,
      title: 'Local Trust',
      description: 'Surfers, travelers, and local schools rely on the workshop for honest advice, clear timelines, and quality results.'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Every board leaves the shop watertight, sanded, and ready for the next swell.'
    }
  ];

  return (
    <section className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              About The Workshop
            </h2>
            <div className="w-24 h-1 bg-ocean-medium mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Located in La Libertad, Piry&apos;s Ding Repair focuses on reliable surfboard repairs with practical service
              for locals and traveling surfers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Story Content */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Keep Your Board In The Water
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The goal is simple: fix boards properly and fast so you can surf more and worry less.
                We repair dings, broken noses, tail damage, cracked rails, and water intrusion.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether your board needs a quick patch or a full structural rebuild,
                every job follows the same process: dry, reinforce, laminate, sand, and finish.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Need a custom touch after repair? We can also help with refinishing and custom requests
                based on your board and style.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <img 
                src="/images/piri-workshop-2.png" 
                alt="Piry's Ding Repair workshop in La Libertad"
                className="rounded-lg wood-shadow w-full"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-wood-medium opacity-20"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-ocean-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-blue-500" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;