const Kategori = () => {
  return (
    <div className="bg-white h-[450px]">
      <div className="flex justify-between px-16 items-center">
        <div className="">
          <span className=" font-bold text-xl">Kategori</span>
        </div>
        <div>
          <button className=" bg-blue-400 rounded-full w-10 h-10">❌</button>
        </div>
      </div>
      <div className="px-16 grid grid-cols-3 gap-[32px]  pt-10  text-2xl">
        {/* <div> */}
        <button className=" py-[35px] bg-blue-400 hover:bg-blue-500 rounded-2xl shadow-lg shadow-black ">
          Agama
        </button>
        <button className=" py-[35px] bg-blue-400 hover:bg-blue-500 rounded-2xl shadow-lg shadow-black ">
          Sosial
        </button>
        <button className=" py-[35px] bg-blue-400 hover:bg-blue-500 rounded-2xl shadow-lg shadow-black ">
          Bahasa
        </button>
        <button className=" py-[35px] bg-blue-400 hover:bg-blue-500 rounded-2xl shadow-lg shadow-black ">
          Sains Dan Matematika
        </button>
        <button className=" py-[35px] bg-blue-400 hover:bg-blue-500 rounded-2xl shadow-lg shadow-black ">
          Sejarah
        </button>
        <button className=" py-[35px] bg-blue-400 hover:bg-blue-500 rounded-2xl shadow-lg shadow-black ">
          Kesenian
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Kategori;
