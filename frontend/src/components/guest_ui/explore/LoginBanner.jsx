export default function LoginBanner() {
  return (
    <div className="mb-10 w-full rounded-xl bg-accent/15 border border-accent/40 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-full bg-accent/30 text-accent">
          <span className="material-symbols-outlined">info</span>
        </div>
        <div>
          <h3 className="text-text-primary font-semibold text-lg">
            Login to book items and see full details
          </h3>
          <p className="text-text-secondary text-sm">
            Join our community to start renting high-quality gear today.
          </p>
        </div>
      </div>

      <button className="bg-accent text-text-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-accent-hover">
        Sign In / Sign Up
      </button>
    </div>
  );
}
