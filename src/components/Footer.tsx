
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-muted">
          <div>
            <Link 
              to="/" 
              className="text-primary font-display text-xl font-semibold tracking-tight inline-block mb-4"
            >
              RajHealth<span className="text-primary/80">Kids</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-4 max-w-xs">
              Dedicated to improving the health and well-being of every child in Rajasthan through accessible healthcare schemes.
            </p>
            <div className="flex items-center mt-6 text-sm text-muted-foreground">
              <Heart size={16} className="mr-2 text-primary" />
              Made for Rajasthan's children
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '#about' },
                { name: 'All Schemes', path: '#schemes' },
                { name: 'Eligibility Check', path: '#eligibility' },
                { name: 'Resources', path: '#resources' },
                { name: 'FAQs', path: '#faqs' },
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.path}
                    className="text-muted-foreground hover:text-foreground text-sm animated-underline transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">Key Schemes</h4>
            <ul className="space-y-3">
              {[
                { name: 'Rajasthan Janani Shishu Suraksha Yojana', path: '#jssy' },
                { name: 'Rashtriya Bal Swasthya Karyakram', path: '#rbsk' },
                { name: 'Mukhyamantri Chiranjeevi Yojana', path: '#mcy' },
                { name: 'Bhamashah Swasthya Bima Yojana', path: '#bsby' },
                { name: 'Rajasthan Nirogi Ladla', path: '#rnl' },
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.path}
                    className="text-muted-foreground hover:text-foreground text-sm animated-underline transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary mr-3 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Department of Medical, Health & Family Welfare, Government of Rajasthan, Swasthya Bhawan, Tilak Marg, Jaipur
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary mr-3" />
                <a href="tel:+911412221590" className="text-sm text-muted-foreground hover:text-foreground">
                  +91 141 222 1590
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary mr-3" />
                <a href="mailto:info@rajhealth.gov.in" className="text-sm text-muted-foreground hover:text-foreground">
                  info@rajhealth.gov.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RajHealthKids. All rights reserved.</p>
          <p className="mt-2">
            A platform dedicated to increasing awareness about children's health schemes in Rajasthan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
