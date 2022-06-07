import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agradecimentos from "./components/Agradecimentos";
import HomePage from "./components/HomePage";
import MenuPage from "./components/MenuPage";
import Rifinha from "./components/Rifinha";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/agradecimentos" element={<Agradecimentos />} />
        <Route path="/rifa" element={<Rifinha />} />
      </Routes>
    </BrowserRouter>
  );
}
