import React, { useState, useEffect } from 'react';
import { Map, Menu, X } from 'lucide-react';
import { NavItem } from '../../types';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';

const navItems: NavItem[] = [
  { title: 'Features', href: '#features' },
  { title: 'Why Us', href: '#why-us' },
  { title: 'Pricing', href: '#pricing' },
  { title: 'Developers', href: '#developers' },
  { title: 'Vision', href: '#vision' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Map className="h-8 w-8 text-orange-600 dark:text-orange-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              BharatPath
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="primary">Get API Key</Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 dark:text-slate-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-500 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
              <Button variant="primary" className="mt-4">Get API Key</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}