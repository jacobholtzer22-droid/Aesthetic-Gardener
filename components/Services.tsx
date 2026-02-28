import Link from 'next/link';
import Image from 'next/image';
import { BLUR_DATA_URL } from '@/lib/image-utils';

export default function Services() {
  const services = [
    {
      title: 'Landscaping Design',
      description:
        'Custom garden and planting design, tree installation, and complete landscape transformations.',
      features: ['Custom Garden Design', 'Plant Installation', 'Landscape Makeovers'],
      image: '/images/client/gardening.JPG',
      href: '/services/landscaping-design',
    },
    {
      title: 'Lawn Care & Maintenance',
      description:
        'Keep your lawn lush and healthy all season with our comprehensive maintenance services.',
      features: ['Mowing & Trimming', 'Fertilization', 'Seasonal Cleanups'],
      image: '/images/client/Freshmowedlawn.jpg',
      href: '/services/lawn-care',
    },
    {
      title: 'Snow Removal',
      description:
        'Reliable plowing and de-icing services to keep your property safe and accessible.',
      features: ['Residential Plowing', 'De-icing Services', 'Seasonal Contracts'],
      image: '/images/client/snow-house-winter.jpg',
      href: '/services/snow-removal',
    },
    {
      title: 'Hardscaping',
      description:
        'Beautiful patios, walkways, and retaining walls designed to impress and built to last.',
      features: ['Custom Patios', 'Retaining Walls', 'Stone Installation'],
      image: '/images/client/patiobricking.jpg',
      href: '/services/hardscaping',
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block bg-accent/10 text-accent-light px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">
            Complete Outdoor Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From design to maintenance, we offer comprehensive landscaping services
            tailored to your vision and lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-lg card-hover border border-white/10 animate-fade-in stagger-${
                index + 1
              }`}
            >
              <div className="relative w-full h-[200px] rounded-t-3xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - Professional landscaping service in Holland MI`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-400">
                      <svg
                        className="w-5 h-5 text-accent-light"
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
                  href={service.href}
                  className="w-full text-accent-light font-semibold hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Learn More
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
              </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact#quote-form"
            className="inline-block bg-accent text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent-light hover:shadow-2xl hover:shadow-accent/20 hover:scale-105 transition-all duration-300"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
