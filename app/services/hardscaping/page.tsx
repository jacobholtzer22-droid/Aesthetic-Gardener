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
    description: 'Custom patios in paver, stone, or concrete. We design for flow, drainage, and how you want to use the space.',
  },
  {
    icon: '🛤️',
    title: 'Walkways',
    description: 'Paths that connect your landscape and guide guests. Stone, pavers, or gravel—durable and attractive underfoot.',
  },
  {
    icon: '🧱',
    title: 'Retaining Walls',
    description: 'Functional and attractive walls that manage slope, create planting terraces, and define outdoor rooms.',
  },
  {
    icon: '🍳',
    title: 'Outdoor Kitchens',
    description: 'Grill stations, countertops, and prep areas so you can cook and entertain outside in style.',
  },
  {
    icon: '🔥',
    title: 'Fire Pits',
    description: 'Gathering spots for cool evenings. We build in stone or pavers with options for wood or gas.',
  },
  {
    icon: '💧',
    title: 'Water Features',
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
  { title: 'Expert Craftsmanship', description: 'Proper base work, drainage, and setting so your hardscape stays level and stable for years.' },
  { title: 'Quality Materials', description: 'We source durable pavers, stone, and products that stand up to West Michigan freeze-thaw and use.' },
  { title: 'Design That Fits', description: 'Hardscape that complements your home and landscape—not one-size-fits-all templates.' },
  { title: 'Full-Service Backing', description: 'Same company for design, softscape, and maintenance. One team, one responsibility.' },
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop', alt: 'Stone patio and outdoor living' },
  { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop', alt: 'Paver patio with seating' },
  { src: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop', alt: 'Retaining wall and steps' },
  { src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop', alt: 'Outdoor fire pit' },
  { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop', alt: 'Stone walkway' },
  { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop', alt: 'Hardscape and landscaping' },
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
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop"
              alt="Hardscaping"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-forest-900/60" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
              Hardscaping
            </h1>
            <p className="text-xl sm:text-2xl text-sage-100 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Patios, walkways, walls, and outdoor living spaces built to last—with quality materials and expert installation.
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
              Hardscaping Services
            </h2>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto">
              From patios to fire pits—durable, beautiful outdoor structure that stands the test of time.
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
              From concept to completion—we build hardscape you’ll enjoy for decades.
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
              Why Choose Aesthetic Gardener for Hardscaping
            </h2>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto">
              Craftsmanship and materials that make the difference.
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
              Hardscaping Projects
            </h2>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto">
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
            Every project is different. We’ll provide a detailed estimate based on scope, materials, and access.
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
