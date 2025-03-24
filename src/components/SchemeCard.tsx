
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export interface SchemeCardProps {
  title: string;
  description: string;
  category: string;
  eligibility: string;
  benefits: string[];
  icon: React.ReactNode;
}

const SchemeCard: React.FC<SchemeCardProps> = ({
  title,
  description,
  category,
  eligibility,
  benefits,
  icon
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <Card 
      className="overflow-hidden h-full transition-all duration-300 border border-border hover:border-primary/20 hover:shadow-lg"
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div 
            className="w-12 h-12 flex items-center justify-center rounded-md bg-primary/10 text-primary"
          >
            {icon}
          </div>
          <Badge variant="secondary" className="text-xs font-medium">
            {category}
          </Badge>
        </div>
        <CardTitle className="mt-4 text-xl">{title}</CardTitle>
        <CardDescription className="mt-2 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-6">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-1">Eligibility</h4>
            <p className="text-sm text-muted-foreground">{eligibility}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-1">Key Benefits</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full justify-between group">
          <span>Learn More</span>
          <ArrowRight 
            size={16} 
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SchemeCard;
