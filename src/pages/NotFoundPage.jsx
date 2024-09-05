import { Link } from "react-router-dom";
import Navbar from "../components/Hero/Navbar/Navbar";
import { BiError } from "react-icons/bi";
const NotFoundPage = () => {
  return (
    <section className="border-2 border-black h-screen relative overflow-hidden bg-[#173e59] flex ">
      <Navbar />

      <section
        className=" h-full w-full flex items-center justify-center blur-sm absolute "
        style={{
          backgroundImage: "url('/not-found/1.png')",
          backgroundPosition: "center",
        }}
      ></section>

      <section className="flex h-full w-full justify-center items-center z-10">
        <section className="h-[50%] w-full max-w-[450px] sm:w-[70%] flex flex-col items-center justify-center md:justify-around ">
          <BiError className="text-white text-5xl mb-10 scale-[3] md:text-7xl md:scale-[4]" />
          <section className=" flex flex-col items-center h-[40%] justify-around">
            <h2 className="text-3xl md:text-4xl text-white ">Error 404</h2>
            <p className="text-white text-xl">The page is mot available</p>
            <button className="bg-white border-none">
              <Link to="/" className="uppercase">
                Go To Home Page
              </Link>
            </button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default NotFoundPage;
