'use client';

import Link from 'next/link';

const services = [
  { icon: '🌱', title: 'Landscaping Design', image: '/images/client/gardening.JPG', href: '/services/landscaping-design' },
  { icon: '🌿', title: 'Lawn Care & Maintenance', image: '/images/client/Freshmowedlawn.jpg', href: '/services/lawn-care' },
  { icon: '❄️', title: 'Snow Removal', image: '/images/client/GeneralLawnlandscape.jpg', href: '/services/snow-removal' },
  { icon: '🪨', title: 'Hardscaping', image: '/images/client/patiobricking.jpg', href: '/services/hardscaping' },
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
    <section className="relative py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <span className="inline-block bg-accent/10 text-accent-light px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {sectionLabel}
          </span>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">
            {heading}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
            >
              <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="relative flex flex-col items-center justify-center h-full p-4">
                <span className="text-3xl block mb-3">{service.icon}</span>
                <h3 className="font-display text-lg font-bold text-white text-center">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-block bg-accent text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent-light hover:shadow-2xl hover:shadow-accent/20 hover:scale-105 transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
