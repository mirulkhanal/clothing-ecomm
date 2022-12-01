import React from "react";
import Home from "./routes/home/home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Shop from "./routes/shop/shop";
import Auth from "./routes/auth/auth";
import Checkout from "./routes/checkout/checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
