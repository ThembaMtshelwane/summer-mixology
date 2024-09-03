import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import ProductSection from "../components/ProductSection/ProductSection";

const HomePage = () => {
  return (
    <section>
      <Hero />
      <section className="mx-[30px]">
        <About />
        <ProductSection />
      </section>
    </section>
  );
};

export default HomePage;
