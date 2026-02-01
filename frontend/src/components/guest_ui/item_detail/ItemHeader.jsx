export default function ItemHeader() {
  return (
    <section className="border-b border-border-custom pb-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            Sony Alpha a7 IV Mirrorless Camera
          </h1>
          <p className="text-sm text-text-secondary">
            ⭐ 4.9 (42 reviews) · Williamsburg, Brooklyn
          </p>
        </div>

        <div className="text-right">
          <p className="text-3xl font-black">
            $45<span className="text-base text-text-secondary">/day</span>
          </p>
          <p className="text-[10px] uppercase font-bold text-bright">
            Instant Booking
          </p>
        </div>
      </div>
    </section>
  );
}
