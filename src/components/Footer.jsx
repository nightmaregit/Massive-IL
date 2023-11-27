import {
  FiAtSign,
  FiBook,
  FiFacebook,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";
import logo from "../assets/image/Logo.png";
const Footer = () => {
  return (
    <footer className='flex flex-col items-center bg-perpus'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 mb-7'>
          <div className='w-[303px] h-[143px] '>
            <img src={logo} alt='logo' className='object-cover mt-6' />
          </div>

          <div className='flex flex-col items-center justify-center pt-5'>
            <h4 className='text-xl leading-4 font-medium'>
              Update terbaru kami
            </h4>
            <div className='flex gap-[14px] mt-4'>
              <FiYoutube />
              <FiFacebook />
              <FiInstagram />
            </div>
          </div>

          <div className='font-medium text-xs text-black leading-4 flex flex-col gap-[22px] pt-[30px] w-52 ml-52'>
            <h6 className='text-sm'>Hubungi Kami</h6>

            <p className='w-52'>
              Alamat: Jl, Delman Utama 1, Kebayoran Lama Jakarta Selatan
            </p>

            <div>
              <p className='flex gap-1 items-center'>
                <FiAtSign />
                <span>info@sman47jkt.com</span>
              </p>
              <p className='flex gap-1 items-center'>
                <FiBook />
                <span>021 7260904</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*Copyright section*/}
      <div className='w-full bg-masuk text-center text-[#8896AB] font-medium text-xl leading-[30px] h-10 flex justify-center items-center'>
        © 2023 All rights reserved - by Startex
      </div>
    </footer>
  );
};

export default Footer;
