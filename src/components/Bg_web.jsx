import frame from "../assets/image/frame.png";

const Bg_web = () => {
  return (
    <div className=" bg-frame">
      <div>
        <img
          // src="https://tecdn.b-cdn.net/img/new/standard/city/042.jpg "
          src={frame}
          className=" h-[450px] w-10/12 py-12 mx-auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default Bg_web;
