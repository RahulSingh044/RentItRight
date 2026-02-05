export default function RentalActions() {
  return (
    <div className="flex gap-4">
      <button className="flex-1 bg-accent/10 border border-accent/30 py-3 rounded-xl font-bold">
        Request Extension
      </button>
      <button className="flex-1 bg-surface border-1 border-app/80 py-3 rounded-xl">
        View Return Instructions
      </button>
    </div>
  );
}
