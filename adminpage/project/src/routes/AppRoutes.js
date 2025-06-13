import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import OrderHistory from "../pages/OrderHistory";
import Support from "../pages/Support";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/order-history" element={<OrderHistory />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
};

export default AppRoutes;
