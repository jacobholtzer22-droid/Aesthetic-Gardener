'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900 text-white">
      {/* Top curve */}
      <div className="curve-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-forest-50"
          ></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-forest-400 to-forest-600 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🌿</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">Aesthetic Gardener</h3>
                <p className="text-xs text-sage-300">Holland, Michigan</p>
              </div>
            </div>
            <p className="text-sage-200 mb-6">
              Crafting beautiful outdoor spaces across West Michigan for over 21 years.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <span>f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <span>in</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <span>ig</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sage-200 hover:text-white transition-colors">
                  Landscaping Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sage-200 hover:text-white transition-colors">
                  Lawn Care & Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sage-200 hover:text-white transition-colors">
                  Snow Removal
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sage-200 hover:text-white transition-colors">
                  Hardscaping
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sage-200 hover:text-white transition-colors">
                  Tree & Shrub Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sage-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sage-200 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sage-200 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sage-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sage-200 hover:text-white transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sage-200">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>(616) 218-2698</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@aestheticgardener.net</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>
                  199 E 34th St #6<br />
                  Holland, MI 49423
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sage-300 text-sm">
              © 2024 Aesthetic Gardener. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-sage-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sage-300 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sage-400 text-xs bg-white/5 inline-block px-4 py-2 rounded-full">
              ⚠️ This is a demo website. Full functionality will be available after project completion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
