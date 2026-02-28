import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Gallery',
  description:
    'Browse our portfolio of landscaping, hardscaping, and lawn care projects in Holland MI and West Michigan. See patio installations, lawn care, and landscape design.',
  openGraph: {
    title: 'Aesthetic Gardener Project Gallery | Holland MI Landscaping',
    description:
      'Browse our portfolio of landscaping, hardscaping, and lawn care projects across Holland and West Michigan.',
    url: '/gallery',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
