import ArrowUP from "../components/arrowUP";
import Bg_web from "../components/Bg_web";
// import Footer from "../components/footer";
import Footer_putih from "../components/Footer_putih";
import Navbar from "../components/Navbar";
import Novel from "../components/Novel";
import Pendidikan from "../components/Pendidikan";
import p9 from "../assets/image/buku-pendidikan/p9.png";
import Cerpen from "../components/cerpen";
import Komik from "../components/komik";

const Koleksi = () => {
  return (
    <>
      <Navbar />
      <Bg_web />
      <div className=" mt-32 px-24 mb-11">
        <div className=" grid grid-cols-3  gap-4">
          <div className=" bg-masuk  h-20  flex">
            <button className=" text-white mx-auto">masuk</button>
          </div>
          <div className=" bg-masuk h-20  flex">
            <button className=" text-white mx-auto">masuk</button>
          </div>
          <div className=" bg-masuk h-20  flex">
            <button className="text-white mx-auto">masuk</button>
          </div>
          <div className=" bg-masuk h-20  flex">
            <button className=" text-white mx-auto">masuk</button>
          </div>
          <div className=" bg-masuk h-20  flex">
            <button className="text-white mx-auto">masuk</button>
          </div>
          <div className=" bg-masuk h-20  flex">
            <button className="text-white mx-auto">masuk</button>
          </div>
        </div>
      </div>
      <Pendidikan />
      <Novel />
      <div>
        <div className="bg-masuk w-auto h-[585px] mb-5 px-3">
          <div className=" pt-5  px-20">
            <div className="flex justify-between items-center">
              <span className="text-white font-bold text-2xl">Terfavorit</span>
              <span className="text-white">Lainnya &gt;</span>
            </div>
            <div className="flex pt-10">
              <div>
                <img className="w-[350px] h-[391px] " src={p9} alt="" />
              </div>
              <div className="pt-10 pl-10 ">
                <span className="text-white font-bold">
                  Judul Buku : Buku Siswa Ekonomi Untuk Kelas XI SMA dan MA
                  Kelompok lnseminate Ilmu-Ilmu Sosial (1 Jilid ) <br /> Penulis
                  : Endang Mulyani, Asep Nurcahyanto <br /> Kategori
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cerpen />
      <Komik />
      <ArrowUP />
      {/* <Footer /> */}
      <Footer_putih />
    </>
  );
};

export default Koleksi;
