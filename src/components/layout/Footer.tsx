import React from 'react';
import { Map, Mail, Phone, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Map className="h-6 w-6 text-saffron-600 dark:text-saffron-500" />
              <span className="text-xl font-bold gradient-text">
                BharatPath
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Bharat ka Apna Path
            </p>
            <div className="flex items-center space-x-1 text-slate-600 dark:text-slate-400">
              <span>Powered by</span>
              <a 
                href="https://github.com/wtiprabhatmishra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-saffron-600 dark:text-saffron-500 hover:underline"
              >
                Web Tech Infinity
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-slate-600 dark:text-slate-400 hover:text-saffron-600 dark:hover:text-saffron-500">Features</a>
              </li>
              <li>
                <a href="#why-us" className="text-slate-600 dark:text-slate-400 hover:text-saffron-600 dark:hover:text-saffron-500">Why Us</a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-600 dark:text-slate-400 hover:text-saffron-600 dark:hover:text-saffron-500">Pricing</a>
              </li>
              <li>
                <a href="#developers" className="text-slate-600 dark:text-slate-400 hover:text-saffron-600 dark:hover:text-saffron-500">Developers</a>
              </li>
              <li>
                <a href="#vision" className="text-slate-600 dark:text-slate-400 hover:text-saffron-600 dark:hover:text-saffron-500">Vision</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-saffron-600 dark:hover:text-saffron-500">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-saffron-600 dark:hover:text-saffron-500">API Reference</a>
              </li>
              <li>
                <a 
                  href="https://github.com/wtiprabhatmishra" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-saffron-600 dark:hover:text-saffron-500"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-saffron-600 dark:hover:text-saffron-500">Support</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-slate-600 dark:text-slate-400" />
                <span className="text-slate-600 dark:text-slate-400">+91-91406-26921</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-slate-600 dark:text-slate-400" />
                <a href="mailto:support@bharatpath.com" className="text-slate-600 dark:text-slate-400 hover:text-saffron-600 dark:hover:text-saffron-500">support@bharatpath.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Github size={16} className="text-slate-600 dark:text-slate-400" />
                <a 
                  href="https://github.com/wtiprabhatmishra" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-saffron-600 dark:hover:text-saffron-500"
                >
                  wtiprabhatmishra
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              &copy; {new Date().getFullYear()} BharatPath. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-saffron-600 dark:hover:text-saffron-500">Terms</a>
              <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-saffron-600 dark:hover:text-saffron-500">Privacy</a>
              <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-saffron-600 dark:hover:text-saffron-500">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}