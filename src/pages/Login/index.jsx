import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button, Input } from "../../components";
import useScrollToTop from "../../hooks/useScrollToTop";
import { Link } from "react-router-dom";

const Login = () => {
    useScrollToTop();
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h3 className="mb-4 text-center text-2xl font-bold text-[#253451]">Login</h3>
                <p className="text-center justify-center flex gap-2 text-gray-600">
                    Don't have an account yet? <Link to="/signup" className="text-[#253451]">Sign up</Link>
                </p>
                <div className="mt-4">
                    <label htmlFor="emailAddress" className="block text-gray-700 mb-2">Email Address</label>
                    <Input
                        type="email"
                        id="emailAddress"
                        placeholder="Email Address"
                        className="w-full p-3 mb-4 h-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                    <Input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="w-full p-3 mb-4 h-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="checkbox" className="mr-2" />
                        <label htmlFor="checkbox" className="text-gray-700">Remember me?</label>
                    </div>
                    <Button
                        // href="#"
                        className="w-full text-center p-3 bg-[#253451] text-white rounded-lg"
                    >
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
