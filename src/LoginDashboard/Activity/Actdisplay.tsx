import { TbLayoutDashboard } from "react-icons/tb";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Tuesday",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Wednesday",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Thursday",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Friday",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Saturday",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sunday",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Actdisplay() {
  return (
    <div className="h-screen ml-60">
      <div className="bg-white shadow-lg text-green-800 top-16 fixed z-[1] w-[83%] h-11 p-2 flex justify-between rounded-[9px]">
        <h1 className="font-bold font-serif text-xl text-blue-700">Activity</h1>
        <button className="p-2 text-black border hover:border-b hover:bg-gradient-to-r from-orange-800 rounded-[20px] flex items-center gap-3 ">
          <TbLayoutDashboard />
          Layout
        </button>
      </div>
      <div className="bg-white h-screen flex flex-col pt-9 items-center rounded-[20px] mt-[80px] ">
        <h1 className="text-2xl font-serif font-medium mb-4">
          What you've been up to
        </h1>
        <ResponsiveContainer width="60%" height="60%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={70}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 40, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
