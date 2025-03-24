
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToForms = () => {
    setIsMenuOpen(false);
    const formsSection = document.getElementById('forms');
    if (formsSection) {
      formsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/" 
            className="text-primary font-display text-xl font-semibold tracking-tight"
          >
            RajHealth<span className="text-primary/80">Kids</span>
          </Link>
        </motion.div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Home', id: '' },
            { name: 'Schemes', id: 'schemes' },
            { name: 'Eligibility', id: 'eligibility' },
            { name: 'Resources', id: 'resources' },
            { name: 'Contact', id: 'contact' },
          ].map((item, index) => (
            <motion.a
              key={item.name}
              onClick={() => item.id ? scrollToSection(item.id) : window.scrollTo(0, 0)}
              className="text-foreground/80 hover:text-foreground text-sm font-medium animated-underline transition-colors cursor-pointer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button size="sm" className="ml-4" onClick={scrollToForms}>
              Apply Now
            </Button>
          </motion.div>
        </nav>

        <button 
          className="md:hidden text-foreground" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="animate-fade-in" />
          ) : (
            <Menu size={24} className="animate-fade-in" />
          )}
        </button>

        {/* Mobile menu */}
        <div 
          className={cn(
            "fixed inset-0 z-40 bg-white/95 backdrop-blur-md md:hidden transition-all duration-300 ease-in-out",
            isMenuOpen 
              ? "opacity-100 pointer-events-auto translate-x-0" 
              : "opacity-0 pointer-events-none translate-x-full"
          )}
        >
          <div className="flex flex-col h-full pt-20 px-6">
            {[
              { name: 'Home', id: '' },
              { name: 'Schemes', id: 'schemes' },
              { name: 'Eligibility', id: 'eligibility' },
              { name: 'Resources', id: 'resources' },
              { name: 'Contact', id: 'contact' },
            ].map((item, i) => (
              <a
                key={item.name}
                onClick={() => item.id ? scrollToSection(item.id) : window.scrollTo(0, 0)}
                className="py-4 text-foreground text-2xl font-medium border-b border-muted cursor-pointer"
                style={{ 
                  animationDelay: `${i * 0.05}s`,
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease'
                }}
              >
                {item.name}
              </a>
            ))}
            <Button className="mt-8 w-full" onClick={scrollToForms}>
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
