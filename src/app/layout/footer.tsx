import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#A0D683]/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#769C5D]">Your City Guide</h3>
            <p className="text-gray-600 text-sm">
              Your comprehensive guide to navigating the city. Discover the best places, 
              experiences, and local insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#A0D683] hover:text-[#769C5D] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#A0D683] hover:text-[#769C5D] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#A0D683] hover:text-[#769C5D] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#A0D683] hover:text-[#769C5D] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#769C5D]">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-600 hover:text-[#A0D683] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#769C5D]">Categories</h3>
            <ul className="space-y-2">
              {['Culture', 'Food', 'Nature', 'Sports'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/category/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-[#A0D683] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#769C5D]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-600 text-sm">
                <MapPin className="h-4 w-4 text-[#A0D683]" />
                <span>123 City Guide Street, Tour City, TC 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 text-sm">
                <Phone className="h-4 w-4 text-[#A0D683]" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 text-sm">
                <Mail className="h-4 w-4 text-[#A0D683]" />
                <span>info@yourcityguide.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#A0D683]/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {currentYear} Your City Guide. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="/privacy-policy" 
                className="text-sm text-gray-600 hover:text-[#A0D683] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-sm text-gray-600 hover:text-[#A0D683] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;