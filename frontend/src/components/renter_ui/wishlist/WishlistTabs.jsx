const tabs = ["All Saved", "Available Now", "Price Drops", "Out of Stock"];

export default function WishlistTabs() {
  return (
    <div className="flex gap-6 border-b border-divider mb-8">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`pb-3 text-sm ${
            index === 0
              ? "text-accent border-b-2 border-accent"
              : "text-muted"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
