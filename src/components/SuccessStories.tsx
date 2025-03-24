
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { QuoteIcon, Star } from 'lucide-react';

interface SuccessStory {
  id: number;
  name: string;
  age: number;
  location: string;
  quote: string;
  scheme: string;
  treatmentFor: string;
  rating: number;
  image?: string;
}

const SuccessStories = () => {
  const stories: SuccessStory[] = [
    {
      id: 1,
      name: "Aarav Singh",
      age: 7,
      location: "Jaipur",
      quote: "The Rajasthan Nirogi Ladla scheme helped me get surgery for my heart condition. Now I can play cricket with my friends!",
      scheme: "Rajasthan Nirogi Ladla",
      treatmentFor: "Congenital Heart Defect",
      rating: 5,
    },
    {
      id: 2,
      name: "Meera Sharma",
      age: 4,
      location: "Udaipur",
      quote: "I received all my vaccines on time through Janani Shishu Suraksha Yojana. My mother didn't have to pay anything for my check-ups.",
      scheme: "Janani Shishu Suraksha Yojana",
      treatmentFor: "Routine Immunization",
      rating: 5,
    },
    {
      id: 3,
      name: "Rohit Meena",
      age: 12,
      location: "Jodhpur",
      quote: "The Mukhyamantri Chiranjeevi Yojana helped my family when I needed surgery. The hospital took care of everything.",
      scheme: "Mukhyamantri Chiranjeevi Yojana",
      treatmentFor: "Appendicitis Surgery",
      rating: 4,
    },
    {
      id: 4,
      name: "Priya Joshi",
      age: 9,
      location: "Kota",
      quote: "I was diagnosed with a vision problem during a school health checkup by RBSK. Now I have glasses and can see the blackboard clearly!",
      scheme: "Rashtriya Bal Swasthya Karyakram",
      treatmentFor: "Vision Correction",
      rating: 5,
    }
  ];

  return (
    <section id="success-stories" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4">Success Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Real Children, Real Impact
          </h2>
          <p className="mt-4 text-muted-foreground">
            Read how Rajasthan's health schemes have transformed the lives of children across the state.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-md overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="text-xs">
                      {story.scheme}
                    </Badge>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${
                            i < story.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative mb-6 mt-2">
                    <QuoteIcon size={24} className="absolute -top-2 -left-1 text-primary/20" />
                    <p className="pl-6 italic text-muted-foreground">"{story.quote}"</p>
                  </div>
                  
                  <div className="flex items-center mt-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                      {story.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium">{story.name}, {story.age} years</h4>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <span>{story.location}</span>
                        <span className="mx-2">•</span>
                        <span>Treatment for: {story.treatmentFor}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These are just a few of the thousands of children who benefit from Rajasthan's healthcare schemes each year. 
            Your child could be next to receive quality healthcare.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
