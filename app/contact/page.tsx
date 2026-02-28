import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import CurveDivider from '@/components/CurveDivider';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { BLUR_DATA_URL } from '@/lib/image-utils';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get a free quote for landscaping, lawn care, snow removal, or hardscaping in Holland MI and West Michigan. Call (616) 218-2698 or request a quote online.',
  openGraph: {
    title: 'Contact Aesthetic Gardener | Free Quote | Holland MI',
    description:
      'Get a free quote for landscaping, lawn care, snow removal, or hardscaping. Serving Holland, Zeeland, Grand Haven, and West Michigan.',
    url: '/contact',
  },
};

const SERVICE_AREAS = [
  'Holland',
  'Zeeland',
  'Grand Haven',
  'Hudsonville',
  'Allendale',
  'Jenison',
  'Grandville',
  'Ottawa County',
  'Allegan County',
];

const FAQ_ITEMS = [
  {
    q: 'Do you offer free quotes?',
    a: 'Yes! We provide free, no-obligation quotes for all our services. Contact us with your project details and we\'ll schedule a time to discuss your needs and provide a fair estimate.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Holland, Zeeland, Grand Haven, Hudsonville, and surrounding West Michigan communities in Ottawa and Allegan counties. Not sure if you\'re in our area? Reach out and we\'ll let you know.',
  },
  {
    q: 'How soon can you start a project?',
    a: 'Timing depends on the season and type of work. We\'ll give you an estimated start date when we provide your quote. For lawn care and snow removal, we can often get you on the schedule within a week or two.',
  },
  {
    q: 'Do you do one-time projects or only ongoing contracts?',
    a: 'Both. We handle one-time landscape design and installation projects, spring/fall cleanups, and single-service requests, as well as ongoing lawn care and snow removal contracts. Tell us what you need and we\'ll tailor a plan.',
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Two-column contact section */}
      <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blob" />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 blob"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-48 h-48 bg-accent/5 blob"
          style={{ animationDelay: '4s' }}
        />

        <div className="absolute inset-0">
          <Image src="/images/client/heromain.jpg" alt="Contact Aesthetic Gardener for landscaping quotes in Holland Michigan" fill sizes="100vw" className="object-cover" priority placeholder="blur" blurDataURL={BLUR_DATA_URL} />
          <div className="absolute inset-0 bg-black/85" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left column */}
            <div className="space-y-8 animate-slide-up">
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-white">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Whether you need a full landscape overhaul or consistent lawn care, our
                team is ready to help. Get in touch today for a free, no-obligation quote.
              </p>

              {/* Contact info cards */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Phone</div>
                    <a href="tel:6162182698" className="text-lg text-gray-300 hover:text-accent-light transition-colors">
                      (616) 218-2698
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Email</div>
                    <a href="mailto:info@aestheticgardener.net" className="text-lg text-gray-300 hover:text-accent-light transition-colors">
                      info@aestheticgardener.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Address</div>
                    <div className="text-lg text-gray-300">
                      199 E 34th St #6<br />
                      Holland, Michigan 49423
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Hours</div>
                    <div className="text-lg text-gray-300">
                      Mon - Fri: 8:00 AM - 5:00 PM<br />
                      Sat - Sun: Closed
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-[2rem] overflow-hidden shadow-xl border-2 border-white/10">
                <iframe
                  src="https://www.google.com/maps?q=199+E+34th+St,+Holland,+MI+49423&output=embed"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aesthetic Gardener location"
                  className="w-full"
                />
              </div>
            </div>

            {/* Right column: Contact form */}
            <div id="quote-form" className="bg-[#1a1a1a] rounded-[3rem] shadow-2xl shadow-black/40 p-8 lg:p-12 border border-white/10 animate-slide-in-right stagger-2 scroll-mt-28">
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Get Your Free Quote
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
        <CurveDivider position="bottom" fillClass="fill-[#111111]" />
      </section>

      {/* Service Areas */}
      <section className="relative py-24 bg-[#111111] overflow-hidden">
        <CurveDivider position="top" fillClass="fill-[#111111]" />
        <div className="absolute top-10 left-0 w-64 h-64 bg-accent/5 blob" />

        <div className="absolute inset-0">
          <Image src="/images/client/Freshmowedlawn.jpg" alt="Lawn care service areas - West Michigan communities" fill sizes="100vw" className="object-cover" loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
          <div className="absolute inset-0 bg-black/85" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-white text-center mb-4">
            Service Areas
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Proudly serving West Michigan communities. We&apos;re based in Holland and travel throughout the region.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="inline-block bg-[#1a1a1a] text-accent-light px-5 py-2.5 rounded-full text-sm font-medium border border-white/10"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
        <CurveDivider position="bottom" fillClass="fill-[#0a0a0a]" />
      </section>

      {/* FAQ */}
      <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
        <CurveDivider position="top" fillClass="fill-[#0a0a0a]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 blob" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-4 gap-3 mb-12">
            {[
              { src: '/images/client/PAtiobricking3.JPG', alt: 'Patio and fire pit hardscaping - Holland MI' },
              { src: '/images/client/gardening.JPG', alt: 'Garden landscaping - West Michigan' },
              { src: '/images/client/Freshmowedlawn.jpg', alt: 'Professional lawn mowing Holland Michigan' },
              { src: '/images/client/patiobricking.jpg', alt: 'Brick patio installation Aesthetic Gardener' },
            ].map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden relative">
                <Image src={img.src} alt={img.alt} fill sizes="25vw" className="object-cover" loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="bg-[#1a1a1a] backdrop-blur rounded-[2rem] p-6 lg:p-8 shadow-lg border border-white/10"
              >
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {item.q}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
