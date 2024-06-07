// import { LiaToggleOffSolid } from "react-icons/lia";
import { LiaToggleOnSolid } from "react-icons/lia";
import { useEffect, useState } from "react";

export default function Mpdisplay() {
  const counts = [
    {
      id: 1,
      name: "Shipped",
      amount: " 4 Items",
      per: "$700",
      desc: "Compared to last month",
    },
    {
      id: 2,
      name: "Unpaid",
      amount: "4 Items",
      per: "$400",
      desc: "Compared to last month",
    },
    {
      id: 3,
      name: "Ordered",
      amount: "8 Items",
      per: "$1100",
      desc: "See details",
    },
    {
      id: 4,
      name: "Cart",
      amount: "3 items",
      per: "$300",
      desc: "Proceed to checkout",
    },
  ];

  const pages = [
    {
      id: 1,
      pic: <img src="/Hoodie.jpg" width={"40px"} />,
      name: "Givenchi bag",
      amount: "23",
      price: "£20,000",
      stock: "30",
      rating: "Score: Perfect",
      status: "Active",
    },
    {
      id: 2,
      pic: <img src="/Hoodie.jpg" width={"40px"} />,
      name: "Givenchi sweater",
      amount: "213",
      price: "£10,000",
      stock: "300",
      rating: "Score: Verygood",
      status: "Active",
    },
    {
      id: 3,
      pic: <img src="/Hoodie.jpg" width={"40px"} />,
      name: "Watch pro",
      amount: "2",
      price: "£4,000",
      stock: "14",
      rating: "Score: Good",
      status: "Active",
    },
    {
      id: 4,
      pic: <img src="/Hoodie.jpg" width={"40px"} />,
      name: "Pear Laptop",
      amount: "1",
      price: "$1200",
      stock: "30",
      rating: "Score: Good",
      status: "Inactive",
    },
    {
      id: 5,
      pic: <img src="/Hoodie.jpg" width={"40px"} />,
      name: "Pear Laptop",
      amount: "1",
      price: "$1200",
      stock: "30",
      rating: "Score: Good",
      status: "Inactive",
    },
    {
      id: 6,
      pic: <img src="/Hoodie.jpg" width={"40px"} />,
      name: "Pear Laptop",
      amount: "1",
      price: "$1,200",
      stock: "30",
      rating: "Score: Good",
      status: "Inactive",
    },
    {
      id: 7,
      pic: <img src="/Hoodie.jpg" width={"40px"} />,
      name: "Bag",
      amount: "3",
      price: "$20",
      stock: "3,000",
      rating: "Score: Good",
      status: "Inactive",
    },
    {
      id: 8,
      pic: <img src="/Hoodie.jpg" width={"40px"} />,
      name: "Mouse",
      amount: "2",
      price: "$79",
      stock: "30",
      rating: "Score: Good",
      status: "Inactive",
    },
    {
      id: 9,
      pic: <img src="/Hoodie.jpg" width={"40px"} />,
      name: "Watch plus",
      amount: "32",
      price: "$200",
      stock: "310",
      rating: "Score: Fair",
      status: "Active",
    },
    {
      id: 10,
      pic: <img src="/Hoodie.jpg" width={"40px"} />,
      name: "Bt Headphone",
      amount: "1",
      price: "$100",
      stock: "323",
      rating: "Score: Excellent",
      status: "Active",
    },
    {
      id: 11,
      pic: <img src="/Hoodie.jpg" width={"40px"} />,
      name: "Sweater",
      amount: "7",
      price: "$400",
      stock: "81",
      rating: "Score: Good",
      status: "Inactive",
    },
    {
      id: 12,
      pic: <img src="/Hoodie.jpg" width={"40px"} />,
      name: "Hoodie",
      amount: "12",
      price: "$200",
      stock: "30",
      rating: "Score: Excellent",
      status: "Inactive",
    },
  ];

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const bite = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => {
      clearTimeout(bite);
    };
  }, []);

  return (
    <div className="ml-60">
      {loading ? (
        <>
          <div className="bg-white shadow-lg top-16 fixed z-[1] w-[83%] h-11 p-2 flex justify-between rounded-[9px] animate-pulse">
            <div className="font-bold font-serif text-xl text-blue-800"></div>
          </div>
          <div className=" flex items-center h-[130px] mt-[80px] gap-9 animate-pulse">
          {counts.map((count) => (
              <div className="bg-white w-full shadow-lg hover:scale-105 pl-4 rounded-[20px] border p-4">
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
          <div className="mt-7  bg-white rounded-b-[20px] shadow-lg h-screen animate-pulse">
            {pages.map((page) => (
              <div className="bg-white hover:scale-[100.5%] font-medium text-left border-b-gray-700 border-[1px]">
                <div key={page.id} className="">
                  <div className="grid grid-cols-6 mx-3 p-1 gap-34 items-center h-[50px]">
                    <div>
                    </div>
                    <div className="flex items-center gap-2">
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="flex items-center justify-center gap-3">
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>         
        </>
      ) : (
        <>
          <div className="bg-white shadow-lg top-16 fixed z-[1] w-[83%] h-11 p-2 flex justify-between rounded-[9px]">
            <h1 className="font-bold font-serif text-xl text-blue-800">
              Mypage
            </h1>
          </div>
          <div className=" flex items-center h-[130px] mt-[80px] gap-9 ">
            {counts.map((count) => (
              <div className="bg-white w-full shadow-lg hover:scale-105 pl-4 rounded-[20px] border p-4">
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
          <div className="mt-7  bg-white rounded-b-[20px] shadow-lg h-screen">
            {pages.map((page) => (
              <div className="bg-white hover:scale-[100.5%] font-medium text-left border-b-gray-700 border-[1px]">
                <div key={page.id} className="">
                  <div className="grid grid-cols-6 mx-3 p-1 gap-34 items-center h-[50px]">
                    <div>
                      <input type="checkbox" name="" id="" />
                    </div>
                    <div className="flex items-center gap-2">
                      {page.pic}
                      {page.name}
                    </div>
                    <div>{page.amount}</div>
                    <div>{page.price}</div>
                    <div>{page.rating}</div>
                    <div className="flex items-center justify-center gap-3">
                      {page.status}
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
