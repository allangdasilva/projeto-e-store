import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";
import Products from "./pages/Products/Products";
import { useDispatch } from "react-redux";
import { validateToken } from "./redux/user/login-reducer";
import SignUp from "./pages/SignUp/SignUp";
import Checkout from "./pages/Checkout/Checkout";
import SearchResults from "./components/Nav/SearchResults";
import { productsAsync } from "./redux/products/products";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(validateToken());
    dispatch(productsAsync());
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
