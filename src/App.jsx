import About from "./components/About/About";
import { DrinksProvider } from "./components/context/DrinksContext";
import Hero from "./components/Hero/Hero";
import ProductSection from "./components/ProductSection/ProductSection";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <section>
      <DrinksProvider>
        <Hero />
        <section className="mx-[30px]">
          <About />
          <ProductSection />
        </section>
      </DrinksProvider>
      <Footer/>
    </section>

  );
}
