
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
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
  regionSpecific?: {
    urban: boolean;
    rural: boolean;
    remote: boolean;
  };
}

const SchemeCard: React.FC<SchemeCardProps> = ({
  title,
  description,
  category,
  eligibility,
  benefits,
  icon,
  regionSpecific = { urban: true, rural: true, remote: true }
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card 
        className="overflow-hidden h-full transition-all duration-300 border border-border hover:border-primary/20 hover:shadow-lg"
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start">
            <motion.div 
              className="w-12 h-12 flex items-center justify-center rounded-md bg-primary/10 text-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {icon}
            </motion.div>
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
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="mr-2 text-primary">•</span>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* Region availability */}
            <div>
              <h4 className="text-sm font-medium mb-1">Region Availability</h4>
              <div className="flex flex-wrap gap-2">
                {regionSpecific.urban && (
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Urban
                  </Badge>
                )}
                {regionSpecific.rural && (
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    Rural
                  </Badge>
                )}
                {regionSpecific.remote && (
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                    Remote
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            variant="ghost" 
            className="w-full justify-between group"
            asChild
          >
            <a href="#scheme-details">
              <span>Learn More</span>
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight 
                  size={16} 
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.div>
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default SchemeCard;
