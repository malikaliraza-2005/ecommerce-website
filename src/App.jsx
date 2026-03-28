import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import ProductListing from "./pages/product-listing";
import ProductGridView from "./pages/product-gridview";
import ProductDetail from "./pages/product-detail";
import Cart from "./pages/cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product-listing" element={<ProductListing />} />
      <Route path="/product-gridview" element={<ProductGridView />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;