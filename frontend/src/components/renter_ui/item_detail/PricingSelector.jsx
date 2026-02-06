const PricingSelector = ({ pricing }) => {
  return (
    <div className="mt-6">
      <p className="text-sm text-text-secondary mb-2">Starting at</p>

      <p className="text-3xl font-bold text-accent">
        ₹{pricing.daily}
        <span className="text-sm text-text-secondary ml-1">/day</span>
      </p>

      <div className="mt-4 flex gap-2">
        {["Daily", "Weekly", "Monthly"].map((p) => (
          <button
            key={p}
            className="rounded-lg border border-border-custom px-4 py-1.5 text-xs hover:border-accent"
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PricingSelector;
