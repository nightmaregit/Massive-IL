import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
const Detail_buku = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="px-16 mb-5">
        <div className="flex pt-5">
          <div className="">
            <img src="https://source.unsplash.com/485x675?pohon" alt="" />
          </div>
          <div className="ml-3">
            <div className="flex">
              <span className=" font-bold">Judul Buku :</span>
              <p>Ekonomi Kelas XI Peminatan Ilmu Sosial </p>
            </div>
            <div className=" flex">
              <span className="  font-bold">Penulis :</span>
              <p>Endang Mulyani, Asep Nurcahyanto </p>
            </div>
            <div className="">
              <span className=" font-bold">Deskripsi :</span>
              <p>
                Buku ini dirancang sebagai panduan utama bagi siswa kelas XI SMA
                dan MA yang memilih kelompok peminatan Ilmu-Ilmu Sosial,
                khususnya dalam bidang Ekonomi. Dengan pendekatan yang
                komprehensif dan aplikatif, buku ini menyajikan materi-materi
                ekonomi yang sesuai dengan kurikulum yang berlaku.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="pt-3">
          <div className="border border-black ">
            <label
              className="flex justify-center bg-slate-800 text-white"
              htmlFor=""
            >
              DETAIL BUKU
            </label>
            <label className="flex  bg-slate-400" htmlFor="">
              Judul Seri     :<p className="px-3"> - </p>{" "}
            </label>
            <label className="flex  bg-slate-300" htmlFor="">
              Kode Buku     :<p className="px-3"> - </p>
            </label>
            <label className="flex  bg-slate-400" htmlFor="">
              Penerbit     &nbsp; : <p className="px-3"> Tiga Serangkai</p>
            </label>
            <label className="flex  bg-slate-300" htmlFor="">
              Bahasa      &nbsp;  : <p className="px-3"> Indonesia</p>
            </label>
            <label className="flex  bg-slate-400" htmlFor="">
              Deskripsi Fisik   : <p />
            </label>
            <label className="flex  bg-slate-300" htmlFor="">
              ISBN / ISSN    : <p className="px-3"> 978-623-209-311-9</p>
            </label>
            <label className="flex  bg-slate-400" htmlFor="">
              Lokasi       &nbsp;&nbsp; &nbsp; :{" "}
              <p className="px-3"> Perpustakaan</p>
            </label>
            <label
              className="flex justify-center bg-slate-800 text-white"
              htmlFor=""
            >
              KETERSEDIAAN
            </label>
            <label className="flex  bg-slate-400" htmlFor="">
              Jumlah Buku    : <p className="px-3"> 52</p>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail_buku;
