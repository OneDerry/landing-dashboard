import { useState } from "react";
import { TbLayoutDashboard } from "react-icons/tb";

export default function Adisplay() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleClick = () => {
    setBackgroundColor("black");
  };

  return (
    <div
      className="bg-[beige] h-screen ml-60 rounded-2xl "
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="bg-white text-blue-700 shadow-lg top-16 fixed z-[1] w-[83%] h-11 p-2 flex justify-between rounded-[9px]">
        <h1 className="font-bold font-serif text-xl">Appearance</h1>
        <button className="p-2 text-black border hover:border-b hover:bg-gradient-to-r from-orange-800 rounded-[20px] flex items-center gap-3 ">
          <TbLayoutDashboard />
          Layout
        </button>
      </div>
      <div
        className="mt-[80px] rounded-full p-7 "
        style={{ backgroundColor: backgroundColor }}
      >
        <div>
          <h1 className="text-2xl font-bold font-serif">Theme</h1>
          <p className="text-lg font-serif">Select your Apperance</p>
        </div>
        <div className="gap-4 p-4 mt-9 rounded-[20px] flex">
          <a href="#">
            <div className="w-[200px] h-[200px] bg-black  border-8 rounded-[25px] flex justify-center items-center">
              <div className="bg-white h-[170px] w-[170px] rounded-[10px] text-center text text-black ">
                <p className="flex justify-center items-center h-full text-xl font-medium">
                  Light
                </p>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="w-[200px] h-[200px]  bg-gradient-to-r from-white to-black   border-8 text-center rounded-[25px] p-2 ">
              <p className="flex justify-center text-gradient-to-r from-white to-black items-center h-full text-xl font-medium">
                System
              </p>
            </div>
          </a>

          <button onClick={handleClick}>
            <div className="w-[200px] h-[200px] bg-black border-8 rounded-[25px]">
              <p className="text-white h-full flex justify-center items-center text-xl font-medium ">
                Dark
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
