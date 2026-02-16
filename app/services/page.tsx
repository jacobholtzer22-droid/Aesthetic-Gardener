import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Landscaping Services | Aesthetic Gardener',
  description:
    'Full-service landscaping: design, lawn care, snow removal, hardscaping, irrigation, and seasonal cleanups. Serving Holland and West Michigan.',
};

const services = [
  {
    icon: '🌱',
    name: 'Landscaping Design',
    description:
      'Transform your property with custom garden and planting design, tree installation, and complete landscape makeovers. Our team works with you to bring your vision to life, from initial concept to finished installation.',
    included: [
      'Custom garden & planting design',
      'Tree & shrub installation',
      'Full landscape transformations',
      'Seasonal color & perennial beds',
      'Garden bed design & installation',
      'Professional design consultations',
    ],
    gradient: 'from-forest-500 to-forest-600',
  },
  {
    icon: '🌿',
    name: 'Lawn Care & Maintenance',
    description:
      'Keep your lawn lush, green, and healthy all season long with our comprehensive maintenance programs. We use proven techniques and quality products to ensure your yard looks its best from spring through fall.',
    included: [
      'Regular mowing & edging',
      'Fertilization & weed control',
      'Aeration & overseeding',
      'Seasonal lawn treatments',
      'Trimming & border maintenance',
      'Ongoing care plans',
    ],
    gradient: 'from-sage-500 to-sage-600',
  },
  {
    icon: '❄️',
    name: 'Snow Removal',
    description:
      'Count on reliable plowing and de-icing services to keep your driveway, walkways, and property safe and accessible all winter. We offer flexible seasonal contracts and one-time service for Holland and West Michigan.',
    included: [
      'Residential driveway plowing',
      'Walkway & sidewalk clearing',
      'De-icing & salt application',
      'Seasonal contracts available',
      'Prompt response after storms',
      'Commercial property service',
    ],
    gradient: 'from-earth-500 to-earth-600',
  },
  {
    icon: '🪨',
    name: 'Hardscaping',
    description:
      'Add lasting structure and beauty with patios, walkways, retaining walls, and outdoor living spaces. We use quality materials and expert craftsmanship so your hardscape looks great and stands the test of time.',
    included: [
      'Custom patios & terraces',
      'Retaining walls & steps',
      'Stone & paver walkways',
      'Fire pits & outdoor kitchens',
      'Decorative stone installation',
      'Drainage-integrated design',
    ],
    gradient: 'from-forest-600 to-forest-700',
  },
  {
    icon: '💧',
    name: 'Irrigation & Drainage Solutions',
    description:
      'Ensure your landscape gets the right amount of water while protecting your property from standing water and erosion. We design and install efficient irrigation systems and solve drainage issues with smart, lasting solutions.',
    included: [
      'Sprinkler system design & install',
      'Drainage system installation',
      'French drains & dry wells',
      'Downspout & gutter extensions',
      'Water management consulting',
      'System repair & winterization',
    ],
    gradient: 'from-forest-500 to-sage-600',
  },
  {
    icon: '🍂',
    name: 'Spring & Fall Cleanups',
    description:
      'Start and end each growing season right with thorough property cleanups. We remove debris, trim back perennials, clear beds, and prepare your landscape so it looks tidy and is ready for the season ahead.',
    included: [
      'Leaf removal & disposal',
      'Bed cleanup & weeding',
      'Perennial cutback & mulch',
      'Debris & branch removal',
      'Gutter area cleanup',
      'Seasonal bed preparation',
    ],
    gradient: 'from-sage-500 to-earth-500',
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-forest-500 shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative pt-28 pb-24 bg-white">
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
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-forest-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-sage-700 max-w-3xl mx-auto">
              From design and installation to seasonal maintenance and snow removal,
              we offer full-service outdoor solutions for homes and businesses in Holland
              and West Michigan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white to-sage-50/50 rounded-3xl p-8 shadow-lg border border-sage-100 card-hover animate-fade-in ${
                  ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5', 'stagger-6'][index]
                }`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300`}
                >
                  <span className="text-3xl">{service.icon}</span>
                </div>

                <h2 className="font-display text-2xl font-bold text-forest-900 mb-4">
                  {service.name}
                </h2>

                <p className="text-sage-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sage-600">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-forest-600 to-forest-500 text-white px-6 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  Request Quote
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
