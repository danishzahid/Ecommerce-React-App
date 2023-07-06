import "./App.css";
import logo from "./logo.png";
import Mockman from "mockman-js";
import { Route, Routes } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Home } from "./pages/Home/Home";
import { ErrorComponent } from "./pages/ErrorPage/ErrorComponent";

import { LoginComponent } from "./pages/Auth/LoginComponent";
import { CartComponent } from "./pages/Cart/CartComponent";
import { CheckoutPage } from "./pages/Checkout/CheckoutPage";
import { OrderSummary } from "./pages/OrderSummary/OrderSummary";
import { ProductListPage } from "./pages/ProductList/ProductListPage";
import { UserProfile } from "./pages/Profile/UserProfileComponent";
import { WishlistPage } from "./pages/Wishlist/WishlistPage";
import Navbar from "./components/Navbar/Navbar";
import { SignUpPage } from "./pages/Auth/SignUpPage";
import Footer from "./components/Footer/Footer";
import { PrivateRoute } from "./components/PrivateRoute";
import IndividualProduct from "./pages/IndividualProductPage/IndividualProduct";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<ErrorComponent />} />
        <Route path="/product/:productId" element={<IndividualProduct />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route
          path="/cart"
          element={<PrivateRoute element={<CartComponent />} />}
        />
        <Route
          path="/checkout"
          element={<PrivateRoute element={<CheckoutPage />} />}
        />
        <Route
          path="/ordersummary"
          element={<PrivateRoute element={<OrderSummary />} />}
        />
        <Route path="/products" element={<ProductListPage />} />
        <Route
          path="/profile"
          element={<PrivateRoute element={<UserProfile />} />}
        />
        <Route
          path="/wishlist"
          element={<PrivateRoute element={<WishlistPage />} />}
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
