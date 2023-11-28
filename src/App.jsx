import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Koleksi from "./pages/Koleksi";
import Layanan from "./pages/Layanan";
import Tentang_kami from "./pages/Tentang_kami";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Peminjaman from "./pages/Peminjaman";
import Akun from "./pages/Akun";
import EditAkun from "./pages/EditAkun";
import DaftarKoleksi from "./pages/DaftarKoleksi";
import Buku_pendidikan from "./pages/Buku_pendidikan";
import Detail_buku from "./pages/Detail_buku";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Beranda />}></Route>
        <Route path='/koleksi' element={<Koleksi />}></Route>
        <Route path='/layanan' element={<Layanan />}></Route>
        <Route path='/tentang-kami' element={<Tentang_kami />}></Route>
        <Route path='/masuk' element={<SignIn />}></Route>
        <Route path='/daftar' element={<SignUp />}></Route>
        <Route path='/peminjaman' element={<Peminjaman />}></Route>
        <Route path='/akun' element={<Akun />}></Route>
        <Route path='/akun/edit' element={<EditAkun />}></Route>
        <Route path='/daftar-koleksi' element={<DaftarKoleksi />}></Route>
        <Route path='/koleksi/pendidikan' element={<Buku_pendidikan />}></Route>
        <Route path='/koleksi/pendidikan/Buku-Siswa-Ekonomi-Kelas-XI-SMA' element={<Detail_buku />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
