import {
  ResponsiveContainer,
  Bar,
  BarChart,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const products = [
  {
    name: "Jan",
    product1: 4800,
    product2: 2400,
  },
  {
    name: "Feb",
    product1: 3000,
    product2: 2200,
  },
  {
    name: "Mar",
    product1: 2000,
    product2: 2290,
  },
  {
    name: "Apr",
    product1: 2780,
    product2: 2000,
  },
  {
    name: "May",
    product1: 1890,
    product2: 2181,
  },
  {
    name: "Jun",
    product1: 2390,
    product2: 2500,
  },
  {
    name: "Jul",
    product1: 1000,
    product2: 2000,
  },
  {
    name: "Sep",
    product1: 2890,
    product2: 1890,
  },
];
export const Bardata = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={products} margin={{ right: 20 }}>
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip content={<customTooltip />}/>
        <Legend />
        <Bar
          dataKey="product1"
          fill="#3b82f6"
        />
        <Bar
          dataKey="product2"
          fill="#8b4cf7"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

const customTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Revenue: <span className="ml-2"> ${payload[0].value}</span>
        </p>
        <p className="text-sm text-blue-400">
          Profit: <span className="ml-2"> ${payload[1].value}</span>
        </p>
      </div>
    );
  }
};
