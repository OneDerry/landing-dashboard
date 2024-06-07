

export default function Logbutton() {
  
  
  return (
    <div className="h-[100px] flex justify-center items-center">
      <form action="/dashboard" className="flex gap-2">
        <div className="">
          <label htmlFor="email">email </label>
          <input type="email" className="rounded p-1" />
        </div>
        <div className="">
          <label htmlFor="password">Password </label>
          <input type="password" className="rounded p-1" />
        </div>
        <button className="bg-black transition-transform delay-1000 hover:bg-gradient-to-r from-orange-800 w-[100px] p-1 rounded text-white">Login</button>
      </form>
    </div>
  );
}
