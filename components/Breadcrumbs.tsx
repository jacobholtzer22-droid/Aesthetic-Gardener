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
      className="relative border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          <li>
            <Link
              href="/"
              className="text-gray-400 hover:text-accent-light transition-colors"
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
                <span className="text-gray-600" aria-hidden>
                  /
                </span>
                {isLast ? (
                  <span className="font-semibold text-white" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-accent-light transition-colors"
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
