import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import CurveDivider from '@/components/CurveDivider';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lawn Care & Maintenance Services | Aesthetic Gardener Holland MI',
  description:
    'Weekly mowing, fertilization, weed control, aeration, and overseeding in Holland & West Michigan. Keep your lawn lush and healthy.',
};

const offers = [
  {
    icon: '🔄',
    title: 'Weekly Mowing',
    description: 'Consistent, professional mowing on a schedule that works for you. We use quality equipment and proper height settings for a clean cut.',
  },
  {
    icon: '✂️',
    title: 'Edging & Trimming',
    description: 'Crisp edges along walks and beds, plus trimming around obstacles so your lawn looks manicured and intentional.',
  },
  {
    icon: '🧪',
    title: 'Fertilization Programs',
    description: 'Seasonal feeding tailored to West Michigan soils. We strengthen roots and color so your grass stays green and resilient.',
  },
  {
    icon: '🌿',
    title: 'Weed Control',
    description: 'Targeted treatments to reduce broadleaf weeds and crabgrass without harming your lawn. Pre- and post-emergent options.',
  },
  {
    icon: '🕳️',
    title: 'Aeration',
    description: 'Core aeration relieves compaction, improves drainage, and helps fertilizer and water reach the root zone.',
  },
  {
    icon: '🌱',
    title: 'Overseeding',
    description: 'Fill thin spots and improve density with quality seed. We pair it with aeration for best germination and establishment.',
  },
];

const processSteps = [
  { step: 1, title: 'Consultation', description: 'We walk your property, discuss your goals, and identify any problem areas or special requests.' },
  { step: 2, title: 'Custom Plan', description: 'We recommend a mowing schedule plus optional fertilization, weed control, aeration, and overseeding.' },
  { step: 3, title: 'Ongoing Service', description: 'Our crew arrives on schedule. Same team when possible so we know your property.' },
  { step: 4, title: 'Seasonal Care', description: 'We adjust mowing frequency and treatments through the season and offer spring/fall cleanups.' },
];

const whyChoose = [
  { title: 'Reliable Scheduling', description: 'We show up when we say we will. Consistent visits mean a lawn that always looks cared for.' },
  { title: 'Proven Programs', description: 'Fertilization and weed control programs built on years of experience in West Michigan conditions.' },
  { title: 'Quality Results', description: 'Sharp mowing, clean edges, and treatments that deliver visible improvement over the season.' },
  { title: 'One Team for Everything', description: 'Lawn care, cleanups, and landscape needs—one company, one point of contact.' },
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=600&fit=crop', alt: 'Healthy green lawn' },
  { src: 'https://images.unsplash.com/photo-1558904541-efa84396aec2?w=800&h=600&fit=crop', alt: 'Lawn mowing service' },
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop', alt: 'Manicured residential lawn' },
  { src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop', alt: 'Lawn and landscape' },
  { src: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&h=600&fit=crop', alt: 'Fertilized lawn' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop', alt: 'Residential yard care' },
];

export default function LawnCarePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32">

        {/* Hero: title, tagline, background image only — no floating decorative elements */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=1920&h=1080&fit=crop"
              alt="Lawn care"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-forest-900/60" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
              Lawn Care & Maintenance
            </h1>
            <p className="text-xl sm:text-2xl text-sage-100 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Keep your lawn lush, green, and healthy all season with professional mowing, feeding, and care.
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
              Lawn Care Services
            </h2>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto">
              From weekly mowing to full programs—we keep your yard looking its best.
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
              Simple, reliable lawn care tailored to your property and schedule.
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
              Why Choose Aesthetic Gardener for Lawn Care
            </h2>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto">
              Dependable service and results you can see.
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
              Lawn Care Results
            </h2>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto">
              Healthy, well-maintained lawns we’re proud to care for.
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
            Lawn size, frequency, and add-ons vary. We’ll give you a clear quote for mowing and any programs you want.
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
