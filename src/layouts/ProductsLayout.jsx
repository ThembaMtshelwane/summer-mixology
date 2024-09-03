import { Outlet } from "react-router-dom";

import ProductsHero from "../components/Hero/ProductsHero";

const ProductsLayout = () => {
  return (
    <section>
      <ProductsHero />
      <Outlet />
    </section>
  );
};

export default ProductsLayout;
