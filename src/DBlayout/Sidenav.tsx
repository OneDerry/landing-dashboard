import { Link, useLocation } from "react-router-dom";
import { GrDocumentPerformance } from "react-icons/gr";
import { CiCloud, CiSettings } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoInvertModeOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

type SidenavProps = {
  onClose?: () => void;
};

export default function Sidenav({ onClose }: SidenavProps) {
  const location = useLocation();

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: RxDashboard,
      description: "Overview and analytics",
    },
    {
      name: "My Page",
      href: "/mypage",
      icon: RiPagesLine,
      description: "Personal dashboard",
    },
    {
      name: "Appearance",
      href: "/appearance",
      icon: IoInvertModeOutline,
      description: "Customize your theme",
    },
    {
      name: "Activity",
      href: "/activity",
      icon: GrDocumentPerformance,
      description: "Track your progress",
    },
    {
      name: "Users",
      href: "/users",
      icon: VscAccount,
      description: "Manage team members",
    },
    {
      name: "Wallet",
      href: "/pocket",
      icon: CiSettings,
      description: "Financial overview",
    },
    {
      name: "Settings",
      href: "/settings",
      icon: CiSettings,
      description: "Account preferences",
    },
    {
      name: "Weather",
      href: "/weather",
      icon: CiCloud,
      description: "Weather information",
    },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-4 lg:p-6 border-b border-neutral-200">
        <div className="flex items-center justify-between">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThmkIy96XvAqu-WnHdu4hdYDLnRYyoJ1fg1ocgsoSqSlsRvirG"
            alt="H Cube Architects"
            className="h-8 lg:h-10 w-auto"
          />
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
          >
            <FaTimes className="w-5 h-5 text-neutral-500" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 lg:p-4 space-y-1 lg:space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={onClose}
              className={`
                group flex items-center space-x-2 lg:space-x-3 px-3 lg:px-4 py-2 lg:py-3 rounded-xl transition-all duration-200
                ${
                  active
                    ? "bg-primary-50 text-primary-700 border border-primary-200"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                }
              `}
            >
              <div
                className={`
                p-1.5 lg:p-2 rounded-lg transition-colors duration-200 flex-shrink-0
                ${
                  active
                    ? "bg-primary-100 text-primary-600"
                    : "bg-neutral-100 text-neutral-500 group-hover:bg-primary-100 group-hover:text-primary-600"
                }
              `}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={`
                  font-medium text-xs lg:text-sm transition-colors duration-200
                  ${
                    active
                      ? "text-primary-700"
                      : "text-neutral-900 group-hover:text-neutral-900"
                  }
                `}
                >
                  {item.name}
                </p>
                <p
                  className={`
                  text-xs transition-colors duration-200 truncate hidden xl:block
                  ${
                    active
                      ? "text-primary-500"
                      : "text-neutral-500 group-hover:text-neutral-600"
                  }
                `}
                >
                  {item.description}
                </p>
              </div>
              {active && (
                <div className="w-1 h-4 lg:h-6 bg-primary-600 rounded-full flex-shrink-0"></div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 lg:p-4 border-t border-neutral-200">
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-3 lg:p-4">
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs lg:text-sm">
                HC
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs lg:text-sm font-medium text-neutral-900 truncate">
                H Cube Architects
              </p>
              <p className="text-xs text-neutral-500 hidden xl:block">
                Premium Dashboard
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
