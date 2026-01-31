import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Steps from "../components/Steps";
import Footer from "../components/Footer";
import Categories from "../components/Categories";


export default function GuestHome() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Steps />
        <Categories/>
        {/* Trust */}
        {/* CTA */}

      </main>
      <Footer />
    </>
  );
}
