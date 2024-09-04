import { Outlet } from "react-router-dom";
import Navbar from "../components/Hero/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Background from "../components/Background";
import Footer from "../components/Footer/Footer";
const MainLayout = () => {
  return (
    <section className="overflow-hidden relative">
      {/* <Navbar /> */}
      <Hero />
      <Background />
      {/* <Footer /> */}
      <Outlet />
    </section>
  );
};

export default MainLayout;
