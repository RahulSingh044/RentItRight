import { ArrowRight } from 'lucide-react';

const categories = [
  { title: "Electronics", count: "240+ items", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
  { title: "Furniture", count: "150+ items", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" },
  { title: "Tools", count: "310+ items", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758" },
  { title: "Vehicles", count: "85+ items", image: "https://images.unsplash.com/photo-1502877338535-766e1452684a" },
];

export default function Categories() {
  return (
    <section className="bg-app py-28">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-[28px] md:text-[32px] font-bold text-text-primary">
              Explore Categories
            </h2>
            <p className="mt-2 text-text-secondary">
              Discover high-quality items available near you
            </p>
          </div>

          <button className="text-bright font-bold hover:underline flex gap-2">
            View All <ArrowRight />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="relative h-[420px] rounded-xl overflow-hidden border border-divider bg-card group cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-102 transition-transform"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-app via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold text-text-primary ">
                  {cat.title}
                </h3>
                <p className="text-md text-text-secondary">
                  {cat.count}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
