import ImageGallery from "../../components/renter_ui/item_detail/ImageGallery";
import ItemSummaryCard from "../../components/renter_ui/item_detail/ItemSummaryCard";
import OwnerCard from "../../components/renter_ui/item_detail/OwnerCard";
import ItemDescription from "../../components/renter_ui/item_detail/ItemDescription";
import ItemSpecs from "../../components/renter_ui/item_detail/ItemSpecs";
import RentalGuidelines from "../../components/renter_ui/item_detail/RentalGuidelines";

const RenterItemDetails = ({ item }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-20 py-10 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10">

      {/* LEFT */}
      <div>
        <ImageGallery images={item.images} />

        <ItemDescription description={item.description} />

        <ItemSpecs specs={item.specs} />

        <RentalGuidelines rules={item.guidelines} />
      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-6">
        <ItemSummaryCard item={item} />
        <OwnerCard owner={item.owner} />
      </div>
    </div>
  );
};

export default RenterItemDetails;
