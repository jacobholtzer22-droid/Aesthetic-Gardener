import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Gallery | Aesthetic Gardener',
  description:
    'Browse our portfolio of landscaping, hardscaping, and lawn care projects across Holland and West Michigan.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
