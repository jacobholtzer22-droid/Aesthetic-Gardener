import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import CurveDivider from '@/components/CurveDivider';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Landscaping Design Services | Aesthetic Gardener Holland MI',
  description:
    'Custom garden design, plant selection, tree installation, and landscape lighting in Holland & West Michigan. Transform your outdoor space with Aesthetic Gardener.',
};

const offers = [
  {
    icon: '🌳',
    title: 'Custom Garden Design',
    description: 'Tailored plans that match your style, soil, and sun. We create cohesive planting schemes and bed layouts that thrive in West Michigan.',
  },
  {
    icon: '🌺',
    title: 'Plant Selection',
    description: 'Right plant, right place. We choose perennials, shrubs, and trees suited to your site for year-round interest and low maintenance.',
  },
  {
    icon: '🌲',
    title: 'Tree & Shrub Installation',
    description: 'Professional planting with proper depth, mulch, and staking. We source quality specimens and ensure they establish well.',
  },
  {
    icon: '💧',
    title: 'Irrigation Systems',
    description: 'Efficient watering design and installation so your landscape stays healthy without waste. Smart zones and optional automation.',
  },
  {
    icon: '✨',
    title: 'Landscape Lighting',
    description: 'Extend the enjoyment of your yard into the evening. Path lights, uplighting, and accent features installed for safety and ambiance.',
  },
  {
    icon: '🌸',
    title: 'Seasonal Plantings',
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
  { title: '21+ Years of Experience', description: 'We\'ve designed and installed hundreds of landscapes across West Michigan and know what works.' },
  { title: 'Design That Lasts', description: 'We focus on structure, soil, and plant choices that perform in our climate and your conditions.' },
  { title: 'Full-Service Execution', description: 'From concept to planting to irrigation—one team, one point of contact, no subcontractor shuffle.' },
  { title: 'Personalized to You', description: 'Your landscape reflects your taste and lifestyle, not a one-size-fits-all template.' },
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1558904541-efa84396aec2?w=800&h=600&fit=crop', alt: 'Garden design with mixed plantings' },
  { src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop', alt: 'Landscape with trees and shrubs' },
  { src: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&h=600&fit=crop', alt: 'Perennial garden bed' },
  { src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop', alt: 'Residential landscape design' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop', alt: 'Garden with ornamental grasses' },
  { src: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&h=600&fit=crop', alt: 'Curved garden border' },
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
              src="https://images.unsplash.com/photo-1558904541-efa84396aec2?w=1920&h=1080&fit=crop"
              alt="Landscaping design"
              fill
              className="object-cover"
              priority
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
              Landscaping Design Services
            </h2>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto">
              From concept to installation, we bring your vision to life with expertise and care.
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
              From first meeting to finished landscape, we keep the process clear and collaborative.
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
              Why Choose Aesthetic Gardener for Design
            </h2>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto">
              Experience, quality, and a commitment to your satisfaction.
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
              Landscape Design Projects
            </h2>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto">
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
            Every landscape is unique. Tell us your goals and we’ll provide a detailed, no-obligation estimate.
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
