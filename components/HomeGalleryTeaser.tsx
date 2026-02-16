'use client';

import Link from 'next/link';

const galleryTeaser = [
  {
    url: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=600&h=800&fit=crop',
    title: 'Modern Patio Design',
    category: 'Hardscaping',
  },
  {
    url: 'https://images.unsplash.com/photo-1599629954294-1470f0c6d14f?w=600&h=400&fit=crop',
    title: 'Lush Garden Paradise',
    category: 'Landscaping',
  },
  {
    url: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?w=600&h=800&fit=crop',
    title: 'Custom Walkway',
    category: 'Hardscaping',
  },
  {
    url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop',
    title: 'Perfect Lawn Care',
    category: 'Lawn Maintenance',
  },
];

export default function HomeGalleryTeaser() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-sage-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <span className="inline-block bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-forest-900 mb-6">
            View Our Work
          </h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            See how we&apos;ve helped homeowners across West Michigan create their dream
            outdoor spaces.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {galleryTeaser.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4]"
            >
              <img
                src={project.url}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block bg-forest-500 text-white px-2 py-1 rounded-full text-xs font-semibold mb-1">
                  {project.category}
                </span>
                <h3 className="font-display text-lg font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-block bg-gradient-to-r from-forest-600 to-forest-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            See Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
