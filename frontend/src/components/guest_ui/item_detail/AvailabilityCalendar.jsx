import { useState } from "react";
import AuthController from "../../auth/AuthController";

const WEEKDAYS = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function AvailabilityCalendar() {

  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");


  const today = new Date();

  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const firstDay = new Date(year, month, 1);
  const lastDate = new Date(year, month + 1, 0).getDate();
  const startOffset = (firstDay.getDay() + 6) % 7;

  // mock unavailable dates (later from backend)
  const unavailableDates = [3, 4, 5];

  const goPrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(y => y - 1);
    } else {
      setMonth(m => m - 1);
    }
  };

  const goNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(y => y + 1);
    } else {
      setMonth(m => m + 1);
    }
  };

  return (
    <div className="bg-surface border-2 border-[#2a2e36] rounded-2xl px-8 py-8 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-text-primary">Availability</h4>

        <div className="flex items-center gap-2 text-xs text-text-secondary">
          <button
            onClick={goPrevMonth}
            className="hover:text-bright transition"
          >
            ‹
          </button>

          <span>
            {MONTHS[month]} {year}
          </span>

          <button
            onClick={goNextMonth}
            className="hover:text-bright transition"
          >
            ›
          </button>
        </div>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS.map(d => (
          <div
            key={d}
            className="text-[10px] font-bold text-text-secondary py-1"
          >
            {d}
          </div>
        ))}

        {/* Empty cells */}
        {[...Array(startOffset)].map((_, i) => (
          <div key={`e-${i}`} />
        ))}

        {/* Dates */}
        {[...Array(lastDate)].map((_, i) => {
          const date = i + 1;
          const isUnavailable = unavailableDates.includes(date);
          const isPast =
            year === today.getFullYear() &&
            month === today.getMonth() &&
            date < today.getDate();

          return (
            <div
              key={date}
              className={`
                p-2 text-xs rounded-md transition
                ${isUnavailable || isPast
                  ? "text-text-secondary border-1 line-through cursor-not-allowed border-bright/20"
                  : "bg-bright/20 text-text-primary hover:bg-bright/30 cursor-pointer"
                }
              `}
            >
              {date}
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <button
        disabled
        className="w-full mt-4 py-3 bg-accent/40 border-surface text-text-secondary font-bold rounded-2xl cursor-not-allowed"
      >
        Book Now
      </button>

      <p className="text-xs text-center text-text-secondary">
        <button className="text-bright underline cursor-pointer"
          onClick={() => {
            setAuthOpen(true);
          }}>
          Login or Register
        </button>{" "}
        to check specific dates and book this gear.
      </p>
      <AuthController
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        defaultMode={authMode}
      />

    </div>
  );
}
