import { Link } from "react-router-dom";
import { useState } from "react";
import AuthController from "../auth/AuthController";
export default function Navbar() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");


  return (
    <header className="fixed top-0 w-full z-50 border-b border-divider  bg-app">
      <div className="max-w-[1450px] mx-auto px-6 h-20 flex items-center justify-between">

        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-text-primary">
              Rent It Right
            </h2>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/explore"
              className="text-sm text-text-secondary hover:text-text-primary"
            >
              Explore
            </Link>
            <a className="text-sm text-text-secondary hover:text-text-primary" href="#">
              How it Works
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-sm text-text-secondary hover:text-text-primary"
            onClick={() => {
              setAuthMode("login");
              setAuthOpen(true);
            }}>
            Login
          </button>
          <button className="bg-accent text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-accent-hover" onClick={() => {
            setAuthMode("register");
            setAuthOpen(true);
          }}
          >
            Register
          </button>

          <AuthController
            open={authOpen}
            onClose={() => setAuthOpen(false)}
            defaultMode={authMode}
          />
        </div>

      </div>
    </header>
  );
}
