import { Outlet } from "react-router-dom";
import Navbar from "../components/Hero/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
const MainLayout = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Outlet />
    </section>
  );
};

export default MainLayout;
