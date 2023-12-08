import Sidebar from "../components/Sidebar";
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineCheckBox } from "react-icons/md";

function DashboardAdmin() {
  return (
    <div className="flex flex-row ">
      <Sidebar />
      <div className="flex flex-col w-screen m-10 pt-20 gap-14">
        <div className="flex flex-row justify-between ">
          <div className=" bg-[#FFF7E9] w-[250px] h-[90px] flex border-l-[12px] rounded-xl font-semibold text-xl justify-between px-3  items-center">
            Admin
            <div className=" w-10 h-10 rounded-full flex items-center justify-center bg-slate-400">
              3
            </div>
          </div>
          <div className=" bg-[#FFF7E9] w-[250px] h-[90px] flex border-l-[12px] rounded-xl font-semibold text-xl justify-between px-3 items-center">
            Data Buku
            <div className=" w-10 h-10 rounded-full flex items-center justify-center bg-slate-400">
              100
            </div>
          </div>

          <div className=" bg-[#FFF7E9] w-[250px] h-[90px] flex border-l-[12px] rounded-xl font-semibold text-xl justify-between px-3 items-center">
            Data <br /> Anggota
            <div className=" w-10 h-10 rounded-full flex items-center justify-center bg-slate-400">
              100
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-10 ">
          <div className=" bg-[#FFF7E9] w-[250px] h-[90px] flex border-l-[12px] rounded-xl font-semibold text-xl justify-between px-3  items-center">
            Buku yang <br /> dipinjam
            <div className=" w-10 h-10 rounded-full flex items-center justify-center bg-slate-400">
              3
            </div>
          </div>
          <div className=" bg-[#FFF7E9] w-[250px] h-[90px] flex border-l-[12px] rounded-xl font-semibold text-xl justify-between px-3 items-center">
            Buku yang <br /> terlambat
            <div className=" w-10 h-10 rounded-full flex items-center justify-center bg-slate-400">
              100
            </div>
          </div>
        </div>
        <div className="flex flex-row  gap-10 ">
          <div className=" bg-[#FFF7E9] w-[300px] h-[90px] flex flex-wrap border-l-[12px] rounded-xl font-semibold text-2xl  px-3 justify-between items-center">
            <div className=" text-2xl">
              Data Peminjaman
              <div className="text-base w-8 h-8 rounded-full flex items-center justify-center bg-slate-400">
                100
              </div>
            </div>
            <div className=""><FaCartPlus className="text-[35px]"/></div>
          </div>
          <div className=" bg-[#FFF7E9] w-[300px] h-[90px] flex flex-wrap border-l-[12px] rounded-xl font-semibold text-2xl  px-3 justify-between items-center">
            <div className=" text-2xl">
              Data Peminjaman
              <div className="text-base w-8 h-8 rounded-full flex items-center justify-center bg-slate-400">
                100
              </div>
            </div>
            <div className=""><MdOutlineCheckBox className="text-[40px]"/></div>
          </div>          
        </div>

        
      </div>
    </div>
  );
}

export default DashboardAdmin;
