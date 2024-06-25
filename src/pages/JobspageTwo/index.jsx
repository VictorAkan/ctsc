import { Helmet } from "react-helmet";
import { Img, Text, Button, Input } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JobsPageTwoCategory from "../../components/JobsPageTwoCategory";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { SignUpModal } from "../../modals/SignUpModal";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

// import scrolltotop hook
import useScrollToTop from "../../hooks/useScrollToTop";

const jobsData = [
    {
        designandtext: "Designs and Creative",
        skillsimage: "images/people_rate.png",
        skillscountertext: "457 skills",
        starimage: "images/star_rate.png",
        ratingtext: "5/5",
        designandimage: "images/workimg_1.png",
        linkDest: "/jobs/design-creative",
    },
    {
        designandtext: "Sales & Marketing",
        skillsimage: "images/people_rate.png",
        skillscountertext: "457 skills",
        starimage: "images/star_rate.png",
        ratingtext: "5/5",
        designandimage: "images/workimg_2.png",
        linkDest: "/jobs/sales-marketing",
    },
    {
        designandtext: "Photography",
        skillsimage: "images/people_rate.png",
        skillscountertext: "457 skills",
        starimage: "images/star_rate.png",
        ratingtext: "5/5",
        designandimage: "images/workimg_3.png",
        linkDest: "/jobs/photography",
    },
    {
        designandtext: "Development & IT",
        skillsimage: "images/people_rate.png",
        skillscountertext: "344 skills",
        starimage: "images/star_rate.png",
        ratingtext: "5/5",
        designandimage: "images/workimg_4.png",
        linkDest: "/jobs/development-it",
    },
    {
        designandtext: "Finance & Accounting",
        skillsimage: "images/people_rate.png",
        skillscountertext: "344 skills",
        starimage: "images/star_rate.png",
        ratingtext: "5/5",
        designandimage: "images/workimg_5.png",
        linkDest: "/jobs/finance-accounting",
    },
    {
        designandtext: "Writing & Translation",
        skillsimage: "images/people_rate.png",
        skillscountertext: "344 skills",
        starimage: "images/star_rate.png",
        ratingtext: "5/5",
        designandimage: "images/workimg_6.png",
        linkDest: "/jobs/writing-translation",
    },
    {
        designandtext: "Legal",
        skillsimage: "images/people_rate.png",
        skillscountertext: "457 skills",
        starimage: "images/star_rate.png",
        ratingtext: "5/5",
        designandimage: "images/workimg_7.png",
        linkDest: "/jobs/legal",
    },
    {
        designandtext: "Repairs & Engineering",
        skillsimage: "images/people_rate.png",
        skillscountertext: "457 skills",
        starimage: "images/star_rate.png",
        ratingtext: "5/5",
        designandimage: "images/workimg_8.png",
        linkDest: "/jobs/repairs-engineering",
    },
    {
        designandtext: "HR Personnel",
        skillsimage: "images/people_rate.png",
        skillscountertext: "457 skills",
        starimage: "images/star_rate.png",
        ratingtext: "5/5",
        designandimage: "images/workimg_9.png",
        linkDest: "/jobs/hr-personnel",
    },
];

