'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import CurveDivider from '@/components/CurveDivider';
import Footer from '@/components/Footer';

type Category = 'All Projects' | 'Landscaping' | 'Hardscaping' | 'Lawn Care';

interface Project {
  id: number;
  url: string;
  title: string;
  category: 'Landscaping' | 'Hardscaping' | 'Lawn Care';
  description?: string;
  rowSpan?: boolean; // for masonry-style tall cards
}

const PROJECTS: Project[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=600&h=800&fit=crop',
    title: 'Modern Patio Design',
    category: 'Hardscaping',
    description: 'Custom stone patio with integrated seating.',
    rowSpan: true,
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1599629954294-1470f0c6d14f?w=600&h=400&fit=crop',
    title: 'Lush Garden Paradise',
    category: 'Landscaping',
    description: 'Year-round color and texture.',
    rowSpan: false,
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?w=600&h=800&fit=crop',
    title: 'Custom Walkway',
    category: 'Hardscaping',
    description: 'Flagstone path through perennial borders.',
    rowSpan: true,
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop',
    title: 'Perfect Lawn Care',
    category: 'Lawn Care',
    description: 'Consistent mowing and edging program.',
    rowSpan: false,
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=600&fit=crop',
    title: 'Outdoor Living Space',
    category: 'Landscaping',
    description: 'Plantings and lighting for evening use.',
    rowSpan: false,
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=600&h=600&fit=crop',
    title: 'Stone Retaining Wall',
    category: 'Hardscaping',
    description: 'Natural stone wall with planting pockets.',
    rowSpan: false,
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&h=800&fit=crop',
    title: 'Backyard Garden Oasis',
    category: 'Landscaping',
    description: 'Layered beds and winding paths.',
    rowSpan: true,
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=600&h=400&fit=crop',
    title: 'Green Lawn Revival',
    category: 'Lawn Care',
    description: 'Aeration, seeding, and fertilization.',
    rowSpan: false,
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=600&fit=crop',
    title: 'Driveway Pavers',
    category: 'Hardscaping',
    description: 'Elegant paver driveway and apron.',
    rowSpan: false,
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=600&h=400&fit=crop',
    title: 'Shade Garden',
    category: 'Landscaping',
    description: 'Hostas, ferns, and woodland plants.',
    rowSpan: false,
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=800&fit=crop',
    title: 'Front Yard Makeover',
    category: 'Landscaping',
    description: 'Curb appeal with new beds and mulch.',
    rowSpan: true,
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=600&fit=crop',
    title: 'Seasonal Lawn Program',
    category: 'Lawn Care',
    description: 'Spring and fall treatments.',
    rowSpan: false,
  },
  {
    id: 13,
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
    title: 'Fire Pit & Seating',
    category: 'Hardscaping',
    description: 'Circular patio with built-in fire feature.',
    rowSpan: false,
  },
  {
    id: 14,
    url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=600&fit=crop',
    title: 'Native Plant Garden',
    category: 'Landscaping',
    description: 'Low-maintenance native perennials.',
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
        <section className="relative py-24 bg-gradient-to-b from-sage-50/50 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Page title & subtitle */}
            <div className="text-center mb-12 animate-slide-up">
              <span className="inline-block bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Portfolio
              </span>
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-forest-900 mb-6">
                Our Work
              </h1>
              <p className="text-xl text-sage-700 max-w-3xl mx-auto">
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
                      ? 'bg-forest-600 text-white shadow-lg shadow-forest-600/25 scale-105'
                      : 'bg-white text-forest-700 border-2 border-forest-200 hover:border-forest-400 hover:bg-forest-50'
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
                  className={`group relative overflow-hidden rounded-3xl shadow-lg card-hover animate-fade-in ${STAGGER_CLASSES[index % 6]} ${
                    project.rowSpan ? 'md:row-span-2' : ''
                  }`}
                >
                  <div
                    className={`relative w-full ${project.rowSpan ? 'h-full min-h-[420px]' : 'aspect-[4/3]'}`}
                  >
                    <img
                      src={project.url}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block bg-forest-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2 w-fit">
                          {project.category}
                        </span>
                        <h3 className="font-display text-2xl font-bold text-white mb-1">
                          {project.title}
                        </h3>
                        {project.description && (
                          <p className="text-sage-200 text-sm leading-relaxed">
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
              <p className="text-center text-sage-600 py-12">
                No projects in this category yet. Check back soon!
              </p>
            )}
          </div>
          <CurveDivider position="bottom" fillClass="fill-forest-50" />
        </section>
      </div>
      <Footer />
    </main>
  );
}
