import type { Metadata } from 'next';
import Image from 'next/image';
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
  },
  {
    icon: '🏢',
    title: 'Commercial Plowing',
    description: 'Parking lots, loading zones, and walkways kept safe and open for your business. Scheduled or on-call service.',
  },
  {
    icon: '🚶',
    title: 'Sidewalk Clearing',
    description: 'Walkways and paths cleared for safety and compliance. We prevent ice buildup and ensure clear access.',
  },
  {
    icon: '🧂',
    title: 'De-icing / Salting',
    description: 'Strategic application of salt or ice melt to reduce slip hazards on driveways, steps, and walkways.',
  },
  {
    icon: '🔄',
    title: '24/7 Emergency Service',
    description: 'When storms hit at any hour, we respond. Priority dispatch for contract customers and emergency calls.',
  },
  {
    icon: '📋',
    title: 'Seasonal Contracts',
    description: 'Lock in your rate and priority service with a seasonal agreement. Per-push or unlimited options available.',
  },
];

const processSteps = [
  { step: 1, title: 'Consultation', description: 'We assess your property, access, and priorities and recommend a plow plan and contract type.' },
  { step: 2, title: 'Agreement', description: 'You choose per-push or seasonal contract. We confirm triggers (snow depth) and response expectations.' },
  { step: 3, title: 'Service', description: 'When it snows, we plow and treat according to your plan. Same team when possible for consistency.' },
  { step: 4, title: 'Follow-up', description: 'We monitor conditions and return if needed. You get clear communication and reliable access all winter.' },
];

const whyChoose = [
  { title: 'Prompt Response', description: 'We prioritize getting to you quickly after storms so you’re not stuck waiting for a plow.' },
  { title: 'Reliable Equipment', description: 'Well-maintained plows and spreaders so we can handle heavy snow and long driveways.' },
  { title: 'Clear Communication', description: 'You know when we’re coming and what to expect. No guessing or missed visits.' },
  { title: 'One Company, Year-Round', description: 'Use us for lawn and landscape in the warm months and snow in the winter—one relationship.' },
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&h=600&fit=crop', alt: 'Snow plow clearing driveway' },
  { src: 'https://images.unsplash.com/photo-1542601098-3adb3aefd1b2?w=800&h=600&fit=crop', alt: 'Snow removal service' },
  { src: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&h=600&fit=crop', alt: 'Cleared residential driveway' },
  { src: 'https://images.unsplash.com/photo-1578645510380-5f7d2e2c2b0c?w=800&h=600&fit=crop', alt: 'Winter property maintenance' },
  { src: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&h=600&fit=crop', alt: 'Snow and ice treatment' },
  { src: 'https://images.unsplash.com/photo-1551582045-6ec9e11d8698?w=800&h=600&fit=crop', alt: 'Snow plow truck' },
];

export default function SnowRemovalPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32">

        {/* Hero: title, tagline, background image only — no floating decorative elements */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1920&h=1080&fit=crop"
              alt="Snow removal"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-forest-900/60" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
              Snow Removal
            </h1>
            <p className="text-xl sm:text-2xl text-sage-100 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Reliable plowing and de-icing so your driveway and walkways stay safe and accessible all winter.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-forest-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-sage-50 hover:scale-105 transition-all duration-300 shadow-xl animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              Get Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <CurveDivider position="bottom" fillClass="fill-white" />
        </section>

      {/* What We Offer */}
      <section className="relative py-24 bg-white overflow-hidden">
        <CurveDivider position="top" fillClass="fill-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              What We Offer
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-forest-900 mb-4">
              Snow Removal Services
            </h2>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto">
              From residential driveways to commercial lots—we keep you open and safe.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-sage-50 to-white rounded-3xl p-8 shadow-lg border border-sage-100 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-forest-500 to-forest-600 rounded-2xl flex items-center justify-center mb-5 text-2xl">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-forest-900 mb-3">{item.title}</h3>
                <p className="text-sage-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <CurveDivider position="bottom" fillClass="fill-sage-50" />
      </section>

      {/* Our Process */}
      <section className="relative py-24 bg-sage-50 overflow-hidden">
        <CurveDivider position="top" fillClass="fill-sage-50" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Process
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-forest-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto">
              Simple agreements and dependable execution so you’re never left in the cold.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-sage-100 card-hover h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-forest-600 to-forest-700 rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display text-xl font-bold text-forest-900 mb-2">{item.title}</h3>
                  <p className="text-sage-700 text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-forest-300 transform -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
        <CurveDivider position="bottom" fillClass="fill-white" />
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 bg-white overflow-hidden">
        <CurveDivider position="top" fillClass="fill-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-forest-900 mb-4">
              Why Choose Aesthetic Gardener for Snow Removal
            </h2>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto">
              When the snow flies, you need a team you can count on.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-forest-50 to-sage-50 rounded-3xl border border-forest-100 card-hover"
              >
                <h3 className="font-display text-xl font-bold text-forest-900 mb-3">{item.title}</h3>
                <p className="text-sage-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <CurveDivider position="bottom" fillClass="fill-forest-50" />
      </section>

      {/* Image Gallery */}
      <section className="relative py-24 bg-forest-50 overflow-hidden">
        <CurveDivider position="top" fillClass="fill-forest-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Work
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-forest-900 mb-4">
              Snow Removal in Action
            </h2>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto">
              Safe, clear driveways and walkways—winter after winter.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {galleryImages.map((img, index) => (
              <div key={index} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg card-hover">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
        <CurveDivider position="bottom" fillClass="fill-white" />
      </section>

      {/* Pricing / CTA */}
      <section className="relative py-24 bg-gradient-to-br from-forest-700 to-forest-800 overflow-hidden">
        <CurveDivider position="top" fillClass="fill-forest-700" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Custom Pricing Based on Your Needs
          </h2>
          <p className="text-xl text-sage-200 mb-10">
            Per-push or seasonal contracts—we’ll quote based on your property size and service level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-forest-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-sage-50 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Request Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <p className="text-sage-200 text-lg">
            Or call us today: <a href="tel:+16162182698" className="font-semibold text-white hover:underline">(616) 218-2698</a>
          </p>
        </div>
      </section>

      </div>
      <Footer />
    </main>
  );
}
