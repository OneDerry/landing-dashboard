import { LiaToggleOnSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import {
  TbTruck,
  TbCreditCard,
  TbShoppingBag,
  TbShoppingCart,
  TbPackage,
} from "react-icons/tb";

export default function Mpdisplay() {
  const counts = [
    {
      id: 1,
      name: "Shipped",
      amount: "4 Items",
      per: "$700",
      desc: "Compared to last month",
      icon: TbTruck,
      color: "success",
    },
    {
      id: 2,
      name: "Unpaid",
      amount: "4 Items",
      per: "$400",
      desc: "Compared to last month",
      icon: TbCreditCard,
      color: "warning",
    },
    {
      id: 3,
      name: "Ordered",
      amount: "8 Items",
      per: "$1100",
      desc: "See details",
      icon: TbShoppingBag,
      color: "primary",
    },
    {
      id: 4,
      name: "Cart",
      amount: "3 items",
      per: "$300",
      desc: "Proceed to checkout",
      icon: TbShoppingCart,
      color: "secondary",
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
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      success: "bg-success-100 text-success-600",
      warning: "bg-warning-100 text-warning-600",
      primary: "bg-primary-100 text-primary-600",
      secondary: "bg-secondary-100 text-secondary-600",
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

        {/* Table Skeleton */}
        <div className="card-premium p-6">
          <div className="space-y-4">
            <div className="h-6 bg-neutral-200 rounded w-48"></div>
            <div className="space-y-2">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="h-12 bg-neutral-200 rounded"></div>
              ))}
            </div>
          </div>
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
            My Page
          </h1>
          <p className="text-neutral-600 text-lg">
            Manage your orders, inventory, and product listings
          </p>
        </div>
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
                <span className="text-sm font-medium text-neutral-500">
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

      {/* Products Table */}
      <div className="card-premium p-6 sm:p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-accent-100 rounded-lg">
            <TbPackage className="w-5 h-5 text-accent-600" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-neutral-900">
            Product Inventory
          </h2>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-full">
            {/* Table Header */}
            <div className="grid grid-cols-6 gap-4 p-4 bg-neutral-50 rounded-lg font-semibold text-neutral-700">
              <div className="flex items-center">
                <input type="checkbox" className="rounded" />
              </div>
              <div>Product</div>
              <div>Quantity</div>
              <div>Price</div>
              <div>Rating</div>
              <div>Status</div>
            </div>

            {/* Table Rows */}
            <div className="space-y-2 mt-4">
              {pages.map((page) => (
                <div
                  key={page.id}
                  className="grid grid-cols-6 gap-4 p-4 bg-white border border-neutral-200 rounded-lg hover:shadow-soft transition-all duration-200"
                >
                  <div className="flex items-center">
                    <input type="checkbox" className="rounded" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                      {page.pic}
                    </div>
                    <span className="font-medium text-neutral-900">
                      {page.name}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-neutral-700">{page.amount}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-neutral-900">
                      {page.price}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-neutral-600">
                      {page.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        page.status === "Active"
                          ? "bg-success-100 text-success-700"
                          : "bg-neutral-100 text-neutral-700"
                      }`}
                    >
                      {page.status}
                    </span>
                    <LiaToggleOnSolid className="text-success-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
