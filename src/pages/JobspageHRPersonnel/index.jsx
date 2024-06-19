import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { Img, Text } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useScrollToTop from "../../hooks/useScrollToTop";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../Loader";

export default function JobspageDesignCreative() {
    useScrollToTop();
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchJobs() {
            try {
                const response = await axios.get("https://crackingthestylecode.pythonanywhere.com/api/v1/job/");
                const designCreativeJobs = response.data.filter(job => job.category === "HR Personnel");
                setJobs(designCreativeJobs);
            } catch (error) {
                console.error("Error fetching job data:", error);
            }
        }

        fetchJobs();
    }, []);

    if (jobs.length === 0) {
        return <div><Loader /></div>;
    }

    return (
        <>
            <Helmet>
                <title>CTSC</title>
                <meta name="description" content="web site created by Victor Ikurekong" />
            </Helmet>
            <div className="flex w-full flex-col items-center bg-[#ffffff]">
                <Header className="self-stretch" />
                <div className="container-xs mt-[10.19rem] pl-[1.19rem] pr-[1.69rem] md:p-[1.25rem] sm:pr-[1.25rem]">
                    <div className="flex flex-col items-center">
                        <div className="flex w-[51%] flex-col items-center md:w-full">
                            <div className="relative z-[1] flex justify-center self-stretch rounded-[12px] bg-[#253451] px-[2.00rem] pb-[1.69rem] pt-[2.00rem] sm:p-[1.25rem]">
                                <Text size="23xl" as="p" className="font-['Inter'] text-[3.25rem] text-white">
                                    HR Personnel
                                </Text>
                            </div>
                        </div>
                        <Text
                            size="11xl"
                            as="p"
                            className="ml-[32.00rem] mt-[1.75rem] self-start !font-['Inter'] !text-[1.56rem] !font-medium md:ml-0"
                        >
                            Hire
                        </Text>
                        <div className="mt-[2.69rem] grid grid-cols-3 justify-center gap-[9.19rem] self-stretch md:grid-cols-2 sm:grid-cols-1">
                            {jobs.map((job) => (
                                <div key={job.id} className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
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
                            ))}
                        </div>
                    </div>
                </div>
                <Footer className="mt-[18.63rem]" />
            </div>
        </>
    );
}
