import { Link } from "react-router-dom";
import { useState } from "react";
import AuthController from "../../auth/AuthController";
const Hero = ()=> {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("register");

  return (
    <section className="relative overflow-hidden py-25  bg-app">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-8 max-w-xl">

            <h1 className="text-7xl  leading-tight font-black text-white">
              Rent Anything. <br />
              <span className="text-accent">
                AnytimeLocally
              </span>
            </h1>

            <p className="text-lg text-off-white opacity-90">
              Experience the premium, community-focused local rental marketplace built on trust and sustainability. Reduce waste, save money, and earn from your belongings.
            </p>

            <div className="flex gap-4">
              <Link to="/explore" className="bg-accent text-white font-bold hover:bg-accent-hover
 px-12 py-4 rounded-3xl">
                Rent Items
              </Link>
              <button className="border-2  border-bright text-text-primary bg-app hover:bg-bright
 px-12 py-4 rounded-3xl font-bold " 
 
                onClick={() => {
                  setAuthOpen(true);
                }}>
                List Your Items
              </button>
               <AuthController
                  open={authOpen}
                  onClose={() => setAuthOpen(false)}
                  defaultMode={authMode}
                />
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative rounded-2xl overflow-hidden border border-border-custom bg-surface h-[580px] object-cover">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABnWt0U1YNHf2HT_fDZ2mFJXT8IbEw3QCyfb6siKDYoy9U4e7wNSNwZJzYtDEIp_Pt76m7wiHeV9SpWtOKaZQ37A_wExM0vnyIbVVWEhD6azR-kpAczK5IbZZ4piUAWijQa77C0lVn2jXOHy5HvlllVwV8azArb9aktuAYxNdA1TcJipahHRPF8XEYdx2vPYJMc2fDfK5UmSv2B-7pMIPb91gIdcIO-KCYazC7pqbtAoG2XUqv4JTK5n7tApPQIhzPyPBfMLheKRk"
              className="w-full h-full object-cover opacity-90"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
