import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CurveDivider from '@/components/CurveDivider';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of service for Aesthetic Gardener landscaping website. Read our terms governing the use of our website and services in Holland MI and West Michigan.',
  robots: { index: true, follow: true },
};

export default function TermsPage() {
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
            Terms of Service
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
              <h2 className="font-display text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p className="leading-relaxed">
                By accessing and using the Aesthetic Gardener website (aestheticgardener.net), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Our Services</h2>
              <p className="leading-relaxed">
                Aesthetic Gardener provides professional landscaping, lawn care, snow removal, and hardscaping services in Holland, Michigan and surrounding West Michigan communities. Our website is intended to provide information about our services and to facilitate contact and quote requests. The specifics of any project—including scope, pricing, and timeline—are governed by separate written agreements or estimates provided to you.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Quotes and Estimates</h2>
              <p className="leading-relaxed">
                Quotes and estimates provided through our website or by phone, email, or in person are subject to verification. Final pricing may vary based on site conditions, project scope changes, or other factors. A formal written estimate or contract will be provided before work begins on projects.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Website Content</h2>
              <p className="leading-relaxed">
                The content on this website—including text, images, logos, and design—is owned by Aesthetic Gardener and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use our content for commercial purposes without our written permission.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Accuracy of Information</h2>
              <p className="leading-relaxed">
                We strive to keep the information on our website accurate and up to date. However, we do not warrant that all information is complete, current, or error-free. Service descriptions, pricing, and availability are subject to change without notice.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="leading-relaxed">
                Aesthetic Gardener and its owners, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or any services. Our liability for any claim related to the use of this website shall not exceed the amount you paid for our services, if any.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Links to Third-Party Sites</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the content or practices of these external sites. Linking to another site does not imply endorsement by Aesthetic Gardener.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Modifications</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to this page with an updated &quot;Last updated&quot; date. Your continued use of the website after changes constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of Michigan, without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <p className="mt-4 text-gray-400">
                Aesthetic Gardener<br />
                176 E 40th St, Holland, MI 49423<br />
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
