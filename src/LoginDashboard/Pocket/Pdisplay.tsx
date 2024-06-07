import { TbLayoutDashboard } from "react-icons/tb";
import { SiStarlingbank } from "react-icons/si";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FcSimCardChip } from "react-icons/fc";
import { useEffect, useState } from "react";

export default function Pdisplay() {
  const dCards = [
    {
      id: 1,
      bankName: "Saman Bank",
      number: "7104 4477 2243 8989",
      ownerName: "Alex Jones",
      exp: "04/27",
    },
    {
      id: 2,
      bankName: "Zenith Bank",
      number: "7104 4477 2243 8989",
      ownerName: "Alex Jones",
      exp: "04/27",
    },
    {
      id: 3,
      bankName: "Nothing Bank",
      number: "7104 4477 2243 8989",
      ownerName: "Alex Jones",
      exp: "04/27",
    },
    {
      id: 4,
      bankName: "Control Bank",
      number: "7104 4477 2243 8989",
      ownerName: "Alex Jones",
      exp: "04/27",
    },
  ];
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const bite = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(bite);
    };
  }, []);
  return (
    <div className="h-screen  ml-60">
      {loading ? (
        <>
          <div className="bg-white shadow-lg top-16 fixed z-[1] w-[83%] h-11 p-2 flex justify-between rounded-[9px] animate-pulse">
            <div className="font-bold font-serif text-xl text-blue-700"></div>
          </div>
          <div className="grid grid-cols-3 mt-20 gap-4 animate-pulse">
            {dCards.map((card) => (
              <div className=" w-full bg-blue-200 bg-gradient-to-r from-orange-800  pl-4 rounded-[20px] hover:scale-[101%] border-4 border-black shadow-indigo-400 shadow-lg p-4">
                <div key={card.id}>
                  <div className=" flex items-center justify-between gap-3 leading-9 text-2xl font-bold text-blue-600">
                    <div className=" flex items-center gap-3 "></div>
                    <div></div>
                  </div>
                  <div className="mt-12 flex items-center gap-9 text-2xl font-extrabold font-serif">
                    <div className="text-7xl"></div>
                  </div>
                  <div className="text-[12px] font-semibold text-slate-600 flex justify-between items-center mt-12 ">
                    <p className="text-xl font-serif"></p>
                    <p className="text-lg"></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="bg-white shadow-lg top-16 fixed z-[1] w-[83%] h-11 p-2 flex justify-between rounded-[9px]">
            <h1 className="font-bold font-serif text-xl text-blue-700">
              Pocket
            </h1>
            <button className="p-2 text-black border hover:border-b hover:bg-gradient-to-r from-orange-800 rounded-[20px] flex items-center gap-3 ">
              <TbLayoutDashboard />
              Layout
            </button>
          </div>
          <div className="grid grid-cols-3 mt-20 gap-4">
            {dCards.map((card) => (
              <div className=" w-full bg-blue-200 bg-gradient-to-r from-orange-800  pl-4 rounded-[20px] hover:scale-[101%] border-4 border-black shadow-indigo-400 shadow-lg p-4">
                <div key={card.id}>
                  <div className=" flex items-center justify-between gap-3 leading-9 text-2xl font-bold text-blue-600">
                    <div className=" flex items-center gap-3 ">
                      <SiStarlingbank />
                      {card.bankName}
                    </div>
                    <div>
                      <HiOutlineDotsVertical />
                    </div>
                  </div>
                  <div className="mt-12 flex items-center gap-9 text-2xl font-extrabold font-serif">
                    <div className="text-7xl">
                      <FcSimCardChip />
                    </div>
                    {card.number}
                  </div>
                  <div className="text-[12px] font-semibold text-slate-600 flex justify-between items-center mt-12 ">
                    <p className="text-xl font-serif">{card.ownerName}</p>
                    <p className="text-lg">{card.exp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
