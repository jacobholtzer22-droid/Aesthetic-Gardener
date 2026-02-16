'use client';

export default function About() {
  const testimonials = [
    {
      text: 'They transformed our backyard into an absolute paradise. The attention to detail and professionalism was outstanding!',
      author: 'Sarah M.',
      rating: 5,
    },
    {
      text: 'Best landscaping company in West Michigan! They handle everything from lawn care to snow removal. Highly recommend!',
      author: 'Mike P.',
      rating: 5,
    },
    {
      text: 'Our new patio exceeded all expectations. The team was friendly, efficient, and truly cared about the results.',
      author: 'Jennifer L.',
      rating: 5,
    },
  ];

  const values = [
    {
      icon: '⭐',
      title: 'Superior Quality',
      description: 'We specialize in crafting landscapes that stand out and stand the test of time.',
    },
    {
      icon: '🤝',
      title: 'Lasting Relationships',
      description: 'Every customer is more than a transaction. We build relationships that last.',
    },
    {
      icon: '⏰',
      title: 'Your Time Matters',
      description: 'We give you the gift of time to enjoy family, friends, and life.',
    },
    {
      icon: '🛡️',
      title: 'Complete Confidence',
      description: 'Licensed, insured, and backed by 21+ years of trusted service.',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative animate-slide-up">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=700&h=800&fit=crop"
                alt="About Aesthetic Gardener"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-forest-200/50 blob"></div>
          </div>

          <div className="space-y-6 animate-slide-in-right stagger-2">
            <span className="inline-block bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-semibold">
              About Us
            </span>
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-forest-900">
              Crafting Outdoor Excellence Since 2004
            </h2>
            <p className="text-xl text-sage-700 leading-relaxed">
              For over two decades, Aesthetic Gardener has been transforming outdoor
              spaces across West Michigan. We're passionate about delivering
              exceptional quality and unmatched customer service.
            </p>
            <p className="text-lg text-sage-600 leading-relaxed">
              From simple lawn maintenance to complete landscape makeovers, we treat
              every project as a masterpiece in the making. Our commitment to superior
              results and lasting relationships has made us Holland's most trusted
              landscaping partner.
            </p>

            <div className="pt-4">
              <button className="bg-gradient-to-r from-forest-600 to-forest-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="font-display text-4xl font-bold text-forest-900 mb-4">
              Why Choose Us
            </h3>
            <p className="text-xl text-sage-700">
              Experience the difference quality and trust can make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`text-center animate-fade-in stagger-${index + 1}`}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-forest-100 to-sage-100 rounded-3xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                  <span className="text-4xl">{value.icon}</span>
                </div>
                <h4 className="font-display text-xl font-bold text-forest-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-sage-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Client Reviews
            </span>
            <h3 className="font-display text-4xl font-bold text-forest-900 mb-4">
              What Our Clients Say
            </h3>
            <p className="text-xl text-sage-700">
              See why we've been Holland's trusted landscapers for 21+ years
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-sage-50 to-white rounded-3xl p-8 shadow-lg card-hover animate-fade-in stagger-${
                  index + 1
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-2xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-sage-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-forest-900">
                  {testimonial.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
