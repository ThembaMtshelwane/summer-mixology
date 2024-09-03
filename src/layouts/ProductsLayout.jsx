import { Outlet } from "react-router-dom";

import ProductsHero from "../components/Hero/ProductsHero";
import Navbar from "../components/Hero/Navbar/Navbar";

const ProductsLayout = () => {
  return (
    <section>
      <Navbar />
      <ProductsHero />
      <Outlet />
    </section>
  );
};

export default ProductsLayout;
