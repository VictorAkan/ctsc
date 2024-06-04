import Sidebar from "../Sidebar";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/WorldOfAdmin/AdHome";
import Users from "../../pages/WorldOfAdmin/AdUsers";

const Layout = ({ children }) => {
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
                <Routes>
                    <Route path="/admin/home" element={<Home />} />
                    <Route path="/admin/users" element={<Users />} />
                    {/* Add more nested routes as needed */}
                </Routes>
                {children}
            </div>
        </div>
    );
};

export default Layout;
