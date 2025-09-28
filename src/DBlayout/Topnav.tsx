import { useState } from "react";
import { FiShare2, FiBell, FiSearch } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

type TopnavProps = {
  onMenuClick?: () => void;
};

export default function Topnav({ onMenuClick }: TopnavProps) {
  const [notifications] = useState(3);

  return (
    <div className="bg-white border-b border-neutral-200 shadow-soft">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
            >
              <FaBars className="w-5 h-5 text-neutral-600" />
            </button>

            {/* Search */}
            <div className="hidden sm:block relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-4 w-4 text-neutral-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-64 pl-10 pr-3 py-2 border border-neutral-300 rounded-lg text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200">
              <FiBell className="w-5 h-5 text-neutral-600" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-error-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>

            {/* Share */}
            <button className="btn-outline flex items-center space-x-2 text-sm">
              <FiShare2 className="w-4 h-4" />
              <span className="hidden sm:inline">Share</span>
            </button>

            {/* User profile */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-3">
                <img
                  src="/Profile.png"
                  alt="Alex"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-neutral-900">
                    Alex Johnson
                  </p>
                  <p className="text-xs text-neutral-500">Administrator</p>
                </div>
              </div>
            </div>

            {/* Logout */}
            <Link to="/">
              <button className="flex items-center space-x-2 px-3 py-2 text-sm text-neutral-600 hover:text-error-600 hover:bg-error-50 rounded-lg transition-colors duration-200">
                <TbLogout className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
