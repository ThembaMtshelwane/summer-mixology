import { Outlet } from "react-router-dom";

import ProductsHero from "../components/Hero/ProductsHero";
import Navbar from "../components/Hero/Navbar/Navbar";
import Background from "../components/Background";

const ProductsLayout = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Navbar />
      <ProductsHero />
      <Background />
      <div className="relative z-10">
        <Outlet />
      </div>
    </section>
  );
};

export default ProductsLayout;
