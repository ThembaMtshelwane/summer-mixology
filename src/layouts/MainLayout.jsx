import { Outlet } from "react-router-dom";
import Navbar from "../components/Hero/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Background from "../components/Background";
const MainLayout = () => {
  return (
    <section className="overflow-hidden relative">
      <Navbar />
      <Hero />
      <Background />
      <Outlet />
    </section>
  );
};

export default MainLayout;
