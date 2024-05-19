import { Helmet } from "react-helmet";
import { Img, Text, Button, Input, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

// import scrolltotop hook
import useScrollToTop from "../../hooks/useScrollToTop";

export default function HomePage() {
    useScrollToTop();
    
    return (
        <>
            <Helmet>
                <title>CTSC</title>
                <meta name="description" content="web site created by Victor Ikurekong" />
            </Helmet>
            <div className="w-full bg-[#ffffff]">
                <div>
                    <div>
                        <Header />
                        <div className="h-[48.38rem] bg-[url(/public/images/mask_group.png)] bg-cover bg-no-repeat pb-[11.06rem] md:h-auto md:pb-[1.25rem]">
                            <div className="flex flex-col items-center gap-[7.81rem] md:gap-[5.81rem] sm:gap-[3.88rem]">
                                <div className="h-[0.20rem] self-stretch bg-[#d9d9d9]" />
                                <div className="container-xs mt-10 flex flex-col items-center pl-[7.81rem] pr-[8.38rem] md:p-[1.25rem] md:px-[1.25rem]">
                                    <Heading size="4xl" as="h1" className="!text-[#ffa14a] !font-['Poppins']">
                                        Ndito Eka
                                    </Heading>
                                    <Text size="29xl" as="p" className="mt-[0.75rem] text-[6.19rem] text-center"> 
                                        Witness Our Evolution
                                    </Text>
                                    <Text size="12xl" as="p" className="text-[1.63rem] sm:text-center sm:mt-5">
                                        Inspiring Lives, Defining Standards
                                    </Text>
                                    <Link to="/ibompartnersone">
                                    <Button
                                        color="blue_gray_100_03"
                                        size="10xl"
                                        className="mt-[5.06rem] min-w-[21.75rem] hover:bg-[#ffffff] sm:min-w-[10rem] cursor-pointer rounded-[44px] font-medium sm:px-[1.25rem]"
                                    >
                                        Learn More
                                    </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center pb-[2.75rem] pt-[10.19rem] md:py-[1.25rem]">
                        <div className="container-xs flex flex-col items-center pr-[0.50rem] md:p-[1.25rem] md:pl-[1.25rem]">
                            <Text size="28xl" as="p" className="self-center !text-[#253451] md:ml-0 sm:text-center">
                                Digital Accessibility
                            </Text>
                            <Text size="14xl" as="p" className="mt-[1.94rem] w-full text-center leading-[2.81rem] !text-[#000000]">
                                <>
                                    Cracking The Style Code is accessible to everyone, ensuring a user-friendly <br />
                                    experience across various devices. We believe that valuable content should be <br /> easily accessible to empower a diverse global audience.t
                                </>
                            </Text>
                            <Button
                                color="blue_gray_900"
                                size="10xl"
                                className="mt-[4.06rem] min-w-[21.75rem] sm:min-w-[10rem] hover:bg-[#2d3f61] rounded-[44px] font-medium sm:px-[1.25rem]"
                            >
                                Ask Anything
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col md: gap-[0rem]">
                        <div className="flex flex-col items-center bg-[#ebebeb] pt-[4.56rem] md:pt-[1.25rem]">
                            <div className="container-xs flex flex-col items-center pl-[15.75rem] pr-[16.25rem] md:p-[1.25rem] md:px-[1.25rem]">
                                <Text size="21xl" as="p" className="self-start sm:text-center !font-medium !text-[#253451]">
                                    This Week's Feature Story
                                </Text>
                                <Img
                                    src="images/img_2594_1.png"
                                    alt="image"
                                    className="mt-[2.19rem] h-[26.94rem] w-full rounded-tl-[44px] sm:rounded-b-none rounded-tr-[44px] object-cover md:h-auto"
                                />
                                <div className="mt-[-0.06rem] self-stretch rounded-bl-[44px] rounded-br-[44px] bg-[#ffffff] pb-[1.19rem] pl-[1.81rem] pr-[1.31rem] pt-[1.81rem] sm:px-[1.25rem] sm:pt-[1.25rem]">
                                    <div className="flex flex-col items-start gap-[1.38rem]">
                                        <div className="flex w-[91%] items-center gap-[0rem] md:w-full md:flex-col">
                                            <Text
                                                size="14xl"
                                                as="p"
                                                className="w-[81%] sm:text-center !font-medium leading-[2.81rem] !text-[#000000] md:w-full sm:text-xl"
                                            >
                                                <>
                                                    Meet the Controversial Ibom Man <br />
                                                    behind &quot;Made in Akwa Ibom&quot;
                                                </>
                                            </Text>
                                            <Text as="p" className="self-end sm:self-center !text-[#000000] sm:text-center">
                                                Feb 19, 2024
                                            </Text>
                                        </div>
                                        <Text
                                            size="8xl"
                                            as="p"
                                            className="ml-[0.44rem] w-full !text-[1.31rem] leading-[2.00rem] !text-[#000000] md:ml-0"
                                        >
                                            <>
                                                unlocking Success: CEO, Made in Akwa Ibom shares powerful
                                                <br />
                                                business lessons and passionate entrepreneurial insights that <br />
                                                will put you in a better position to grow your focus on defining your <br /> business goals.
                                            </>
                                        </Text>
                                        <Button
                                            color="black_900_01"
                                            size="3xl"
                                            className="ml-[0.88rem] hover:bg-[#2a2a2a] min-w-[12.75rem] rounded-[10px] md:ml-0 sm:px-[1.25rem]"
                                        >
                                            Read More
                                        </Button>
                                    </div>
                                </div>
                                <Button
                                    color="blue_gray_900"
                                    size="9xl"
                                    className="mb-[70px] mt-[6.63rem] hover:bg-[#2d3f61] sm:min-w-[10rem] min-w-[27.19rem] rounded-[43px] font-medium sm:px-[1.25rem]"
                                >
                                    EXPLORE ALL NEWS & STORIES
                                </Button>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="flex flex-col gap-[0px] md:gap-[0rem] sm:gap-[0rem]">
                                    <div className="flex flex-wrap bg-[#d9d9d9] sm:pt-[1.25rem]">
                                        <marquee behavior="" direction="left">
                                        <Text
                                            size="24xl" as="p"
                                            className="self-start sm:self-center !font-['Inter'] text-[3.50rem] uppercase !text-[#253451]"
                                        >
                                            Inspiring Lives, Defining Standards. -  Inspiring Lives, Defining Standards
                                        </Text>
                                        </marquee>
                                        {/* <Text
                                            size="24xl"
                                            as="p"
                                            className="self-start !font-['Inter'] !text-[3.50rem] uppercase !text-[#253451]"
                                        >
                                            Inspiring Lives, Defining Standards
                                        </Text> */}
                                    </div>
                                    <div className="h-[8.44rem] md:h-auto">
                                        <div className="mb-[1.56rem] flex w-full justify-center bg-[#253451] pb-[29px] pt-8 sm:py-[1.25rem]">
                                            <div className="container-xs flex pl-[4.00rem] pr-[3.50rem] md:p-[1.25rem] md:px-[1.25rem]">
                                                <marquee behavior="" direction="left">
                                                <Text size="24xl" as="p" className="!font-['Inter'] text-[3.50rem]">
                                                    CRACKING THE STYLE CODE. - CRACKING THE STYLE CODE.
                                                </Text>
                                                </marquee>
                                            </div>
                                        </div>
                                        {/* <div className="absolute bottom-[1.56rem] left-0 right-0 m-auto flex w-full flex-wrap justify-between">
                                            <Text size="24xl" as="p" className="self-start pt-[100px] !font-['Inter'] !text-[3.50rem]">
                                                CRACKING THE STYLE CODE. -
                                            </Text>
                                            <Text size="24xl" as="p" className="self-end !font-['Inter'] !text-[3.50rem]">
                                                CRACKING THE STYLE CODE
                                            </Text>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center bg-[#253451] pb-[7.56rem] mt-[0rem] pt-[5.00rem] md:py-[1.25rem]">
                                <div className="container-xs flex justify-center pl-[6.81rem] pr-[9.94rem] md:p-[1.25rem] md:px-[1.25rem]">
                                    <div className="flex w-full flex-col items-center gap-[4.13rem] sm:gap-[2.06rem]">
                                        <div className="flex w-full flex-col items-center md:w-full">
                                            <Text size="25xl" as="p" className="text-[3.56rem] sm:text-center">
                                                We Do This For Us
                                            </Text>
                                            <Text size="14xl" as="p" className="w-full text-center leading-[2.81rem]">
                                                <>
                                                    Sign up with your email address to receive a summary of
                                                    <br /> all weekly publications in one slick loveletter
                                                </>
                                            </Text>
                                        </div>
                                        <div className="flex flex-col items-center justify-center gap-[3.06rem] self-stretch rounded-[49px] px-[3rem] bg-[#f7f5f5] py-[3.06rem] sm:px-[1rem] md:py-[3.25rem] sm:items-center">
                                            <Input
                                                shape="round"
                                                type="text"
                                                name="firstName"
                                                placeholder={`First Name`}
                                                className="w-[87%] sm:w-full sm:h-[4rem] sm:px-[1.25rem]"
                                            />
                                            <Input
                                                shape="round"
                                                type="text"
                                                name="lastName"
                                                placeholder={`Last Name`}
                                                className="w-[87%] sm:w-full sm:h-[4rem] sm:px-[1.25rem]"
                                            />
                                            <Input
                                                shape="round"
                                                type="email"
                                                name="email"
                                                placeholder={`Email Address`}
                                                className="w-[87%] sm:w-full sm:h-[4rem] sm:px-[1.25rem]"
                                            />
                                            <Button
                                                color="blue_gray_900"
                                                size="7xl"
                                                shape="round"
                                                className="min-w-[13.56rem] self-start ml-[4rem] md:ml-0 hover:bg-[#2d3f61] font-medium sm:pl-[1.25rem]"
                                            >
                                                Shine Your Light
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-full bg-[#d9d9d9] pl-24 pr-16 pt-[4.69rem] md:pl-[1.25rem] md:pt-[1.25rem] sm:px-[1.25rem]">
                        <div className="flex sm:block">
                        <div className="m-auto flex flex-col items-center gap-[0.81rem]">
                            <Text size="14xl" as="p" className="!text-[#000000]">
                                Cracking the style code is not just a Publication
                            </Text>
                            <Text size="14xl" as="p" className="!text-[#000000]">
                                Nnyin idoho itie uwed mop kpod;
                            </Text>
                        </div>
                        <Img
                            src="images/rectangle_19.png"
                            alt="image"
                            className="m-auto h-[29.88rem] sm:mt-5 w-[42%] sm:w-full object-cover"
                        />
                        </div>
                        <div className="flex sm:block space-x-6 sm:space-x-0">
                            <Img
                            src="images/rectangle_18.png"
                            alt="image"
                            className="m-auto h-[29.88rem] sm:mt-5 w-[42%] sm:w-full object-cover"
                        />
                        <div className="m-auto flex order-2 sm:order-1 w-full flex-col items-start gap-[1.94rem]">
                            <Text size="14xl" as="p" className="w-full leading-[2.81rem] !text-[#000000] md:w-full">
                                <>
                                    {" "}
                                    It&#39;s a movement for positive <br />
                                    change and empowerment.
                                </>
                            </Text>
                            <Text size="14xl" as="p" className="!text-[#000000]">
                                Ado Isang Eti Ukpogho mkpo ye Isang Uwam
                            </Text>
                        </div>
                        </div>
                        {/* <Img
                            src="images/rectangle_18.png"
                            alt="image"
                            className="m-auto h-[29.88rem] w-[42%] object-cover"
                        />
                        <Img
                            src="images/rectangle_19.png"
                            alt="image"
                            className="m-auto h-[29.88rem] w-[42%] object-cover"
                        /> */}
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}