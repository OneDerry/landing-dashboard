import Cards from "./Cards";
import Logbutton from "./Logbutton";
import Navbar from "./Navbar";
import { FaLongArrowAltRight } from "react-icons/fa";

const Times = [
  {
    id: 1,
    amount: 12,
    title: "Years of Experience",
  },
  {
    id: 2,
    amount: 88,
    title: "Success Projects",
  },
  {
    id: 3,
    amount: 14,
    title: "Active Projects",
  },
  {
    id: 4,
    amount: 93,
    title: "Happy Customers",
  },
];

export default function Home() {
  return (
    <main id="main" className="">
      <div className="h-screen bg-[url('/Main.jpg')] bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Logbutton />
        <div className="w-[50%] mt-9 h-[400px] flex sm:flex-col flex-col justify-center leading- pl-64 leading-10">
          <h1 className="text-5xl text-black font-bold font-serif  hover:text-orange-500 md:text-3xl lg:text-5xl sm:text-xl">
            H Cube Architects
          </h1>
          <p className="text-lg mt-4 text-black font-serif md:text-sm sm:text-[10px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam
            vitae nostrum sunt nesciunt labore corrupti illum dignissimos?
          </p>
          <button className="bg-[#000300] mt-4 hover:bg-gradient-to-r from-orange-800 rounded-lg text-white p-1 w-[150px] flex justify-center items-center gap-2 group-hover:rotate-90 transform ease-in">
            Get started
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
      <div
        id="about"
        className="h-screen flex gap-4 justify-center items-center w-full"
      >
        <div className="sm:w-[100%] md:w-[30%] leading-10">
          <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-black font-bold font-serif">
            We Create the Art of Soulful & Stylish Living
          </h1>
          <p className="lg:text-lg sm:text-sm mt-4 text-black font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            vitae nostrum repudiandae sequi sunt nesciunt labore corrupti illum
            dignissimos?
          </p>
          <p className="text- text-green-700 font-bold font-mono">01234789</p>
          <button className="bg-[#000300] hover:bg-gradient-to-r from-orange-800  rounded-xl text-white p-1 w-[170px] flex justify-center items-center gap-2 lg:text-[14px] sm:text-sm ">Get consolidation <FaLongArrowAltRight/></button>
        </div>
        <div className="">
          <img src="Herobg.jpg" alt="An image" width={"700px"} />
        </div>
      </div>
      <div className="bg-white h-[300px] sm:flex justify-center items-center gap-4">
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtlC60bSdavbnBA6vl2qcAPiJzPHDz5EM7qmGmuUdvGz6Ou5jY"
          alt=""
          width={"180px"}
        />
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRMTmiN2Wnu4D2iXJIexgVBCaJleN6qXIwdC-dJd-VmxtZUZTv6"
          alt=""
          width={"180px"}
        />
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQxv5SvbI-cDMeGADfaKaJF9dH2k5onvtXBudBURv6DpeGVn090"
          alt=""
          width={"180px"}
        />
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTej3VwGXauIbF_G2xUj7ZkxWNTV06bMeeQNQ9b6CsEa-LY6F5Z"
          alt=""
          width={"180px"}
        />
      </div>
      <div className="bg-[beige]">
        <section className="justify-center items-center flex flex-col h-[300px]">
          <h1 className="font-serif text-6xl font-bold md:text-4xl lg:text-7xl sm:text-[30px]">Connect.Learn.Earn</h1>
          <p className="font-serif text-2xl font-bold md:text-sm lg:text-4xl sm:text-[10px]">Just a text</p>
        </section>
      </div>
      <div id="media" className="bg-white p-4">
        <Cards />
      </div>
      <section id="contacts" className="h-[450px] mt-10">
        <div className="bg-[beige] rounded-lg mx-auto text-center mt-4 h-[200px] p-4 w-1/2 ">
          <h1 className="md:text-xl lg:text-4xl font-medium mb-4 mt-3 sm:font-bold sm:text-xl">
            What the People Think About Us
          </h1>
          <p className="md:text-sm sm:text-[10px] mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            et in nulla quo delectus blanditiis quisquam, consectetur omnis
            asperiores. Alias, perspiciatis! Ullam consequatur, architecto nemo
            consequuntur ducimus nisi aperiam placeat!
          </p>
        </div>
        {/* flex mx-auto px-4 max-w-[1240px] justify-between items-center */}
        <div className=" w-full flex justify-center items-center text-center bg-[beige] h-[200px] mt-8">
          {Times.map((time) => (
            <div key={time.id} className="border-r-2 border-red-200 w-[100%]">
              <div className="text-4xl font-semibold font-serif">
                {time.amount}
              </div>
              <div className="text-sm">{time.title}</div>
            </div>
          ))}
        </div>
        <a
          href="#main"
          className="p-1 text-black rounded flex items-end justify-end"
        ></a>
      </section>
      <footer className="h-[100px] flex mx-auto px-4 max-w-[1240px] justify-between items-center ">
        <div className="sm:w-[40px] md:w-[40px] lg:w-[90px]">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThmkIy96XvAqu-WnHdu4hdYDLnRYyoJ1fg1ocgsoSqSlsRvirG"
            width={"90px"}
          />
        </div>
        <ul className="md:flex sm:grid sm:grid-cols-3 md:flex-row  gap-7 text-[17px] font-semibold sm:text-[12px] md:text-[15px] lg:text-lg ">
          <li>For designers</li>
          <li>Hire talent</li>
          <li>Inspiration</li>
          <li>Advertising</li>
          <li>Blog</li>
          <li>About</li>
          <li>Careers</li>
        </ul>
      </footer>
    </main>
  );
}
