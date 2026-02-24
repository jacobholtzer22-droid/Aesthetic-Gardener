'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/client/heromain.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay: darker on left, more transparent on right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.15) 100%)',
        }}
      ></div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-2xl space-y-8 animate-slide-up">
          <div className="inline-block">
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
              Serving West Michigan Since 2004
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Your Landscape,
            <br />
            Our Masterpiece
          </h1>

          <p className="text-xl text-gray-200 leading-relaxed max-w-xl">
            Stop maintaining, start enjoying. We create and care for stunning
            outdoor spaces year-round, so you can spend more time living life
            outdoors.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact#quote-form"
              className="bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-light hover:shadow-2xl hover:shadow-accent/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
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
              className="border-2 border-white/70 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>

          <div className="flex gap-8 pt-8">
            <div>
              <div className="font-display text-4xl font-bold text-white">
                21+
              </div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-white">
                500+
              </div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-white">
                5.0
              </div>
              <div className="text-gray-300">Average Rating</div>
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
            className="fill-[#111111]"
          ></path>
        </svg>
      </div>
    </section>
  );
}
