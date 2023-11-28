import ArrowUP from "../components/ArrowUP";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import frame1 from "../assets/image/frame1.png";
import Library from "../assets/image/Library.png";
import { AiFillBug } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import Iframe from "react-iframe";

const Tentang_kami = () => {
  return (
    <>
      <Navbar />
      <ArrowUP />
      <div className="bg-[#0C356A] justify-center items-center flex flex-wrap ">
        <div className="pr-[104px] pl-[104px] pt-20 pb-[59px] flex flex-nowrap gap-20 ">
          <div className="flex-col justify-center items-start gap-2.5 inline-flex ">
            <div className="text-justify text-white text-[42px] font-bold font-['Lora'] leading-[42px] tracking-widest">
              SELAMAT DATANG <br />
              DI PERPUSTAKAAN SMAN 47 JAKARTA
            </div>
            <div className="text-white text-opacity-90 text-lg font-medium font-['Poppins'] leading-normal">
              Pusat literasi yang memajukan pengetahuan, imajinasi, dan
              pemikiran kritis.
            </div>
          </div>

          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/inZxrcEjxes?si=fJJhgcgivnICrihB"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className=" gap-8 flex flex-row ">
          <div className="w-[359px] h-[199px] ">
            <div className="bg-green-500 flex w-12 h-12 justify-center items-center rounded-full">
              <div className="text-white text-xl font-normal font-['Galindo'] leading-[30px]">
                1
              </div>
            </div>
            <div className="pt-[16px] text-white text-xl font-bold font-['Poppins'] leading-[30px]">
              Mendorong Minat Membaca
            </div>
            <div className="text-white text-opacity-80 text-base font-medium font-['Poppins'] leading-normal">
              Berkomitmen memupuk minat baca di kalangan siswa.
            </div>
          </div>

          <div className="w-[359px] h-[199px]  ">
            <div className="bg-green-500 flex w-12 h-12 justify-center items-center rounded-full">
              <div className="text-white text-xl font-normal font-['Galindo'] leading-[30px]">
                2
              </div>
            </div>
            <div className="pt-[16px] text-white text-xl font-bold font-['Poppins'] leading-[30px]">
              Menyediakan Akses ke Pengetahuan
            </div>
            <div className="text-white text-opacity-80 text-base font-medium font-['Poppins'] leading-normal">
              Menyediakan akses tak terbatas ke koleksi buku untuk proses
              pembelejaran siswa
            </div>
          </div>

          <div className="w-[359px] h-[199px] ">
            <div className="bg-green-500 flex w-12 h-12 justify-center items-center rounded-full">
              <div className="text-white text-xl font-normal font-['Galindo'] leading-[30px]">
                3
              </div>
            </div>
            <div className="pt-[16px] text-white text-xl font-bold font-['Poppins'] leading-[30px]">
              Mendorong Acara Pedidikan
            </div>
            <div className="text-white text-opacity-80 text-base font-medium font-['Poppins'] leading-normal">
              Menyelenggarakan kegiatan yang memberikan pengalaman membaca siswa
            </div>
          </div>
        </div>
      </div>
      <img src={frame1} className="scale-x-[-1]" />

      <div className="flex flex-col items-center justify-center pt-[117px] ">
        <div className="">
          <div className="pb-[37px] text-slate-800 text-4xl font-bold font-['Poppins'] leading-[44px]">
            LAYANAN KAMI
          </div>
          <div className="w-[790px] text-slate-500 text-xl font-medium font-['Poppins'] leading-[30px]">
            Dengan koleksi yang beragam dan fasilitas modern, perpustakaan kami
            bertujuan untuk memenuhi kebutuhan literasi dan pembelajaran siswa
          </div>

          <div className="pt-[125px] flex flex-row gap-[271px] ">
            <div>
              <div className="flex items-start">
                <div className="relative top-4  bg-green-500 flex w-12 h-12 justify-center items-center rounded-full">
                  <AiFillBug />
                </div>
                <div className="flex flex-col w-[240px] left-5 relative">
                  <div className=" text-slate-800 text-2xl font-bold font-['Poppins'] leading-loose">
                    Keanggotaan
                  </div>
                  <div className=" text-justify text-slate-500 text-base font-medium font-['Poppins'] leading-normal">
                    Pinjam buku dengan mudah sebagai anggota perpustakaan.{" "}
                  </div>
                </div>
              </div>
              <div className="flex ">
                <div className="relative top-4  bg-green-500 flex w-12 h-12 justify-center items-center rounded-full">
                  <AiFillBug />
                </div>
                <div className="flex flex-col w-[240px] left-5 relative">
                  <div className=" text-slate-800 text-2xl font-bold font-['Poppins'] leading-loose">
                    Keanggotaan
                  </div>
                  <div className=" text-justify text-slate-500 text-base font-medium font-['Poppins'] leading-normal">
                    Pinjam buku dengan mudah sebagai anggota perpustakaan.{" "}
                  </div>
                </div>
              </div>
              <div className="flex ">
                <div className="relative top-4  bg-green-500 flex w-12 h-12 justify-center items-center rounded-full">
                  <AiFillBug />
                </div>
                <div className="flex flex-col w-[240px] left-5 relative">
                  <div className=" text-slate-800 text-2xl font-bold font-['Poppins'] leading-loose">
                    Keanggotaan
                  </div>
                  <div className=" text-justify text-slate-500 text-base font-medium font-['Poppins'] leading-normal">
                    Pinjam buku dengan mudah sebagai anggota perpustakaan.{" "}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img src={Library} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center  pt-[150px]">
        <div className="">
          <div className="flex flex-col justify-center items-center  ">
            <div className=" text-slate-800 text-5xl font-bold font-['Poppins'] leading-[60px]">
              Hubungi Kami
            </div>
            <div className=" text-slate-500 text-xl font-medium font-['Poppins'] leading-[30px]">
              Jl. Delman Utama I, Kebayoran Lama Jakarta Selatan
            </div>
          </div>
          <div className="pt-[96px]">
            <div className="flex flex-row gap-[300px]">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-green-500 flex w-12 h-12 justify-center items-center rounded-full">
                  <div className="text-white text-xl font-normal font-['Galindo'] leading-[30px]">
                    <AiFillBug />
                  </div>
                </div>
                <div>
                  <div className=" text-center text-slate-800 text-3xl font-bold font-['Poppins'] leading-[38px]">
                    Email
                  </div>
                  <div className=" text-center text-slate-500 text-xl font-medium font-['Poppins'] leading-[30px]">
                    info@sman47jkt.com
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className="bg-green-500 flex w-12 h-12 justify-center items-center rounded-full">
                  <div className="text-white text-xl font-normal font-['Galindo'] leading-[30px]">
                    <AiFillBug />
                  </div>
                </div>
                <div>
                  <div className=" text-center text-slate-800 text-3xl font-bold font-['Poppins'] leading-[38px]">
                    Phone
                  </div>
                  <div className=" text-center text-slate-500 text-xl font-medium font-['Poppins'] leading-[30px]">
                    089512345678
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className="bg-green-500 flex w-12 h-12 justify-center items-center rounded-full">
                  <div className="text-white text-xl font-normal font-['Galindo'] leading-[30px]">
                    <AiFillBug />
                  </div>
                </div>
                <div>
                  <div className=" text-center text-slate-800 text-3xl font-bold font-['Poppins'] leading-[38px]">
                    Social
                  </div>
                  <div className=" text-center text-slate-500 text-xl font-medium font-['Poppins'] leading-[30px]">
                    <div className="flex  justify-center ">
                      <FaYoutube />
                      <FaFacebookSquare />
                      <IoLogoInstagram />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-96">
        <div className=" bg-[#0C356A] h-[496px] flex flex-row justify-center ">
          <div>
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1251747709202!2d106.77053897499064!3d-6.247231272756671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11d4eaabb23%3A0xe094bdace28ce539!2sSMAN%2047%20Jakarta!5e0!3m2!1sen!2sid!4v1701176388999!5m2!1sen!2sid"
              className=" h-[545px] w-[1151px] bottom-72 relative  "
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tentang_kami;
