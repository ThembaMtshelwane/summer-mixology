import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla border-2 border-red-600 h-full w-full" ref={emblaRef}>
      <div className="embla__container border-2 border-blue-300 h-full w-full">
        <div className="embla__slide border-2 border-yellow-400 h-full w-full relative flex items-center justify-center md:justify-end">
          <section className="border-2 h-full  w-full relative">
            <img
              className="w-full h-full object-cover "
              src="hero/1.jpg"
              alt=""
            />
          </section>
          <section className="absolute w-full border-2 border-red-500 p-2 flex flex-col items-center justify-center sm:w-[500px]  md:mr-[15%]">
            <h1 className=" text-6xl uppercase text-center sm:text-7xl md:text-right md:text-8xl">
              the art of the cocktail
            </h1>
            <button className="md:ml-auto">View Collection</button>
          </section>
        </div>

        <div className="embla__slide border-2 border-yellow-400 h-full w-full relative flex items-center justify-center md:justify-end">
          <section className="border-[10px] h-full w-full border-purple-700">
            <img
              className="w-full h-full object-cover "
              src="hero/2.jpg"
              alt=""
            />
          </section>
          <section className=" absolute w-full border-2 h-fit border-red-500 p-2 flex flex-col items-center justify-center sm:w-[600px] md:[600px]  md:left-32">
            <h1 className=" text-6xl uppercase text-center sm:text-7xl md:text-left md:text-8xl">
              Craft pro cocktails
            </h1>
            <button className="md:mr-auto bg-white">View Collection</button>
          </section>
        </div>

        <div className="embla__slide border-2 border-yellow-400 h-full w-full relative flex items-center justify-center md:justify-end">
          <section className="border-[10px] h-full w-full border-purple-700">
            <img
              className="w-full h-full object-cover "
              src="hero/3.jpg"
              alt=""
            />
          </section>
          <section className=" absolute w-full border-2 h-fit border-red-500 p-2 flex flex-col items-center justify-center sm:w-[600px] md:[600px]  md:left-32">
            <h1 className=" text-6xl uppercase text-center sm:text-7xl md:text-left md:text-8xl">
              from zero to the new bar hero
            </h1>
            <button className="md:mr-auto bg-white">View Collection</button>
          </section>
        </div>
      </div>
    </div>
  );
}
