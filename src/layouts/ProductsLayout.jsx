import { Outlet, useParams } from "react-router-dom";
import Navbar from "../components/Hero/Navbar/Navbar";
import ProductsHero from "../components/Hero/ProductsHero";

const ProductsLayout = () => {
  const { id } = useParams();
  return (
    <section>
      <Navbar />
      <ProductsHero />

      <Outlet />
    </section>
  );
};

export default ProductsLayout;
