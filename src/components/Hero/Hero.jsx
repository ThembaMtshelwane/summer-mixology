import { useDrinks } from "../context/DrinksContext";
import { EmblaCarousel } from "../EmblaCarousel";
const Hero = () => {
  const { drinks } = useDrinks();
  console.log(drinks);
  return (
    <section className="bg-gray-900 h-[87vh] sm:h-screen">
      <EmblaCarousel />
    </section>
  );
};

export default Hero;
