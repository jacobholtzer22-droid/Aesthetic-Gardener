'use client';

const values = [
  {
    icon: '⭐',
    title: 'Superior Quality',
    description: 'We specialize in crafting landscapes that stand out and stand the test of time.',
    image: '/images/client/PAtiobricking3.JPG',
  },
  {
    icon: '🤝',
    title: 'Lasting Relationships',
    description: 'Every customer is more than a transaction. We build relationships that last.',
    image: '/images/client/gardenbricking2-2.JPG',
  },
  {
    icon: '⏰',
    title: 'Your Time Matters',
    description: 'We give you the gift of time to enjoy family, friends, and life.',
    image: '/images/client/Freshmowedlawn.jpg',
  },
  {
    icon: '🛡️',
    title: 'Complete Confidence',
    description: 'Licensed, insured, and backed by 21+ years of trusted service.',
    image: '/images/client/patiobricking4.JPG',
  },
];

export default function HomeWhyChooseUs() {
  return (
    <section className="relative py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <span className="inline-block bg-accent/10 text-accent-light px-4 py-2 rounded-full text-sm font-semibold mb-4">
            The Difference
          </span>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the difference quality and trust can make
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              <img src={value.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-300" />
              <div className="relative text-center p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
