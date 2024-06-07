export default function Navbar() {
  return (
    <div className=" w-full h-[70px] bg-white">
      <div className=" flex mx-auto px-4 max-w-[1240px] justify-between items-center ">
        <div className="p-1 text-white rounded w-full sm:w-[480px] flex sm:flex-row ">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThmkIy96XvAqu-WnHdu4hdYDLnRYyoJ1fg1ocgsoSqSlsRvirG"
            alt=""
            width={"70px"}
          />
        </div>
        <div className="flex items-center p-4 gap-8">
          <a href="#about" className="">
            <div className="p-1 text-black hover:border-b rounded">About</div>
          </a>
          <a href="#media" className="">
            <div className="p-1 text-black hover:border-b rounded ">Media</div>
          </a>

          <a href="#contacts" className="p-1 text-black hover:border-b rounded" >
            Contacts
          </a>
        </div>
      </div>
    </div>
  );
}
