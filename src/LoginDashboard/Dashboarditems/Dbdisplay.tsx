import Linegraph from "../../Chartcomponents/Charts/Linegraph";
import {
  TbLayoutDashboard,
  TbTrendingUp,
  TbEye,
  TbCurrencyDollar,
  TbTarget,
} from "react-icons/tb";
import { useEffect, useState } from "react";

export default function Dbdisplay() {
  const counts = [
    {
      id: 1,
      name: "Total Income",
      amount: "£20,000",
      per: "0.38%",
      desc: "Compared to last month",
      icon: TbCurrencyDollar,
      color: "success",
      trend: "up",
    },
    {
      id: 2,
      name: "Profit",
      amount: "£900,000",
      per: "182.9%",
      desc: "Compared to last month",
      icon: TbTrendingUp,
      color: "primary",
      trend: "up",
    },
    {
      id: 3,
      name: "Total Views",
      amount: "8,000",
      per: "12.49%",
      desc: "Compared to last month",
      icon: TbEye,
      color: "secondary",
      trend: "up",
    },
    {
      id: 4,
      name: "Conversion Rate",
      amount: "4.83%",
      per: "8.07%",
      desc: "Compared to last month",
      icon: TbTarget,
      color: "accent",
      trend: "up",
    },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      success: "bg-success-100 text-success-600",
      primary: "bg-primary-100 text-primary-600",
      secondary: "bg-secondary-100 text-secondary-600",
      accent: "bg-accent-100 text-accent-600",
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  if (loading) {
    return (
      <div className="space-y-8 animate-pulse">
        {/* Header Skeleton */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <div className="h-8 bg-neutral-200 rounded w-48"></div>
            <div className="h-4 bg-neutral-200 rounded w-64"></div>
          </div>
          <div className="h-10 bg-neutral-200 rounded w-40"></div>
        </div>

        {/* Stats Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="card-premium p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-neutral-200 rounded-xl"></div>
                  <div className="w-16 h-6 bg-neutral-200 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-8 bg-neutral-200 rounded w-24"></div>
                  <div className="h-4 bg-neutral-200 rounded w-32"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Skeleton */}
        <div className="card-premium p-6 sm:p-8">
          <div className="space-y-4 mb-8">
            <div className="h-6 bg-neutral-200 rounded w-48"></div>
            <div className="h-4 bg-neutral-200 rounded w-64"></div>
          </div>
          <div className="h-80 bg-neutral-200 rounded-xl"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900">
            Dashboard Overview
          </h1>
          <p className="text-neutral-600 text-lg">
            Welcome back! Here's what's happening with your business today.
          </p>
        </div>

        <button className="btn-outline flex items-center space-x-2 self-start sm:self-center">
          <TbLayoutDashboard className="w-5 h-5" />
          <span>Customize Widgets</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {counts.map((count) => {
          const Icon = count.icon;
          return (
            <div
              key={count.id}
              className="card-premium p-6 hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-xl ${getColorClasses(count.color)}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span
                  className={`text-sm font-medium px-2 py-1 rounded-full ${
                    count.trend === "up"
                      ? "bg-success-100 text-success-600"
                      : "bg-error-100 text-error-600"
                  }`}
                >
                  {count.per}
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-2xl sm:text-3xl font-bold text-neutral-900 group-hover:text-gradient transition-colors duration-200">
                  {count.amount}
                </p>
                <p className="text-sm font-medium text-neutral-600">
                  {count.name}
                </p>
                <p className="text-xs text-neutral-500">{count.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart Section */}
      <div className="card-premium p-6 sm:p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-2">
            Performance Analytics
          </h2>
          <p className="text-neutral-600">
            Track your key metrics and performance indicators over time
          </p>
        </div>

        <div className="h-80 sm:h-96">
          <Linegraph />
        </div>
      </div>

      {/* Additional Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card-premium p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-primary-100 rounded-lg">
              <TbTrendingUp className="w-5 h-5 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900">
              Recent Activity
            </h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-neutral-600">
                New project created
              </span>
              <span className="text-xs text-neutral-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-neutral-600">Payment received</span>
              <span className="text-xs text-neutral-500">4 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-neutral-600">
                Team member added
              </span>
              <span className="text-xs text-neutral-500">1 day ago</span>
            </div>
          </div>
        </div>

        <div className="card-premium p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-success-100 rounded-lg">
              <TbTarget className="w-5 h-5 text-success-600" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900">
              Quick Actions
            </h3>
          </div>
          <div className="space-y-3">
            <button className="w-full text-left px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors duration-200">
              Create new project
            </button>
            <button className="w-full text-left px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors duration-200">
              Generate report
            </button>
            <button className="w-full text-left px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors duration-200">
              Invite team member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
