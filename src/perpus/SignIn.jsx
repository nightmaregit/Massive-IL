import React from "react";
import Logo from "../assets/Logo.png";
import google from "../assets/google.svg";
import Never from "../assets/Never.png"

const SignIn = () => {
  return (
    <div className="page-container">
      <div className="SignIn ">
        {/* bagian1 */}
        <div className="bagian2-signin ">
          <div className="w-full ">
            {" "}
            <img src={Logo} className="" alt="" />{" "}
          </div>
          <div className="textbagian2  leading-9 pb-[29px] pt-[13px] ">Masuk</div>
          
            <button className="buttonMasukgoogle-signin  inline-flex items-center justify-center gap-4">
              <img src={google} className="w-10 h-10" alt="" />
              Masuk dengan Google
            </button>
 
          <div className="w-full  h-[18px] justify-center items-center gap-[21px] inline-flex pt-[36px] pl-[36px] pr-[36px] ">
            <div className="grow  h-[0px] border border-black border-opacity-25">
              {" "}
            </div>
            <div className="text-black grow-0 text-opacity-25 text-[15px] font-medium font-['Inter'] ">
              atau Masuk dengan Email
            </div>
            <div className="grow h-[0px] border border-black border-opacity-25"></div>
          </div>

          <div>
            <form>
              <div className="flex-col ">
                {/* masukan Email */}
                <div className="pt-[15px] ">
                  <label className="label-signin">
                    Email
                    <div className="pt-[11px] ">
                      <input
                        className="input-signin w-[445px]"
                        type="text"
                        placeholder="Masukan Email"
                      />
                    </div>
                  </label>
                </div>
                {/* masukan Email end */}

                {/* masukan Kata Sandi */}
                <div className="pt-[15px] ">
                  <label className="label-signin">
                    Kata Sandi
                    <div className="pt-[11px] ">
                      <input
                        className="input-signin  w-[445px]"
                        type="text"
                        placeholder="Masukan Kata Sandi"
                      />
                    </div>
                  </label>
                </div>
                {/* masukan Kata Sandi end */}

                {/* ingat saya lupa kata sandi */}
                <div className="flex items-center mb-[39px] mt-[26px] w-full ">
                    <input id="default-checkbox " type="checkbox" value="" className="  w-[18px] h-[18px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "/>
                    <label for="default-checkbox" className=" w-1/2 ms-[10px] align-middle  font-semibold text-gray-900 dark:text-gray-300 text-[15px] font-['Inter',sans-serif]">Ingat Saya</label>
                    <a className="text-indigo-700 font-semibold font['Inter'] text-right w-1/2 " href="">Lupa kata sandi?</a>                 
                </div>
                {/* ingat saya lupa kata sandi */}

                {/* button daftar */}
                <div className="">
                  <button className="buttonDaftar-signin w-[445px]  m-0 p-0"> Masuk </button>
                </div>
                {/* button daftar end */}
              </div>
            </form>
          </div>
        </div>
        {/* bagian1 end */}
        
        <div className="bagian1-signin">
        <img  src={Never} className="" alt="" />{" "}
        < div className="textbagian1">
            Masuk Untuk
            <br />
            Memulai Petualanganmu
          </div>

          <button className="buttonMasuk-signin "> Masuk </button>

        </div>
      </div>
    </div>
  );
};

export default SignIn;
