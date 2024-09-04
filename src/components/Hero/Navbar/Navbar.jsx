import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState, useRef } from "react";
import Slide from "@mui/material/Slide";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const containerRef = useRef(null);
  console.log(toggle);
  const [imageSrc, setImageSrc] = useState("/menu/1.jpg");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleImageChange = (src) => {
    setImageSrc(src);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="">
      <section
        className={`fixed z-50 w-full h-[15vh] flex justify-between p-5 items-center sm:px-7 md:p-14 lg:p-14 transition-colors duration-300 ${
          toggle ? "bg-transparent" : ""
        } 
        ${isScrolled ? "bg-[#173e59] " : "bg-transparent"}
        `}
      >
        <Link to="/" className="w-[150px]" onClick={() => setToggle(false)}>
          <img
            src="/logo/logo.svg"
            alt=""
            className="w-full h-full object-cover object-center underline hover:scale-125-[0.8]"
          />
        </Link>
        <div className="flex">
          <p className="items-center justify-center text-center mt-3 mr-3 text-white font-oswald font-extralight">Menu</p>
        <section className="bg-blue-900 flex items-center justify-center  size-12 rounded-full">
          {toggle ? (
            <IoMdClose
              className="underline hover:scale-125-125 text-2xl font-extranormal text-white cursor-pointer"
              onClick={() => setToggle((prevState) => !prevState)}
            />
          ) : (
            <RxHamburgerMenu
              className="underline hover:scale-125-125 text-2xl font-extranormal text-white cursor-pointer"
              onClick={() => setToggle((prevState) => !prevState)}
            />
          )}
        </section>
        </div>
       
      </section>
      <Slide
        in={toggle}
        container={containerRef.current}
        timeout={500}
        className="fixed  left-0 top-0 h-screen bg-[#173e59]  w-full z-40 "
      >
        <section className=" font-bebas border-yellow-600">
          <section className="flex flex-col max-h-[85vh]   mt-[15vh]">
            <section className=" h-[85vh]  flex flex-col items-center relative justify-center sm:flex-row">
              <ul className="h-[100%] w-full flex flex-col  justify-center items-center z-20 sm:w-[50%]">
                <Link
                  to="/"
                  className="font-bebas text-center py-5 mb-5 text-4xl font-normal text-white hover:underline hover:scale-125 w-[80%] cursor-pointer"
                  onMouseEnter={() => handleImageChange("/menu/4.jpg")}
                  onClick={() => setToggle(false)}
                >
                  Welcome
                </Link>
                <Link
                  to="/products"
                  className="font-bebas text-center py-5 mb-5 text-4xl font-normal text-white hover:underline hover:scale-125  w-[80%] cursor-pointer"
                  onMouseEnter={() => handleImageChange("/menu/3.jpg")}
                  onClick={() => setToggle(false)}
                >
                  All Cocktails
                </Link>
                <Link
                  to="/categories"
                  className="font-bebas text-center py-5 mb-5 text-4xl font-normal text-white hover:underline hover:scale-125  w-[80%] cursor-pointer"
                  onMouseEnter={() => handleImageChange("/menu/6.jpg")}
                  onClick={() => setToggle(false)}
                >
                  Categories
                </Link>
                <Link
                  to="#about"
                  className="font-bebas text-center py-5 mb-5 text-4xl font-normal text-white hover:underline hover:scale-125  w-[80%] cursor-pointer"
                  onMouseEnter={() => handleImageChange("/menu/2.jpg")}
                  onClick={() => setToggle(false)}
                >
                  About
                </Link>
              </ul>
              
              <section className="bg-red-700 h-[115vh] w-full fixed top-0 opacity-45 sm:relative sm:top-[-15vh] sm:w-[50%] sm:opacity-100">
                <img
                  src={imageSrc}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
                
              </section>
            </section>
          </section>
        </section>
      </Slide>
    </section>
  );
};

export default Navbar;
