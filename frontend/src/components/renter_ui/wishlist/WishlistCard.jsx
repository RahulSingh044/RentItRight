export default function WishlistCard({ item }) {
  return (
    <div className="bg-card rounded-xl border border-divider overflow-hidden">
      <div className="relative h-48">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />

        <span className="absolute top-3 left-3 badge">
          {item.category}
        </span>

        {!item.available && (
          <span className="absolute top-3 right-3 badge-danger">
            Out of Stock
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold mb-1">{item.title}</h3>

        <p className="text-sm text-muted mb-2">
          ⭐ {item.rating} ({item.reviews} reviews)
        </p>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-muted">Daily Rate</p>
            <p className="font-bold">${item.pricePerDay}/day</p>
          </div>

          {item.available ? (
            <button className="btn-primary-sm">Rent Now</button>
          ) : (
            <button className="btn-disabled">Restock Soon</button>
          )}
        </div>
      </div>
    </div>
  );
}
