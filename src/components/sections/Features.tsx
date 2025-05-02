import React from 'react';
import { motion } from 'framer-motion';
import { Map, MapPin, Compass, GitBranch, Zap, Users } from 'lucide-react';
import { Feature } from '../../types';

const features: Feature[] = [
  {
    title: 'India-centric Location Data',
    description: 'Optimized for Indian addresses, landmarks, and localities with higher accuracy for tier 2 and tier 3 cities.',
    icon: MapPin
  },
  {
    title: 'Traffic Overlays',
    description: 'Real-time traffic information for major Indian cities with historical patterns and predictive analysis.',
    icon: Map
  },
  {
    title: 'Satellite & Terrain Options',
    description: 'High-resolution satellite imagery and detailed terrain mapping for the entire Indian subcontinent.',
    icon: Compass
  },
  {
    title: 'Developer-friendly APIs',
    description: 'Simple, well-documented APIs with comprehensive SDKs for web, Android, iOS, and Flutter.',
    icon: GitBranch
  },
  {
    title: 'Built for Desi Use-cases',
    description: 'Specialized features for Indian scenarios like landmark-based navigation and offline functionality.',
    icon: Zap
  },
  {
    title: 'Made for Indian Startups',
    description: 'Affordable pricing and priority support for Indian businesses and developers.',
    icon: Users
  }
];

export function Features() {
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
    <section id="features" className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key <span className="gradient-text">Features</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-700 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            BharatPath provides powerful mapping capabilities specifically designed for Indian users and developers.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={item}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-saffron-500 to-saffron-600 dark:from-saffron-600 dark:to-saffron-700 flex items-center justify-center text-white mr-4">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}