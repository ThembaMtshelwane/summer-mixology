import About from "../components/About/About";
import ProductSection from "../components/ProductSection/ProductSection";

const HomePage = () => {
  return (
    <section className="md:px-10 lg:px-15">
      <About />
      <ProductSection />
    </section>
  );
};

export default HomePage;
