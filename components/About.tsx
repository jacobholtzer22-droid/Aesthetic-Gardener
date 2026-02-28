import Link from 'next/link';
import Image from 'next/image';
import { BLUR_DATA_URL } from '@/lib/image-utils';
import { testimonials as allTestimonials, GOOGLE_REVIEW_URL } from '@/lib/testimonials';

export default function About() {
  const testimonials = allTestimonials.slice(0, 3);

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

  return (
    <section id="about" className="relative py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative animate-slide-up">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-black/40 h-[600px]">
              <Image
                src="/images/client/gardenbricking2-2.JPG"
                alt="Professional landscaping and garden design by Aesthetic Gardener Holland Michigan"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-accent/5 blob"></div>
          </div>

          <div className="space-y-6 animate-slide-in-right stagger-2">
            <span className="inline-block bg-accent/10 text-accent-light px-4 py-2 rounded-full text-sm font-semibold">
              About Us
            </span>
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-white">
              Crafting Outdoor Excellence Since 2004
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              For over two decades, Aesthetic Gardener has been transforming outdoor
              spaces across West Michigan. We're passionate about delivering
              exceptional quality and unmatched customer service.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From simple lawn maintenance to complete landscape makeovers, we treat
              every project as a masterpiece in the making. Our commitment to superior
              results and lasting relationships has made us Holland's most trusted
              landscaping partner.
            </p>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-block bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-light hover:shadow-2xl hover:shadow-accent/20 hover:scale-105 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="font-display text-4xl font-bold text-white mb-4">
              Why Choose Us
            </h3>
            <p className="text-xl text-gray-300">
              Experience the difference quality and trust can make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`text-center animate-fade-in stagger-${index + 1}`}
              >
                <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                  <span className="text-4xl">{value.icon}</span>
                </div>
                <h4 className="font-display text-xl font-bold text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block bg-accent/10 text-accent-light px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Client Reviews
            </span>
            <h3 className="font-display text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h3>
            <p className="text-xl text-gray-300">
              See why we've been Holland's trusted landscapers for 21+ years
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-[#1a1a1a] rounded-3xl p-8 shadow-lg border border-white/10 card-hover animate-fade-in stagger-${
                  index + 1
                }`}
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
                <div className="font-semibold text-white">
                  {testimonial.author}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-accent/20 text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:border-accent/30 transition-all duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Leave a Review on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
