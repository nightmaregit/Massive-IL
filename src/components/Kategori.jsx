import { BiSolidCategoryAlt } from "react-icons/bi";

const Kategori = () => {
  return (
    <div className="mb-10 pt-9">
      <div className="flex justify-between px-[90px] items-center">
        <div className=" flex">
          <i className=" px-1">
            <BiSolidCategoryAlt className="text-3xl" />
          </i>
          <span className=" font-bold text-xl">Kategori</span>
        </div>
      </div>
      <div className="px-[94px] grid grid-cols-3  gap-8 pt-10  text-2xl  ">
        {/* <div> */}
        <button className=" py-[35px] border border-black bg-white hover:bg-masuk hover:text-white  rounded-2xl shadow-lg shadow-black h-[84px] py-6">
          Agama
        </button>
        <button className=" py-[35px] border border-black bg-masuk text-white hover:bg-white hover:text-black rounded-2xl shadow-lg shadow-black h-[84px] py-6 ">
          Sosial
        </button>
        <button className=" py-[35px] border border-black bg-white hover:bg-masuk hover:text-white rounded-2xl shadow-lg shadow-black h-[84px] py-6 ">
          Bahasa
        </button>
        <button className=" py-[35px] border border-black bg-masuk text-white hover:bg-white hover:text-black rounded-2xl shadow-lg shadow-black h-[84px] py-6 ">
          Sains Dan Matematika
        </button>
        <button className=" py-[35px] border border-black bg-white hover:bg-masuk hover:text-white rounded-2xl shadow-lg shadow-black h-[84px] py-6 ">
          Sejarah
        </button>
        <button className=" py-[35px] bg-masuk text-white border border-black hover:bg-white hover:text-black rounded-2xl shadow-lg shadow-black h-[84px] py-6 ">
          Kesenian
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Kategori;
