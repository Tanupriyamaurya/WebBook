import { Routes, Route } from "react-router-dom";
import Home from "../presentation/components/home/Home";
import Login from "../presentation/components/auth/Login";
import Cart from "../presentation/components/cart/Cart";
import TrackOrder from "../presentation/components/trackOrder/TrackOrder";
import ProtectedRoute from "./ProtectedRoutes";
import Profile from "../pages/Profile"
import Order from "../pages/Order";
import Wishlist from "../pages/Wishlist";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
       <Route
        path="/Profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Order />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Wishlist"
        element={
          <ProtectedRoute>
            <Wishlist/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route
        path="/track-order"
        element={
          <ProtectedRoute>
            <TrackOrder />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
