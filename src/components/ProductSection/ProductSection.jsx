import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useDrinks } from "../context/DrinksContext";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const onSelect = () => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi]);

  const { drinks } = useDrinks();

  return (
    <div className="w-full h-screen pt-[100px] pb-[20px] text-[#002B49]">
      <div className="font-bold md:text-6xl text-5xl flex flex-wrap justify-between gap-10 items-center">
        <h2>OUR COCKTAILS</h2>
        <button className="bg-transparent w-[200px] h-[45px] border border-[#002B49] text-base hover:bg-[#002B49] hover:text-white font-medium">
          <Link to="products"> ALL COCKTAILS</Link>
        </button>
      </div>

      <div
        className="embla w-full overflow-hidden relative pt-[80px]"
        ref={emblaRef}
      >
        <div className="embla__container flex gap-10">
          {drinks.slice(0, 4).map((drink, index) => (
            <Link to={`/products/${drink.name}`} key={index}>
              <div className="h-[60vh]">
                <img
                  src={drink.thumbnail}
                  alt={drink.name}
                  className="md:max-w-[500px] max-w-[300px] md:h-[50vh] h-[50vh] object-cover"
                />
                <div className="pt-6 text-start text-gray-600">
                  <h2 className="font-light text-lg uppercase text-gray-600">
                    {drink.category}
                  </h2>
                  <h1 className="font-bold text-3xl mt-1 uppercase text-gray-600">
                    {drink.name}
                  </h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <button
        className={`embla__button embla__button--prev rounded absolute left-0 top-1/2 transform -translate-y-1/2 ${
          !prevBtnEnabled ? "disabled" : ""
        }`}
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        &#x276E; {/* Left arrow symbol */}
      </button>
      <button
        className={`embla__button embla__button--next rounded-s-full border-black absolute right-0 top-1/2 transform -translate-y-1/2 ${
          !nextBtnEnabled ? "disabled" : ""
        }`}
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        &#x276F; {/* Right arrow symbol */}
      </button>
    </div>
  );
};

export default ProductSection;
