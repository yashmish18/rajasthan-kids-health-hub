
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 pt-32 md:pt-0 text-center">
        <h1 
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance max-w-4xl mx-auto leading-tight"
        >
          Ensuring Every Child in Rajasthan Has Access to 
          <span className="text-primary"> Quality Healthcare</span>
        </h1>
        
        <p 
          ref={paragraphRef}
          className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Discover health schemes designed specifically for children in Rajasthan, 
          providing comprehensive medical care, nutrition support, and preventive services.
        </p>
        
        <div 
          ref={buttonContainerRef}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="rounded-full px-8">
            Find Your Eligible Scheme
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8">
            How It Works
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToSchemes}
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm font-medium mb-2">Explore Schemes</span>
          <ArrowDown size={20} />
        </button>
      </div>
      
      {/* CSS for the grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #3b82f6 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </div>
  );
};

export default Hero;
