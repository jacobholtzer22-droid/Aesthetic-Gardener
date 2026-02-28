'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import CurveDivider from '@/components/CurveDivider';
import Footer from '@/components/Footer';
import { BLUR_DATA_URL } from '@/lib/image-utils';

type Category = 'All Projects' | 'Landscaping' | 'Hardscaping' | 'Lawn Care';

interface Project {
  id: number;
  url: string;
  title: string;
  category: 'Landscaping' | 'Hardscaping' | 'Lawn Care';
  description?: string;
  rowSpan?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    url: '/images/client/PAtiobricking3.JPG',
    title: 'Patio & Fire Pit',
    category: 'Hardscaping',
    description: 'Paver patio with built-in fire pit and retaining wall steps.',
    rowSpan: true,
  },
  {
    id: 2,
    url: '/images/client/gardenbricking2-2.JPG',
    title: 'Garden Landscape Design',
    category: 'Landscaping',
    description: 'Flagstone path with flowering shrubs and perennials.',
    rowSpan: false,
  },
  {
    id: 3,
    url: '/images/client/Patiowoodwalkway.jpg',
    title: 'Custom Wood Walkway',
    category: 'Hardscaping',
    description: 'Timber boardwalk with retaining wall and fern plantings.',
    rowSpan: true,
  },
  {
    id: 4,
    url: '/images/client/Freshmowedlawn.jpg',
    title: 'Professional Lawn Mowing',
    category: 'Lawn Care',
    description: 'Clean mowing stripes on a large residential property.',
    rowSpan: false,
  },
  {
    id: 5,
    url: '/images/client/gardening.JPG',
    title: 'Front Yard Flower Beds',
    category: 'Landscaping',
    description: 'Colorful annual and perennial beds along the walkway.',
    rowSpan: false,
  },
  {
    id: 6,
    url: '/images/client/patiobricking4.JPG',
    title: 'Terraced Retaining Walls',
    category: 'Hardscaping',
    description: 'Multi-level brick retaining walls with iron railing.',
    rowSpan: false,
  },
  {
    id: 7,
    url: '/images/client/gardenbricking2.JPG',
    title: 'Flagstone Garden Path',
    category: 'Landscaping',
    description: 'Natural stone path with bench and boulder accents.',
    rowSpan: true,
  },
  {
    id: 8,
    url: '/images/client/GeneralLawnlandscape.jpg',
    title: 'Lawn & Hedge Maintenance',
    category: 'Lawn Care',
    description: 'Arborvitae hedge with maintained lawn and rock border.',
    rowSpan: false,
  },
  {
    id: 9,
    url: '/images/client/drivewaybricking.JPG',
    title: 'Driveway & Landscape Borders',
    category: 'Hardscaping',
    description: 'Concrete and brick driveway with planting borders.',
    rowSpan: false,
  },
  {
    id: 10,
    url: '/images/client/BackyardFencingandcenterbrick.jpg',
    title: 'Backyard Fencing & Beds',
    category: 'Landscaping',
    description: 'Split-rail fence with center brick bed and gravel paths.',
    rowSpan: false,
  },
  {
    id: 11,
    url: '/images/client/patiobricking.jpg',
    title: 'Brick Patio Installation',
    category: 'Hardscaping',
    description: 'Herringbone brick patio with curved balustrade wall.',
    rowSpan: true,
  },
  {
    id: 12,
    url: '/images/client/generallawnlandscape2.jpg',
    title: 'Corner Lot Maintenance',
    category: 'Lawn Care',
    description: 'Arborvitae privacy screen with maintained lawn.',
    rowSpan: false,
  },
  {
    id: 13,
    url: '/images/client/Walkwaylandscapping.JPG',
    title: 'Walkway & Retaining Wall',
    category: 'Hardscaping',
    description: 'Stone steps with retaining wall and mulched beds.',
    rowSpan: false,
  },
  {
    id: 14,
    url: '/images/client/gardenbricking2-3.JPG',
    title: 'Residential Landscape',
    category: 'Landscaping',
    description: 'Front yard design with perennials and stone accents.',
    rowSpan: false,
  },
];

const TABS: Category[] = ['All Projects', 'Landscaping', 'Hardscaping', 'Lawn Care'];

const STAGGER_CLASSES = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5', 'stagger-6'] as const;

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<Category>('All Projects');

  const filteredProjects =
    activeFilter === 'All Projects'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24">
        <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/client/gardenbricking2-2.JPG" alt="Landscape design portfolio - Aesthetic Gardener Holland MI" fill sizes="100vw" className="object-cover" priority placeholder="blur" blurDataURL={BLUR_DATA_URL} />
            <div className="absolute inset-0 bg-black/80" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Page title & subtitle */}
            <div className="text-center mb-12 animate-slide-up">
              <span className="inline-block bg-accent/10 text-accent-light px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Portfolio
              </span>
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Work
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse our portfolio of completed projects
              </p>
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeFilter === tab
                      ? 'bg-accent text-white shadow-lg shadow-accent/25 scale-105'
                      : 'bg-[#1a1a1a] text-gray-300 border-2 border-white/10 hover:border-accent/40 hover:bg-[#1e1e1e]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Masonry-style grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-auto-rows-[minmax(260px,auto)]">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group relative overflow-hidden rounded-3xl shadow-lg shadow-black/30 card-hover animate-fade-in ${STAGGER_CLASSES[index % 6]} ${
                    project.rowSpan ? 'md:row-span-2' : ''
                  }`}
                >
                  <div
                    className={`relative w-full ${project.rowSpan ? 'h-full min-h-[420px]' : 'aspect-[4/3]'}`}
                  >
                    <Image
                      src={project.url}
                      alt={`${project.title} - ${project.category} project by Aesthetic Gardener Holland Michigan`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold mb-2 w-fit">
                          {project.category}
                        </span>
                        <h3 className="font-display text-2xl font-bold text-white mb-1">
                          {project.title}
                        </h3>
                        {project.description && (
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {project.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <p className="text-center text-gray-400 py-12">
                No projects in this category yet. Check back soon!
              </p>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
