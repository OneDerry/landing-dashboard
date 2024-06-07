import Linegraph from "../../Chartcomponents/Charts/Linegraph";
import { TbLayoutDashboard } from "react-icons/tb";
import { useEffect, useState } from "react";

export default function Dbdisplay() {
  const counts = [
    {
      id: 1,
      name: "Total income",
      amount: "£20,000",
      per: "0.38%",
      desc: "Compared to last month",
    },
    {
      id: 2,
      name: "Profit",
      amount: "£900,000",
      per: "182.9%",
      desc: "Compared to last month",
    },
    {
      id: 3,
      name: "Total Views",
      amount: "8,000",
      per: "12.49%",
      desc: "Compared to last month",
    },
    {
      id: 4,
      name: "Conversion Rate",
      amount: "4.83%",
      per: "8.07%",
      desc: "Compared to last month",
    },
  ];

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const bite = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(bite);
    };
  }, []);

  return (
    <div className="h-screen ml-60 ">
      {loading ? (
        <>
          <div className="bg-white shadow-lg top-16 fixed z-[1] w-[83%] h-11 p-2 flex justify-between rounded-[9px] animate-pulse">
            <div className="font-bold font-serif text-xl text-blue-800"></div>
          </div>
          <div className=" flex items-center h-[130px] mt-[80px] gap-9 animate-pulse ">
          {counts.map((count) => (
              <div className="bg-white w-full shadow-lg hover:scale-105 pl-4 rounded-[20px] border p-4 animate-pulse">
                <div key={count.id}>
                  <div className="leading-9 text-sm font-bold text-slate-600">
                  </div>
                  <div className="text-2xl font-extrabold font-serif">
                  </div>
                  <div className="text-[12px] font-semibold text-slate-600 flex mt-2 items-center gap-2">
                    <p className="bg-blue-200 w-[50px] flex justify-center p-1 rounded-[20px]">
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7">
            <Linegraph />
          </div>
        </>
      ) : (
        <>
          <div className="bg-white shadow-lg top-16 fixed z-[1] w-[83%] h-11 p-2 flex justify-between rounded-[9px]">
            <h1 className="font-bold font-serif text-xl text-blue-700">
              Dashboard
            </h1>
            <button className="p-2 text-black border hover:border-b hover:bg-gradient-to-r from-orange-800 flex items-center rounded-[10px] gap-3 ">
              <TbLayoutDashboard />
              Customize Widgets
            </button>
          </div>
          <div className=" flex items-center h-[130px] mt-[80px]  gap-9 ">
            {counts.map((count) => (
              <div className="bg-white w-full  pl-4 rounded-[20px] border shadow-lg p-4">
                <div key={count.id}>
                  <div className="leading-9 text-sm font-bold text-slate-600">
                    {count.name}
                  </div>
                  <div className="text-2xl font-extrabold font-serif">
                    {count.amount}
                  </div>
                  <div className="text-[12px] font-semibold text-slate-600 flex mt-2 items-center gap-2">
                    <p className="bg-blue-200 w-[50px] flex justify-center p-1 rounded-[20px]">
                      {count.per}
                    </p>
                    {count.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7">
            <Linegraph />
          </div>
        </>
      )}
    </div>
  );
}
