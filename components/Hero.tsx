'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-50 via-sage-50 to-earth-50"></div>

      {/* Decorative organic shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-forest-200/30 blob float"></div>
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-sage-200/30 blob"
        style={{ animationDelay: '2s' }}
      ></div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block">
              <span className="bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-semibold">
                🏆 Serving West Michigan Since 2004
              </span>
            </div>

            <h1 className="font-display text-6xl lg:text-7xl font-bold text-forest-900 leading-tight">
              Your Landscape,
              <br />
              <span className="text-gradient">Our Masterpiece</span>
            </h1>

            <p className="text-xl text-sage-700 leading-relaxed max-w-xl">
              Stop maintaining, start enjoying. We create and care for stunning
              outdoor spaces year-round, so you can spend more time living life
              outdoors.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-forest-600 to-forest-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Get Free Quote
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>

              <Link
                href="/gallery"
                className="border-2 border-forest-600 text-forest-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-forest-50 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>

            <div className="flex gap-8 pt-8">
              <div>
                <div className="font-display text-4xl font-bold text-forest-700">
                  21+
                </div>
                <div className="text-sage-600">Years Experience</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-forest-700">
                  500+
                </div>
                <div className="text-sage-600">Happy Clients</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-forest-700">
                  ⭐ 5.0
                </div>
                <div className="text-sage-600">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Image side with organic shapes */}
          <div className="relative animate-slide-in-right stagger-2">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=1000&fit=crop"
                alt="Beautiful landscaping"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-3xl shadow-2xl p-6 animate-fade-in stagger-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-forest-500 to-forest-700 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">✓</span>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-forest-900">
                    Licensed & Insured
                  </div>
                  <div className="text-sage-600">Certified Professionals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom divider */}
      <div className="curve-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
