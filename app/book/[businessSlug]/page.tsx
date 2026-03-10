import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BUSINESSES: Record<
  string,
  { name: string; brandColor: string; slug: string }
> = {
  'aesthetic-gardener': {
    name: 'Aesthetic Gardener',
    brandColor: '#22c55e',
    slug: 'aesthetic-gardener',
  },
  'mervin-aesthetic-gardener': {
    name: 'Aesthetic Gardener',
    brandColor: '#22c55e',
    slug: 'aesthetic-gardener',
  },
};

type Props = {
  params: Promise<{ businessSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { businessSlug } = await params;
  const business =
    BUSINESSES[businessSlug] ??
    Object.values(BUSINESSES)[0] ?? { name: 'Book an Appointment' };

  return {
    title: `Book an Appointment | Get a Quote | ${business.name}`,
    description: `Schedule with ${business.name}. Get a free quote for landscaping, lawn care, snow removal, or hardscaping in Holland MI and West Michigan.`,
    openGraph: {
      title: `Book | Get a Quote | ${business.name} | Holland MI`,
      description: `Get a free quote for landscaping, lawn care, snow removal, or hardscaping. Serving Holland, Zeeland, Grand Haven, and West Michigan.`,
      url: `/book/${businessSlug}`,
    },
  };
}

export default async function BookingPage({ params }: Props) {
  const { businessSlug } = await params;
  const business =
    BUSINESSES[businessSlug] ??
    Object.values(BUSINESSES)[0] ?? {
      name: 'Aesthetic Gardener',
      brandColor: '#22c55e',
      slug: businessSlug,
    };

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Book an Appointment
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Get a free, no-obligation quote from {business.name}. We’ll respond quickly to schedule a time that works for you.
          </p>
          <Link
            href="/contact#quote-form"
            className="inline-flex items-center justify-center rounded-2xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-light transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
