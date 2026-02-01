import Hero from "../../components/guest_ui/guest_dashboard/Hero";
import Steps from "../../components/guest_ui/guest_dashboard/Steps";
import Categories from "../../components/guest_ui/guest_dashboard/Categories";


export default function GuestHome() {
  return (
    <>
      <main className="pt-20">
        <Hero />
        <Steps />
        <Categories/>
        {/* Trust */}
        {/* CTA */}

      </main>
    </>
  );
}
