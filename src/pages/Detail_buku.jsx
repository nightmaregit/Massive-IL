import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
const Detail_buku = () => {
    const navigate = useNavigate()
    return (
      <div>
        <Navbar />
        <div className="mb-10">
          <div className="bg-masuk h-24 w-auto">
            <form className="">
              <div className=" relative px-[350px] mr-20 pt-5">
                <input
                  type="search"
                  id="default-search"
                  className="  w-full p-4 ps-10 text-sm text-gray-900 border    focus:ring-blue-800 focus:border-blue-800 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-800"
                  placeholder="Search judul buku..."
                  required=""
                />
                <button
                  type="submit"
                  className="text-white absolute end-[250px]  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-[54px] w-[94px] "
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className=" grid grid-cols-2  pt-10">
            <div className=" pl-56">
              <img src="https://source.unsplash.com/370x450?pohon" alt="" />
            </div>
            <div className="">
              <div className="flex">
                <span className=" font-bold">Judul buku :</span>
                <p className="pl-3">
                  Buku Siswa Ekonomi Untuk Kelas XI SMA dan MA Kelompok <br />{" "}
                  Peminatan Ilmu-Ilmu Sosial (1 Jilid )
                </p>
              </div>
              <div className="flex pt-2">
                <span className="font-bold">Penulis :</span>
                <p className="pl-3">Endang Mulyani, Asep Nurcahyanto</p>
              </div>
              <div className="flex pt-2">
                <span className="font-bold">No Panggil :</span>
                <p className="pl-3">U 330 END b 1</p>
              </div>
              <div className="flex pt-2">
                <span className=" font-bold">ISBN :</span>
                <p className="pl-3">978-623-209-311-9</p>
              </div>
              <div className="flex pt-2">
                <span className=" font-bold">Cetakan :</span>
                <p className="pl-3">Maret 2019</p>
              </div>
              <div className=" pr-40 pt-2">
                <span className=" font-bold">Deskripsi :</span>
                <p>
                  Buku ini dirancang sebagai panduan utama bagi siswa kelas XI
                  SMA dan MA yang memilih kelompok peminatan Ilmu-Ilmu Sosial,
                  khususnya dalam bidang Ekonomi. Dengan pendekatan yang
                  komprehensif dan aplikatif, buku ini menyajikan materi-materi
                  ekonomi yang sesuai dengan kurikulum yang berlaku.
                </p>
              </div>
              <div>
                <button
                  onClick={() => navigate("#")}
                  className=" border mt-20 ml-96 bg-masuk w-20 h-10 text-white rounded-full hover:animate-spin"
                >
                  Pinjam
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Detail_buku