
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const buttonContainer = buttonContainerRef.current;
    
    if (heading) {
      heading.style.opacity = '0';
      heading.style.transform = 'translateY(20px)';
      setTimeout(() => {
        heading.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
      }, 100);
    }
    
    if (paragraph) {
      paragraph.style.opacity = '0';
      paragraph.style.transform = 'translateY(20px)';
      setTimeout(() => {
        paragraph.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        paragraph.style.opacity = '1';
        paragraph.style.transform = 'translateY(0)';
      }, 300);
    }
    
    if (buttonContainer) {
      buttonContainer.style.opacity = '0';
      buttonContainer.style.transform = 'translateY(20px)';
      setTimeout(() => {
        buttonContainer.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        buttonContainer.style.opacity = '1';
        buttonContainer.style.transform = 'translateY(0)';
      }, 500);
    }
  }, []);

  const scrollToSchemes = () => {
    const schemesSection = document.getElementById('schemes');
    if (schemesSection) {
      schemesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToForms = () => {
    const formsSection = document.getElementById('forms');
    if (formsSection) {
      formsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with enhanced design */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-purple-50 pointer-events-none" />
      
      {/* Modern pattern overlay */}
      <div className="absolute inset-0 bg-modern-pattern opacity-[0.05] pointer-events-none" />
      
      {/* Animated circles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-200 opacity-10 animate-pulse blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-purple-200 opacity-10 animate-pulse blur-3xl" style={{ animationDelay: '1s' }}></div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 pt-32 md:pt-0 text-center">
        <motion.h1 
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance max-w-4xl mx-auto leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Ensuring Every Child in Rajasthan Has Access to 
          <span className="text-primary"> Quality Healthcare</span>
        </motion.h1>
        
        <motion.p 
          ref={paragraphRef}
          className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Discover health schemes designed specifically for children in Rajasthan, 
          providing comprehensive medical care, nutrition support, and preventive services.
        </motion.p>
        
        <motion.div 
          ref={buttonContainerRef}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button 
            size="lg" 
            className="rounded-full px-8 shadow-md hover:shadow-lg transition-all"
            onClick={scrollToForms}
          >
            Apply Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full px-8 hover:bg-primary/5 transition-all"
            onClick={scrollToSchemes}
          >
            See Available Schemes
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.button 
          onClick={scrollToSchemes}
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll down"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <span className="text-sm font-medium mb-2">Explore Schemes</span>
          <ArrowDown size={20} />
        </motion.button>
      </motion.div>
      
      {/* CSS for the modern pattern */}
      <style>
        {`
        .bg-modern-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%233b82f6' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
          background-size: 40px 40px;
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }
        `}
      </style>
    </div>
  );
};

export default Hero;