export default function JobspageTwoPage() {
    useScrollToTop();

    Aos.init({
        duration: 1800,
        offset: 0,
    });

    const [open, setOpen] = useState(false);
    const [jobCategories, setJobCategories] = useState([]);
    const [latestJobs, setLatestJobs] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredJobs, setFilteredJobs] = useState([]);

    const fetchJobCategories = async () => {
        try {
            const response = await axios.get(
                "https://crackingthestylecode.pythonanywhere.com/api/v1/job-categories/"
            );
            console.log(response.data);
            setJobCategories(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchLatestJobs = async () => {
        try {
            const response = await axios.get(
                "https://crackingthestylecode.pythonanywhere.com/api/v1/latest-job/"
            );
            setLatestJobs(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchJobCategories();
        fetchLatestJobs();
    }, []);

    const handleSearch = (event) => {
        const newSearchText = event.target.value.toLowerCase();
        setSearchText(newSearchText);
        if (newSearchText) {
            const filteredJobs = jobsData.filter((job) =>
                job.designandtext.toLowerCase().includes(newSearchText)
            );
            setFilteredJobs(filteredJobs);
        } else {
            setFilteredJobs([]);
        }
    };

    const applyToJob = (jobId) => {
        window.location.href = `/apply/${jobId}`;
    };

    const handleClearSearch = () => {
        setSearchText("");
        setFilteredJobs([]);
    };
    return (
        <>
            <Helmet>
                <title>CTSC</title>
                <meta
                    name="description"
                    content="web site created by Victor Ikurekong"
                />
            </Helmet>
            <div className="w-full bg-[#ffffff]">
                <Header />
                <div className="flex flex-col items-center">
                    <div className="h-[28.19rem] self-stretch md:h-auto">
                        <div className="m-auto flex h-max mt-24 w-full flex-col items-start gap-[1.00rem] bg-[#ffffff]">
                            <div className="container-xs pl-[75.00rem] mt-10 pr-[1.88rem] md:p-[1.25rem] md:pl-[1.25rem] sm:px-[1.25rem]">
                                <div className="flex flex-col items-center rounded-[38px] bg-[#cecece] p-[0.81rem]">
                                    <Img
                                        src="images/user.png"
                                        alt="lock"
                                        className="h-[3.06rem]"
                                    />
                                </div>
                            </div>
                            <div className="h-[19.69rem] -mt-10 md:-mt-0 w-full">
                                {/* <div className="my-auto flex h-[19.50rem] w-[69%] items-center justify-end bg-[url(/public/images/group_me.png)] bg-cover bg-no-repeat px-[3.06rem] pb-[4.81rem] pt-[12.06rem] md:h-auto md:p-[1.25rem]">
                                    <Button
                                        color="blue_gray_900"
                                        size="md"
                                        shape="round"
                                        className="min-w-[9.00rem] !rounded-[21px] !cursor-pointer font-['Inter'] font-medium sm:px-[1.25rem]"
                                    >
                                        Hire
                                    </Button>
                                </div> */}
                                <div
                                    data-aos="fade-up"
                                    className="m-auto flex w-[68%] justify-center flex-col items-center gap-[2.13rem]"
                                >
                                    <Button
                                        color="blue_gray_900_0c"
                                        size="8xl"
                                        className="rounded-[12px] font-['Inter'] font-semibold sm:px-[0rem]"
                                    >
                                        AKWA IBOM JOB SEEKERS
                                    </Button>
                                    <Text
                                        size="5xl"
                                        as="p"
                                        className="w-[77%] text-center Ifont-['Inter'] !text-[1.13rem] leading-[1.38rem] !text-[#121316] md:w-full md:p-[0.25rem]"
                                    >
                                        <>
                                            Brush up on your skills and resume, before you apply.
                                            <br /> Check your email constantly for a response after
                                            the interview.
                                        </>
                                    </Text>
                                    <div className="my-auto flex md:flex-col h-[19.50rem] md:w-full -mt-48 md:-mt-0 w-[69%] items-center justify-end bg-[url(/public/images/group_me.png)] bg-cover bg-no-repeat px-[3.06rem] pb-[4.81rem] mr-[42rem] md:mr-0 pt-[12.06rem] md:h-auto md:p-[1.25rem]">
                                        <Button
                                            onClick={() => setOpen(true)}
                                            color="blue_gray_900"
                                            size="md"
                                            shape="round"
                                            className="min-w-[9.00rem] md:w-full mr-10 md:mr-0 !rounded-[21px] !cursor-pointer font-['Inter'] font-medium sm:px-[1.25rem]"
                                        >
                                            Hire
                                        </Button>
                                        <Button
                                            onClick={() => setOpen(true)}
                                            color="blue_gray_900"
                                            size="md"
                                            variant="outline"
                                            shape="round"
                                            className="min-w-[9.00rem] md:w-full mr-[-14.7rem] self-end md:self-center mt-0 md:mt-5 !rounded-[21px] font-['Inter'] font-semibold md:mr-0"
                                        >
                                            Post a Job
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-xs md:mt-[2.31rem] pl-[2.38rem] pr-[4.69rem] md:p-[1.25rem] md:pr-[1.25rem] sm:px-[1.25rem]">
                        <div className="flex flex-col gap-[4.69rem] md:gap-[3.50rem] sm:gap-[2.31rem]">
                            <div className="flex w-[95%] md:w-full">
                                <div className="flex w-full flex-col gap-[0.25rem]">
                                    <div className="flex items-start justify-between gap-[1.25rem]">
                                        <Text
                                            size="14xl"
                                            as="p"
                                            className="mb-[1.31rem] mt-0 md:mt-10 sm:mt-24 !font-['Inter'] !text-[#000000]"
                                        >
                                            Browse By Category
                                        </Text>
                                        <Img
                                            src="images/search_white.svg"
                                            alt="search"
                                            className="h-[1.69rem] w-[1.69rem]"
                                        />
                                    </div>
                                    <div className="flex h-[3.06rem] items-center rounded-[12px] bg-[url(/public/images/img_group_51.svg)] bg-cover bg-no-repeat px-[1.50rem] pb-[0.63rem] pt-[0.81rem] md:h-auto sm:px-[1.25rem]">
                                        <Text as="p" className="!font-['Inter']">
                                            <div className="flex justify-between">
                                                <input
                                                    type="text"
                                                    value={searchText}
                                                    onChange={handleSearch}
                                                    className="placeholder-gray-300 pt-5 w-full"
                                                    placeholder="Looking for work?"
                                                />
                                                {searchText.length > 0 && (
                                                    <Button
                                                        className="text-[#ffffff] bg-[#334870] rounded-[38px] px-4 py-2 hover:bg-[#0067cc] focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:ring-opacity-50"
                                                        onClick={handleClearSearch}
                                                    >
                                                        Clear
                                                    </Button>
                                                )}
                                            </div>
                                            {/* <span className="text-[#25345199]">Browse Jobs</span> */}
                                        </Text>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-[3.81rem] md:grid-cols-2 sm:grid-cols-1">
                                {/* {jobCategories.length > 0 &&
                                    jobCategories.map((category) => (
                                        <JobsPageTwoCategory
                                            key={category.id}
                                            data-aos="zoom-in"
                                            designandtext={category.name}
                                            skillsimage="images/people_rate.png" // Assuming you have an image for skills
                                            skillscountertext={`${category.count} Jobs`} // Assuming there's a job_count property
                                            starimage="images/star_rate.png"
                                            ratingtext="5/5" // Assuming a constant rating for now
                                            designandimage="images/workimg_3.png" // Assuming a placeholder image
                                            linkDest={`/jobspage/${category.slug}`} // Assuming a slug property for category URL
                                            className="pb-[2.38rem] pl-[1.38rem] pr-[0.75rem] pt-[2.44rem] hover:shadow-[-5px_6px_27px_0px_#25345142] sm:py-[1.25rem] sm:pl-[1.25rem]"
                                        />
                                    ))} */}
                                {filteredJobs.length > 0 ? (
                                    filteredJobs.map((job) => (
                                        <JobsPageTwoCategory
                                            key={job.id} // Assuming there's an ID property for each job
                                            data-aos="zoom-in"
                                            designandtext={job.designandtext}
                                            skillsimage="images/people_rate.png" // Assuming you have an image for skills
                                            skillscountertext={`${job.skillscountertext}`} // Assuming there's a skillscountertext property
                                            starimage="images/star_rate.png"
                                            ratingtext={job.ratingtext} // Assuming a ratingtext property
                                            designandimage={job.designandimage} // Assuming a designandimage property
                                            linkDest={job.linkDest} // Assuming a linkDest property
                                            className="pb-[2.38rem] pl-[1.38rem] pr-[0.75rem] pt-[2.44rem] hover:shadow-[-5px_6px_27px_0px_#25345142] sm:py-[1.25rem] sm:pl-[1.25rem]"
                                        />
                                    ))
                                ) : searchText.length === 0 ? (
                                    jobsData.map((job) => (
                                        <JobsPageTwoCategory
                                            key={job.id} // Assuming there's an ID property for each job
                                            data-aos="zoom-in"
                                            designandtext={job.designandtext}
                                            skillsimage="images/people_rate.png" // Assuming you have an image for skills
                                            skillscountertext={`${job.skillscountertext}`} // Assuming there's a skillscountertext property
                                            starimage="images/star_rate.png"
                                            ratingtext={job.ratingtext} // Assuming a ratingtext property
                                            designandimage={job.designandimage} // Assuming a designandimage property
                                            linkDest={job.linkDest} // Assuming a linkDest property
                                            className="pb-[2.38rem] pl-[1.38rem] pr-[0.75rem] pt-[2.44rem] hover:shadow-[-5px_6px_27px_0px_#25345142] sm:py-[1.25rem] sm:pl-[1.25rem]"
                                        />
                                    ))
                                ) : (
                                    <Text className="text-center !text-[#000000] text-lg font-medium mt-10">
                                        No Jobs Found for "{searchText}"
                                    </Text>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mt-[9.00rem] flex justify-center self-stretch bg-[#e9f0ff] pb-[10.56rem] pt-[7.88rem] md:py-[1.25rem]">
            <div className="container-xs flex justify-center pl-[2.81rem] md:p-[1.25rem] md:pl-[1.25rem]">
                <div className="flex w-full flex-col gap-[5.88rem] md:gap-[4.38rem] sm:gap-[2.94rem]">
                    <div data-aos="fade-up" className="flex w-[93%] flex-wrap items-start justify-between gap-[1.25rem] md:w-full">
                        <Text size="21xl" as="p" className="!text-[#000000]">
                            Latest Job Opportunities
                        </Text>
                        <Link to="/login" className="mt-[0.31rem]">
                            <Text size="13xl" as="p" className="!font-medium !text-[#555453]">
                                See All
                            </Text>
                        </Link>
                    </div>
                    <div className="flex gap-[3.38rem] md:flex-col">
                        {latestJobs.map((job) => (
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
                                                <div className="flex rounded-[43px] bg-[#253451] p-1">
                                                    <Text size="s" as="p" className="!text-[0.63rem] text-center !font-medium">
                                                        {job.tag}
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-[2.44rem] w-[2.44rem] rounded-[19px] bg-[#d9d9d9]" />
                                    </div>
                                    <div className="mt-[0.88rem] flex flex-col items-start self-stretch">
                                        <Text size="2xl" as="p" className="!text-[#626262]">
                                            Requirements & Skills
                                        </Text>
                                        
                                            <div className="mt-[0.38rem] flex items-center gap-[0.75rem]">
                                                <div className="h-[0.69rem] sm:hidden w-[0.75rem] rounded-md bg-[#253451]" />
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
                                    <div className="mr-[1.88rem] flex w-[25%] hover:scale-105 transition duration-300 ease-in-out justify-center rounded-[10px] bg-[#253451] md:mr-0 md:w-full">
                                        <Link to="/login">
                                        <Text
                                            size="3xl"
                                            as="p"
                                            className="!text-[1.00rem] cursor-pointer"
                                        >
                                            Apply
                                        </Text>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
                    <div className="flex flex-col items-center justify-center self-stretch pb-[3.94rem] pt-[8.25rem] md:py-[1.25rem]">
                        <div className="container-xs flex flex-col items-start pl-[14.38rem] pr-[3.50rem] md:p-[1.25rem] md:px-[1.25rem]">
                            <Text
                                data-aos="fade-up"
                                size="21xl"
                                as="p"
                                className="!text-[#000000]"
                            >
                                You're a client? Find the best Talent For your Job{""}
                            </Text>
                            <div className="ml-[4.69rem] mt-[4.56rem] flex w-[73%] flex-col gap-[5.38rem] md:ml-0 md:w-full">
                                <Link to="/clientsignup"
                                    data-aos="fade-up"
                                    className="flex flex-1 rounded-[25px] border border-solid border-[#000000] bg-[#f7f7f7] pb-[1.88rem] pl-[1.94rem] pr-[2.75rem] pt-[2.75rem] md:pr-[1.25rem] md:pt-[1.25rem] sm:p-[1.25rem]"
                                >
                                    <div className="flex w-full items-start justify-center gap-[2.00rem] sm:flex-col">
                                        <Img
                                            src="images/add_user_1.png"
                                            alt="image"
                                            className="h-[5.00rem] w-[5.00rem] object-cover"
                                        />
                                        <div className="mt-[0.50rem] flex flex-col items-start">
                                            <Text size="21xl" as="p" className="!text-[#000000]">
                                                Create a Client Account
                                            </Text>
                                            <Text as="p" className="!font-medium !text-[#908f8f]">
                                                {" "}
                                                You have to create an account with us{" "}
                                            </Text>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/clientsignup"
                                    data-aos="fade-up"
                                    className="flex flex-1 rounded-[25px] border border-solid border-[#000000] bg-[#f7f7f7] pb-[1.88rem] pl-[1.94rem] pr-[2.75rem] pt-[3.31rem] md:pr-[1.25rem] md:pt-[1.25rem] sm:p-[1.25rem]"
                                >
                                    <div className="flex w-full items-start justify-center gap-[2.00rem] sm:flex-col">
                                        <Img
                                            src="images/suitcase_1.png"
                                            alt="image"
                                            className="h-[5.00rem] w-[5.00rem] object-cover"
                                        />
                                        <div className="mt-[0.00rem] mb-4 flex flex-col items-start">
                                            <Text size="21xl" as="p" className="!text-[#000000]">
                                                Post a Job
                                            </Text>
                                            <Text as="p" className="!font-medium !text-[#908f8f]">
                                                Make a post of the vacancy or hire from our talent{" "}
                                            </Text>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/clientsignup"
                                    data-aos="fade-up"
                                    className="flex flex-1 rounded-[25px] border border-solid !border-[#253451] !bg-gray-50 pb-[0.63rem] pl-[2.00rem] pr-[2.88rem] pt-[2.88rem] md:pr-[1.25rem] md:pt-[1.25rem] sm:px-[1.25rem]"
                                >
                                    <div className="flex w-full items-start justify-center gap-[1.44rem] md:flex-col">
                                        <Img
                                            src="images/hired_1.png"
                                            alt="hiredone"
                                            className="h-[5.50rem] w-[5.50rem] object-cover"
                                        />
                                        <div className="mt-[0.00rem] mb-10 flex flex-col items-start gap-[0.81rem]">
                                            <Text size="21xl" as="p" className="!text-[#000000]">
                                                Hire a talent for work
                                            </Text>
                                            <Text as="p" className="!font-medium -mt-4 !text-[#908f8f]">
                                                {" "}
                                                Choose your best fit for the Job and and interract
                                            </Text>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div
                                data-aos="fade-up"
                                className="ml-[4.94rem] mt-[7.44rem] flex w-[73%] items-start justify-center gap-[1.69rem] rounded-[25px] border-4 border-solid border-[#ffffff] bg-[#ffffff] pb-[2.19rem] pl-[2.06rem] pr-[3.25rem] pt-[2.88rem] shadow-[-7px_-4px_58px_3px_#25345138] md:ml-0 md:w-full md:pr-[1.25rem] md:pt-[1.25rem] sm:flex-col sm:p-[1.25ren]"
                            >
                                <Img
                                    src="images/info_1.png"
                                    alt="infoone"
                                    className="mt-[0.44rem] h-[4.56rem] w-[4.56rem] object-cover"
                                />
                                <Button
                                    size="10xl"
                                    as="p"
                                    className="w-[80%] !text-[1.94rem] leading-[2.94rem] !text-[#000000] sm:w-full"
                                >
                                    <Link to="/contactus">
                                        Get
                                        Feedback From us{" "}
                                    </Link>
                                </Button>
                            </div>
                            <div className="ml-[14.25rem] mt-[9.56rem] flex flex-col gap-[0.2rem] md:ml-0">
                                <Text size="21xl" as="p" className="!text-[#000000] ">
                                    Haven't sign up yet?{" "}
                                </Text>
                                <Text
                                    onClick={() => setOpen(true)}
                                    size="21xl"
                                    as="p"
                                    className="!font-medium cursor-pointer text-center !text-[#253451]"
                                >
                                    Sign up
                                </Text>

                                <SignUpModal open={open} onClose={() => setOpen(false)}>
                                    <div className="p-4 items-center justify-center">
                                        <div className="p-8 sm:p-1 sm:space-y-4">
                                            <Text
                                                size="22xl"
                                                as="p"
                                                className="!font-['Inter'] !text-[#000000] text-center"
                                            >
                                                Create An Account
                                            </Text>
                                            <p className="text-center sm:text-sm text-[#32403B]">
                                                Create an account to enjoy all the services <br />{" "}
                                                without any ads for free!
                                            </p>
                                        </div>
                                        <div>
                                            <form className="space-y-10" action="">
                                                <Input
                                                    shape="round"
                                                    type="email"
                                                    name="email"
                                                    placeholder={`Email Address`}
                                                    className="w-full bg-white outline outline-gray-200"
                                                />
                                                <Input
                                                    shape="round"
                                                    type="password"
                                                    name="password"
                                                    placeholder={`Password`}
                                                    className="w-full bg-white outline outline-gray-200"
                                                />
                                                <Link to="/signup">
                                                <Button
                                                    color="blue_gray_900"
                                                    size="10xl"
                                                    shape="round"
                                                    className="min-w-[13.56rem] sm:text-[1.38rem] sm:px-[1.13rem] ml-[7rem] sm:ml-0 hover:bg-[#2d3f61] font-medium"
                                                >
                                                    Create Account
                                                </Button>
                                                </Link>
                                                <Link to="/login">
                                                    <Text
                                                        data-aos="fade-up"
                                                        size="2xl"
                                                        as="p"
                                                        className="flex ml-[8rem] sm:ml-0 !text-[0.94rem] !text-center tracking-[0.00rem] !text-[#494759]"
                                                    >
                                                        <span className="text-[#494759] capitalize">
                                                            Already have an account?&nbsp;
                                                        </span>
                                                        <a
                                                            href="#"
                                                            className="font-semibold text-[#000000] underline"
                                                        >
                                                            Sign In
                                                        </a>
                                                    </Text>
                                                </Link>
                                            </form>
                                        </div>
                                    </div>
                                </SignUpModal>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer className="mt-[4.63rem]" />
            </div>
        </>
    );
}
