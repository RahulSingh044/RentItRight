import { useNavigate, useParams } from "react-router-dom";
import PricingSelector from "./PricingSelector";


const ItemSummaryCard = ({ item }) => {

  const navigate = useNavigate();
  const { id } = useParams();

  function handleRentClick() {
    navigate(`/renter/rent/${id}`);
  }
  return (
      <div className="rounded-3xl border-1 border-app bg-surface p-6 min-h-[350px]">

      {/* <span className="inline-block mb-3 rounded-full bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase text-accent">
        Verified Professional
      </span> */}

      <h1 className="text-2xl font-bold">{item.title}</h1>

      <p className="mt-1 text-text-secondary text-sm">
        {item.category}
      </p>

      <PricingSelector pricing={item.pricing} />


      <button onClick={handleRentClick} className="mt-6 w-full rounded-xl bg-bright py-3 font-bold text-background-dark text-app hover:opacity-90 hover:scale-101 transition cursor-pointer"
      >
        Rent Now →
      </button>

      <button className="mt-3 w-full rounded-xl border border-bright py-3 text-bright font-semibold hover:opacity-90 hover:scale-101">
        Add to Wishlist
      </button>
    </div>
  );
};

export default ItemSummaryCard;
