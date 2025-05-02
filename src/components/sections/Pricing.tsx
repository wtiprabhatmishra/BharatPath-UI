import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { Package } from '../../types';

const packages: Package[] = [
  {
    name: 'Free Trial',
    price: '₹0',
    description: 'Get started with basic features to explore our capabilities.',
    features: [
      '1,000 map loads/month',
      'Basic geocoding (100 requests/day)',
      'Standard map views',
      'Community support'
    ],
    isPrimary: true
  },
  {
    name: 'Startup',
    price: '₹999/month',
    description: 'Perfect for early-stage startups and small projects.',
    features: [
      '10,000 map loads/month',
      'Advanced geocoding (1,000 requests/day)',
      'All map views including satellite',
      'Basic routing capabilities',
      'Email support'
    ]
  },
  {
    name: 'Business',
    price: '₹4,999/month',
    description: 'Designed for growing businesses with higher usage needs.',
    features: [
      '50,000 map loads/month',
      'Full geocoding capabilities',
      'All map views and styles',
      'Advanced routing with traffic data',
      'Priority email support',
      'API usage dashboard'
    ],
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: '₹19,999/month',
    description: 'For large-scale applications with advanced requirements.',
    features: [
      '250,000 map loads/month',
      'Unlimited geocoding',
      'Custom map styles',
      'Real-time traffic & directions',
      'Dedicated support with SLA',
      'Advanced analytics dashboard',
      'On-premises deployment option'
    ]
  },
  {
    name: 'Custom',
    price: 'Contact Us',
    description: 'Tailored solutions for government and large enterprises.',
    features: [
      'Unlimited usage options',
      'Custom feature development',
      'Data sovereignty guarantees',
      'Dedicated account manager',
      'On-site training and support',
      'Service level guarantees',
      'White-labeled solutions'
    ]
  }
];

export function Pricing() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Simple <span className="gradient-text">Pricing</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-700 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose the plan that works for your needs, with affordable options designed specifically for Indian businesses and developers.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {packages.slice(0, 3).map((pkg, index) => (
            <motion.div 
              key={index} 
              className={`bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden border-2 transition-all duration-300 hover:shadow-lg ${
                pkg.isPopular ? 'border-saffron-500 scale-105 z-10' : 
                pkg.isPrimary ? 'border-green-500' : 'border-transparent'
              }`}
              variants={item}
            >
              {pkg.isPopular && (
                <div className="bg-saffron-500 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              {pkg.isPrimary && (
                <div className="bg-green-500 text-white text-center py-1 text-sm font-medium">
                  Get Started
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">{pkg.price}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={pkg.isPopular ? 'primary' : pkg.isPrimary ? 'secondary' : 'outline'}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {packages.slice(3).map((pkg, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden border-2 border-transparent transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">{pkg.price}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline"
                  className="w-full"
                >
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            All plans include access to our developer documentation, SDKs, and community forums. Need help choosing the right plan?
          </p>
          <Button>Schedule a Demo</Button>
        </motion.div>
      </div>
    </section>
  );
}