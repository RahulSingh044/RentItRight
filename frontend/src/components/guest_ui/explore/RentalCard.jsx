import { Star } from 'lucide-react';
import { Link } from "react-router-dom";
export default function RentalCard({ item }) {
  return (
    <Link to={`/item/${item.id}`}>
      <div className="cursor-pointer">
        <div className="bg-card rounded-xl border border-divider overflow-hidden hover:border-accent/60 transition-all">
          <div className="aspect-[4/3] bg-app relative overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-110 transition-transform"
            />

            <span className="absolute top-3 left-3 bg-app/80 px-2 py-1 rounded text-[11px] font-bold uppercase text-bright">
              {item.category}
            </span>
          </div>

          <div className="px-3 py-6">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-text-primary line-clamp-1">
                {item.title}
              </h3>
              <span className="text-xs font-bold flex items-center justify-center gap-1">
                <Star className='w-3.75 text-' /> {item.rating}
              </span>
            </div>



            <div className="flex items-center justify-between mt-6">
              <p className="text-bright font-black text-xl">
                ${item.price}
                <span className="text-text-secondary text-sm font-normal">/day</span>
              </p>

              <button className="bg-elevated text-text-primary text-sm px-4 py-1.5 rounded-xl border border-divider bg-accent-soft hover:bg-divider">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>

  );
}
