// import wave from "../assets/image/BgWave.png";
import fotos from "../assets/image/fotoS.png";
import frame1 from "../assets/image/frame1.png";
import frame2 from "../assets/image/frame2.png";
import Kategori from "./Kategori";
import p9 from "../assets/image/buku-pendidikan/p9.png";
import { useNavigate } from "react-router-dom";
const Content_beranda = () => {
  const navigate = useNavigate;
  return (
    <>
      <div>
        <div className="bg-[#0C356A] justify-center items-center flex flex-wrap ">
          <div className="pr-[104px] pl-[104px] pt-20  flex flex-nowrap gap-16 ">
            <div className="flex-col justify-center items-start gap-2.5 inline-flex">
              <div className="text-justify w-[400px]  text-white text-[36px] font-bold font-['Lora'] leading-[36px] tracking-widest">
                SELAMAT DATANG <br />
                DI PERPUSTAKAAN SMAN 47 JAKARTA
              </div>
              <div className="text-white text-opacity-90 text-base font-normal font-['Poppins'] leading-normal">
                Pusat literasi yang memajukan pengetahuan, imajinasi, dan
                pemikiran kritis.
              </div>
            </div>

            <div>
              <iframe
                width="500"
                height="300"
                src="https://www.youtube.com/embed/inZxrcEjxes?si=fJJhgcgivnICrihB"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={frame1} alt="" />
      </div>

      <div className=" container mx-auto ">
        <div className="shadow-xlrounded-lg p-10 ">
          <div className="text-center">
            <span className=" font-bold text-7xl   ">Selamat Datang</span>
            <br />
            <span className=" font-bold text-5xl ">
              Di Perpustakaan SMAN 47 Jakarta
            </span>
          </div>
          <div className="grid grid-cols-2 px-16 pt-5">
            <div className=" pr-4  ">
              <img
                // src="https://source.unsplash.com/586x365?sekolah-kita"
                src={fotos}
                alt=""
                className=""
              />
            </div>
            <div className=" ">
              <span className=" text-xl font-semibold">
                Website perpustakaan ini menawarkan pengalaman informasi yang
                mengagumkan dengan desain intuitif, navigasi yang mudah, dan
                koleksi buku yang kaya. <br /> <br /> Keamanan informasi yang
                canggih dan program edukasi yang beragam menjadikan situs ini
                sebagai pusat sumber daya literasi yang modern.
              </span>
              <div className="bg-masuk w-20 h-8 rounded-full flex mt-10">
                <button className=" mx-auto text-white ">Masuk</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-masuk w-auto h-52"></div>
      </div>

      <Kategori />

      <div>
        <img src={frame2} alt="" />

        <div className="bg-masuk w-auto h-[700px] mb-10">
          <div className="pt-4">
            <span className="flex text-center justify-center text-white font-bold text-xl">
              Temukan dunia pengetahuan di ujung jari Anda! Jelajahi koleksi
              kami. <br /> Temukan buku yang menginspirasi Ayo mulai membaca
              sekarang!{" "}
            </span>
            <hr className="border border-white mt-5 " />
          </div>
          <div className="grid grid-cols-3 px-28 gap-7 pt-14">
            <div>
              <img className="w-[341px] h-[450px]" src={p9} alt="" />
            </div>
            <div>
              <img className="w-[341px] h-[450px]" src={p9} alt="" />
            </div>
            <div>
              {/* <img src="https://source.unsplash.com/341x491?pohon" alt="" /> */}
              <img className="w-[341px] h-[450px]" src={p9} alt="" />
            </div>
          </div>
          <div className="flex mx-auto  bg-perpus w-24 h-8 rounded-full mt-10 ">
            <button
              onClick={() => navigate("/koleksi")}
              className=" text-black mx-auto font-bold"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content_beranda;
