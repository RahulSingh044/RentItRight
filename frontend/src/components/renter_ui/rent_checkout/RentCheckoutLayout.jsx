import { useState } from "react";
import RentalCalendar from "./RentalCalendar";
import RentalDuration from "./RentalDuration";
import CostSummary from "./CostSummary";

export default function RentCheckoutLayout({ item, availability }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="min-h-screen bg-app text-white px-8 py-10 pt-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          <RentalCalendar
            disabledDates={availability.disabledDates}
            onSelect={(start, end) => {
              setStartDate(start);
              setEndDate(end);
            }}
          />

          <RentalDuration
            startDate={startDate}
            endDate={endDate}
          />
        </div>

        {/* RIGHT */}
        <CostSummary
          item={item}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
    </div>
  );
}
