import { Star } from 'lucide-react'
export default function WishlistCard({ item }) {
  return (
    <div className="bg-card rounded-xl border border-divider overflow-hidden">
      <div className="relative h-48">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />

        <span className="absolute top-3 left-3 badge bg-app/60 py-1 px-2 rounded-2xl text-bright font-bold border-1 border-app/60 backdrop-blur-xs">
          {item.category}
        </span>

        {/* {!item.available && (
          <span className="absolute top-4 right-2 bg-error rounded-md font-bold px-2.5 py-0.5">
            Out of Stock
          </span>
        )} */}
      </div>

      <div className="p-4">
        <h3 className="font-semibold mb-1">{item.title}</h3>

        <p className="text-sm text-text-primary mb-2 flex items-center gap-0.5">

          <div className='flex items-center gap-1.5'><Star className='size-4 text-bright fill-bright' />{item.rating} </div>
          <span className="text-xs  text-text-secondary">({item.reviews} reviews)</span>
        </p>

        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-lg text-bright">${item.pricePerDay}
              <span className="text-text-secondary text-xs">/day</span></p>
          </div>

          {item.available ? (
            <button className="text-sm text-app px-3 py-1 rounded-2xl font-bold bg-bright cursor-pointer">Rent Now</button>
          ) : (
            <button className="text-text-primary font-bold bg-error/80 px-3 py-1 rounded-2xl cursor-not-allowed">Restock Soon</button>
          )}
        </div>
      </div>
    </div>
  );
}
