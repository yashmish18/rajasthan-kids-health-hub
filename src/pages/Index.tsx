
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeaturedSchemes from '@/components/FeaturedSchemes';
import SuccessStories from '@/components/SuccessStories';
import SchemeDetails from '@/components/SchemeDetails';
import FAQ from '@/components/FAQ';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Check, MapPin, Phone, Info, Calendar, FileText, Heart } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <Hero />
        <FeaturedSchemes />
        <SchemeDetails />
        <SuccessStories />
        
        {/* Eligibility Section */}
        <section id="eligibility" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="p-1 bg-white rounded-2xl shadow-xl">
                  <div className="bg-primary/5 rounded-xl p-6 md:p-8">
                    <h3 className="text-xl font-semibold mb-6">Check Your Child's Eligibility</h3>
                    
                    <div className="space-y-4">
                      {[
                        { label: "All children aged 0-18 years living in Rajasthan", variant: "default" },
                        { label: "Children with special healthcare needs", variant: "outline" },
                        { label: "Children from BPL (Below Poverty Line) families", variant: "outline" },
                        { label: "Children from tribal and remote areas", variant: "outline" },
                        { label: "Children with congenital disorders", variant: "outline" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center">
                          <Check size={18} className="text-primary mr-3 flex-shrink-0" />
                          <Badge 
                            variant={item.variant as "default" | "outline" | "secondary" | "destructive"} 
                            className="py-1.5 px-3 text-xs font-medium"
                          >
                            {item.label}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="mt-8 w-full">
                      Check Detailed Eligibility
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <Badge className="mb-4">Eligibility Criteria</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
                  Find the Right Healthcare Scheme for Your Child
                </h2>
                <p className="text-muted-foreground mb-6">
                  Different health schemes have different eligibility criteria. Use our simple 
                  eligibility checker to find which schemes your child qualifies for based on 
                  age, location, family income, and health condition.
                </p>
                <ul className="space-y-4">
                  {[
                    "Most schemes cover all children residing in Rajasthan",
                    "Special provisions exist for children with disabilities",
                    "Income-based schemes have specific financial criteria",
                    "Supporting documents may be required for verification"
                  ].map((item, i) => (
                    <li key={i} className="flex">
                      <span className="mr-3 text-primary font-medium">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <FAQ />
        
        {/* Resources Section */}
        <section id="resources" className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-4">Resources</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                Essential Resources for Parents
              </h2>
              <p className="mt-4 text-muted-foreground">
                Access important forms, find nearby health centers, and learn more about children's health initiatives in Rajasthan.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Application Forms",
                  description: "Download application forms for various health schemes",
                  icon: <FileText size={24} className="text-primary" />,
                  link: "#forms"
                },
                {
                  title: "Find Health Centers",
                  description: "Locate nearby hospitals and health centers accepting scheme benefits",
                  icon: <MapPin size={24} className="text-primary" />,
                  link: "#centers"
                },
                {
                  title: "Upcoming Health Camps",
                  description: "Schedule of upcoming pediatric health camps in your district",
                  icon: <Calendar size={24} className="text-primary" />,
                  link: "#camps"
                },
                {
                  title: "FAQ & Helpline",
                  description: "Get answers to frequently asked questions about schemes",
                  icon: <Info size={24} className="text-primary" />,
                  link: "#faq"
                },
                {
                  title: "Contact Officials",
                  description: "Directory of district health officials for assistance",
                  icon: <Phone size={24} className="text-primary" />,
                  link: "#contact"
                },
                {
                  title: "Success Stories",
                  description: "Read about children who have benefited from these schemes",
                  icon: <Heart size={24} className="text-primary" />,
                  link: "#success-stories"
                }
              ].map((item, i) => (
                <Card key={i} className="transition-all hover:shadow-md hover:border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                        <a 
                          href={item.link} 
                          className="text-primary hover:text-primary/90 text-sm font-medium inline-flex items-center"
                        >
                          Access Resource
                          <ArrowRight size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-10">
                    <Badge className="mb-4">Contact Us</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      Need Help with Children's Health Schemes?
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Our team is ready to answer your questions and guide you through the application process for any health scheme.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Phone size={20} className="text-primary mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-medium">Toll-Free Helpline</h4>
                          <p className="text-muted-foreground">1800-XXX-XXXX (8 AM - 8 PM)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <MapPin size={20} className="text-primary mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-medium">Visit Us</h4>
                          <p className="text-muted-foreground">
                            Department of Medical, Health & Family Welfare,<br />
                            Government of Rajasthan,<br />
                            Swasthya Bhawan, Tilak Marg, Jaipur
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-muted">
                      <h4 className="font-medium mb-3">Follow Us</h4>
                      <div className="flex space-x-4">
                        {['facebook', 'twitter', 'instagram', 'youtube'].map(platform => (
                          <a 
                            key={platform}
                            href={`#${platform}`} 
                            className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                            aria-label={`Follow us on ${platform}`}
                          >
                            <span className="capitalize text-xs">{platform.charAt(0)}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-8 md:p-10">
                    <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="text-sm font-medium mb-1 block">Your Name</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Phone Number</label>
                          <input 
                            type="tel" 
                            className="w-full px-4 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-1 block">Email Address</label>
                        <input 
                          type="email" 
                          className="w-full px-4 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-1 block">District</label>
                        <select 
                          className="w-full px-4 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                        >
                          <option value="">Select your district</option>
                          <option value="jaipur">Jaipur</option>
                          <option value="jodhpur">Jodhpur</option>
                          <option value="udaipur">Udaipur</option>
                          <option value="kota">Kota</option>
                          <option value="ajmer">Ajmer</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-1 block">Your Message</label>
                        <textarea 
                          rows={4}
                          className="w-full px-4 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        ></textarea>
                      </div>
                      
                      <Button className="w-full">
                        Submit Message
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
