import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Koleksi from "./pages/Koleksi";
import Layanan from "./pages/Layanan";
import Tentang_kami from "./pages/Tentang_kami";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/koleksi" element={<Koleksi />}></Route>
        <Route path="/layanan" element={<Layanan />}></Route>
        <Route path="/tentang-kami" element={<Tentang_kami />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
