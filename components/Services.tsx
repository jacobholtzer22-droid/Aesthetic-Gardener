'use client';

import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: '🌱',
      title: 'Landscaping Design',
      description:
        'Custom garden and planting design, tree installation, and complete landscape transformations.',
      features: ['Custom Garden Design', 'Plant Installation', 'Landscape Makeovers'],
      gradient: 'from-forest-500 to-forest-600',
    },
    {
      icon: '🌿',
      title: 'Lawn Care & Maintenance',
      description:
        'Keep your lawn lush and healthy all season with our comprehensive maintenance services.',
      features: ['Mowing & Trimming', 'Fertilization', 'Seasonal Cleanups'],
      gradient: 'from-sage-500 to-sage-600',
    },
    {
      icon: '❄️',
      title: 'Snow Removal',
      description:
        'Reliable plowing and de-icing services to keep your property safe and accessible.',
      features: ['Residential Plowing', 'De-icing Services', 'Seasonal Contracts'],
      gradient: 'from-earth-500 to-earth-600',
    },
    {
      icon: '🪨',
      title: 'Hardscaping',
      description:
        'Beautiful patios, walkways, and retaining walls designed to impress and built to last.',
      features: ['Custom Patios', 'Retaining Walls', 'Stone Installation'],
      gradient: 'from-forest-600 to-forest-700',
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-white">
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
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-forest-900 mb-6">
            Complete Outdoor Solutions
          </h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            From design to maintenance, we offer comprehensive landscaping services
            tailored to your vision and lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-white to-sage-50/50 rounded-3xl p-8 shadow-lg card-hover border border-sage-100 animate-fade-in stagger-${
                index + 1
              }`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300`}
              >
                <span className="text-3xl">{service.icon}</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-forest-900 mb-4">
                {service.title}
              </h3>

              <p className="text-sage-700 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sage-600">
                    <svg
                      className="w-5 h-5 text-forest-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="w-full text-forest-700 font-semibold hover:text-forest-500 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Get Quote
                <svg
                  className="w-4 h-4"
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
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-forest-600 to-forest-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
