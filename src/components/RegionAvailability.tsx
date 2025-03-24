
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Building, Mountain, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const RegionAvailability = () => {
  const regions = [
    {
      name: 'Urban Areas',
      icon: <Building size={24} />,
      description: 'Cities and municipal corporations in Rajasthan',
      benefits: [
        'Access to specialized tertiary care hospitals',
        'Quick emergency response with 108 ambulances',
        'Specialized neonatal and pediatric ICUs',
        'Advanced diagnostic facilities',
        'Regular health camps in urban slums'
      ],
      cities: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 'Bikaner'],
      color: 'bg-green-50 border-green-100 text-green-700'
    },
    {
      name: 'Rural Areas',
      icon: <Users size={24} />,
      description: 'Villages and panchayats throughout the state',
      benefits: [
        'Mobile health units for remote village outreach',
        'ASHA workers providing door-to-door counseling',
        'Regular immunization camps',
        'Anganwadi centers providing nutrition support',
        'Referral transport to district hospitals'
      ],
      cities: ['Most districts', 'Gram panchayats', 'Community health centers'],
      color: 'bg-blue-50 border-blue-100 text-blue-700'
    },
    {
      name: 'Remote Areas',
      icon: <Mountain size={24} />,
      description: 'Desert regions, tribal areas, and difficult terrains',
      benefits: [
        'Special helicopter services for emergencies',
        'Mobile medical vans with basic treatment facilities',
        'Community health kits for first aid',
        'Additional incentives for healthcare workers',
        'Telemedicine facilities connecting to specialists'
      ],
      cities: ['Tribal areas', 'Desert regions', 'Hilly districts', 'Border areas'],
      color: 'bg-purple-50 border-purple-100 text-purple-700'
    }
  ];

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="region-availability" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Geographical Coverage
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Health Schemes Available Across All Regions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Rajasthan's children's health schemes are designed to reach every child, regardless of where they live. 
            Discover the unique features available in different regions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <Card className={`h-full border-2 ${region.color} overflow-hidden`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {region.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{region.name}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{region.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-3 flex items-center">
                      <MapPin size={16} className="mr-2" />
                      Coverage Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {region.cities.map((city, i) => (
                        <span key={i} className="bg-background px-2 py-1 rounded text-xs border">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Special Benefits</h4>
                    <ul className="space-y-2">
                      {region.benefits.map((benefit, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          viewport={{ once: true }}
                        >
                          <Check size={16} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionAvailability;
