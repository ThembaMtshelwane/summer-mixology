import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import ProductSection from "./components/ProductSection/ProductSection";
export default function App() {
  return (
    <section className="mx-[30px]">
      <Hero />

      <About/>
      <ProductSection />
    </section>
  );
}
