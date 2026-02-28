import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import CurveDivider from '@/components/CurveDivider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { BLUR_DATA_URL } from '@/lib/image-utils';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Aesthetic Gardener has been crafting outdoor excellence across Holland MI and West Michigan since 2004. Learn our story, mission, and why clients trust us for landscaping.',
  openGraph: {
    title: 'About Aesthetic Gardener | 21+ Years in Holland MI',
    description:
      'Learn about Aesthetic Gardener—crafting outdoor excellence across West Michigan since 2004. Our story, mission, and why clients trust us.',
    url: '/about',
  },
};

const testimonials = [
  {
    text: 'They transformed our backyard into an absolute paradise. The attention to detail and professionalism was outstanding!',
    author: 'Sarah M.',
    rating: 5,
  },
  {
    text: 'Best landscaping company in West Michigan! They handle everything from lawn care to snow removal. Highly recommend!',
    author: 'Mike P.',
    rating: 5,
  },
  {
    text: 'Our new patio exceeded all expectations. The team was friendly, efficient, and truly cared about the results.',
    author: 'Jennifer L.',
    rating: 5,
  },
  {
    text: 'We\'ve used Aesthetic Gardener for years. Consistent quality, fair pricing, and they always show up when they say they will.',
    author: 'David R.',
    rating: 5,
  },
  {
    text: 'From the initial design to the final planting, every step was professional. Our neighbors ask who did our landscape!',
    author: 'Lisa K.',
    rating: 5,
  },
  {
    text: 'Snow removal is prompt and thorough. Lawn care keeps our yard looking like a magazine. Couldn\'t ask for more.',
    author: 'Tom & Nancy W.',
    rating: 5,
  },
];

