import { DrinksProvider } from "./components/context/DrinksContext";

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
import CategoriesPage from "./pages/CategoriesPage";
import Background from "./components/Background";
import { ParallaxProvider } from "react-scroll-parallax";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer/Footer";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/bg" element={<Background />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/products" element={<ProductsLayout />}>
          <Route index element={<CollectionsPage />} />
          <Route path="/products/:name" element={<ProductDetails />} />
        </Route>
        <Route path="/categories" element={<ProductsLayout />}>
          <Route index element={<CategoriesPage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />

       
      </Route>
    )
  );
  return (
    <DrinksProvider>
      <ParallaxProvider>
        <RouterProvider router={router} />
      </ParallaxProvider>
    </DrinksProvider>
  );
}
