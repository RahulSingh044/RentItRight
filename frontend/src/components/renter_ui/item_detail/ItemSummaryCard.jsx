import PricingSelector from "./PricingSelector";

const ItemSummaryCard = ({ item }) => {
  return (
    <div className="rounded-2xl border border-border-custom bg-surface p-6">

      <span className="inline-block mb-3 rounded-full bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase text-accent">
        Verified Professional
      </span>

      <h1 className="text-2xl font-bold">{item.title}</h1>

      <p className="mt-1 text-text-secondary text-sm">
        {item.category}
      </p>

      <PricingSelector pricing={item.pricing} />

      <button className="mt-6 w-full rounded-xl bg-accent py-3 font-bold text-background-dark hover:opacity-90 transition">
        Rent Now →
      </button>

      <button className="mt-3 w-full rounded-xl border border-accent py-3 text-accent font-semibold">
        Add to Wishlist
      </button>
    </div>
  );
};

export default ItemSummaryCard;
