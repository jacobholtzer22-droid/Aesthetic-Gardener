import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesIntro from '@/components/ServicesIntro';
import HomeGalleryTeaser from '@/components/HomeGalleryTeaser';
import HomeWhyChooseUs from '@/components/HomeWhyChooseUs';
import HomeCTA from '@/components/HomeCTA';
import Footer from '@/components/Footer';

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
