import type { Metadata } from 'next';
import Header from '@/components/Header';
import CurveDivider from '@/components/CurveDivider';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Aesthetic Gardener',
  description:
    'Learn about Aesthetic Gardener—crafting outdoor excellence across West Michigan since 2004. Our story, mission, and why clients trust us.',
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
  },
  {
    icon: '🤝',
    title: 'Lasting Relationships',
    description: 'Every customer is more than a transaction. We build relationships that last.',
  },
  {
    icon: '⏰',
    title: 'Your Time Matters',
    description: 'We give you the gift of time to enjoy family, friends, and life.',
  },
  {
    icon: '🛡️',
    title: 'Complete Confidence',
    description: 'Licensed, insured, and backed by 21+ years of trusted service.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-50 via-sage-50 to-earth-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-forest-200/30 blob float" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-sage-200/30 blob"
          style={{ animationDelay: '2s' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-up order-2 lg:order-1">
              <span className="inline-block bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-semibold">
                About Us
              </span>
              <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-forest-900 leading-tight">
                About Aesthetic Gardener
              </h1>
              <p className="text-xl text-sage-700 leading-relaxed">
                Crafting outdoor excellence across West Michigan since 2004. We bring
                vision, quality, and care to every landscape we touch.
              </p>
            </div>
            <div className="relative animate-slide-in-right stagger-2 order-1 lg:order-2">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=700&h=800&fit=crop"
                  alt="About Aesthetic Gardener"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
              </div>
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-forest-200/50 blob" />
            </div>
          </div>
        </div>

        <CurveDivider position="bottom" fillClass="fill-white" />
      </section>

      {/* Company story */}
      <section className="relative py-24 bg-white overflow-hidden">
        <CurveDivider position="top" fillClass="fill-white" />
        <div className="absolute top-32 right-0 w-64 h-64 bg-sage-200/30 blob" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Story
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-forest-900 mb-10">
            In Business Since 2004
          </h2>
          <div className="space-y-6 text-lg text-sage-700 leading-relaxed">
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

        <CurveDivider position="bottom" fillClass="fill-sage-50" />
      </section>

      {/* Our Mission */}
      <section className="relative py-24 bg-sage-50 overflow-hidden">
        <CurveDivider position="top" fillClass="fill-sage-50" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-forest-200/30 blob" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            What We Stand For
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-forest-900 mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-sage-700 leading-relaxed max-w-3xl mx-auto">
            To create and maintain outdoor spaces that enhance quality of life, reflect
            our clients&apos; vision, and stand the test of time—through consistent quality,
            honest communication, and a commitment to treating every property and every
            person with respect and care.
          </p>
        </div>

        <CurveDivider position="bottom" fillClass="fill-white" />
      </section>

      {/* Why Choose Us - 4 value cards */}
      <section className="relative py-24 bg-white overflow-hidden">
        <CurveDivider position="top" fillClass="fill-white" />
        <div className="absolute top-24 right-10 w-48 h-48 bg-forest-200/40 blob" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-forest-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto">
              Experience the difference quality and trust can make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-forest-100 to-sage-100 rounded-3xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                  <span className="text-4xl">{value.icon}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-forest-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sage-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <CurveDivider position="bottom" fillClass="fill-forest-50" />
      </section>

      {/* Team section - placeholder */}
      <section className="relative py-24 bg-forest-50 overflow-hidden">
        <CurveDivider position="top" fillClass="fill-forest-50" />
        <div className="absolute bottom-16 right-10 w-56 h-56 bg-sage-200/40 blob" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            The People Behind the Work
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-forest-900 mb-6">
            Our Team
          </h2>
          <p className="text-xl text-sage-700 max-w-2xl mx-auto mb-12">
            Meet the dedicated professionals who bring your outdoor vision to life.
          </p>
          <div className="rounded-3xl bg-white/60 border-2 border-forest-200 border-dashed py-16 px-8 max-w-2xl mx-auto">
            <p className="text-sage-600 font-medium">
              Team section coming soon. We&apos;re proud of our experienced crew and look
              forward to introducing them here.
            </p>
          </div>
        </div>

        <CurveDivider position="bottom" fillClass="fill-white" />
      </section>

      {/* Client testimonials - 6 */}
      <section className="relative py-24 bg-white overflow-hidden">
        <CurveDivider position="top" fillClass="fill-white" />
        <div className="absolute top-32 left-10 w-40 h-40 bg-sage-200/30 blob" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Client Reviews
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-forest-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-sage-700">
              See why we&apos;ve been Holland&apos;s trusted landscapers for 21+ years
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-sage-50 to-white rounded-3xl p-8 shadow-lg card-hover"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-2xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-sage-700 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="font-semibold text-forest-900">{testimonial.author}</div>
              </div>
            ))}
          </div>
        </div>

        <CurveDivider position="bottom" fillClass="fill-forest-700" />
      </section>

      {/* CTA section */}
      <section className="relative py-24 bg-gradient-to-br from-forest-700 to-forest-800 overflow-hidden">
        <CurveDivider position="top" fillClass="fill-forest-700" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-xl text-sage-200 mb-10 max-w-2xl mx-auto">
            Explore our services or get in touch for a free quote. We&apos;re here to
            bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white text-forest-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-sage-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View Our Services
              <svg
                className="w-5 h-5"
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
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Get a Free Quote
              <svg
                className="w-5 h-5"
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
