export default function RentalsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-black tracking-tight">Active Inventory</h1>
        <p className="text-text-secondary max-w-md">
          Oversee your current bookings and historical rentals. All your agreements in one workspace.
        </p>
      </div>

      <button className="bg-accent text-white px-6.5 py-3 rounded-3xl font-semibold flex items-center gap-2 hover:bg-primary/80 transition-all">
        <span className="material-symbols-outlined">add_circle</span>
        New Rental
      </button>
    </div>
  );
}
