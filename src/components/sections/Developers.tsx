import React from 'react';
import { motion } from 'framer-motion';
import { Code, Book, Key, RefreshCw } from 'lucide-react';
import { Button } from '../ui/Button';
import { Step } from '../../types';

const steps: Step[] = [
  {
    number: 1,
    title: 'Get API Key',
    description: 'Sign up for a free account and get your API key to start integrating BharatPath into your projects.',
    icon: Key
  },
  {
    number: 2,
    title: 'Read Documentation',
    description: 'Explore our comprehensive documentation with guides, API references, and code examples in multiple languages.',
    icon: Book
  },
  {
    number: 3,
    title: 'Build Your App',
    description: 'Integrate our SDKs for web, Android, iOS, or Flutter and start building your India-optimized map application.',
    icon: Code
  }
];

export function Developers() {
  return (
    <section id="developers" className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Developer <span className="gradient-text">Onboarding</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-700 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get started with BharatPath in just a few simple steps. Our platform is designed to be developer-friendly with comprehensive documentation and support.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 h-full">
                  <div className="w-14 h-14 rounded-full bg-saffron-100 dark:bg-saffron-900/30 flex items-center justify-center mb-4">
                    <step.icon className="text-saffron-600 dark:text-saffron-500" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    {step.description}
                  </p>
                </div>
                
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-300 dark:bg-slate-700">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-saffron-500 rounded-full" />
                  </div>
                )}
                
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-saffron-600 to-green-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {step.number}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 bg-slate-50 dark:bg-slate-900 rounded-xl shadow-md p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8 w-full md:w-8/12">
                <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
                  Ready to start building with BharatPath?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  Join our growing community of developers creating India-focused applications. Check out our GitHub for sample projects, SDKs, and contribute to our open source components.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button>Get API Key</Button>
                  <Button variant="outline" className="flex items-center">
                    <Code className="mr-2" size={18} />
                    <a 
                      href="https://github.com/wtiprabhatmishra" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-4/12 flex justify-center">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse-slow"></div>
                  <div className="absolute inset-2 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                    <RefreshCw size={48} className="text-saffron-600 dark:text-saffron-500" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}