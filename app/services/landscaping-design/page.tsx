import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import { BLUR_DATA_URL } from '@/lib/image-utils';
import CurveDivider from '@/components/CurveDivider';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Landscaping Design Services',
  description:
    'Custom garden design, plant selection, tree installation, and landscape lighting in Holland MI and West Michigan. Transform your outdoor space with Aesthetic Gardener.',
  openGraph: {
    title: 'Landscaping Design | Aesthetic Gardener Holland MI',
    description:
      'Custom garden design, plant selection, tree installation in Holland & West Michigan. Transform your outdoor space.',
    url: '/services/landscaping-design',
  },
};

const offers = [
  {
    icon: '🌳',
    title: 'Custom Garden Design',
    image: '/images/client/gardenbricking2-2.JPG',
    description: 'Tailored plans that match your style, soil, and sun. We create cohesive planting schemes and bed layouts that thrive in West Michigan.',
  },
  {
    icon: '🌺',
    title: 'Plant Selection',
    image: '/images/client/gardenbricking2.JPG',
    description: 'Right plant, right place. We choose perennials, shrubs, and trees suited to your site for year-round interest and low maintenance.',
  },
  {
    icon: '🌲',
    title: 'Tree & Shrub Installation',
    image: '/images/client/BackyardFencingandcenterbrick.jpg',
    description: 'Professional planting with proper depth, mulch, and staking. We source quality specimens and ensure they establish well.',
  },
  {
    icon: '💧',
    title: 'Irrigation Systems',
    image: '/images/client/Walkwaylandscapping.JPG',
    description: 'Efficient watering design and installation so your landscape stays healthy without waste. Smart zones and optional automation.',
  },
  {
    icon: '✨',
    title: 'Landscape Lighting',
    image: '/images/client/gardening.JPG',
    description: 'Extend the enjoyment of your yard into the evening. Path lights, uplighting, and accent features installed for safety and ambiance.',
  },
  {
    icon: '🌸',
    title: 'Seasonal Plantings',
    image: '/images/client/gardenbricking2-3.JPG',
    description: 'Annual color rotations and seasonal refresh so your beds look their best from spring through fall.',
  },
];

const processSteps = [
  { step: 1, title: 'Consultation', description: 'We visit your property, discuss your goals, and assess sun, soil, and existing features.' },
  { step: 2, title: 'Design', description: 'You receive a custom design with plant lists, layout, and optional 3D or renderings.' },
  { step: 3, title: 'Installation', description: 'Our crew brings the plan to life with quality materials and expert installation.' },
  { step: 4, title: 'Maintenance', description: 'Optional ongoing care keeps your new landscape looking great year after year.' },
];

const whyChoose = [
  { title: '21+ Years of Experience', image: '/images/client/gardening.JPG', description: 'We\'ve designed and installed hundreds of landscapes across West Michigan and know what works.' },
  { title: 'Design That Lasts', image: '/images/client/gardenbricking2-2.JPG', description: 'We focus on structure, soil, and plant choices that perform in our climate and your conditions.' },
  { title: 'Full-Service Execution', image: '/images/client/BackyardFencingandcenterbrick.jpg', description: 'From concept to planting to irrigation—one team, one point of contact, no subcontractor shuffle.' },
  { title: 'Personalized to You', image: '/images/client/Walkwaylandscapping.JPG', description: 'Your landscape reflects your taste and lifestyle, not a one-size-fits-all template.' },
];

const galleryImages = [
  { src: '/images/client/gardenbricking2-2.JPG', alt: 'Garden with flowers, flagstone, and bench' },
  { src: '/images/client/gardenbricking2.JPG', alt: 'Flagstone path with bench and plantings' },
  { src: '/images/client/gardenbricking2-3.JPG', alt: 'Residential front yard landscaping' },
  { src: '/images/client/BackyardFencingandcenterbrick.jpg', alt: 'Backyard with fencing and center bed' },
  { src: '/images/client/Walkwaylandscapping.JPG', alt: 'Side yard landscaping with retaining wall' },
  { src: '/images/client/drivewaybricking.JPG', alt: 'Driveway with landscape borders' },
];

export default function LandscapingDesignPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32">

        {/* Hero: title, tagline, background image only — no floating decorative elements */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/client/gardening.JPG"
              alt="Custom landscaping design and garden installation by Aesthetic Gardener Holland Michigan"
              fill
              sizes="100vw"
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
            <div className="absolute inset-0 bg-forest-900/60" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
              Landscaping Design
            </h1>
            <p className="text-xl sm:text-2xl text-sage-100 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Transform your property with custom gardens, plantings, and outdoor spaces designed for your lifestyle.
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
              Landscaping Design Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From concept to installation, we bring your vision to life with expertise and care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-lg border border-white/10 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Image src={item.image} alt={`${item.title} - Landscaping design in Holland MI`} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
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
          <Image src="/images/client/gardenbricking2.JPG" alt="Landscaping design process - Aesthetic Gardener West Michigan" fill sizes="100vw" className="object-cover" loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
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
              From first meeting to finished landscape, we keep the process clear and collaborative.
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
              Why Choose Aesthetic Gardener for Design
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience, quality, and a commitment to your satisfaction.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-lg border border-white/10 card-hover text-center"
              >
                <Image src={item.image} alt={`${item.title} - Aesthetic Gardener landscaping design`} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
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
              Landscape Design Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A glimpse of the outdoor spaces we’ve designed and installed.
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
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
            ))}
          </div>
        </div>
        <CurveDivider position="bottom" fillClass="fill-[#0a0a0a]" />
      </section>

      {/* Related Services */}
      <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
        <CurveDivider position="top" fillClass="fill-[#0a0a0a]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-white text-center mb-12">
            Explore Our Other Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/services/lawn-care"
              className="group bg-[#1a1a1a] rounded-2xl p-6 border border-white/10 hover:border-accent/40 transition-all card-hover"
            >
              <span className="text-3xl block mb-3">🌿</span>
              <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-accent-light transition-colors">
                Lawn Care & Maintenance
              </h3>
              <p className="text-gray-400 text-sm">Weekly mowing, fertilization, and more.</p>
            </Link>
            <Link
              href="/services/snow-removal"
              className="group bg-[#1a1a1a] rounded-2xl p-6 border border-white/10 hover:border-accent/40 transition-all card-hover"
            >
              <span className="text-3xl block mb-3">❄️</span>
              <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-accent-light transition-colors">
                Snow Removal
              </h3>
              <p className="text-gray-400 text-sm">Reliable plowing and de-icing all winter.</p>
            </Link>
            <Link
              href="/services/hardscaping"
              className="group bg-[#1a1a1a] rounded-2xl p-6 border border-white/10 hover:border-accent/40 transition-all card-hover"
            >
              <span className="text-3xl block mb-3">🪨</span>
              <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-accent-light transition-colors">
                Hardscaping
              </h3>
              <p className="text-gray-400 text-sm">Patios, walkways, retaining walls.</p>
            </Link>
          </div>
        </div>
        <CurveDivider position="bottom" fillClass="fill-[#1a1a1a]" />
      </section>

      {/* Pricing / CTA */}
      <section className="relative py-24 bg-[#1a1a1a] overflow-hidden">
        <CurveDivider position="top" fillClass="fill-[#1a1a1a]" />
        <div className="absolute inset-0">
          <Image src="/images/client/gardenbricking2-3.JPG" alt="Residential landscape design - Holland MI quote" fill sizes="100vw" className="object-cover" loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Custom Pricing Based on Your Needs
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Every landscape is unique. Tell us your goals and we’ll provide a detailed, no-obligation estimate.
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
