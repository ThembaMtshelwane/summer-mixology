import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="relative mt-28  pt-14 text-center min-h-screen w-full"
      // initial={{ opacity: 0, x: -25 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 1, delay: 1 }}
    >
      <div className="flex flex-col md:flex-row md:items-center w-full">
        {/* Left Side Image */}
        <div className="md:w-2/3">
          <img
            src="/About.jpeg"
            alt="About Us"
            className="w-[100%] h-[80vh] object-cover shadow-lg mt-5 "
          />
        </div>

        {/* Right Side Text */}
        <div className="md:w-2/3  md:pl-10 mt-6 md:mt-0">
          <h3 className="text-2xl font-bold mb-4 text-center font-oswald text-[#002B49]">
            -SUMMER MIXOLOGY-
          </h3>
          <h1 className="text-7xl font-bebas font-bold mb-4 text-[#002B49]">
            HISTORICAL KNOW-HOW
          </h1>
          <p className="text-lg mb-4 font-oswald text-[#002B49]">
            Welcome to our Cocktail Explorer App!
            <br /> Discover a world of cocktails and mocktails with just a few
            clicks.
            <br />
            Whether you are a professional bartender, <br />a cocktail
            enthusiast, or just someone looking for the perfect drink recipe
            <br /> for a special occasion, our app has something for everyone.
          </p>
          <button className="border-[#002B49] py-3 px-7 bg-transparent mb-2 uppercase mt-10 text-sm font-medium border font-oswald  hover:bg-[#002B49] hover:text-white">
            <Link to="/categories"> View Categories</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
