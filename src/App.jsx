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

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
<<<<<<< HEAD
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/product/:name" element={<ProductDetails />} />
        
=======
      <Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/products" element={<ProductsLayout />}>
          <Route index element={<CollectionsPage />} />
        </Route>
>>>>>>> 2a1577a0776ee4cefd8f05cc7e4fabd9dc54946b
      </Route>
    )
  );
  return (
    <DrinksProvider>
      <RouterProvider router={router} />;
    </DrinksProvider>
  );
}
