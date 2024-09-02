import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState, useRef } from "react";
import Slide from "@mui/material/Slide";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const containerRef = useRef(null);
  console.log(toggle);

  return (
    <section>
      <section
        className="fixed z-50 border-2 w-full h-[15vh] flex justify-between px-10 items-center sm:px-7 md:p-14 lg:p-20"
        ref={containerRef}
      >
        <section className="w-[150px]">
          <img src="/hero/1.jpg" alt="" />
        </section>
        <section className="bg-blue-900 flex items-center justify-center  size-12 rounded-full">
          <RxHamburgerMenu
            className="scale-125 text-2xl font-extrabold text-white cursor-pointer"
            onClick={() => setToggle((prevState) => !prevState)}
          />
        </section>
      </section>
      <Slide
        in={toggle}
        container={containerRef.current}
        timeout={500}
        className="absolute left-0 top-0 h-screen bg-white  w-full z-40"
      >
        <ul className="">
          <IoMdClose onClick={() => setToggle((prevState) => !prevState)} />
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Slide>
    </section>
  );
};

export default Navbar;
