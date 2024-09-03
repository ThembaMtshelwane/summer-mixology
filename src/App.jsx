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
import ProductsLayout from "./layouts/ProductsLayout";
import CollectionsPage from "./pages/CollectionsPage";
import ProductDetails from "./components/ProductSection/ProductDetails";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />

        <Route path="/products" element={<ProductsLayout />}>
          <Route index element={<CollectionsPage />} />
          <Route path="/products/:name" element={<ProductDetails />} />
        </Route>
      </Route>
    )
  );
  return (
    <DrinksProvider>
      <RouterProvider router={router} />
    </DrinksProvider>
  );
}
