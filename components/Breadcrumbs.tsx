'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ROUTE_LABELS: Record<string, string> = {
  services: 'Services',
  gallery: 'Gallery',
  about: 'About',
  contact: 'Contact',
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (!pathname || pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="relative border-b border-sage-200/60 bg-white/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          <li>
            <Link
              href="/"
              className="text-sage-600 hover:text-forest-600 transition-colors"
            >
              Home
            </Link>
          </li>
          {segments.map((segment, index) => {
            const href = '/' + segments.slice(0, index + 1).join('/');
            const label = ROUTE_LABELS[segment] ?? segment.charAt(0).toUpperCase() + segment.slice(1);
            const isLast = index === segments.length - 1;

            return (
              <li key={href} className="flex items-center gap-2">
                <span className="text-sage-400" aria-hidden>
                  /
                </span>
                {isLast ? (
                  <span className="font-semibold text-forest-900" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-sage-600 hover:text-forest-600 transition-colors"
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
