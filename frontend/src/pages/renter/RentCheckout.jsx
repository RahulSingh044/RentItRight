import { useParams } from "react-router-dom";
import renterExploreDummy from "../../data/renterExploreDummy";
import RentCheckoutLayout from "../../components/renter_ui/rent_checkout/RentCheckoutLayout";

export default function RentCheckout() {
    const { id } = useParams();

    const item = renterExploreDummy.find(i => i.id === id);

    if (!item) return null;

    return (
        <RentCheckoutLayout
            item={item}
            availability={{
                disabledDates: item.booking?.availability?.blockedDates || []
            }}
        />
    );
}
