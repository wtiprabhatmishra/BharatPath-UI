import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Map as MapIcon, Navigation, Layers, ZoomIn, ZoomOut, PanelRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function MapPreview() {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // This would be where actual map initialization would happen
    // For now, we're just creating a visual mockup
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Map <span className="gradient-text">Preview</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-700 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Take a look at what BharatPath has to offer with our interactive preview. Explore the features and capabilities of our India-centric mapping solution.
          </motion.p>
        </div>

        <motion.div 
          className="max-w-6xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Map Header */}
          <div className="bg-slate-100 dark:bg-slate-700 p-4 flex justify-between items-center">
            <div className="flex items-center">
              <MapIcon className="text-saffron-600 dark:text-saffron-500 mr-2" />
              <span className="font-medium text-slate-800 dark:text-white">BharatPath Explorer</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="h-8 px-2 py-1">
                Standard
              </Button>
              <Button variant="outline" className="h-8 px-2 py-1">
                Satellite
              </Button>
              <Button variant="outline" className="h-8 px-2 py-1">
                Terrain
              </Button>
            </div>
          </div>

          {/* Map Container */}
          <div className="relative h-[60vh] bg-slate-200 dark:bg-slate-700" ref={mapRef}>
            {/* Map Visual - Using a placeholder map pattern */}
            <div className="absolute inset-0 bg-slate-300 dark:bg-slate-600 opacity-30">
              <svg 
                className="w-full h-full"
                width="100%" 
                height="100%" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern 
                    id="grid" 
                    width="100" 
                    height="100" 
                    patternUnits="userSpaceOnUse"
                  >
                    <path 
                      d="M 100 0 L 0 0 0 100" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="0.5" 
                      className="text-slate-400 dark:text-slate-500"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Map Elements */}
            <div className="absolute inset-0">
              {/* Roads */}
              <svg 
                width="100%" 
                height="100%" 
                className="absolute inset-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path 
                  d="M 0,300 Q 300,250 600,300 T 1200,300" 
                  stroke="#F97316" 
                  strokeWidth="4" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                />
                <motion.path 
                  d="M 100,100 Q 400,50 700,100 T 1100,100" 
                  stroke="#10B981" 
                  strokeWidth="3" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                />
                <motion.path 
                  d="M 200,400 Q 500,350 800,400 T 1000,400" 
                  stroke="#0EA5E9" 
                  strokeWidth="3" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.4 }}
                />
                <motion.path 
                  d="M 300,50 L 300,450" 
                  stroke="#F97316" 
                  strokeWidth="4" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.path 
                  d="M 700,50 L 700,450" 
                  stroke="#10B981" 
                  strokeWidth="3" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </svg>

              {/* Markers */}
              <motion.div 
                className="absolute top-1/4 left-1/4 w-6 h-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
              >
                <div className="w-6 h-6 bg-saffron-500 rounded-full flex items-center justify-center text-white">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="w-6 h-6 bg-saffron-500 rounded-full animate-ping absolute inset-0 opacity-75" />
              </motion.div>

              <motion.div 
                className="absolute top-1/3 right-1/3 w-6 h-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 }}
              >
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="w-6 h-6 bg-green-500 rounded-full animate-ping absolute inset-0 opacity-75" />
              </motion.div>

              <motion.div 
                className="absolute bottom-1/4 right-1/4 w-6 h-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.4 }}
              >
                <div className="w-6 h-6 bg-navy-500 rounded-full flex items-center justify-center text-white">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="w-6 h-6 bg-navy-500 rounded-full animate-ping absolute inset-0 opacity-75" />
              </motion.div>
            </div>

            {/* Map Controls */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              <button className="bg-white dark:bg-slate-800 w-10 h-10 rounded shadow flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <ZoomIn className="text-slate-700 dark:text-slate-300" size={20} />
              </button>
              <button className="bg-white dark:bg-slate-800 w-10 h-10 rounded shadow flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <ZoomOut className="text-slate-700 dark:text-slate-300" size={20} />
              </button>
              <button className="bg-white dark:bg-slate-800 w-10 h-10 rounded shadow flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <Layers className="text-slate-700 dark:text-slate-300" size={20} />
              </button>
              <button className="bg-white dark:bg-slate-800 w-10 h-10 rounded shadow flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <Navigation className="text-slate-700 dark:text-slate-300" size={20} />
              </button>
            </div>

            {/* Location Info Box */}
            <div className="absolute bottom-4 left-4 bg-white dark:bg-slate-800 p-3 rounded shadow max-w-xs">
              <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-1">Current Location</h4>
              <p className="text-xs text-slate-700 dark:text-slate-300">Connaught Place, New Delhi, 110001</p>
            </div>
          </div>

          {/* Map Footer */}
          <div className="bg-slate-100 dark:bg-slate-700 p-3 flex justify-between items-center text-sm">
            <div className="text-slate-700 dark:text-slate-300">
              © 2025 BharatPath
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-slate-700 dark:text-slate-300">Lat: 28.6139° N, Long: 77.2090° E</span>
              <span className="text-slate-700 dark:text-slate-300">|</span>
              <span className="text-slate-700 dark:text-slate-300">Scale: 1:10,000</span>
              <PanelRight className="text-slate-700 dark:text-slate-300" size={16} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}