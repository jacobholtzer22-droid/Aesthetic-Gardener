import Link from 'next/link';

interface ServiceBreadcrumbsProps {
  serviceName: string;
}

export default function ServiceBreadcrumbs({ serviceName }: ServiceBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex flex-wrap items-center gap-x-2 text-sm text-gray-400">
          <li>
            <Link
              href="/"
              className="hover:text-accent-light transition-colors"
            >
              Home
            </Link>
          </li>
          <li className="flex items-center gap-x-2" aria-hidden>
            <span>›</span>
            <Link
              href="/services"
              className="hover:text-accent-light transition-colors"
            >
              Our Services
            </Link>
          </li>
          <li className="flex items-center gap-x-2" aria-current="page">
            <span>›</span>
            <span className="text-gray-300 font-medium">{serviceName}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
