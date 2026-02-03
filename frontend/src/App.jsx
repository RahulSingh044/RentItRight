import GuestHome from "./pages/guest/GuestHome";
import Explore from "./pages/guest/Explore";
import ItemDetail from "./pages/guest/ItemDetail";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/guest_ui/Navbar";
import Footer from "./components/guest_ui/Footer";
import Login from "./pages/auth/Login";
import CompleteProfile from "./pages/auth/CompleteProfile";
import Register from "./pages/auth/Register";
import VerifyOtp from "./pages/auth/VerifyOtp";
import Success from "./pages/auth/Success";


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
    {/* <Login/>
    <Register/>
    <VerifyOtp/>
    <CompleteProfile/>
    <Success/> */}
  </BrowserRouter>
  );

}

export default App;
