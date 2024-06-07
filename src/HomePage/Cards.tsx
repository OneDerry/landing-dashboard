import { IoIosArrowDropright } from "react-icons/io";

export default function Cards() {
  const cards = [
    {
      id: 1,
      name: "Outer Planning",
      desc: "Decor/Architecture",
      image: (
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRELAo2F8ygCnwoBKzgzgqI8CFtjagRhKv863rIx2z_1X64hSeG"
          width={"230px"}
        />
      ),
    },
    {
      id: 2,
      name: "Office Building",
      desc: "Decor/Architecture",
      image: (
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2TFvIPQLOi7uJbCxpIVMOKHrzJ4Ddy5ZIxA6l8XjjNzelhG7W"
          width={"230px"}
        />
      ),
    },
    {
      id: 3,
      name: "Interior",
      desc: "Decor/Architecture",
      image: (
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2TFvIPQLOi7uJbCxpIVMOKHrzJ4Ddy5ZIxA6l8XjjNzelhG7W"
          width={"230px"}
        />
      ),
    },
    {
      id: 4,
      name: "Comfort",
      desc: "Decor/Architecture",
      image: (
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcScOrqqI_V-XD_M1CbXW9dIF7zFc7ManQaXWwSqPfoAPOEv-f8Y"
          width={"300px"}
        />
      ),
    },
    {
      id: 5,
      name: "Entertainment",
      desc: "Decor/Architecture",
      image: (
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcScOrqqI_V-XD_M1CbXW9dIF7zFc7ManQaXWwSqPfoAPOEv-f8Y"
          width={"300px"}
        />
      ),
    },
    {
      id: 6,
      name: "Cultural",
      desc: "Decor/Architecture",
      image: (
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcScOrqqI_V-XD_M1CbXW9dIF7zFc7ManQaXWwSqPfoAPOEv-f8Y"
          width={"300px"}
        />
      ),
    },
  ];

  return (
    <div className="w-full">
      <div className=" p-2 flex items-center flex-col justify-center  font-mono font-bold">
        <h1 className="font-serif text-3xl">Our Featured projects</h1>
        <p className="font-serif md:text-sm sm:text-[10px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          omnis.
        </p>
      </div>

      <div className="w-1/2 grid lg:grid-cols-3 sm:grid-cols-2 mx-auto gap-3">
        {cards.map((items) => (
          <div className="p-2 bg-[beige] shadow-md ">
            <div key={items.id} className="">
              <div>{items.image}</div>
              <div className="">
                <div className="text-xl font-semibold leading-4
                 mt-3 font-serif md:text-lg sm:text-[12px]">
                  {items.name}
                </div>
                <div className="flex items-center justify-between text-sm mt-">
                  <div className="font-serif md:text-sm sm:text-[10px]">{items.desc}</div>
                  <button>
                    <IoIosArrowDropright className=" md:text-sm sm:text-[10px]text-3xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
