import { Link } from "react-router-dom";
import Navbar from "../components/Hero/Navbar/Navbar";

const NotFoundPage = () => {
  return (
    <section className="border-2 border-black h-screen relative overflow-hidden bg-[#173e59] flex ">
      <Navbar />

      <section
        className="border-2 border-green-400 h-full w-full flex items-center justify-center blur-sm absolute "
        style={{
          backgroundImage: "url('/not-found/1.png')",
          backgroundPosition: "center",
        }}
      ></section>

      <section className="flex h-full w-full justify-center items-center z-10">
        <section className="h-[40%] w-full max-w-[450px] sm:w-[70%] flex flex-col items-center justify-around ">
          <h1 className="text-8xl md:text-9xl">404</h1>
          <h2 className="text-3xl md:text-4xl  text-white">Error 404</h2>
          <p className="text-white text-xl">The page is mot available</p>

          <button className="bg-white border-none">
            <Link to="/" className="uppercase">
              Go To Home Page
            </Link>
          </button>
        </section>
      </section>
    </section>
  );
};

export default NotFoundPage;
