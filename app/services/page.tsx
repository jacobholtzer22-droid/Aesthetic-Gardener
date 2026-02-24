import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Landscaping Services | Aesthetic Gardener Holland MI',
  description:
    'Full-service landscaping: design, lawn care, snow removal, hardscaping, irrigation, and seasonal cleanups. Serving Holland and West Michigan.',
};

const services = [
  {
    icon: '🌱',
    name: 'Landscaping Design',
    slug: '/services/landscaping-design',
    image: '/images/client/gardening.JPG',
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
    gradient: 'from-accent to-accent-dark',
  },
  {
    icon: '🌿',
    name: 'Lawn Care & Maintenance',
    slug: '/services/lawn-care',
    image: '/images/client/Freshmowedlawn.jpg',
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
    gradient: 'from-accent-light to-accent',
  },
  {
    icon: '❄️',
    name: 'Snow Removal',
    slug: '/services/snow-removal',
    image: '/images/client/GeneralLawnlandscape.jpg',
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
    gradient: 'from-accent to-accent-dark',
  },
  {
    icon: '🪨',
    name: 'Hardscaping',
    slug: '/services/hardscaping',
    image: '/images/client/patiobricking.jpg',
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
    gradient: 'from-accent-dark to-accent',
  },
  {
    icon: '💧',
    name: 'Irrigation & Drainage Solutions',
    image: '/images/client/Walkwaylandscapping.JPG',
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
    gradient: 'from-accent-light to-accent-dark',
  },
  {
    icon: '🍂',
    name: 'Spring & Fall Cleanups',
    image: '/images/client/BackyardFencingandcenterbrick.jpg',
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
    gradient: 'from-accent to-accent-light',
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-accent-light shrink-0"
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

      <section className="relative pt-28 pb-24 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/client/patiobricking4-2.JPG" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up relative">
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From design and installation to seasonal maintenance and snow removal,
              we offer full-service outdoor solutions for homes and businesses in Holland
              and West Michigan.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-6">
              Explore our comprehensive range of landscaping services below, or click on any service to learn more about what we offer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-[#1a1a1a] rounded-3xl p-8 shadow-lg border border-white/10 card-hover animate-fade-in ${
                  ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5', 'stagger-6'][index]
                }`}
              >
                <div className="relative h-48 -mx-8 -mt-8 mb-6 rounded-t-3xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                </div>
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300`}
                >
                  <span className="text-3xl">{service.icon}</span>
                </div>

                <h2 className="font-display text-2xl font-bold text-white mb-4">
                  {service.name}
                </h2>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={'slug' in service && service.slug ? service.slug : '/contact#quote-form'}
                  className="inline-flex items-center justify-center gap-2 w-full bg-accent text-white px-6 py-4 rounded-full font-semibold hover:bg-accent-light hover:shadow-xl hover:shadow-accent/20 hover:scale-[1.02] transition-all duration-300"
                >
                  {'slug' in service && service.slug ? 'Learn More' : 'Request Quote'}
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
