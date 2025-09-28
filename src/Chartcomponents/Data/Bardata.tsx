import {
  ResponsiveContainer,
  Bar,
  BarChart,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const products = [
  {
    name: "Jan",
    revenue: 4800,
    profit: 2400,
    growth: 12.5,
  },
  {
    name: "Feb",
    revenue: 3000,
    profit: 2200,
    growth: 8.2,
  },
  {
    name: "Mar",
    revenue: 2000,
    profit: 2290,
    growth: 15.3,
  },
  {
    name: "Apr",
    revenue: 2780,
    profit: 2000,
    growth: 6.7,
  },
  {
    name: "May",
    revenue: 1890,
    profit: 2181,
    growth: 9.1,
  },
  {
    name: "Jun",
    revenue: 2390,
    profit: 2500,
    growth: 11.8,
  },
  {
    name: "Jul",
    revenue: 1000,
    profit: 2000,
    growth: 4.2,
  },
  {
    name: "Aug",
    revenue: 2890,
    profit: 1890,
    growth: 7.9,
  },
];

const COLORS = {
  revenue: "#0ea5e9",
  profit: "#8b5cf6",
};

export const Bardata = () => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={products}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e5e7eb"
            vertical={false}
          />
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
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="circle" />
          <Bar dataKey="revenue" name="Revenue" radius={[4, 4, 0, 0]}>
            {products.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS.revenue} />
            ))}
          </Bar>
          <Bar dataKey="profit" name="Profit" radius={[4, 4, 0, 0]}>
            {products.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS.profit} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

type CustomTooltipProps = {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
    color: string;
    name: string;
    payload?: { growth: number };
  }>;
  label?: string;
};

export const CustomTooltip = ({
  active,
  payload,
  label,
}: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0]?.payload;

    return (
      <div className="bg-white p-6 rounded-xl shadow-hard border border-neutral-200 min-w-[200px]">
        <div className="space-y-4">
          <div className="text-center">
            <p className="font-semibold text-neutral-900 text-lg">{label}</p>
            <p className="text-sm text-neutral-500">Monthly Performance</p>
          </div>

          <div className="space-y-3">
            {payload.map((entry, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  ></div>
                  <span className="text-sm font-medium text-neutral-600">
                    {entry.name}:
                  </span>
                </div>
                <span className="text-sm font-bold text-neutral-900">
                  ${entry.value.toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          {data?.growth && (
            <div className="pt-2 border-t border-neutral-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-600">
                  Growth:
                </span>
                <span
                  className={`text-sm font-bold ${
                    data.growth > 10
                      ? "text-success-600"
                      : data.growth > 5
                      ? "text-warning-600"
                      : "text-error-600"
                  }`}
                >
                  +{data.growth}%
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  return null;
};
