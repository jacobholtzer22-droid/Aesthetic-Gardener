import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import CurveDivider from '@/components/CurveDivider';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hardscaping Services | Aesthetic Gardener Holland MI',
  description:
    'Patios, walkways, retaining walls, outdoor kitchens, fire pits, and water features in Holland & West Michigan. Quality materials and expert installation.',
};

const offers = [
  {
    icon: '🪑',
    title: 'Patio Installation',
    image: '/images/client/PAtiobricking3.JPG',
    description: 'Custom patios in paver, stone, or concrete. We design for flow, drainage, and how you want to use the space.',
  },
  {
    icon: '🛤️',
    title: 'Walkways',
    image: '/images/client/Patiowoodwalkway.jpg',
    description: 'Paths that connect your landscape and guide guests. Stone, pavers, or gravel—durable and attractive underfoot.',
  },
  {
    icon: '🧱',
    title: 'Retaining Walls',
    image: '/images/client/brickwall1.JPG',
    description: 'Functional and attractive walls that manage slope, create planting terraces, and define outdoor rooms.',
  },
  {
    icon: '🍳',
    title: 'Outdoor Kitchens',
    image: '/images/client/patiobricking4-2.JPG',
    description: 'Grill stations, countertops, and prep areas so you can cook and entertain outside in style.',
  },
  {
    icon: '🔥',
    title: 'Fire Pits',
    image: '/images/client/GARDENBRICKING.JPG',
    description: 'Gathering spots for cool evenings. We build in stone or pavers with options for wood or gas.',
  },
  {
    icon: '💧',
    title: 'Water Features',
    image: '/images/client/paiobricking3.JPG',
    description: 'Fountains, ponds, or cascades that add sound, movement, and a focal point to your landscape.',
  },
];

const processSteps = [
  { step: 1, title: 'Consultation', description: 'We visit your property, discuss how you’ll use the space, and review access and drainage.' },
  { step: 2, title: 'Design', description: 'Layout, materials, and elevations. We show you options and get your approval before breaking ground.' },
  { step: 3, title: 'Installation', description: 'Expert base prep, setting, and finishing. We use quality materials and techniques that last decades.' },
  { step: 4, title: 'Finishing', description: 'Edging, jointing, and cleanup. We leave your site tidy and your hardscape ready to enjoy.' },
];

const whyChoose = [
  { title: 'Expert Craftsmanship', image: '/images/client/patiobricking.jpg', description: 'Proper base work, drainage, and setting so your hardscape stays level and stable for years.' },
  { title: 'Quality Materials', image: '/images/client/PAtiobricking3.JPG', description: 'We source durable pavers, stone, and products that stand up to West Michigan freeze-thaw and use.' },
  { title: 'Design That Fits', image: '/images/client/patiobricking4.JPG', description: 'Hardscape that complements your home and landscape—not one-size-fits-all templates.' },
  { title: 'Full-Service Backing', image: '/images/client/brickwall2.jpg', description: 'Same company for design, softscape, and maintenance. One team, one responsibility.' },
];

const galleryImages = [
  { src: '/images/client/PAtiobricking3.JPG', alt: 'Paver patio with fire pit and retaining walls' },
  { src: '/images/client/patiobricking.jpg', alt: 'Herringbone brick patio with balustrade' },
  { src: '/images/client/patiobricking4.JPG', alt: 'Terraced brick retaining walls with steps' },
  { src: '/images/client/GARDENBRICKING.JPG', alt: 'Brick tree surround with rock fill' },
  { src: '/images/client/paiobricking3.JPG', alt: 'Block retaining wall with stone steps' },
  { src: '/images/client/brickwall2.jpg', alt: 'Curved retaining block wall' },
];

export default function HardscapingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32">

        {/* Hero: title, tagline, background image only — no floating decorative elements */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/client/patiobricking2.jpg"
              alt="Hardscaping"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
              Hardscaping
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Patios, walkways, walls, and outdoor living spaces built to last—with quality materials and expert installation.
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
              Hardscaping Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From patios to fire pits—durable, beautiful outdoor structure that stands the test of time.
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
          <img src="/images/client/drivewaybricking.JPG" alt="" className="w-full h-full object-cover" />
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
              From concept to completion—we build hardscape you’ll enjoy for decades.
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
              Why Choose Aesthetic Gardener for Hardscaping
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Craftsmanship and materials that make the difference.
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
              Hardscaping Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Patios, walls, and outdoor living spaces we’ve built across West Michigan.
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
        <CurveDivider position="bottom" fillClass="fill-[#0a0a0a]" />
      </section>

      {/* Pricing / CTA */}
      <section className="relative py-24 bg-[#1a1a1a] overflow-hidden">
        <CurveDivider position="top" fillClass="fill-[#1a1a1a]" />
        <div className="absolute inset-0">
          <img src="/images/client/brickwall2.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Custom Pricing Based on Your Needs
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Every project is different. We’ll provide a detailed estimate based on scope, materials, and access.
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
