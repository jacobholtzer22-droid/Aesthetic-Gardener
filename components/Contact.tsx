'use client';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-forest-50 via-sage-50 to-earth-50 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-200/30 blob"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sage-200/30 blob" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-up">
            <span className="inline-block bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-semibold">
              Get In Touch
            </span>
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-forest-900">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-xl text-sage-700 leading-relaxed">
              Whether you need a full landscape overhaul or consistent lawn care, our
              team is ready to help. Get in touch today for a free, no-obligation quote.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-forest-500 to-forest-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-forest-900 mb-1">Phone</div>
                  <a href="tel:6162182698" className="text-lg text-sage-700 hover:text-forest-600 transition-colors">
                    (616) 218-2698
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-sage-500 to-sage-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-forest-900 mb-1">Email</div>
                  <a href="mailto:info@aestheticgardener.net" className="text-lg text-sage-700 hover:text-forest-600 transition-colors">
                    info@aestheticgardener.net
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-earth-500 to-earth-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-forest-900 mb-1">Location</div>
                  <div className="text-lg text-sage-700">
                    199 E 34th St #6<br />
                    Holland, Michigan 49423
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-forest-600 to-forest-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-forest-900 mb-1">Business Hours</div>
                  <div className="text-lg text-sage-700">
                    Mon - Fri: 8:00 AM - 5:00 PM<br />
                    Sat - Sun: Closed
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] shadow-2xl p-8 lg:p-12 animate-slide-in-right stagger-2">
            <h3 className="font-display text-3xl font-bold text-forest-900 mb-6">
              Get Your Free Quote
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sage-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full px-6 py-4 rounded-2xl border-2 border-sage-200 focus:border-forest-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sage-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl border-2 border-sage-200 focus:border-forest-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sage-700 font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="(616) 555-0123"
                  className="w-full px-6 py-4 rounded-2xl border-2 border-sage-200 focus:border-forest-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sage-700 font-medium mb-2">
                  Service Needed
                </label>
                <select className="w-full px-6 py-4 rounded-2xl border-2 border-sage-200 focus:border-forest-500 focus:outline-none transition-colors">
                  <option>Select a service...</option>
                  <option>Landscaping Design</option>
                  <option>Lawn Care & Maintenance</option>
                  <option>Snow Removal</option>
                  <option>Hardscaping</option>
                  <option>Not Sure / Multiple Services</option>
                </select>
              </div>

              <div>
                <label className="block text-sage-700 font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 rounded-2xl border-2 border-sage-200 focus:border-forest-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-forest-600 to-forest-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Request Free Quote
              </button>

              <p className="text-sm text-sage-600 text-center">
                This is a demo form. Actual form will be functional after project completion.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