const values = [
  {
    icon: '⭐',
    title: 'Superior Quality',
    description: 'We specialize in crafting landscapes that stand out and stand the test of time.',
    image: '/images/client/PAtiobricking3.JPG',
  },
  {
    icon: '🤝',
    title: 'Lasting Relationships',
    description: 'Every customer is more than a transaction. We build relationships that last.',
    image: '/images/client/gardenbricking2-2.JPG',
  },
  {
    icon: '⏰',
    title: 'Your Time Matters',
    description: 'We give you the gift of time to enjoy family, friends, and life.',
    image: '/images/client/Freshmowedlawn.jpg',
  },
  {
    icon: '🛡️',
    title: 'Complete Confidence',
    description: 'Licensed, insured, and backed by 21+ years of trusted service.',
    image: '/images/client/patiobricking4.JPG',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-28">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 blob float" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 blob"
          style={{ animationDelay: '2s' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-up order-2 lg:order-1">
              <span className="inline-block bg-accent/10 text-accent-light px-4 py-2 rounded-full text-sm font-semibold">
                About Us
              </span>
              <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                About Aesthetic Gardener
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Crafting outdoor excellence across West Michigan since 2004. We bring
                vision, quality, and care to every landscape we touch.
              </p>
            </div>
            <div className="relative animate-slide-in-right stagger-2 order-1 lg:order-2">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-black/40 h-[500px] lg:h-[600px]">
                <Image
                  src="/images/client/gardenbricking2-2.JPG"
                  alt="Professional landscaping and garden design by Aesthetic Gardener in Holland Michigan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-accent/5 blob" />
            </div>
          </div>
        </div>

        <CurveDivider position="bottom" fillClass="fill-[#111111]" />
      </section>

      {/* Company story */}
      <section className="relative py-24 bg-[#111111] overflow-hidden">
        <CurveDivider position="top" fillClass="fill-[#111111]" />
        <div className="absolute top-32 right-0 w-64 h-64 bg-accent/5 blob" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-accent/10 text-accent-light px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Our Story
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-10">
                In Business Since 2004
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Aesthetic Gardener began over two decades ago with a simple belief: outdoor
                  spaces should be as thoughtfully designed and cared for as the homes they
                  surround. What started as a small operation in Holland, Michigan, has grown
                  into one of West Michigan&apos;s most trusted names in landscaping, lawn care,
                  and seasonal services.
                </p>
                <p>
                  We&apos;ve stayed true to our roots by putting quality and relationships first.
                  Every lawn we mow, every garden we plant, and every driveway we plow is
                  done with the same attention to detail we brought to day one. Our team
                  combines experience with a genuine love for the outdoors, so you get
                  results that last and service you can count on year after year.
                </p>
                <p>
                  Today we serve homeowners and businesses across the region with a full
                  range of services—from landscape design and hardscaping to routine
                  maintenance and snow removal. We&apos;re proud to have built lasting
                  relationships with hundreds of clients who trust us with their most
                  visible asset: their property.
                </p>
              </div>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/40 h-[500px]">
              <Image
                src="/images/client/Woodwalkwaybuild.JPG"
                alt="Wood walkway installation by Aesthetic Gardener - West Michigan landscaping"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
          </div>
        </div>

        <CurveDivider position="bottom" fillClass="fill-[#1a1a1a]" />
      </section>

      {/* Our Mission */}
      <section className="relative py-24 bg-[#1a1a1a] overflow-hidden">
        <CurveDivider position="top" fillClass="fill-[#1a1a1a]" />
        <div className="absolute inset-0">
          <Image src="/images/client/gardenbricking2.JPG" alt="Garden landscape design and flagstone path - Holland MI" fill sizes="100vw" className="object-cover" loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-accent/10 text-accent-light px-4 py-2 rounded-full text-sm font-semibold mb-6">
            What We Stand For
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            To create and maintain outdoor spaces that enhance quality of life, reflect
            our clients&apos; vision, and stand the test of time—through consistent quality,
            honest communication, and a commitment to treating every property and every
            person with respect and care.
          </p>
        </div>

        <CurveDivider position="bottom" fillClass="fill-[#0a0a0a]" />
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
        <CurveDivider position="top" fillClass="fill-[#0a0a0a]" />
        <div className="absolute top-24 right-10 w-48 h-48 bg-accent/5 blob" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the difference quality and trust can make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl shadow-lg group text-center animate-fade-in aspect-[4/3]"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <Image src={value.image} alt={`${value.title} - Aesthetic Gardener Holland MI`} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-300" />
                <div className="relative p-6">
                  <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                    <span className="text-4xl">{value.icon}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CurveDivider position="bottom" fillClass="fill-[#111111]" />
      </section>

      {/* Team section */}
      <section className="relative py-24 bg-[#111111] overflow-hidden">
        <CurveDivider position="top" fillClass="fill-[#111111]" />
        <div className="absolute bottom-16 right-10 w-56 h-56 bg-accent/5 blob" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-accent/10 text-accent-light px-4 py-2 rounded-full text-sm font-semibold mb-6">
            The People Behind the Work
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Meet the dedicated professionals who bring your outdoor vision to life.
          </p>
          <div className="rounded-3xl bg-[#1a1a1a] border-2 border-white/10 border-dashed py-16 px-8 max-w-2xl mx-auto">
            <p className="text-gray-400 font-medium">
              Team section coming soon. We&apos;re proud of our experienced crew and look
              forward to introducing them here.
            </p>
          </div>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-2 mt-12 max-w-4xl mx-auto">
            {[
              { src: '/images/client/PAtiobricking3.JPG', alt: 'Patio hardscaping - Aesthetic Gardener team' },
              { src: '/images/client/gardening.JPG', alt: 'Garden design Holland Michigan' },
              { src: '/images/client/Freshmowedlawn.jpg', alt: 'Lawn care West Michigan' },
              { src: '/images/client/patiobricking.jpg', alt: 'Brick patio installation' },
              { src: '/images/client/gardenbricking2-2.JPG', alt: 'Landscape design project' },
              { src: '/images/client/Patiowoodwalkway.jpg', alt: 'Wood walkway construction' },
              { src: '/images/client/drivewaybricking.JPG', alt: 'Driveway hardscaping' },
              { src: '/images/client/patiobricking4.JPG', alt: 'Retaining wall installation' },
            ].map((img, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden relative">
                <Image src={img.src} alt={img.alt} fill sizes="12vw" className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
              </div>
            ))}
          </div>
        </div>

        <CurveDivider position="bottom" fillClass="fill-[#0a0a0a]" />
      </section>

      {/* Client testimonials */}
      <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
        <CurveDivider position="top" fillClass="fill-[#0a0a0a]" />
        <div className="absolute top-32 left-10 w-40 h-40 bg-accent/5 blob" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-accent-light px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Client Reviews
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300">
              See why we&apos;ve been Holland&apos;s trusted landscapers for 21+ years
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-3xl p-8 shadow-lg border border-white/10 card-hover"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-2xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="font-semibold text-white">{testimonial.author}</div>
              </div>
            ))}
          </div>
        </div>

        <CurveDivider position="bottom" fillClass="fill-[#1a1a1a]" />
      </section>

      {/* CTA section */}
      <section className="relative py-24 bg-[#1a1a1a] overflow-hidden">
        <CurveDivider position="top" fillClass="fill-[#1a1a1a]" />
        <div className="absolute inset-0">
          <Image src="/images/client/patiobricking2.jpg" alt="Brick patio and outdoor living space - Holland MI landscaping" fill sizes="100vw" className="object-cover" loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Explore our services or get in touch for a free quote. We&apos;re here to
            bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-light hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/20"
            >
              View Our Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact#quote-form"
              className="inline-flex items-center gap-2 border-2 border-accent text-accent-light px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/10 transition-all duration-300"
            >
              Get a Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
