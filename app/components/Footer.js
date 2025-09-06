import Link from 'next/link';
import { Award } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white">Elite Consulting</div>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Transforming businesses through strategic excellence and proven methodologies.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
          <ul className="space-y-3 text-gray-400">
            <li><Link href="/services" className="hover:text-white transition-colors">Strategic Planning</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Business Growth</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Leadership Coaching</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
          <ul className="space-y-3 text-gray-400">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
          <div className="space-y-3 text-gray-400">
            <div>(555) 123-4567</div>
            <div>info@eliteconsulting.com</div>
            <div>123 Business District<br />New York, NY 10001</div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center">
        <p className="text-gray-500">© 2024 Elite Consulting. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;


