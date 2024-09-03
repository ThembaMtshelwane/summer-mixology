import About from "./components/About/About";
import { DrinksProvider } from "./components/context/DrinksContext";
import Hero from "./components/Hero/Hero";
import ProductSection from "./components/ProductSection/ProductSection";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Hero/Navbar/Navbar";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/single" element={<>single page </>} />
      </Route>
    )
  );
  return (
    <DrinksProvider>
      <RouterProvider router={router} />;
    </DrinksProvider>
  );
}
