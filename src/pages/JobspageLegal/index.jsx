import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { Img, Text } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useScrollToTop from "../../hooks/useScrollToTop";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../Loader";

export default function JobspageLegal() {
    useScrollToTop();
    const [job, setJob] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchJob() {
            try {
                const response = await axios.get("https://crackingthestylecode.pythonanywhere.com/api/v1/job/11/");
                setJob(response.data);
            } catch (error) {
                console.error("Error fetching job data:", error);
            }
        }

        fetchJob();
    }, []);

    if (!job) {
        return <div><Loader /></div>;
    }

    return (
        <>
            <Helmet>
                <title>Legal Jobs</title>
                <meta name="description" content="Legal job listings" />
            </Helmet>
            <div className="flex w-full flex-col items-center bg-[#ffffff]">
                <Header className="self-stretch" />
                <div className="container-xs mt-[10.19rem] pl-[1.19rem] pr-[1.69rem] md:p-[1.25rem] sm:pr-[1.25rem]">
                    <div className="flex flex-col items-center">
                        <div className="flex w-[51%] flex-col items-center md:w-full">
                            <div className="relative z-[1] flex justify-center self-stretch rounded-[12px] bg-[#253451] px-[2.00rem] pb-[1.69rem] pt-[2.00rem] sm:p-[1.25rem]">
                                <Text size="23xl" as="p" className="font-['Inter'] text-[3.25rem]">
                                    Legal
                                </Text>
                            </div>
                        </div>
                        <Text size="11xl" as="p" className="ml-[32.00rem] mt-[1.75rem] self-start !font-['Inter'] !text-[1.56rem] !font-medium md:ml-0">
                            Hire
                        </Text>
                        <div className="mt-[2.69rem] grid grid-cols-3 justify-center gap-[9.19rem] self-stretch md:grid-cols-2 sm:grid-cols-1">
                            <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
                                <Text as="p" size="2xl" className="font-semibold text-gray-400">{job.title}</Text>
                                <Text as="p" size="lg" className="text-gray-700">{job.hiring_company}</Text>
                                <Text as="p" size="md" className="text-gray-500">{job.category}</Text>
                                <Text as="p" size="sm" className="text-gray-600 whitespace-pre-line">{job.requirements}</Text>
                                <button
                                    className="mt-4 px-4 py-2 bg-[#253451] text-white rounded hover:bg-[#253451]"
                                    onClick={() => navigate("/login")}
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                        {/* <div className="mt-[5.13rem] flex gap-[0.88rem]">
                            <Img src="images/arrow_2.png" alt="arrowtwo" className="h-[0.13rem]" />
                            <img src="images/arrow_1.png" alt="arrowone" className="h-[0.13rem]" />
                        </div> */}
                    </div>
                </div>
                <Footer className="mt-[18.63rem] self-stretch" />
            </div>
        </>
    );
}
