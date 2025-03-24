
import React, { useEffect, useRef } from 'react';
import SchemeCard, { SchemeCardProps } from './SchemeCard';
import { Heart, Baby, Hospital, Stethoscope, PiggyBank } from 'lucide-react';

const FeaturedSchemes = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const childElements = sectionRef.current?.querySelectorAll('.scheme-card');
    childElements?.forEach((child) => {
      child.classList.add('opacity-0');
      observer.observe(child);
    });
    
    return () => {
      childElements?.forEach((child) => {
        observer.unobserve(child);
      });
    };
  }, []);

  const schemes: SchemeCardProps[] = [
    {
      title: "Rajasthan Janani Shishu Suraksha Yojana",
      description: "Free healthcare services for pregnant women and sick newborns up to 30 days after birth.",
      category: "Mother & Child",
      eligibility: "All pregnant women and newborns in Rajasthan",
      benefits: [
        "Free delivery and C-section services",
        "Free diagnostics and medicines",
        "Free transport to and from health facilities",
        "Free treatment for sick newborns"
      ],
      icon: <Heart size={24} />,
      regionSpecific: {
        urban: true,
        rural: true,
        remote: true
      }
    },
    {
      title: "Rashtriya Bal Swasthya Karyakram",
      description: "Early identification and intervention for children with health conditions including defects at birth.",
      category: "Child Development",
      eligibility: "All children aged 0-18 years in Rajasthan",
      benefits: [
        "Screening for birth defects and developmental delays",
        "Free treatment at tertiary health facilities",
        "Comprehensive health checkups in schools",
        "Early intervention services"
      ],
      icon: <Baby size={24} />,
      regionSpecific: {
        urban: true,
        rural: true,
        remote: false
      }
    },
    {
      title: "Mukhyamantri Chiranjeevi Yojana",
      description: "Universal health coverage scheme providing free treatment up to ₹5 lakhs per family per year.",
      category: "Insurance",
      eligibility: "All residents of Rajasthan",
      benefits: [
        "Cashless treatment at empaneled hospitals",
        "Coverage for 1,576 packages including major surgeries",
        "Special focus on children's treatments",
        "Coverage for COVID-19 treatment"
      ],
      icon: <PiggyBank size={24} />,
      regionSpecific: {
        urban: true,
        rural: true,
        remote: true
      }
    },
    {
      title: "Rajasthan Nirogi Ladla",
      description: "Comprehensive program for early detection and treatment of congenital heart diseases in children.",
      category: "Specialized Care",
      eligibility: "Children under 14 years with congenital heart defects",
      benefits: [
        "Free screening camps across districts",
        "Complete cardiac evaluation at no cost",
        "Free surgical correction of congenital heart defects",
        "Follow-up care and monitoring"
      ],
      icon: <Stethoscope size={24} />,
      regionSpecific: {
        urban: true,
        rural: true,
        remote: false
      }
    },
    {
      title: "Bhamashah Swasthya Bima Yojana",
      description: "State-run health insurance scheme for children from economically disadvantaged families.",
      category: "Insurance",
      eligibility: "Children from BPL families and small/marginal farmers",
      benefits: [
        "Cashless treatment up to ₹3 lakhs",
        "Coverage for critical illnesses",
        "Free outpatient services",
        "Dedicated pediatric treatments covered"
      ],
      icon: <Hospital size={24} />,
      regionSpecific: {
        urban: true,
        rural: true,
        remote: true
      }
    }
  ];

  return (
    <section id="schemes" className="py-20 bg-white" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Featured Health Schemes for Children</h2>
          <p className="mt-4 text-muted-foreground">
            These government-backed initiatives aim to improve healthcare access and outcomes for all children in Rajasthan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((scheme, index) => (
            <div 
              key={index} 
              className="scheme-card transition-all duration-500" 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <SchemeCard {...scheme} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#all-schemes" 
            className="inline-flex items-center text-primary hover:text-primary/90 font-medium"
          >
            View all health schemes
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-2 h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSchemes;
