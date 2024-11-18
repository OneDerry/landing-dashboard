import { useState } from "react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import Accordion from "./Accordion";
import Table from "./table";

export default function Sdisplay() {
  const [isRebillToggled, setIsRebillToggled] = useState(false);
  const [isSoundsToggled, setIsSoundsToggled] = useState(false);
  const [isVibrationsToggled, setIsVibrationsToggled] = useState(false);

  const handleRebillToggle = () => {
    setIsRebillToggled(prevState => !prevState);
  };

  const handleSoundsToggle = () => {
    setIsSoundsToggled(prevState => !prevState);
  };

  const handleVibrationsToggle = () => {
    setIsVibrationsToggled(prevState => !prevState);
  };

  return (
    <div className="h-screen ml-60">
      <div className="bg-white shadow-lg top-16 fixed z-[1] w-[83%] h-11 p-2 flex justify-between rounded-[9px]">
        <h1 className="font-bold font-serif text-xl text-blue-700">Settings</h1>
      </div>

      <div className="flex text-2xl justify-between bg-white rounded-xl mt-20 p-4">
        <h1 className="text-3xl font-serif font-semibold">Basic Info</h1>

        <div className="ml-[100px]">
          <Accordion
            title="Basic Info"
            answer="Alex Vik"
            phone={289123242}
            birth={1980}
          />
        </div>
      </div>
      <div className=" mt-4 p-1  rounded-lg ">
        <div className="bg-white rounded-xl h-[140px] p-4">
          <h1 className="text-2xl font-semibold font-serif">Notifications</h1>
          <p className="flex items-center justify-between w-[240px]">
            Turn on rebill{" "}
            <button className="text-xl" onClick={handleRebillToggle}>
              {isRebillToggled ? <FaToggleOn /> : <FaToggleOff />}
            </button>
          </p>
          <p className="flex items-center justify-between w-[240px]">
            Turn on sounds{" "}
            <button className="text-xl" onClick={handleSoundsToggle}>
              {isSoundsToggled ? <FaToggleOn /> : <FaToggleOff />}
            </button>
          </p>
          <p className="flex items-center justify-between w-[240px]">
            Turn on Vibrations{" "}
            <button className="text-xl" onClick={handleVibrationsToggle}>
              {isVibrationsToggled ? <FaToggleOn /> : <FaToggleOff />}
            </button>
          </p>
        </div>
        <div className="bg-white rounded-xl mt-4 h-[140px] p-4">
          <h1 className="text-2xl font-semibold font-serif">Security</h1>
          <p>Turn on Two-Factor Authentication</p>
          <p className="flex items-center gap-20">
            Delete payment history{" "}
            <button className="p-4 bg-gradient-to-t from-red-800 to-black rounded-[10px] w-[100px] h-[20px] flex items-center justify-center text-white hover:scale-[105%]">
              <ImBin />
            </button>
          </p>
        </div>
      </div>
      <Table />
    </div>
  );
}