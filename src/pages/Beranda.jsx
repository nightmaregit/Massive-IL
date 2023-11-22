import Content from "../components/Content";
import LayananC from "../components/LayananC";
import ArrowUP from "../components/arrowUP";
import Bg_web from "../components/bg_web";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
// import {useNavigate} from 'react-router-dom'

const Beranda = () => {
  // const navigate = useNavigate
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

export default Beranda;
