import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Img, Text } from '../../components'; 
import { Loader } from '../../Loader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const JobsPage = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/job/');
                setJobs(response.data.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching job opportunities:', error);
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const applyToJob = (jobId) => {
        window.location.href = `/apply/${jobId}`;
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <>
        <Header className="sticky" />
        <div className="m-10 sm:m-0 mx-24 p-6 mt-10 mb-10 bg-white shadow-md rounded-lg">
            <h1 className="text-xl mb-10 text-[#253451] font-bold">All Jobs</h1>
            {jobs.length > 0 ? (
                <ul className="grid gap-5 sm:grid-cols-1 grid-cols-2">
                    {jobs.map((job) => (
                            <div
                                key={job.id}
                                data-aos="zoom-in-up"
                                className="flex w-full rounded-[20px] bg-[#ffffff] pb-[3.00rem] pl-[1.50rem] pr-[1.31rem] pt-[2.81rem] shadow-[0px_1px_46px_-2px_#25345133] md:py-[1.25rem] sm:p-[1.25rem]"
                            >
                                <div className="flex w-full flex-col items-end">
                                    <div className="flex items-start justify-between gap-[1.25rem] self-stretch">
                                        <div className="flex flex-col items-start">
                                            <div className="flex items-start gap-[0.50rem]">
                                                <Img
                                                    src="images/lil_bag.png"
                                                    alt="graphic"
                                                    className="mt-[0.31rem] h-[1.19rem] w-[1.25rem]"
                                                />
                                                <Text size="9xl" as="p" className="!text-[#000000]">
                                                    {job.title}
                                                </Text>
                                            </div>
                                            <div className="flex items-center gap-[0.56rem]">
                                                <Text size="5xl" as="p" className="!text-[#626262]">
                                                    {job.hiring_company}
                                                </Text>
                                                <div className="flex rounded-md bg-[#253451] pl-[0.19rem] pr-[0.13rem]">
                                                    <Text size="s" as="p" className="!text-[0.63rem] !font-medium">
                                                        {job.tag}
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-[2.44rem] w-[2.44rem] rounded-[19px] bg-[#d9d9d9]" />
                                    </div>
                                    <div className="mt-[1.88rem] flex flex-col items-start self-stretch">
                                        <Text size="2xl" as="p" className="!text-[#626262]">
                                            Requirements & Skills
                                        </Text>
                                        
                                            <div className="mt-[0.38rem] flex items-center gap-[0.75rem]">
                                                <div className="h-[0.69rem] md:hidden w-[0.75rem] rounded-md bg-[#253451]" />
                                                <Text size="2xl" as="p" className="!text-[#000000]">
                                                    {job.requirements}
                                                </Text>
                                            </div>
                                        
                                        <a href={job.url} className="mt-[0.31rem]">
                                            <Text size="md" as="p" className="!text-[#626262]">
                                                View all
                                            </Text>
                                        </a>
                                    </div>
                                    <div onClick={() => applyToJob(job.id)} className="mr-[1.88rem] flex w-[25%] hover:scale-105 transition duration-300 ease-in-out justify-center rounded-[10px] bg-[#253451] md:mr-0 md:w-full">
                                        <Text
                                            size="3xl"
                                            as="p"
                                            className="!text-[1.00rem] cursor-pointer"
                                        >
                                            Apply
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        ))}
                </ul>
            ) : (
                <p>No jobs available</p>
            )}
        </div>
        <Footer />
        </>
    );
};

export default JobsPage;

