
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="text-primary font-display text-xl font-semibold tracking-tight"
        >
          RajHealth<span className="text-primary/80">Kids</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'Schemes', path: '#schemes' },
            { name: 'Eligibility', path: '#eligibility' },
            { name: 'Resources', path: '#resources' },
            { name: 'Contact', path: '#contact' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="text-foreground/80 hover:text-foreground text-sm font-medium animated-underline transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button size="sm" className="ml-4">
            Apply Now
          </Button>
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
            "fixed inset-0 z-40 bg-white md:hidden transition-all duration-300 ease-in-out",
            isMenuOpen 
              ? "opacity-100 pointer-events-auto translate-x-0" 
              : "opacity-0 pointer-events-none translate-x-full"
          )}
        >
          <div className="flex flex-col h-full pt-20 px-6">
            {[
              { name: 'Home', path: '/' },
              { name: 'Schemes', path: '#schemes' },
              { name: 'Eligibility', path: '#eligibility' },
              { name: 'Resources', path: '#resources' },
              { name: 'Contact', path: '#contact' },
            ].map((item, i) => (
              <a
                key={item.name}
                href={item.path}
                className="py-4 text-foreground text-2xl font-medium border-b border-muted"
                style={{ 
                  animationDelay: `${i * 0.05}s`,
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="mt-8 w-full">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
