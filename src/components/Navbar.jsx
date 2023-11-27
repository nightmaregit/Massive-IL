import { useNavigate } from "react-router-dom";
import logo from "../assets/image/Logo.png";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-perpus font-serif ">
      <div className="flex items-center px-16 justify-between">
        <div>
          {/* <a href="#" className="font-bold text-2xl uppercase">
        brand
      </a> */}
          {/* <button onClick={()=> navigate('/')} className=' uppercase font-bold text-3xl pr-14'>brand</button> */}
          <img src={logo} alt="logo" className="h-auto w-32" />
        </div>
        <div className="flex text-lg">
          <button
            onClick={() => navigate("/")}
            className="block px-3 hover:text-blue-700"
          >
            Beranda
          </button>
          <button onClick={"/"}></button>
          <button
            onClick={() => navigate("/layanan")}
            className="block px-3 hover:text-blue-700"
          >
            Layanan
          </button>
          <button
            onClick={() => navigate("/koleksi")}
            className="block px-3 hover:text-blue-700"
          >
            Koleksi
          </button>
          <button
            onClick={() => navigate("/tentang-kami")}
            className="block px-3 hover:text-blue-700"
          >
            Tentang kami
          </button>
        </div>
        <div className="flex text-lg">
          <button
            onClick={() => navigate("/masuk")}
            className="block px-3 hover:text-blue-700"
          >
            Masuk
          </button>
          <button
            onClick={() => navigate("/daftar")}
            className="block px-3 hover:text-blue-700 bg-masuk text-white rounded-lg"
          >
            Daftar &gt;
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
