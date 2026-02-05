import { BrowserRouter, Routes, Route } from "react-router-dom";

import GuestLayout from "./layouts/GuestLayout";

import GuestHome from "./pages/guest/GuestHome";
import Explore from "./pages/guest/Explore";
import ItemDetail from "./pages/guest/ItemDetail";

import OwnerDashboard from "./pages/owner/OwnerDashboard";
import RenterDashboard from "./pages/renter/RenterDashboard";
import OwnerLayout from "./layouts/OwnerLayout";
import RenterLayout from "./layouts/RenterLayout";
import Rentals from "./pages/renter/Rentals";
import RentalDetails from "./pages/renter/RentalDetails";
import RenterExplore from "./pages/renter/RenterExplore";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Guest pages with Navbar + Footer */}
        <Route element={<GuestLayout />}>
          <Route path="/" element={<GuestHome />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Route>


        {/* Renter pages with Navbar + Footer */}
        <Route element={<RenterLayout />}>
          <Route path="/renter" element={<RenterDashboard />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/rentals/:rentalId" element={<RentalDetails />} />
          <Route path="/renter_explore" element={<RenterExplore />} />
          

        </Route>

        {/* Owner pages with Navbar + Footer */}
        <Route element={<OwnerLayout />}>
          <Route path="/owner" element={<OwnerDashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
