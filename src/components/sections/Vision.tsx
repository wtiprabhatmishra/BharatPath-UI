import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Database, Globe } from 'lucide-react';

export function Vision() {
  return (
    <section id="vision" className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Built with <span className="gradient-text">Jugaad, Vision, and Open Data</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-700 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Leveraging India's technological prowess and open data initiatives to create a world-class mapping solution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-lg bg-saffron-100 dark:bg-saffron-900/30 flex items-center justify-center mb-4">
              <Rocket className="text-saffron-600 dark:text-saffron-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">ISRO's Bhuvan</h3>
            <p className="text-slate-700 dark:text-slate-300">
              Integrating with ISRO's Bhuvan platform for high-quality satellite imagery and geospatial data of the Indian subcontinent.
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
              <Globe className="text-green-600 dark:text-green-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">OpenStreetMap</h3>
            <p className="text-slate-700 dark:text-slate-300">
              Building upon the collaborative power of OpenStreetMap while enhancing data accuracy for Indian locations.
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-12 h-12 rounded-lg bg-navy-100 dark:bg-navy-900/30 flex items-center justify-center mb-4">
              <Database className="text-navy-600 dark:text-navy-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Open Data Initiative</h3>
            <p className="text-slate-700 dark:text-slate-300">
              Contributing to and benefiting from India's open data initiatives while maintaining data sovereignty.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Our vision extends beyond creating a map API. We're building a platform that celebrates India's technological advancement while ensuring data privacy and sovereignty.
          </p>
        </motion.div>
      </div>
    </section>
  );
}