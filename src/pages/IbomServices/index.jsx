import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
import { Text } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import { Loader } from "../../Loader";

export default function IbomServicesPage() {
    useScrollToTop();

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);  // State for current page
    const [totalPages, setTotalPages] = useState(1);   // State for total pages
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const itemsPerPage = 6;  // Number of services per page

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://crackingthestylecode.pythonanywhere.com/api/v1/service/?page=${currentPage}`);
                setData(response.data.results);
                setTotalPages(Math.ceil(response.data.count / itemsPerPage)); // Calculate total pages
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage]); // Re-fetch data on page change

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPaginationButtons = () => {
        const pageButtons = [];

        // Create buttons for a limited range around current page
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, currentPage + 2);

        for (let i = startPage; i <= endPage; i++) {
            pageButtons.push(
                <button
                    key={i}
                    className={`mx-2 px-2 py-1 rounded-md text-sm ${currentPage === i ? 'bg-[#253451] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </button>
            );
        }

        // Add "..." for pages outside the range
        if (startPage > 1) {
            pageButtons.unshift(
                <button key="previous" className="mx-2 px-2 py-1 rounded-md text-sm text-gray-500">...</button>
            );
        }
        if (endPage < totalPages) {
            pageButtons.push(
                <button key="next" className="mx-2 px-2 py-1 rounded-md text-sm text-gray-500">...</button>
            );
        }

        return pageButtons;
    };

    if (loading) return <div><Loader /></div>;
    if (error) return <div>Error loading data</div>;

    const serviceList = data.map((d, index) => (
        <Link to={`/ibomservices/${d.service_id}`} key={index}>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Text size="2xl" as="h2" className="text-center font-semibold text-black">
                    {d.service_name}
                </Text>
            </div>
        </Link>
    ));

    return (
        <>
            <Header />
            <Helmet>
                <title>CTSC - Ibom Services</title>
                <meta name="description" content="web site created by Victor Ikurekong" />
            </Helmet>
            <div className="w-full bg-white">
                <div className="flex flex-col items-center py-16 bg-[#d8d7ff]">
                    <div className="text-center mt-24 sm:mt-32">
                        <Text size="9xl" as="h1" className="font-bold !text-4xl text-black">
                            Ibom Services
                        </Text>
                        <Text className="mt-2 text-lg text-black">
                            Find Services Near You
                        </Text>
                    </div>
                </div>
                <div className="container mx-auto px-52 md:p-4 py-12">
                    <div className="grid gap-8 grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                        {serviceList}
                    </div>
                    <div className="flex justify-center mt-8">
                        <button
                            className="px-4 py-2 mr-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm"
                            disabled={currentPage === 1}
                            onClick={handlePreviousPage}
                        >
                            Previous
                        </button>
                        {renderPaginationButtons()}
                        <button
                            className="px-4 py-2 ml-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm"
                            disabled={currentPage === totalPages}
                            onClick={handleNextPage}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}