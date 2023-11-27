import ArrowUP from "../components/arrowUP";
import Bg_web from "../components/Bg_web";
import Buku_terpopuler from "../components/Buku_terpopuler";
// import Footer from "../components/footer";
import Footer_putih from "../components/Footer_putih";
import Kategori from "../components/kategori";
import Navbar from "../components/Navbar";
import Welcome_koleksi from "../components/Welcome_koleksi";

const Koleksi = () => {
  return (
    <>
      <Navbar />
      <Bg_web />
      <Welcome_koleksi />
      <Kategori />
      <Buku_terpopuler />
      <ArrowUP />
      {/* <Footer /> */}
      <Footer_putih />
    </>
  );
};

export default Koleksi;
