import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agradecimentos from "./components/Agradecimentos";
import HomePage from "./components/HomePage";
import MenuPage from "./components/MenuPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/agradecimentos" element={<Agradecimentos />} />
      </Routes>
    </BrowserRouter>
  );
}
