import Sidebar_admin from "../components/sidebar_admin";
import ProfilePicture from "../assets/image/profile.png";
import { useNavigate } from "react-router-dom";

function TambahBuku() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row  ">
      <Sidebar_admin />

      <div className="flex flex-col w-screen  ">
        <div className=" mb-10 h-16 flex justify-end">
          <div className=" text-black flex  items-center pr-5  gap-[30px]">
            <div>
              <h1 className="font-semibold text-sm leading-normal">Betty</h1>
              <span className="text-slate-300 ">Admin</span>
            </div>

            {/* Ini dibawah ntar diisi jd Image profile picturenya */}
            <div className="w-[45px] h-[45px] bg-black rounded-full">
              <img
                src={ProfilePicture}
                alt="profile picture"
                className="object-cover w-[45px] h-[45px]"
              />
            </div>
          </div>
        </div>
        <div className="px-16 font-semibold text-3xl">Tambah Buku</div>
        <div className="px-16 mb-5 ">
          <div className="pt-3">
            <div className=" ">
              <label
                className="flex justify-center bg-gray-600 text-white"
                htmlFor=""
              >
                TAMBAH BUKU
              </label>
              <label className="flex  bg-slate-400 p-2" htmlFor="">
                Judul Seri     :<p className="px-3"> - </p>{" "}
              </label>
              <label className="flex  bg-white p-2" htmlFor="">
                Kode Buku     :<p className="px-3"> - </p>
              </label>
              <label className="flex  bg-slate-400 p-2" htmlFor="">
                Penerbit     &nbsp; : <p className="px-3"> Erlangga</p>
              </label>
              <label className="flex  bg-white p-2" htmlFor="">
                Bahasa      &nbsp;  : <p className="px-3"> Indonesia</p>
              </label>
              <label className="flex  bg-slate-400 p-2" htmlFor="">
                Deskripsi Fisik   :  <p>89 hlm</p>
              </label>
              <label className="flex  bg-white p-2" htmlFor="">
                ISBN / ISSN    : <p className="px-3"> -</p>
              </label>
              <label className="flex  bg-slate-400 p-2" htmlFor="">
                Lokasi       &nbsp;&nbsp; &nbsp; :{" "}
                <p className="px-3"> Perpustakaan</p>
              </label>

              <label className="flex  bg-white p-2" htmlFor="">
                Cover Buku     :  <button className="bg-blue-600 w-[70px] p-1 text-white font-semibold rounded-md">Upload</button>
              </label>
            </div>
            <div className="pt-10">
              <div className=" ">
                    <div className="flex gap-4">
                        <button className="bg-blue-600 text-white font-medium w-[100px] rounded-md p-1">Simpan</button>
                       <button onClick={()=>navigate("/admin/databuku")} className="bg-red-600 text-white font-medium w-[100px] rounded-md p-1">Batal</button>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TambahBuku;
