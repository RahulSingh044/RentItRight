const ExploreSearchBar = ({ value, onChange }) => {
  return (
    <div className="max-w-2xl mb-8">
      <div className="relative">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary">
          search
        </span>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search rentals..."
          className="w-full h-12 rounded-xl border border-border-custom bg-surface pl-12 pr-4 text-sm outline-none focus:border-accent/50"
        />
      </div>
    </div>
  );
};

export default ExploreSearchBar;
``