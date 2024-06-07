import { TbLayoutDashboard } from "react-icons/tb";
import { LiaToggleOnSolid } from "react-icons/lia";
import { useEffect, useState } from "react";

export default function Udisplay() {
  const users = [
    {
      id: 1,
      pic: <img src="/Zhuli.jpg" width={"40px"} />,
      name: "Zhuli",
      amount: "1",
      rating: "Perfect",
      status: "Active",
    },
    {
      id: 2,
      pic: <img src="/Kareem.jpg" width={"40px"} />,
      name: "Kareem",
      amount: "2",
      rating: "Excellent",
      status: "Inactive",
    },
    {
      id: 3,
      pic: <img src="../public/Mark.jpg" className="w-[40px]" />,
      name: "Mark",
      amount: "3",
      rating: "Good",
      status: "Inactive",
    },
    {
      id: 4,
      pic: <img src="../public/Krissy.jpg" className="w-[40px]" />,
      name: "Free",
      amount: "4",
      rating: "Good",
      status: "Inactive",
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
    <div className="h-screen w-full ml-60">
      {loading ? (
        <>
          <div className="bg-white shadow-lg top-16 fixed z-[1] w-[83%] h-11 p-2 flex justify-between rounded-[9px] animate-pulse">
            <div className="font-bold font-serif text-xl text-blue-700"></div>
          </div>
          <div className="w-[84%] bg-white mt-20 rounded-b-none shadow-lg grid grid-cols-6 p-2 rounded-[14px] font-semibold text-lg animate-pulse">
            <p className="ml-4"></p>
            <p></p>
            <p></p>
            <p className="ml-14"></p>
          </div>
          <div className="bg-white mt-4 rounded-[40px] w-[84%] rounded-t-none shadow-lg p-4 animate-pulse">
            {users.map((user) => (
              <div className="bg-white hover:scale-[100.5%] font-medium border-b-black border rounded-b-lg p-2">
                <div key={user.id} className="">
                  <div className="grid grid-cols-6 mx-3 p-1 gap-34  items-center h-[50px]">
                    <div className="flex items-center gap-2"></div>
                    <div></div>
                    <div></div>
                    <div className="flex items-center justify-center gap-3"></div>
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
              Users
            </h1>
            <button className="p-2 text-black border hover:border-b hover:bg-gradient-to-r from-orange-800 rounded-[20px] flex items-center gap-3 ">
              <TbLayoutDashboard />
              Layout
            </button>
          </div>
          <div className="w-[84%] bg-white mt-20 rounded-b-none shadow-lg grid grid-cols-6 p-2 rounded-[14px] font-semibold text-lg">
            <p className="ml-4">Accounts</p>
            <p>Num</p>
            <p>Rating</p>
            <p className="ml-14">Status</p>
          </div>

          <div className="bg-white mt-4 rounded-[40px] w-[84%] rounded-t-none shadow-lg p-4">
            {users.map((user) => (
              <div className="bg-white hover:scale-[100.5%] font-medium border-b-black border rounded-b-lg p-2">
                <div key={user.id} className="">
                  <div className="grid grid-cols-6 mx-3 p-1 gap-34  items-center h-[50px]">
                    <div className="flex items-center gap-2">
                      {user.pic}
                      {user.name}
                    </div>
                    <div>{user.amount}</div>
                    <div>{user.rating}</div>
                    <div className="flex items-center justify-center gap-3">
                      {user.status}
                      <LiaToggleOnSolid />
                    </div>
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
