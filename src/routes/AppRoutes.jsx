import { Routes, Route } from "react-router-dom";
import Home from "../presentation/components/home/Home";
import Login from "../presentation/components/auth/Login";
import Cart from "../presentation/components/cart/Cart";
import TrackOrder from "../presentation/components/trackOrder/TrackOrder";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/track-order" element={<TrackOrder />} />
    </Routes>
  );
};

export default AppRoutes;
