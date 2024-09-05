import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla  h-full w-full" ref={emblaRef}>
      <div className="embla__container  h-full w-full">
        <div className="embla__slide  h-full w-full relative flex items-center justify-center md:justify-end">
          <section className=" h-full  w-full relative">
            <img
              className="w-full h-full object-cover opacity-60 "
              src="/hero/1.jpg"
              alt=""
            />
          </section>
          <motion.section
            className="absolute w-full  p-2 px-5 flex flex-col items-center justify-center sm:w-[500px]  md:mr-[15%]"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h1 className=" text-6xl uppercase text-center sm:text-8xl md:text-right md:text-7xl font-bebas">
              the art of cocktails
            </h1>
            <button className="md:ml-auto uppercase my-4 text-base font-oswald bg-transparent text-white border-white">
              <Link to="/products"> View Collection</Link>
            </button>
          </motion.section>
        </div>

        <div className="embla__slide h-full w-full relative flex items-center justify-start ">
          <section className=" h-full w-full ">
            <img
              className="w-full h-full object-cover opacity-60 "
              src="/hero/2.jpg"
              alt=""
            />
          </section>
          <motion.section
            className=" absolute w-full h-fit p-2  flex flex-col  sm:w-[600px] md:[600px] md:left-20"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h1 className=" text-6xl uppercase sm:text-7xl md:text-left md:text-6xl font-bebas">
              Craft pro cocktails
            </h1>
            <button className="md:mr-auto my-4 text-base uppercase font-oswald bg-transparent text-white border-white">
              <Link to="/categories"> View Categories</Link>
            </button>
          </motion.section>
        </div>

        <div className="embla__slide h-full w-full relative flex items-start justify-center">
          <section className="h-full w-full ">
            <img
              className="w-full h-full object-cover opacity-60 "
              src="/hero/3.jpg"
              alt=""
            />
          </section>
          <section className=" absolute w-[20px]  h-fitp-2 flex   flex-col top-[40vh] items-center justify-center sm:w-[700px]  ">
            <h1 className=" text-6xl uppercasepr-15 text-right  sm:text-7xl md:text-6xl font-bebas">
              from zero to the new bar hero
            </h1>
            <button className="md:mx-auto my-4 text-base uppercase font-oswald bg-transparent text-white border-white">
              <Link to="/products"> View Collection</Link>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
