const ExploreCard = ({ item }) => {
  return (
    <div className="premium-card rounded-card p-3">
      {item.featured && (
        <span className="absolute top-4 left-4 bg-accent px-3 py-1 text-[10px] font-bold rounded-full">
          Featured
        </span>
      )}

      <div
        className="h-48 rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${item.images})` }}
      />

      <div className="mt-4">
        <h4 className="font-bold text-sm">{item.title}</h4>
        <p className="text-xs text-text-secondary line-clamp-1">
          {item.description}
        </p>

        <div className="mt-3 flex justify-between items-center">
          <span className="text-accent font-bold">
            ₹{item.pricePerDay}/day
          </span>
          <span className="text-[10px] text-text-secondary">
            {item.distanceKm} km away
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
