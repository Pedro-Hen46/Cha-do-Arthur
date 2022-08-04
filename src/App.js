import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agradecimentos from "./components/Agradecimentos";
import HomePage from "./components/HomePage";
import MenuPage from "./components/MenuPage";
import GalleryImages from "./components/GalleryImages";
import Products from "./components/Products";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/agradecimentos" element={<Agradecimentos />} />
        <Route path="/galeria" element={<GalleryImages />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}
