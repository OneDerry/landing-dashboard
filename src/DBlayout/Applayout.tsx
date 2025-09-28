import { useState } from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";

type ApplayoutProps = {
  children: React.ReactNode;
};

export default function Applayout(props: ApplayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Sidebar */}
      <aside className="fixed bottom-0 left-0 top-0 z-40 hidden w-[220px] lg:block xl:w-[280px]">
        <Sidenav onClose={() => setSidebarOpen(false)} />
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-hard transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:hidden
      `}
      >
        <Sidenav onClose={() => setSidebarOpen(false)} />
      </aside>

      {/* Main Content Area */}
      <div className="bg-neutral-50 lg:ml-[220px] xl:ml-[280px]">
        {/* Header */}
        <header className="fixed right-0 top-0 z-50 w-full lg:w-[calc(100%-220px)] xl:w-[calc(100%-280px)]">
          <Topnav onMenuClick={() => setSidebarOpen(true)} />
        </header>

        {/* Main Content */}
        <main className="mt-20">
          <div className="p-4 sm:p-6 lg:p-8">{props.children}</div>
        </main>
      </div>
    </div>
  );
}
