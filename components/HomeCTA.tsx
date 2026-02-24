'use client';

import Link from 'next/link';

export default function HomeCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/client/patiobricking2.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Outdoor Space?
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Explore our services or get in touch for a free quote. We&apos;re here to bring your vision to life.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-light hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/20"
          >
            View Our Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/contact#quote-form"
            className="inline-flex items-center gap-2 border-2 border-accent text-accent-light px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/10 transition-all duration-300"
          >
            Get a Free Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
