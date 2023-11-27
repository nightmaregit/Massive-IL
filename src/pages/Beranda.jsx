import LayananC from "../components/LayananC";
import ArrowUP from "../components/arrowUP";
import Bg_web from "../components/Bg_web";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import Welcome_beranda from "../components/Welcome_beranda.jsx";
// import {useNavigate} from 'react-router-dom'

const Beranda = () => {
  // const navigate = useNavigate
  return (
    <>
      <Navbar />
      <Bg_web />
      <Welcome_beranda />
      <LayananC />
      <ArrowUP />
      <Footer />
    </>
  );
};

export default Beranda;
