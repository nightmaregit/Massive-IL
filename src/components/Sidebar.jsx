import { useNavigate } from "react-router-dom";
import {
  ChatIcon,
  HeartIcon,
  HomeIcon,
  LeaveIcon,
  PlusIcon,
  StatusIcon,
  StudentIcon,
} from "../assets/icons";
import Logo from "../assets/logo-bright.png";

const Peminjaman = () => {
  const navigate = useNavigate();
  const items = [
    {
      id: 1,
      title: "Beranda",
      url: "/beranda",
      icon: <HomeIcon />,
    },
    {
      id: 2,
      title: "Profil",
      url: "/profil",
      icon: <StudentIcon />,
    },
    {
      id: 3,
      title: "Layanan Peminjaman",
      url: "/peminjaman",
      className:
        "rounded-tl-full rounded-bl-full bg-[#FFF7E9] pl-[35px] w-72 pt-[17px] pb-[19px] pr-16 text-[#0C356A] select-none",
    },
    {
      id: 4,
      title: "Status",
      url: "/status",
      icon: <StatusIcon />,
    },
    {
      id: 5,
      title: "Buku dipinjam",
      url: "/buku-dipinjam",
      icon: <PlusIcon />,
    },
    {
      id: 6,
      title: "Favorit",
      url: "/favorit",
      icon: <HeartIcon />,
    },
    {
      id: 7,
      title: "Tentang Kami",
      url: "/about",
      icon: <ChatIcon />,
    },
    {
      id: 8,
      title: "Keluar",
      url: "/logout",
      icon: <LeaveIcon />,
    },
  ];

  return (
    <div className="w-[345px] min-h-screen bg-[#0C356A] flex flex-col mr-[31px]">
      <img src={Logo} alt="logo" className="h-32 object-cover" />
      <div className="flex flex-col gap-[15px] items-end justify-center font-medium leading-normal text-lg">
        {items.map((item) => (
          <div
            key={item.id}
            className={
              item.className
                ? item.className
                : "flex items-center px-6 py-4 justify-start gap-6 text-[18px] font-semibold cursor-pointer w-[299px] text-gray-200 hover:bg-[#FFF7E9] rounded-tl-full rounded-bl-full hover:text-[#0C356A] transition"
            }
            onClick={() => navigate(item.url)}
          >
            {item.icon}
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Peminjaman;
