'use client';

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

export default function HomeWhyChooseUs() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <span className="inline-block bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            The Difference
          </span>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-forest-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            Experience the difference quality and trust can make
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center bg-gradient-to-br from-sage-50/50 to-white rounded-2xl p-6 border border-sage-100 shadow-sm"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-forest-100 to-sage-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">{value.icon}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-forest-900 mb-2">
                {value.title}
              </h3>
              <p className="text-sage-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
