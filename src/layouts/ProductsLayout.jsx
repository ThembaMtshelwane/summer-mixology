import { Outlet } from "react-router-dom";

import ProductsHero from "../components/Hero/ProductsHero";
import Navbar from "../components/Hero/Navbar/Navbar";
import Background from "../components/Background";

const ProductsLayout = () => {
  return (
    <section className="overflow-hidden relative">
      <Navbar />
      <ProductsHero />
      <Background />
      <Outlet />
    </section>
  );
};

export default ProductsLayout;
