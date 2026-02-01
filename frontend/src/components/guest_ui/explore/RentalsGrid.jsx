import RentalCard from "./RentalCard";

const items = [
  {
    title: "Sony A7R IV Mirrorless Camera",
    category: "Photography",
    price: 85,
    rating: 4.9,
    distance: 1.2,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtuRx4s5bFt7o1eYGOXqtfW5agJhRUmYPuy3vjCk_Aja7QW-UrRTLUQ-ir154I-pvvMtCdoPpQoNNZvQyBMcm2hSoQDe0T6QThqNdzGdM8lUAmCEdPmzEu6cT_ZLIwl-gnZIRcKCAvHet0Ak5P2M5e9EgVMITixWintti30Ddz_XU9nHXdvOiAGHGbjNTaWcc_2DZTDzyWK7_ObznOQHIfbJAixhZddZ9xSyjCn_Y-b_vD28qiD4J9_NmEcPxD0nUv3n872aNZOJ8",
  },
  // add more later
];

export default function RentalsGrid() {
  return (
    <>
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Featured Rentals</h2>
        <span className="text-text-primary font-semibold text-sm">
          Recommended
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <RentalCard key={i} item={item} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="flex items-center gap-2 px-8 py-3 rounded-xl border border-divider bg-card font-semibold hover:border-accent">
          Load More Items
          <span className="material-symbols-outlined">expand_more</span>
        </button>
      </div>
    </>
  );
}
