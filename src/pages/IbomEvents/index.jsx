import Helmet from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

// import scrolltotop hook
import useScrollToTop from "../../hooks/useScrollToTop";

export default function IbomEventsPage() {
    useScrollToTop();

    Aos.init({
        duration: 1800,
        offset: 0,
    })
    
    return (
        <>
            <Helmet>
                <title>CTSC</title>
                <meta name="description" content="web site created by Victor Ikurekong" />
            </Helmet>
            <div className="flex w-full flex-col items-center justify-center bg-[#ffffff] pb-[22.25rem] md:pb-[1.25rem]">
                <div className="self-stretch">
                    <div>
                        <div className="relative z-[1] flex flex-col items-center">
                            <Header className="self-stretch" />
                            {/* <div className="container-xs relative mt-[-1.13rem] flex flex-col items-center pl-[50.69rem] pr-[22.81rem] md:p-[1.25rem] md:px-[1.25rem]">
                                <Text size="9xl" as="p" className="#0000007c] 5px 5px text-shadow-[4px !font-['Inter']">
                                    Ibom Events
                                </Text>
                            </div> */}
                        </div>
                        <div className="mt-[-0.56rem] flex h-[28.94rem] items-center justify-center bg-[url(/public/images/mg.png)] bg-cover bg-no-repeat pb-[9.69rem] pt-[13.13rem] md:h-auto md:py-[1.25rem] sm:pb-[155px] sm:pt-[1.25rem]">
                            <div data-aos="fade-up" className="container-xs mt-10 md:mt-24 flex justify-center pl-[27.50rem] pr-[28.06rem] md:p-[1.25rem] md:px-[1.25rem]">
                                <Text size="27xl" as="p" className="text-[4.00rem] sm:mt-10">
                                    IBOM EVENTS
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-xs mt-[16.00rem] sm:mt-[10rem] pl-[3.06rem] md:p-[1.25rem] md:pl-[1.25rem]">
                    <div className="flex flex-col gap-[3.81rem]">
                        <div data-aos="zoom-in" className="flex flex-1 bg-[#d9d9d9]">
                            <div className="flex w-[89%] items-center justify-between gap-[1.25rem] md:w-full md:flex-col md:p-[1.25rem]">
                                <div className="flex w-[45%] flex-col gap-[0.31rem] md:w-full">
                                    <Img src="images/image_2.png" alt="ibom_tech_week" className="h-[19.75rem] object-cover" />
                                    <div className="flex flex-col items-start rounded-[20px] bg-[#eeeeee] px-[1.25rem] pb-[0.75rem] pt-[1.63rem] sm:pt-[1.25rem]">
                                        <Text size="12xl" as="p" className="!text-[1.63rem] !font-medium !text-[#000000]">
                                            Ibom Tech Week 2023
                                        </Text>
                                        <Text
                                            size="xl"
                                            as="p"
                                            className="mt-[0.38rem] w-[72%] !text-[0.88rem] leading-[1.31rem] !text-[#000000] md:w-full"
                                        >
                                            <>
                                                Nick Marden Lists What Nigerian Techies <br />
                                                Need To Do To Land Waiting Global Tech Jobs
                                            </>
                                        </Text>
                                        <Button
                                            color="blue_gray_900"
                                            size="sm"
                                            className="ml-[0.81rem] mt-[1.25rem] min-w-[6.44rem] rounded-[14px] font-medium md:ml-0"
                                        >
                                            View Event
                                        </Button>
                                    </div>
                                </div>
                                <div className="mb-[6.56rem] flex w-[49%] flex-col items-start gap-[1.25rem] self-end md:w-full">
                                    <div className="h-[1.63rem] self-stretch rounded-[13px] bg-[#aaaaaa]" />
                                    <div className="h-[1.63rem] w-[90%] rounded-[13px] bg-[#aaaaaa]" />
                                    <div className="h-[1.63rem] w-[80%] rounded-[13px] bg-[#aaaaaa]" />
                                    <div className="h-[1.63rem] self-stretch rounded-[13px] bg-[#aaaaaa]" />
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="flex flex-1 bg-[#d9d9d9]">
                            <div className="flex w-[89%] items-center justify-between gap-[1.25rem] md:w-full md:flex-col md:p-[1.25rem]">
                                <div className="flex w-[45%] flex-col gap-[0.31rem] md:w-full">
                                    <img src="images/image_2A.png" alt="imagetwo" className="h-[19.75rem] object-cover" />
                                    <div className="rounded-[20px] bg-[#eeeeee] pb-[0.75rem] pl-[1.25rem] pr-[1.56rem] pt-[1.56rem] sm:pr-[1.25rem] sm:pt-[1.25rem]">
                                        <div className="flex flex-col items-start gap-[0.81rem]">
                                            <div className="flex flex-wrap items-center justify-between gap-[1.25rem] self-stretch">
                                                <Text size="12xl" as="p" className="text-[1.63rem] !font-medium !text-[#000000]">
                                                    CakeMania 6
                                                </Text>
                                                <Text size="4xl" as="p" className="self-end !text-[1.06rem] !font-medium !text-[#000000]">
                                                    3:30 PM 11:55 PM
                                                </Text>
                                            </div>
                                            <Text
                                                size="xl"
                                                as="p"
                                                className="w-[91%] !text-[0.88rem] leading-[1.31rem] !text-[#000000] md: w-full"
                                            >
                                                <>
                                                    Cakemania is the biggest cake event in Nigeria
                                                    <br /> that incorporates a live cake decorating competition
                                                </>
                                            </Text>
                                            <Button
                                                color="blue_gray_900"
                                                size="sm"
                                                className="ml-[0.81rem] min-w-[6.44rem] rounded-[14px] font-medium md:ml-e"
                                            >
                                                View Event
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-[6.56rem] flex w-[49%] flex-col items-start gap-[1.25rem] self-end md:w-full">
                                    <div className="h-[1.63rem] self-stretch rounded-[13px] bg-[#aaaaaa]" />
                                    <div className="h-[1.63rem] w-[98%] rounded-[13px] bg-[#aaaaaa]" />
                                    <div className="h-[1.63rem] w-[88%] rounded-[13px] bg-[#aaaaaa]" />
                                    <div className="h-[1.63rem] self-stretch rounded-[13px] bg-[#aaaaaa]" />
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="flex flex-1 bg-[#d9d9d9]">
                            <div className="flex w-[89%] items-center justify-between gap-[1.25rem] md:w-full md:flex-col md:p-[1.25rem]">
                                <div className="w-[45%] md:w-full">
                                    <Img
                                        src="images/image_2B.png"
                                        alt="imagetwo"
                                        className="h-[21.75rem] w-full object-cover md:h-auto"
                                    />
                                    <div className="relative mt-[-1.69rem] flex flex-col items-start gap-[0.81rem] rounded-[20px] bg-[#eeeeee] px-[1.25rem] pb-[0.75rem] pt-[1.56rem] sm:pt-[1.25rem]"> <div className="flex flex-wrap items-center gap-[0.94rem]">
                                        <Text size="12xl" as="p" className="!text-[1.63rem] !font-medium !text-[#000000]">
                                            She in-tech summit
                                        </Text>
                                        <Text size="4xl" as="p" className="self-end !text-[1.06rem] !font-medium !text-[#000000]">
                                            3:30 PM 11:55 PM
                                        </Text>
                                    </div>
                                        <Text
                                            size="xl"
                                            as="p"
                                            className="w-[86%] !text-[0.88rem] leading-[1.31rem] !text-[#000000] md:w-full"
                                        >
                                            <>
                                                She in-tech is a global tech empire aimed at bringing <br />
                                                women and ladies into the tech space
                                            </>
                                        </Text>
                                        <Button
                                            color="blue_gray_900"
                                            size="sm"
                                            className="ml-[0.81rem] min-w-[6.44rem] rounded-[14px] font-medium md:ml-0"
                                        >
                                            View Event
                                        </Button>
                                    </div>
                                </div>
                                <div className="mb-[6.56rem] flex w-[49%] flex-col items-start gap-[1.25rem] self-end md:w-full">
                                    <div className="h-[1.63rem] self-stretch rounded-[13px] bg-[#aaaaaa]" />
                                    <div className="h-[1.63rem] w-[90%] rounded-[13px] bg-[#aaaaaa]" />
                                    <div className="h-[1.63rem] w-[80%] rounded-[13px] bg-[#aaaaaa]" />
                                    <div className="h-[1.63rem] self-stretch rounded-[13px] bg-[#aaaaaa]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}