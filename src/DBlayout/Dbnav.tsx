import { FiShare2 } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";

import { Link } from "react-router-dom";

export default function Dbnav() {
  return (
    <div className="w-[85%] ml-[240px] fixed z-[1]">
      <div className="h-[70px] justify-between bg-white gap-96 flex">
        <div className="p-4 flex items-center gap-7">
          <img src="../public/profile.png" alt="" className="w-14 rounded-full" />
          <p className="text-xl font-semibold">Alex</p>
        </div>
        <div className="flex items-end p-4 gap-8">
          <button className="p-2 text-black border hover:border-b hover:bg-gradient-to-r from-orange-800 rounded-[10px] flex items-center gap-3">
            <FiShare2 />
            Share
          </button>

          <Link to="/">
            <div className="p-2 text-black border hover:border-b hover:bg-gradient-to-r from-orange-800 rounded-[10px] flex items-center gap-3">
              <TbLogout />
              Logout
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
