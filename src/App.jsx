import About from "./components/About/About";
import { DrinksProvider } from "./components/context/DrinksContext";
import Hero from "./components/Hero/Hero";
import ProductSection from "./components/ProductSection/ProductSection";
export default function App() {
  return (
    <section className="mx-[30px]">
      <DrinksProvider>
        <Hero />
        <About />
        <ProductSection />
      </DrinksProvider>
    </section>
  );
}
