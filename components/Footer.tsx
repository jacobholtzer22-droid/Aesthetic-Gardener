import Link from 'next/link';
import Image from 'next/image';
import { BLUR_DATA_URL } from '@/lib/image-utils';
import { GOOGLE_REVIEW_URL } from '@/lib/testimonials';

export default function Footer() {
  return (
    <footer className="relative bg-[#111111] text-white border-t border-white/10">
      <div className="grid grid-cols-6 lg:grid-cols-12 gap-0">
        {[
          { src: '/images/client/PAtiobricking3.JPG', alt: 'Paver patio with fire pit - Aesthetic Gardener Holland MI' },
          { src: '/images/client/gardening.JPG', alt: 'Garden landscaping design - Holland Michigan' },
          { src: '/images/client/Freshmowedlawn.jpg', alt: 'Professional lawn mowing - West Michigan lawn care' },
          { src: '/images/client/patiobricking.jpg', alt: 'Brick patio installation - Aesthetic Gardener' },
          { src: '/images/client/gardenbricking2-2.JPG', alt: 'Garden landscape with flagstone - Holland MI' },
          { src: '/images/client/Patiowoodwalkway.jpg', alt: 'Wood walkway landscaping - West Michigan' },
          { src: '/images/client/drivewaybricking.JPG', alt: 'Driveway hardscaping - Aesthetic Gardener' },
          { src: '/images/client/patiobricking4.JPG', alt: 'Terraced retaining walls - Holland MI landscaping' },
          { src: '/images/client/heromain.jpg', alt: 'Landscaping services Holland Michigan' },
          { src: '/images/client/BackyardFencingandcenterbrick.jpg', alt: 'Backyard landscaping with fencing' },
          { src: '/images/client/Walkwaylandscapping.JPG', alt: 'Walkway and retaining wall - West Michigan' },
          { src: '/images/client/generallawnlandscape2.jpg', alt: 'Lawn care and landscape maintenance' },
        ].map((img, i) => (
          <div key={i} className="aspect-[3/2] overflow-hidden relative">
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 1024px) 33vw, 8vw" className="object-cover opacity-40 hover:opacity-70 transition-opacity duration-300" loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
          </div>
        ))}
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/logo.png"
                alt="Aesthetic Gardener - Professional landscaping Holland Michigan"
                width={192}
                height={128}
                quality={95}
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="text-xl font-display font-bold">Aesthetic Gardener</h3>
                <p className="text-xs text-gray-500">Holland, Michigan</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Crafting beautiful outdoor spaces across West Michigan for over 21 years.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/landscaping-design" className="text-gray-400 hover:text-accent-light transition-colors">
                  Landscaping Design
                </Link>
              </li>
              <li>
                <Link href="/services/lawn-care" className="text-gray-400 hover:text-accent-light transition-colors">
                  Lawn Care & Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/snow-removal" className="text-gray-400 hover:text-accent-light transition-colors">
                  Snow Removal
                </Link>
              </li>
              <li>
                <Link href="/services/hardscaping" className="text-gray-400 hover:text-accent-light transition-colors">
                  Hardscaping
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-accent-light transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-light transition-colors inline-flex items-center gap-2"
                >
                  ⭐ Leave a Review
                </a>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-accent-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-accent-light transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-accent-light transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-accent-light transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact#quote-form" className="text-gray-400 hover:text-accent-light transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>(616) 218-2698</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@aestheticgardener.net</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>
                  176 E 40th St<br />
                  Holland, MI 49423
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Aesthetic Gardener. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-accent-light transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-accent-light transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-4 w-full">
            Website by{' '}
            <a
              href="https://alignandacquire.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-accent-light transition-colors"
            >
              Align and Acquire
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
