import Helmet from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function IbomEventsPage() {
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
                            <div className="container-xs mt-10 md:mt-24 flex justify-center pl-[27.50rem] pr-[28.06rem] md:p-[1.25rem] md:px-[1.25rem]">
                                <Text size="27xl" as="p" className="text-[4.00rem] sm:mt-10">
                                    IBOM EVENTS
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-xs mt-[16.00rem] sm:mt-[10rem] pl-[3.06rem] md:p-[1.25rem] md:pl-[1.25rem]">
                    <div className="flex flex-col gap-[3.81rem]">
                        <div className="flex flex-1 bg-[#d9d9d9]">
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
                        <div className="flex flex-1 bg-[#d9d9d9]">
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
                        <div className="flex flex-1 bg-[#d9d9d9]">
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
                {/* <div className="relative mt-[5.31rem] h-[29.69rem] self-stretch md:h-auto"> */}
                    {/* <div className="ml-[6.88rem] mt-[10.81rem] flex w-[13%] justify-between gap-[1.25rem] md:ml-0">
                        <div className="flex flex-col rounded-[21px] bg-[#ffffff] shadow-[0px_17.01px_23px_0px_#10122314]">
                            <Img
                                src="images/facebook.png"
                                alt="facebook"
                                className="h-[2.69rem] rounded-t1-[21px] rounded-tr-[21px]"
                            />
                        </div>
                        <div className="flex flex-col rounded-[21px] bg-[#ffffff] shadow-[0px_17.01px_23px_0px_#10122314]">
                            <img src="images/twitter.png" alt="trash" className="h-[2.69rem] rounded-t1-[21px] rounded-tr-[21px]" />
                        </div>
                        <div className="flex flex-col rounded-[21px] bg-[#ffffff] shadow-[0px_17.01px_23px_0px_#10122314]">
                            <img src="images/instagram.png" alt="info" className="h-[2.69rem] rounded-tl-[21px] rounded-tr-[21px]" />
                        </div>
                    </div> */}
                    {/* <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full">
                        <div>
                            <div className="relative h-[27.25rem] md:h-auto">
                                <Heading as="h1" className="ml-[6.88rem] mt-[5.88rem] !text-[2.00rem] md:ml-0">
                                    Our Socials
                                </Heading>
                                <div className="absolute bottom-◊ left-◊ right-◊ top-0 m-auto flex h-max w-full bg-[#192235] px-[3.38rem] pb-[2.19rem] pt-[10.38rem] md:mt-[100px] md:px-[1.25rem] md:pt-[1.25rem] sm:p-[1.25rem]">
                                    <div className="flex w-[86%] items-start justify-between gap-[1.25rem] md:w-full md:flex-col">
                                        <div className="flex w-[36%] flex-col items-start gap-[2.25rem] md:w-full">
                                            <Text size="10xl" as="p" className="!font-['Inter'] !text-[1.44rem]">
                                                CRACKING THE STYLE CODE
                                            </Text>
                                            <Text size="4xl" as="p" className="ml-[0.31rem] w-full leading-[1.56rem] md:m1-0">
                                                <>
                                                    We believe that valuable content should be <br />
                                                    easily accessible to empower a diverse global <br /> audience.
                                                </>
                                            </Text>
                                            <div className="ml-[0.31rem] flex w-[46%] justify-between gap-[1.25rem] md:ml-0 md:w-full md:justify-start">
                                                <Button shape="round" className="w-[2.69rem] !rounded-[21px]">
                                                    <img src="images/facebook.png" />
                                                </Button>
                                                <Button shape="round" className="w-[2.69rem] !rounded-[21px]">
                                                    <img src="images/twitter.png" />
                                                </Button>
                                                <Button shape="round" className="w-[2.69rem] !rounded-[21px]">
                                                    <img src="images/instagram.png" />
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="mb-[0.75rem] flex w-[52%] items-start justify-between gap-[1.25rem] md:w-full sm:flex-col"> <div className="mt-[0.31rem] flex flex-col items-start">
                                            <Heading as="h2" className="!text-[2.00rem]">
                                                Pages
                                            </Heading>
                                            <a href="Home" target="_blank" rel="noreferrer" className="m]-[0.44rem] mt-[1.13rem] md:m1-0">
                                                <Text as="p" className="!text-[1.25rem]">
                                                    Home
                                                </Text>
                                            </a>
                                            <a href="#" className="ml-[0.44rem] mt-[0.50rem] md:ml-0">
                                                <Text size="9xl" as="p" className="!font-['Inter']">
                                                    Mkpo Nnyin
                                                </Text>
                                            </a>
                                            <a href="#" className="ml-[0.44rem] mt-[0.81rem] md:ml-0">
                                                <Text as="p" className="!text-[1.25rem]">
                                                    News & Stories
                                                </Text>
                                            </a>
                                            <a href="#" className="ml-[0.44rem] mt-[0.44rem] md:ml-0">
                                                <Text size="9xl" as="p" className="!font-['Inter']">
                                                    About CTSCode
                                                </Text>
                                            </a>
                                        </div>
                                            <div className="flex flex-col items-start">
                                                <Heading as="h3" className="text-[2.00rem]">
                                                    Get in Touch
                                                </Heading>
                                                <Text as="p" className="ml-[0.50rem] mt-[1.63rem] !text-[1.25rem] md:ml-0">
                                                    Email: crackingthestyleco
                                                </Text>
                                                <Text as="p" className="ml-[0.50rem] mt-[0.38rem] !text-[1.25rem] md:m1-0">
                                                    Phone: +2347080141538
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-[2] mt-[-10px] flex justify-center bg-[#3d547f] md:mt-[530px] sm:mt-[670px">
                                <div className="container-xs flex justify-center pl-[19.63rem] pr-[21.50rem] md:p-[1.25rem] md:px-[1.25rem]">
                                    <Text size="12xl" as="p" className="!text-[#fffffff2]">
                                        <span className="text-[#fffffff2]">All Rights Reserved. ©2024</span>
                                        <span className="lowercase text-[#fffffff2]">&nbsp;CRACKING THE STYLE CODE</span>
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div> */}
                {/* </div> */}
            </div>
            <Footer />
        </>
    )
}