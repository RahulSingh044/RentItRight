export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-divider  bg-app">
      <div className="max-w-[1450px] mx-auto px-6 h-20 flex items-center justify-between">

        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-text-primary">
              Rent It Right
            </h2>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm text-text-secondary hover:text-text-primary" href="#">
              Explore
            </a>
            <a className="text-sm text-text-secondary hover:text-text-primary" href="#">
              How it Works
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-sm text-text-secondary hover:text-text-primary">
            Login
          </button>
          <button className="bg-accent text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-accent-hover">
            Register
          </button>
        </div>

      </div>
    </header>
  );
}
