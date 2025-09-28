import { TbLayoutDashboard, TbTrendingUp, TbActivity } from "react-icons/tb";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  {
    name: "Mon",
    completed: 4000,
    pending: 2400,
    total: 6400,
  },
  {
    name: "Tue",
    completed: 3000,
    pending: 1398,
    total: 4398,
  },
  {
    name: "Wed",
    completed: 2000,
    pending: 9800,
    total: 11800,
  },
  {
    name: "Thu",
    completed: 2780,
    pending: 3908,
    total: 6688,
  },
  {
    name: "Fri",
    completed: 1890,
    pending: 4800,
    total: 6690,
  },
  {
    name: "Sat",
    completed: 2390,
    pending: 3800,
    total: 6190,
  },
  {
    name: "Sun",
    completed: 3490,
    pending: 4300,
    total: 7790,
  },
];

const COLORS = {
  completed: "#10b981",
  pending: "#f59e0b",
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
    color: string;
    name: string;
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-hard border border-neutral-200">
        <p className="font-semibold text-neutral-900 mb-2">{label}</p>
        {payload.map((entry, index: number) => (
          <div key={index} className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="text-sm text-neutral-600">
              {entry.dataKey}: {entry.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function Actdisplay() {
  return (
    <div className="">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900">
              Activity Dashboard
            </h1>
            <p className="text-neutral-600 text-lg">
              Track your progress and performance metrics
            </p>
          </div>

          <button className="btn-outline flex items-center space-x-2 self-start sm:self-center">
            <TbLayoutDashboard className="w-5 h-5" />
            <span>Customize Layout</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card-premium p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-primary-100 rounded-xl">
              <TbActivity className="w-6 h-6 text-primary-600" />
            </div>
            <span className="text-sm font-medium text-success-600 bg-success-100 px-2 py-1 rounded-full">
              +12.5%
            </span>
          </div>
          <div>
            <p className="text-2xl font-bold text-neutral-900">2,847</p>
            <p className="text-sm text-neutral-500">Total Activities</p>
          </div>
        </div>

        <div className="card-premium p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-success-100 rounded-xl">
              <TbTrendingUp className="w-6 h-6 text-success-600" />
            </div>
            <span className="text-sm font-medium text-success-600 bg-success-100 px-2 py-1 rounded-full">
              +8.2%
            </span>
          </div>
          <div>
            <p className="text-2xl font-bold text-neutral-900">1,923</p>
            <p className="text-sm text-neutral-500">Completed Tasks</p>
          </div>
        </div>

        <div className="card-premium p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-warning-100 rounded-xl">
              <TbActivity className="w-6 h-6 text-warning-600" />
            </div>
            <span className="text-sm font-medium text-warning-600 bg-warning-100 px-2 py-1 rounded-full">
              +3.1%
            </span>
          </div>
          <div>
            <p className="text-2xl font-bold text-neutral-900">924</p>
            <p className="text-sm text-neutral-500">Pending Tasks</p>
          </div>
        </div>

        <div className="card-premium p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-secondary-100 rounded-xl">
              <TbTrendingUp className="w-6 h-6 text-secondary-600" />
            </div>
            <span className="text-sm font-medium text-success-600 bg-success-100 px-2 py-1 rounded-full">
              +15.3%
            </span>
          </div>
          <div>
            <p className="text-2xl font-bold text-neutral-900">67.5%</p>
            <p className="text-sm text-neutral-500">Completion Rate</p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="card-premium p-6 sm:p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-2">
            Weekly Activity Overview
          </h2>
          <p className="text-neutral-600">
            Track your daily progress and identify patterns in your workflow
          </p>
        </div>

        <div className="h-80 sm:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 14, fill: "#6b7280" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 14, fill: "#6b7280" }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="circle" />
              <Bar dataKey="completed" name="Completed" radius={[4, 4, 0, 0]}>
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS.completed} />
                ))}
              </Bar>
              <Bar dataKey="pending" name="Pending" radius={[4, 4, 0, 0]}>
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS.pending} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
