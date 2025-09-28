import { useState } from "react";
import { TbLayoutDashboard } from "react-icons/tb";

export default function Adisplay() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleClick = () => {
    setBackgroundColor("black");
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900">
              Appearance Dashboard
            </h1>
            <p className="text-neutral-600 text-lg">Track your appearance</p>
          </div>

          <button className="btn-outline flex items-center space-x-2 self-start sm:self-center">
            <TbLayoutDashboard className="w-5 h-5" />
            <span>Customize Layout</span>
          </button>
        </div>
      </div>
      <div
        className=" rounded-xl p-4"
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
