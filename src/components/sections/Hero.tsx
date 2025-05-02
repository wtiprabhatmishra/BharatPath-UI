import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight, Code } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-20 pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M65,26 Q73,18 75,10 Q77,18 85,26 Q77,34 75,42 Q73,34 65,26 Z" 
            fill="currentColor"
            className="text-saffron-500"
          />
          <path 
            d="M35,46 Q43,38 45,30 Q47,38 55,46 Q47,54 45,62 Q43,54 35,46 Z" 
            fill="currentColor"
            className="text-green-500"
          />
          <path 
            d="M50,76 Q58,68 60,60 Q62,68 70,76 Q62,84 60,92 Q58,84 50,76 Z" 
            fill="currentColor"
            className="text-navy-500"
          />
          <path 
            d="M20,26 Q28,18 30,10 Q32,18 40,26 Q32,34 30,42 Q28,34 20,26 Z" 
            fill="currentColor"
            className="text-navy-500"
          />
          <path 
            d="M80,46 Q88,38 90,30 Q92,38 100,46 Q92,54 90,62 Q88,54 80,46 Z" 
            fill="currentColor"
            className="text-saffron-500"
          />
        </svg>
      </div>

      {/* Abstract map outline */}
      <div className="absolute right-0 bottom-0 w-full h-full opacity-10 dark:opacity-5 pointer-events-none">
        <motion.svg
          className="h-full w-full"
          viewBox="0 0 200 100"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.path
            d="M30,20 Q40,10 50,20 Q60,30 70,25 Q80,20 90,30 Q100,40 110,35 Q120,30 130,40 Q140,50 150,45 Q160,40 170,50 Q180,60 190,55"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-saffron-600 dark:text-saffron-500"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M40,30 Q50,20 60,30 Q70,40 80,35 Q90,30 100,40 Q110,50 120,45 Q130,40 140,50 Q150,60 160,55 Q170,50 180,60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-green-600 dark:text-green-500"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.path
            d="M50,40 Q60,30 70,40 Q80,50 90,45 Q100,40 110,50 Q120,60 130,55 Q140,50 150,60 Q160,70 170,65"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-navy-600 dark:text-navy-500"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
          />
        </motion.svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="gradient-text">BharatPath</span> - India's First Map API
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 md:mb-10">
              A fast, India-tuned alternative to Google Maps
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="group">
              Explore API
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200">
              View Demo
              <Code className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        {/* India map illustration */}
        <motion.div 
          className="mt-16 md:mt-24 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 shadow-lg overflow-hidden">
            {/* Stylized Ashoka Chakra in the center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-navy-500 dark:border-navy-400 opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {Array.from({ length: 24 }).map((_, i) => (
                  <div 
                    key={i}
                    className="absolute top-1/2 left-1/2 w-1 h-4 bg-navy-500 dark:bg-navy-400"
                    style={{ 
                      transform: `translate(-50%, -100%) rotate(${i * 15}deg)`,
                      transformOrigin: 'bottom center'
                    }}
                  />
                ))}
              </motion.div>
            </div>
            
            {/* Map routes */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M30,30 C40,20 60,20 70,30 C80,40 90,40 80,50 C70,60 50,70 40,60 C30,50 20,40 30,30 Z"
                fill="none"
                stroke="#F97316"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
              <motion.path
                d="M35,35 C45,25 55,25 65,35 C75,45 85,45 75,55 C65,65 45,75 35,65 C25,55 25,45 35,35 Z"
                fill="none"
                stroke="#10B981"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.3 }}
              />
              <motion.path
                d="M40,40 C50,30 50,30 60,40 C70,50 80,50 70,60 C60,70 40,80 30,70 C20,60 30,50 40,40 Z"
                fill="none"
                stroke="#0EA5E9"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.6 }}
              />
            </svg>
            
            {/* Location markers */}
            <motion.div 
              className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-saffron-500"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5, delay: 1 }}
            />
            <motion.div 
              className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-green-500"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
            <motion.div 
              className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-navy-500"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5, delay: 1.4 }}
            />
            
            {/* Pulsing circles */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-transparent border border-saffron-500 animate-pulse-slow" />
            <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-transparent border border-green-500 animate-pulse-slow" />
            <div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-transparent border border-navy-500 animate-pulse-slow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}