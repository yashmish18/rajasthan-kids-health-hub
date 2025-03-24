
import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const faqItems: FAQItem[] = [
    {
      question: "How do I know which health scheme my child is eligible for?",
      answer: "Most schemes cover all children residing in Rajasthan. The eligibility depends on factors like age, family income, and specific health conditions. Use our eligibility checker on the website or contact the toll-free helpline at 104 for personalized guidance."
    },
    {
      question: "Are these schemes completely free or do I need to pay anything?",
      answer: "Most children's health schemes in Rajasthan provide free services. Schemes like Janani Shishu Suraksha Yojana and RBSK are completely free. Insurance schemes like Chiranjeevi Yojana may require a nominal premium payment for some categories, but BPL families typically receive coverage at no cost."
    },
    {
      question: "What documents do I need to avail these schemes?",
      answer: "Common documents include the child's birth certificate, Aadhaar card or ID proof, family income certificate (if applicable), Jan Aadhaar card, and proof of Rajasthan residency. Specific requirements vary by scheme, so check the detailed information for each program."
    },
    {
      question: "Can I use these schemes at private hospitals?",
      answer: "Some schemes like Mukhyamantri Chiranjeevi Yojana allow treatment at empaneled private hospitals. Other schemes primarily operate through government healthcare facilities. Check the list of empaneled hospitals for each scheme on the official website or contact the helpline."
    },
    {
      question: "What if my child needs specialized treatment not available in my district?",
      answer: "All schemes provide referral services to higher medical facilities if required treatment isn't available locally. Transport costs are often covered, and some schemes like RBSK specifically include provisions for tertiary care at specialized centers across Rajasthan and even outside the state if necessary."
    },
    {
      question: "How can I check the status of my child's application or claim?",
      answer: "For insurance schemes like Chiranjeevi Yojana, you can check status through the online portal using your Jan Aadhaar number. For treatment referrals, contact the referring health institution or call the respective scheme's helpline number for updates."
    },
    {
      question: "My child has a disability. Are there special provisions?",
      answer: "Yes, children with disabilities receive priority under schemes like RBSK and Nirogi Ladla. They are eligible for early intervention services, assistive devices, rehabilitative therapy, and specialized surgeries if required. Special camps are regularly organized for children with disabilities."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-blue-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4">FAQs</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Find answers to common questions about Rajasthan's child health schemes.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border border-border rounded-lg mb-4 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-blue-50/50 transition-colors duration-200">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
          
          <div className="mt-8 text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
            <p className="text-sm text-muted-foreground">
              Still have questions? Contact our dedicated helpline at <span className="font-medium text-foreground">104</span> or email us at <span className="font-medium text-foreground">childhealth@rajasthan.gov.in</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
