'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Award, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <Link href="/" className="text-2xl font-bold text-slate-900">Elite Consulting</Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="font-medium transition-colors text-slate-700 hover:text-blue-600">Home</Link>
            <Link href="/about" className="font-medium transition-colors text-slate-700 hover:text-blue-600">About</Link>
            <Link href="/services" className="font-medium transition-colors text-slate-700 hover:text-blue-600">Services</Link>
            <Link href="/contact" className="font-medium transition-colors text-slate-700 hover:text-blue-600">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-700 font-semibold">(555) 123-4567</a>
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Free Consultation
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">About</Link>
              <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Services</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Contact</Link>
              <Link 
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold w-full text-center"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;


