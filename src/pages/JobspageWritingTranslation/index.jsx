import React from "react";
import Helmet from "react-helmet";
import { Img, Text } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JobsPageStackgraphic from "../../components/JobsPageStackgraphic";
import useScrollToTop from "../../hooks/useScrollToTop";

const data = [
    { Johnokon: "John Okon", graphic: "Graphic Designer", viewprofile: "View Profile" },
    { Johnokon: "John Okon", graphic: "Graphic Designer", viewprofile: "View Profile" },
    // ... more data
];

export default function JobspageWritingTranslation() {
    useScrollToTop();
    return (
        <>
            <Helmet>
                <title>Writing and Translation Jobs</title>
                <meta name="description" content="Writing and Translation job listings" />
            </Helmet>
            <div className="flex w-full flex-col items-center bg-[#ffffff]">
                <Header className="self-stretch" />
                <div className="container-xs mt-[10.19rem] pl-[1.19rem] pr-[1.69rem] md:p-[1.25rem] sm:pr-[1.25rem]">
                    <div className="flex flex-col items-center">
                        <div className="flex w-[51%] flex-col items-center md:w-full">
                            <div className="relative z-[1] flex justify-center self-stretch rounded-[12px] bg-[#253451] px-[2.00rem] pb-[1.69rem] pt-[2.00rem] sm:p-[1.25rem]">
                                <Text size="23xl" as="p" className="font-['Inter'] text-[3.25rem]">
                                    Writing & Translation
                                </Text>
                            </div>
                            <Text size="27xl" as="p" className="relative mt-[-4.75rem] !text-[4.00rem]">
                                IBOM EVENTS
                            </Text>
                        </div>
                        <Text size="11xl" as="p" className="ml-[32.00rem] mt-[1.75rem] self-start !font-['Inter'] !text-[1.56rem] !font-medium md:ml-0">
                            Hire
                        </Text>
                        <div className="mt-[2.69rem] grid grid-cols-3 justify-center gap-[9.19rem] self-stretch md:grid-cols-2 sm:grid-cols-1">
                            {data.map((d, index) => (
                                <JobsPageStackgraphic {...d} key={"jobspage" + index} />
                            ))}
                        </div>
                        <div className="mt-[5.13rem] flex gap-[0.88rem]">
                            <Img src="images/arrow_2.png" alt="arrowtwo" className="h-[0.13rem]" />
                            <img src="images/arrow_1.png" alt="arrowone" className="h-[0.13rem]" />
                        </div>
                    </div>
                </div>
                <Footer className="mt-[18.63rem] self-stretch" />
            </div>
        </>
    );
}
