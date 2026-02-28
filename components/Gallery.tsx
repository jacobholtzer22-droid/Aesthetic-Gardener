import Link from 'next/link';
import Image from 'next/image';
import { BLUR_DATA_URL } from '@/lib/image-utils';

export default function Gallery() {
  const projects = [
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
    {
      url: '/images/client/gardening.JPG',
      title: 'Front Yard Flower Beds',
      category: 'Landscaping',
    },
    {
      url: '/images/client/patiobricking4.JPG',
      title: 'Terraced Retaining Walls',
      category: 'Hardscaping',
    },
  ];

  return (
    <section id="gallery" className="relative py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block bg-accent/10 text-accent-light px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">
            Transformed Landscapes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped homeowners across West Michigan create their dream
            outdoor spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl shadow-lg shadow-black/30 card-hover animate-fade-in stagger-${
                (index % 6) + 1
              }`}
              style={{
                gridRow: index === 0 || index === 2 ? 'span 2' : 'span 1',
              }}
            >
              <Image
                src={project.url}
                alt={`${project.title} - ${project.category} by Aesthetic Gardener Holland MI`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/gallery"
            className="inline-block bg-accent text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent-light hover:shadow-2xl hover:shadow-accent/20 hover:scale-105 transition-all duration-300"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
