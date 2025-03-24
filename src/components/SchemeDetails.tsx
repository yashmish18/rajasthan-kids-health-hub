
import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Baby, PiggyBank, Stethoscope, Hospital, CheckCircle, AlertCircle, Calendar, FileText, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SchemeDetail {
  id: string;
  title: string;
  description: string;
  eligibility: string[];
  benefits: string[];
  documents: string[];
  applicationProcess: string[];
  helpline: string;
  icon: React.ReactNode;
}

const SchemeDetails = () => {
  const schemes: SchemeDetail[] = [
    {
      id: "janani-shishu",
      title: "Rajasthan Janani Shishu Suraksha Yojana",
      description: "A comprehensive initiative to ensure free and quality healthcare services for pregnant women and sick newborns up to 30 days after birth in both public and accredited private healthcare facilities across Rajasthan.",
      eligibility: [
        "All pregnant women residents of Rajasthan",
        "Newborns up to 30 days after birth",
        "No income restrictions apply",
        "Valid for both rural and urban areas"
      ],
      benefits: [
        "Free delivery and cesarean section procedures",
        "Free medications and consumables during stay",
        "Free diagnostic services including ultrasound, blood tests",
        "Free transport to and from health facilities",
        "Free treatment for sick newborns",
        "Free diet during hospital stay for mothers",
        "Exemption from all user charges"
      ],
      documents: [
        "Pregnancy registration card",
        "Rajasthan residency proof (Aadhaar/ration card/voter ID)",
        "PCTS (Pregnancy, Child Tracking & Health Services) registration"
      ],
      applicationProcess: [
        "Register pregnancy at nearest health center or Anganwadi",
        "Obtain PCTS registration number",
        "Present at government hospital during delivery or emergency",
        "No formal application required - scheme benefits provided automatically"
      ],
      helpline: "104 / 108 (Emergency Transport)",
      icon: <Heart size={24} />
    },
    {
      id: "rbsk",
      title: "Rashtriya Bal Swasthya Karyakram",
      description: "A systematic approach to early identification and intervention for children from birth to 18 years with diseases, deficiencies, disabilities, and developmental delays to reduce child mortality and enhance overall health outcomes.",
      eligibility: [
        "All children aged 0-18 years in Rajasthan",
        "School-going and non-school going children",
        "Children in anganwadis",
        "Children with special needs"
      ],
      benefits: [
        "Screening for 4Ds: Defects at birth, Diseases, Deficiencies, and Developmental delays",
        "Free healthcare services for 30 identified health conditions",
        "Referral support and treatment at tertiary health facilities",
        "Child Health Screening and Early Intervention Services",
        "Regular health check-ups in schools and anganwadis",
        "Follow-up care and rehabilitation services"
      ],
      documents: [
        "Birth certificate or age proof",
        "Aadhaar card (if available)",
        "School ID/Anganwadi registration (if applicable)"
      ],
      applicationProcess: [
        "No formal application needed",
        "Children screened at schools, anganwadis, or health centers",
        "Mobile health teams visit schools and anganwadis periodically",
        "Parents can also bring children to PHCs for screening"
      ],
      helpline: "104 (Health Advice Helpline)",
      icon: <Baby size={24} />
    },
    {
      id: "chiranjeevi",
      title: "Mukhyamantri Chiranjeevi Yojana",
      description: "A flagship health insurance scheme providing universal health coverage to all residents of Rajasthan, offering cashless treatment up to ₹5 lakhs per family per year for various medical procedures and treatments.",
      eligibility: [
        "All families residing in Rajasthan",
        "Children covered under family registration",
        "No income criteria - universal coverage",
        "Special provisions for children with disabilities"
      ],
      benefits: [
        "Cashless treatment up to ₹5 lakhs per family per year",
        "Coverage for 1,576 packages including major surgeries",
        "Dedicated pediatric treatments covered",
        "Free OPD consultations at empaneled hospitals",
        "Coverage for hospitalization expenses",
        "Special treatment packages for childhood illnesses",
        "Coverage for COVID-19 treatment"
      ],
      documents: [
        "Jan Aadhaar card (Mandatory)",
        "Aadhaar card of child and family members",
        "Recent passport-sized photographs",
        "Mobile number for registration"
      ],
      applicationProcess: [
        "Register through Jan Aadhaar portal or mobile app",
        "Visit nearest e-Mitra kiosk or Common Service Center",
        "Pay premium amount (if applicable)",
        "Receive policy certificate",
        "Access treatment at empaneled hospitals using Jan Aadhaar ID"
      ],
      helpline: "1800-230-6622 (Chiranjeevi Helpline)",
      icon: <PiggyBank size={24} />
    },
    {
      id: "nirogi-ladla",
      title: "Rajasthan Nirogi Ladla",
      description: "A specialized program focusing on early detection and treatment of congenital heart diseases in children, providing free cardiac evaluation and surgical correction for qualifying children under 14 years.",
      eligibility: [
        "Children under 14 years with suspected or diagnosed congenital heart defects",
        "Residents of Rajasthan",
        "Priority to children from BPL families",
        "No gender discrimination"
      ],
      benefits: [
        "Free screening camps across districts",
        "Complete cardiac evaluation at no cost",
        "Free surgical correction of congenital heart defects",
        "Follow-up care and monitoring",
        "Free medications post-surgery",
        "Transport allowance for families",
        "Rehabilitation support"
      ],
      documents: [
        "Birth certificate",
        "BPL certificate (if applicable)",
        "Aadhaar card or other ID proof",
        "Medical reports (if available)",
        "Referral letter from primary health center (if any)"
      ],
      applicationProcess: [
        "Attend screening camps organized in districts",
        "Get referral from government hospital or PHC",
        "Register at specialized cardiac centers",
        "Complete evaluation and verification",
        "Schedule surgical intervention if required"
      ],
      helpline: "104 (Health Information Helpline)",
      icon: <Stethoscope size={24} />
    },
    {
      id: "bhamashah",
      title: "Bhamashah Swasthya Bima Yojana",
      description: "A comprehensive health insurance scheme for families from economically disadvantaged backgrounds in Rajasthan, providing cashless healthcare services with special provisions for children's treatments.",
      eligibility: [
        "Children from BPL families in Rajasthan",
        "Children from small and marginal farmer families",
        "Children from families with NFSA eligibility",
        "Special category children (orphans, differently-abled)"
      ],
      benefits: [
        "Cashless treatment up to ₹3 lakhs per family",
        "Coverage for critical illnesses in children",
        "Free outpatient services",
        "Dedicated pediatric treatments covered",
        "Critical care services for newborns",
        "Specialized surgical procedures",
        "Free diagnostics and medications"
      ],
      documents: [
        "Bhamashah card/Jan Aadhaar card",
        "BPL certificate or NFSA eligibility proof",
        "Child's Aadhaar card (if available)",
        "Birth certificate",
        "Recent passport-sized photograph"
      ],
      applicationProcess: [
        "Verify eligibility through Bhamashah/Jan Aadhaar portal",
        "Visit nearest enrollment center or e-Mitra kiosk",
        "Submit required documents",
        "Receive insurance enrollment number",
        "Access treatments at empaneled hospitals"
      ],
      helpline: "104 / 1800-230-6622",
      icon: <Hospital size={24} />
    }
  ];

  return (
    <section id="scheme-details" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4">Detailed Information</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Understanding Each Scheme
          </h2>
          <p className="mt-4 text-muted-foreground">
            Explore the details of each health scheme to find the perfect match for your child's needs.
          </p>
        </div>
        
        <Tabs defaultValue="janani-shishu" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            {schemes.map(scheme => (
              <TabsTrigger 
                key={scheme.id} 
                value={scheme.id}
                className="flex flex-col items-center gap-2 p-4 text-center"
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  {scheme.icon}
                </div>
                <span className="text-xs font-medium line-clamp-2">
                  {scheme.title.split(' ').slice(-2).join(' ')}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {schemes.map(scheme => (
            <TabsContent key={scheme.id} value={scheme.id} className="pt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-4">{scheme.title}</h3>
                    <p className="text-muted-foreground mb-8">{scheme.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-3">
                            <CheckCircle size={18} className="text-primary" />
                            <h4 className="font-semibold text-lg">Eligibility Criteria</h4>
                          </div>
                          <ul className="space-y-2">
                            {scheme.eligibility.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <FileText size={18} className="text-primary" />
                            <h4 className="font-semibold text-lg">Required Documents</h4>
                          </div>
                          <ul className="space-y-2">
                            {scheme.documents.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Heart size={18} className="text-primary" />
                            <h4 className="font-semibold text-lg">Key Benefits</h4>
                          </div>
                          <ul className="space-y-2">
                            {scheme.benefits.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Calendar size={18} className="text-primary" />
                            <h4 className="font-semibold text-lg">Application Process</h4>
                          </div>
                          <ul className="space-y-2">
                            {scheme.applicationProcess.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-primary mr-2">{i+1}.</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-border">
                      <div className="flex items-center">
                        <Phone size={18} className="text-primary mr-2" />
                        <span className="font-medium">Helpline:</span>
                        <span className="ml-2">{scheme.helpline}</span>
                      </div>
                      <div className="mt-4 flex justify-center md:justify-start">
                        <Badge variant="outline" className="text-xs">Available 24x7</Badge>
                        <Badge variant="outline" className="text-xs ml-2">Toll Free</Badge>
                        <Badge variant="outline" className="text-xs ml-2">Hindi & English Support</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SchemeDetails;
