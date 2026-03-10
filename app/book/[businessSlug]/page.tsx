import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingClient from './BookingClient';

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
    title: `Book an Appointment | ${business.name}`,
    description: `Schedule an appointment with ${business.name}.`,
  };
}

export default async function BookingPage({ params }: Props) {
  const { businessSlug } = await params;
  const business =
    BUSINESSES[businessSlug] ??
    Object.values(BUSINESSES)[0] ?? {
      name: 'Book an Appointment',
      brandColor: '#2563eb',
      slug: businessSlug,
    };

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <BookingClient business={business} />
      </section>
      <Footer />
    </main>
  );
}
