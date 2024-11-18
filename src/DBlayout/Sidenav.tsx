import { Link } from "react-router-dom";
import { GrDocumentPerformance } from "react-icons/gr";
import { CiCloud, CiSettings } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoInvertModeOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";

export default function Sidenav() {
  return (
    <div className="p-2 h-screen mt-9 z-[1]">
      <div className=" flex justify-center pr-4">
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThmkIy96XvAqu-WnHdu4hdYDLnRYyoJ1fg1ocgsoSqSlsRvirG"
          alt="Logo image"
          className="w-[120px]"
        />
      </div>
      <div className="flex flex-col leading-10">
        <ul>
          <Link to="/dashboard">
            <li className="p-2 font-semibold border-b-[1px] flex gap-3 hover:bg-gradient-to-r from-orange-800 items-center">
              <RxDashboard />
              Dashboard
            </li>
          </Link>
          <Link to="/mypage">
            <li className="p-2 font-semibold border-b-[1px] flex gap-3 hover:bg-gradient-to-r from-orange-800 items-center">
              <RiPagesLine />
              Mypage
            </li>
          </Link>
          <Link to="/appearance">
            <li className="p-2 font-semibold border-b-[1px] flex gap-3 hover:bg-gradient-to-r from-orange-800 items-center">
              <IoInvertModeOutline />
              Appearance
            </li>
          </Link>
          <Link to="/activity">
            <li className="p-2 font-semibold border-b-[1px] flex gap-3 hover:bg-gradient-to-r from-orange-800 items-center w-full">
              <GrDocumentPerformance />
              Activity
            </li>
          </Link>
          <Link to="/users">
            <li className="p-2 font-semibold border-b-[1px] flex gap-3  hover:bg-gradient-to-r from-orange-800 items-center">
              <VscAccount />
              Users
            </li>
          </Link>
          <Link to="/pocket">
            <li className="p-2 font-semibold border-b-[1px] flex gap-3 hover:bg-gradient-to-r from-orange-800 items-center">
              <CiSettings />
              Wallet
            </li>
          </Link>
          <Link to="/settings">
            <li className="p-2 font-semibold flex gap-3 items-center hover:bg-gradient-to-r from-orange-800">
              <CiSettings />
              Settings
            </li>
          </Link>
          <Link to="/weather">
            <li className="p-2 font-semibold flex gap-3 items-center hover:bg-gradient-to-r from-orange-800">
              <CiCloud />
              Weather
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
