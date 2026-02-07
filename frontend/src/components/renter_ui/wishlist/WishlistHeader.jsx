export default function WishlistHeader({ title, subtitle, total }) {
  return (
    <div className="flex justify-between items-start mb-8">
      <div>
        <h1 className="text-4xl font-bold">
          {title} <span className="text-muted">({total})</span>
        </h1>
        <p className="text-muted mt-1">{subtitle}</p>
      </div>

      <div className="flex gap-3">
        <button className="btn-secondary">Share Wishlist</button>
        <button className="btn-primary">Compare</button>
      </div>
    </div>
  );
}
