import type { Metadata } from 'next';
import Header from '@/components/Header';
import CurveDivider from '@/components/CurveDivider';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Snow Removal Services | Aesthetic Gardener Holland MI',
  description:
    'Residential and commercial plowing, sidewalk clearing, de-icing, and 24/7 emergency snow removal in Holland & West Michigan. Seasonal contracts available.',
};

const offers = [
  {
    icon: '🏠',
    title: 'Residential Plowing',
    description: 'Driveways and access areas cleared promptly after storms. We work around vehicles and obstacles with care.',
    image: '/images/client/snow-shoveling-driveway.jpg',
  },
  {
    icon: '🏢',
    title: 'Commercial Plowing',
    description: 'Parking lots, loading zones, and walkways kept safe and open for your business. Scheduled or on-call service.',
    image: '/images/client/snow-plowed-parking.jpg',
  },
  {
    icon: '🚶',
    title: 'Sidewalk Clearing',
    description: 'Walkways and paths cleared for safety and compliance. We prevent ice buildup and ensure clear access.',
    image: '/images/client/snow-sidewalk-clearing.jpg',
  },
  {
    icon: '🧂',
    title: 'De-icing / Salting',
    description: 'Strategic application of salt or ice melt to reduce slip hazards on driveways, steps, and walkways.',
    image: '/images/client/snow-salting-walkway.jpg',
  },
  {
    icon: '🔄',
    title: '24/7 Emergency Service',
    description: 'When storms hit at any hour, we respond. Priority dispatch for contract customers and emergency calls.',
    image: '/images/client/snow-plow-road.jpg',
  },
  {
    icon: '📋',
    title: 'Seasonal Contracts',
    description: 'Lock in your rate and priority service with a seasonal agreement. Per-push or unlimited options available.',
    image: '/images/client/snow-covered-house.jpg',
  },
];

const processSteps = [
  { step: 1, title: 'Consultation', description: 'We assess your property, access, and priorities and recommend a plow plan and contract type.' },
  { step: 2, title: 'Agreement', description: 'You choose per-push or seasonal contract. We confirm triggers (snow depth) and response expectations.' },
  { step: 3, title: 'Service', description: 'When it snows, we plow and treat according to your plan. Same team when possible for consistency.' },
  { step: 4, title: 'Follow-up', description: 'We monitor conditions and return if needed. You get clear communication and reliable access all winter.' },
];

const whyChoose = [
  { title: 'Prompt Response', description: 'We prioritize getting to you quickly after storms so you’re not stuck waiting for a plow.', image: '/images/client/heromain.jpg' },
  { title: 'Reliable Equipment', description: 'Well-maintained plows and spreaders so we can handle heavy snow and long driveways.', image: '/images/client/Freshmowedlawn.jpg' },
  { title: 'Clear Communication', description: 'You know when we’re coming and what to expect. No guessing or missed visits.', image: '/images/client/generallawnlandscape2.jpg' },
  { title: 'One Company, Year-Round', description: 'Use us for lawn and landscape in the warm months and snow in the winter—one relationship.', image: '/images/client/drivewaybricking.JPG' },
];

const galleryImages = [
  { src: '/images/client/heromain.jpg', alt: 'Residential property we service year-round' },
  { src: '/images/client/GeneralLawnlandscape.jpg', alt: 'Maintained property with clear access' },
  { src: '/images/client/generallawnlandscape2.jpg', alt: 'Corner lot property maintenance' },
  { src: '/images/client/drivewaybricking.JPG', alt: 'Driveway and walkway area' },
  { src: '/images/client/Freshmowedlawn.jpg', alt: 'Well-maintained residential lawn' },
  { src: '/images/client/patiobricking4-2.JPG', alt: 'Residential property with walkways' },
];

export default function SnowRemovalPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32">

        {/* Hero: title, tagline, background image only — no floating decorative elements */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/client/heromain.jpg"
              alt="Snow removal"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
              Snow Removal
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Reliable plowing and de-icing so your driveway and walkways stay safe and accessible all winter.
            </p>
            <Link
              href="/contact#quote-form"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-light hover:shadow-accent/20 hover:scale-105 transition-all duration-300 shadow-xl animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              Get Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <CurveDivider position="bottom" fillClass="fill-[#0a0a0a]" />
        </section>

      {/* What We Offer */}
      <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
        <CurveDivider position="top" fillClass="fill-[#0a0a0a]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-accent-light px-4 py-2 rounded-full text-sm font-semibold mb-4">
              What We Offer
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Snow Removal Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From residential driveways to commercial lots—we keep you open and safe.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-lg border border-white/10 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img src={item.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-300" />
                <div className="relative p-8">
                  <div className="w-14 h-14 bg-accent/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-5 text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CurveDivider position="bottom" fillClass="fill-[#111111]" />
      </section>

      {/* Our Process */}
      <section className="relative py-24 bg-[#111111] overflow-hidden">
        <CurveDivider position="top" fillClass="fill-[#111111]" />
        <div className="absolute inset-0">
          <img src="/images/client/BackyardFencingandcenterbrick.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/85" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-accent-light px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Process
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Simple agreements and dependable execution so you’re never left in the cold.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-[#1a1a1a] rounded-3xl p-8 shadow-lg border border-white/10 card-hover h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/20 transform -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
        <CurveDivider position="bottom" fillClass="fill-[#0a0a0a]" />
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
        <CurveDivider position="top" fillClass="fill-[#0a0a0a]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-accent-light px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose Aesthetic Gardener for Snow Removal
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              When the snow flies, you need a team you can count on.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-lg border border-white/10 card-hover text-center"
              >
                <img src={item.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-300" />
                <div className="relative p-8">
                  <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CurveDivider position="bottom" fillClass="fill-[#111111]" />
      </section>

      {/* Image Gallery */}
      <section className="relative py-24 bg-[#111111] overflow-hidden">
        <CurveDivider position="top" fillClass="fill-[#111111]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-accent-light px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Work
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Snow Removal in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Safe, clear driveways and walkways—winter after winter.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {galleryImages.map((img, index) => (
              <div key={index} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg card-hover">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <CurveDivider position="bottom" fillClass="fill-[#0a0a0a]" />
      </section>

      {/* Pricing / CTA */}
      <section className="relative py-24 bg-[#1a1a1a] overflow-hidden">
        <CurveDivider position="top" fillClass="fill-[#1a1a1a]" />
        <div className="absolute inset-0">
          <img src="/images/client/BackyardFencingandcenterbrick.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Custom Pricing Based on Your Needs
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Per-push or seasonal contracts—we’ll quote based on your property size and service level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link
              href="/contact#quote-form"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-light hover:shadow-accent/20 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Request Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <p className="text-gray-400 text-lg">
            Or call us today: <a href="tel:+16162182698" className="font-semibold text-white hover:underline">(616) 218-2698</a>
          </p>
        </div>
      </section>

      </div>
      <Footer />
    </main>
  );
}
