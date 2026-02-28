import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CurveDivider from '@/components/CurveDivider';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for Aesthetic Gardener. Learn how we collect, use, and protect your information when you contact us for landscaping services in Holland MI.',
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 blob" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-accent/10 text-accent-light px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Legal
          </span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated: February 28, 2025
          </p>
        </div>
        <CurveDivider position="bottom" fillClass="fill-[#111111]" />
      </section>

      {/* Content */}
      <section className="relative py-20 bg-[#111111] overflow-hidden">
        <CurveDivider position="top" fillClass="fill-[#111111]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none space-y-10 text-gray-300">
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="leading-relaxed">
                When you contact us through our website—including our contact form or quote request—we may collect:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Project details, property address, and other information you choose to provide</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="leading-relaxed">
                We use the information you provide solely to respond to your inquiries, provide quotes, schedule services, and communicate with you about your landscaping, lawn care, snow removal, or hardscaping projects. We do not use your information for marketing purposes unless you have given us explicit permission to do so.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Sharing and Third Parties</h2>
              <p className="leading-relaxed">
                We do not sell, rent, or share your personal information with third parties for their marketing purposes. We may share your information only when necessary to provide our services (for example, with subcontractors on your project with your consent) or when required by law.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="leading-relaxed">
                We take reasonable steps to protect your personal information from unauthorized access, loss, or misuse. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Your Rights and Data Deletion</h2>
              <p className="leading-relaxed">
                You have the right to request access to the personal data we hold about you, to request correction of inaccurate data, and to request deletion of your data. To make such a request, please contact us at{' '}
                <a href="mailto:info@aestheticgardener.net" className="text-accent-light hover:text-accent transition-colors">
                  info@aestheticgardener.net
                </a>
                {' '}or call us at{' '}
                <a href="tel:6162182698" className="text-accent-light hover:text-accent transition-colors">
                  (616) 218-2698
                </a>
                . We will respond to your request in a timely manner.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top of this page indicates when the policy was last revised. We encourage you to review this page periodically for any changes.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy or our practices, please contact us:
              </p>
              <p className="mt-4 text-gray-400">
                Aesthetic Gardener<br />
                199 E 34th St #6, Holland, MI 49423<br />
                Phone: (616) 218-2698<br />
                Email: info@aestheticgardener.net
              </p>
            </div>
          </div>
        </div>
        <CurveDivider position="bottom" fillClass="fill-[#0a0a0a]" />
      </section>

      {/* Back link */}
      <section className="relative py-12 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent-light hover:text-accent transition-colors font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
