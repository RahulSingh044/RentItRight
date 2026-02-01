import GuestHome from "./pages/guest/GuestHome";
import Explore from "./pages/guest/Explore";
import ItemDetail from "./pages/guest/ItemDetail";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/guest_ui/Navbar";
import Footer from "./components/guest_ui/Footer";
function App() {

  return(
  <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<GuestHome />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/item/:id" element={<ItemDetail />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  );

}

export default App;
