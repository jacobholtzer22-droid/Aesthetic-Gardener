'use client';

import Link from 'next/link';

const services = [
  { icon: '🌱', title: 'Landscaping Design' },
  { icon: '🌿', title: 'Lawn Care & Maintenance' },
  { icon: '❄️', title: 'Snow Removal' },
  { icon: '🪨', title: 'Hardscaping' },
];

type ServicesIntroProps = {
  sectionLabel?: string;
  heading?: string;
  description?: string;
};

export default function ServicesIntro({
  sectionLabel = 'Our Services',
  heading = 'Complete Outdoor Solutions',
  description = 'From design to maintenance, we offer comprehensive landscaping services tailored to your vision and lifestyle.',
}: ServicesIntroProps) {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <span className="inline-block bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {sectionLabel}
          </span>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-forest-900 mb-6">
            {heading}
          </h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto mb-10">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-sage-50/50 rounded-2xl p-6 shadow-lg border border-sage-100 text-center"
            >
              <span className="text-3xl block mb-3">{service.icon}</span>
              <h3 className="font-display text-lg font-bold text-forest-900">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-block bg-gradient-to-r from-forest-600 to-forest-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
