import Content from "../components/Welcome_beranda.jsx";
import LayananC from "../components/LayananC";
import ArrowUP from "../components/arrowUP";
import Bg_web from "../components/Bg_web";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

const Layanan = () => {
  return (
    <>
      <Navbar />
      <Bg_web />
      <Content />
      <LayananC />
      <ArrowUP />
      <Footer />
    </>
  );
};

export default Layanan;
