'use client';

import Link from 'next/link';

const galleryTeaser = [
  {
    url: '/images/client/PAtiobricking3.JPG',
    title: 'Patio & Fire Pit',
    category: 'Hardscaping',
  },
  {
    url: '/images/client/gardenbricking2-2.JPG',
    title: 'Garden Landscape Design',
    category: 'Landscaping',
  },
  {
    url: '/images/client/Patiowoodwalkway.jpg',
    title: 'Custom Wood Walkway',
    category: 'Hardscaping',
  },
  {
    url: '/images/client/Freshmowedlawn.jpg',
    title: 'Professional Lawn Mowing',
    category: 'Lawn Maintenance',
  },
];

export default function HomeGalleryTeaser() {
  return (
    <section className="relative py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <span className="inline-block bg-accent/10 text-accent-light px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">
            View Our Work
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we&apos;ve helped homeowners across West Michigan create their dream
            outdoor spaces.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {galleryTeaser.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg shadow-black/30 aspect-[3/4]"
            >
              <img
                src={project.url}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block bg-accent text-white px-2 py-1 rounded-full text-xs font-semibold mb-1">
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
            className="inline-block bg-accent text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent-light hover:shadow-2xl hover:shadow-accent/20 hover:scale-105 transition-all duration-300"
          >
            See Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
