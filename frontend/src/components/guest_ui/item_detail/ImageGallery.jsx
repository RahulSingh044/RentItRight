export default function ImageGallery() {
  return (
    <div className="space-y-5">
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-surface">
        <img
          src="https://images.unsplash.com/photo-1495707902641-75cac588d2e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 left-4 bg-inherit px-3 py-1 text-[12px] font-bold text-bright rounded-full border-2 border-bright">
          VERIFIED GEAR
        </span>
      </div>
    </div>
  );
}
