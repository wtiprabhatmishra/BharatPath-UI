import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { ComparisonItem } from '../../types';

const comparisonItems: ComparisonItem[] = [
  { 
    feature: 'Optimized for Indian addresses & localities', 
    bharatPath: true, 
    googleMaps: false 
  },
  { 
    feature: 'Affordable pricing for Indian startups', 
    bharatPath: true, 
    googleMaps: false 
  },
  { 
    feature: 'Higher accuracy for tier 2 & 3 cities', 
    bharatPath: true, 
    googleMaps: false 
  },
  { 
    feature: 'Landmark-based navigation', 
    bharatPath: true, 
    googleMaps: true 
  },
  { 
    feature: 'Local language support', 
    bharatPath: true, 
    googleMaps: true 
  },
  { 
    feature: 'Local customer support', 
    bharatPath: true, 
    googleMaps: false 
  },
  { 
    feature: 'Flexible usage limits', 
    bharatPath: true, 
    googleMaps: false 
  },
  { 
    feature: 'Integration with Indian payment gateways', 
    bharatPath: true, 
    googleMaps: false 
  }
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why <span className="gradient-text">BharatPath?</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-700 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We've built a mapping solution specifically for India's unique geography and addressing system, providing advantages that global solutions can't match.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-3 bg-slate-100 dark:bg-slate-700 p-4">
              <div className="col-span-1 font-medium text-slate-800 dark:text-white">Feature</div>
              <div className="col-span-1 font-medium text-center text-saffron-600 dark:text-saffron-500">BharatPath</div>
              <div className="col-span-1 font-medium text-center text-slate-800 dark:text-white">Google Maps</div>
            </div>
            
            <div className="divide-y divide-slate-200 dark:divide-slate-700">
              {comparisonItems.map((item, index) => (
                <div key={index} className="grid grid-cols-3 p-4">
                  <div className="col-span-1 text-slate-700 dark:text-slate-300">{item.feature}</div>
                  <div className="col-span-1 flex justify-center">
                    {item.bharatPath ? (
                      <Check className="text-green-500" />
                    ) : (
                      <X className="text-red-500" />
                    )}
                  </div>
                  <div className="col-span-1 flex justify-center">
                    {item.googleMaps ? (
                      <Check className="text-green-500" />
                    ) : (
                      <X className="text-red-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="mt-12 bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">Benefits for Indian Developers & Startups</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-medium">Cost-effective pricing:</span> Pay in INR with plans designed for Indian business scales.
                </p>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-medium">Compliance with Indian regulations:</span> Data stored in India with all necessary regulatory approvals.
                </p>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-medium">Local support:</span> Dedicated support team that understands Indian geography and business needs.
                </p>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-medium">Community-focused:</span> Regular developer meetups, hackathons, and resources in multiple Indian languages.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}