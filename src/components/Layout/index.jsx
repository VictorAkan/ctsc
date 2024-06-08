import Sidebar from "../Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex">
            <button
                className="p-4 bg-slate-400"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                ☰
            </button>
            <div className={`h-full bg-gray-800 text-white md:w-52 w-64 ${isSidebarOpen ? 'block' : 'hidden'}`}>
                <Sidebar />
            </div>
            <div className="flex-1 p-6 bg-gray-100">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
