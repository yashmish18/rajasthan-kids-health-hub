
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Check, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface FormData {
  name: string;
  childName: string;
  age: string;
  address: string;
  district: string;
  phone: string;
  email: string;
  region: string;
  scheme: string;
  message: string;
}

const ApplicationForms = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    defaultValues: {
      name: '',
      childName: '',
      age: '',
      address: '',
      district: '',
      phone: '',
      email: '',
      region: 'urban',
      scheme: '',
      message: ''
    }
  });

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", data);
      toast.success("Application submitted successfully! Our team will contact you soon.");
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  const downloadForm = (formName: string) => {
    toast.success(`${formName} form download started. Please wait...`);
    // In a real implementation, this would trigger a file download
  };

  const formsList = [
    {
      id: 'janani-shishu',
      title: 'Janani Shishu Suraksha Yojana',
      description: 'Application for free healthcare services for pregnant women and newborns',
      regions: ['urban', 'rural', 'remote']
    },
    {
      id: 'rbsk',
      title: 'Rashtriya Bal Swasthya Karyakram',
      description: 'Early identification of diseases, deficiencies, and disabilities in children',
      regions: ['urban', 'rural']
    },
    {
      id: 'chiranjeevi',
      title: 'Mukhyamantri Chiranjeevi Yojana',
      description: 'Health insurance scheme application form with up to ₹5 lakhs coverage',
      regions: ['urban', 'rural', 'remote']
    },
    {
      id: 'nirogi-ladla',
      title: 'Rajasthan Nirogi Ladla',
      description: 'Early detection and treatment of congenital heart diseases in children',
      regions: ['urban', 'rural']
    },
    {
      id: 'bhamashah',
      title: 'Bhamashah Swasthya Bima Yojana',
      description: 'Health insurance for economically disadvantaged families',
      regions: ['urban', 'rural', 'remote']
    }
  ];

  // Filter forms based on selected region
  const filteredForms = selectedRegion === 'all' 
    ? formsList 
    : formsList.filter(form => form.regions.includes(selectedRegion));

  return (
    <section id="forms" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4">Application Forms</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Download or Submit Application Forms
          </h2>
          <p className="mt-4 text-muted-foreground">
            Access all necessary forms to apply for health schemes based on your region and requirements.
          </p>
        </div>

        {/* Region Filter */}
        <div className="flex justify-center mb-12 flex-wrap gap-2">
          <Button
            variant={selectedRegion === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedRegion('all')}
            className="rounded-full"
          >
            All Regions
          </Button>
          <Button
            variant={selectedRegion === 'urban' ? 'default' : 'outline'}
            onClick={() => setSelectedRegion('urban')}
            className="rounded-full"
          >
            Urban
          </Button>
          <Button
            variant={selectedRegion === 'rural' ? 'default' : 'outline'}
            onClick={() => setSelectedRegion('rural')}
            className="rounded-full"
          >
            Rural
          </Button>
          <Button
            variant={selectedRegion === 'remote' ? 'default' : 'outline'}
            onClick={() => setSelectedRegion('remote')}
            className="rounded-full"
          >
            Remote Areas
          </Button>
        </div>

        {/* Available Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredForms.map((form, index) => (
            <motion.div
              key={form.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex gap-1 flex-wrap">
                      {form.regions.includes('urban') && (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                          Urban
                        </Badge>
                      )}
                      {form.regions.includes('rural') && (
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                          Rural
                        </Badge>
                      )}
                      {form.regions.includes('remote') && (
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 text-xs">
                          Remote
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-lg mt-4">{form.title}</CardTitle>
                  <CardDescription>{form.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full flex gap-2"
                    onClick={() => downloadForm(form.title)}
                  >
                    <Download size={16} />
                    Download Form
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Online Application Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6">Online Application Form</h3>
            <p className="text-muted-foreground mb-8">
              Fill out this form to apply for any health scheme. Our team will contact you 
              with further instructions and guide you through the application process.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Parent/Guardian Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="childName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Child's Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter child's full name" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Child's Age*</FormLabel>
                        <FormControl>
                          <Input placeholder="Age in years" type="number" min="0" max="18" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="region"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Region*</FormLabel>
                        <FormControl>
                          <select 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                            {...field}
                            required
                          >
                            <option value="urban">Urban</option>
                            <option value="rural">Rural</option>
                            <option value="remote">Remote Area</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="district"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>District*</FormLabel>
                        <FormControl>
                          <select 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                            {...field}
                            required
                          >
                            <option value="">Select district</option>
                            <option value="jaipur">Jaipur</option>
                            <option value="jodhpur">Jodhpur</option>
                            <option value="udaipur">Udaipur</option>
                            <option value="kota">Kota</option>
                            <option value="ajmer">Ajmer</option>
                            <option value="bikaner">Bikaner</option>
                            <option value="bharatpur">Bharatpur</option>
                            <option value="sikar">Sikar</option>
                            <option value="alwar">Alwar</option>
                            <option value="barmer">Barmer</option>
                            <option value="dungarpur">Dungarpur</option>
                            <option value="jaisalmer">Jaisalmer</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Complete Address*</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter your complete address" {...field} required />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Number*</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your mobile number" type="tel" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email address" type="email" {...field} />
                        </FormControl>
                        <FormDescription>Optional, but recommended for updates</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="scheme"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Scheme You're Applying For*</FormLabel>
                      <FormControl>
                        <select 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          {...field}
                          required
                        >
                          <option value="">Select a scheme</option>
                          <option value="janani-shishu">Rajasthan Janani Shishu Suraksha Yojana</option>
                          <option value="rbsk">Rashtriya Bal Swasthya Karyakram</option>
                          <option value="chiranjeevi">Mukhyamantri Chiranjeevi Yojana</option>
                          <option value="nirogi-ladla">Rajasthan Nirogi Ladla</option>
                          <option value="bhamashah">Bhamashah Swasthya Bima Yojana</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please mention any specific requirements or health conditions of your child" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <p className="text-sm text-blue-700">
                    Please ensure all information is accurate. Our team will verify all details before proceeding.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForms;
