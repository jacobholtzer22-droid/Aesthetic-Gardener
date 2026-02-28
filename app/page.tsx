import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesIntro from '@/components/ServicesIntro';
import Footer from '@/components/Footer';

const HomeGalleryTeaser = dynamic(() => import('@/components/HomeGalleryTeaser'), { ssr: true });
const HomeWhyChooseUs = dynamic(() => import('@/components/HomeWhyChooseUs'), { ssr: true });
const HomeCTA = dynamic(() => import('@/components/HomeCTA'), { ssr: true });

export const metadata: Metadata = {
  title: 'Professional Landscaping & Lawn Care | Holland MI',
  description:
    'Transform your outdoor space with expert landscaping, lawn care, snow removal, and hardscaping. Serving Holland, Zeeland, and West Michigan since 2004. Free quotes.',
  openGraph: {
    title: 'Aesthetic Gardener | Professional Landscaping & Lawn Care | Holland MI',
    description:
      'Transform your outdoor space with expert landscaping, lawn care, snow removal, and hardscaping. Serving Holland and West Michigan since 2004.',
    url: '/',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ServicesIntro
        sectionLabel="What We Do"
        heading="What We Do"
        description="From design to maintenance, we offer comprehensive landscaping services tailored to your vision and lifestyle."
      />
      <HomeGalleryTeaser />
      <HomeWhyChooseUs />
      <HomeCTA />
      <Footer />
    </main>
  );
}
