import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mx-auto p-6 text-center">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Side Image */}
        <div className="md:w-1/3">
          <img
            src="/About.jpeg"
            alt="About Us"
            className="w-[100%] h-[100vh] object-cover shadow-lg mt-5" // Increased height for better visibility
          />
        </div>

        {/* Right Side Text */}
        <div className="md:w-2/3 md:pl-10 mt-6 md:mt-0">
          <h3 className="text-2xl font-bold mb-4 text-center text-[#002B49]">
            -SUMMER MIXOLOGY-
          </h3>
          <h1 className="text-6xl font-bold mb-4 text-[#002B49]">
            HISTORICAL KNOW-HOW
          </h1>
          <p className="text-lg mb-4">
            Welcome to our Cocktail Explorer App!
            <br /> Discover a world of cocktails and mocktails with just a few
            clicks.
            <br />
            Whether you are a professional bartender, <br />a cocktail
            enthusiast, or just someone looking for the perfect drink recipe
            <br /> for a special occasion, our app has something for everyone.
          </p>
          <button className="py-3 px-7 mb-2 mt-10 text-sm font-medium border border-red-950 hover:bg-[#002B49] hover:text-white">
            <Link to="/categories"> View Categories</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
