import Helmet from "react-helmet";
import { Img, Text, Button, Input, Heading } from "../../components";
import Header from "../../components/Header";

// import scrolltotop hook
import useScrollToTop from "../../hooks/useScrollToTop";

export default function IbomServicesTwoPage() {
    useScrollToTop();
    
    return (
        <>
            <Helmet>
                <title>CTSC</title>
                <meta name="description" content="web site created by Victor Ikurekong" />
            </Helmet>
            <div className="w-full bg-[#ffffff] pb-[4.38rem] md:pb-[1.25rem]">
                <Header />
                <div className="flex flex-col">
                    <div className="h-[30.56rem] bg-[#93a594]" />
                    <div className="px-5 md:px-0 sm:px-0">
                    <div className="mt-[-17rem] rounded-[69px] bg-[#f7f6f6] pb-[16.81rem] pl-[2.50rem] p-[2.56rem] pt-[3.31rem] md:w-full md:py-[1.25rem] md:pr-[1.25rem] sm:p-[0.5rem]">
                        <div className="flex flex-col gap-[7.00rem] md:gap-[5.25rem] sm:gap-[3.50rem]">
                            <div className="container-xs flex justify-center rounded-[60px] bg-[#11468f] px-[2.19rem] pb-[2.00rem] pt-[2.19rem] md:p-[1.25rem]">
                                <div className="flex w-[93%] items-center justify-between gap-[1.25rem] md:w-full md:flex-col">
                                    <div className="flex w-[56%] items-center justify-between gap-[1.25rem] md:w-full sm:flex-col">
                                        <Img
                                            src="images/img_ellipse_10.png"
                                            alt="circleimage"
                                            className="h-[9.50rem] w-[9.50rem] rounded-[50%]"
                                        />
                                        <div className="flex flex-col items-start gap-[0.31rem]">
                                            <Heading size="3xl" as="h1" className="text-[3.38rem] sm:text-center sm:!text-[1.20rem]">
                                                John Emmanuel
                                            </Heading>
                                            <Text size="16xl" as="p" className="text-[2.00rem] sm:!text-center">
                                                Online
                                            </Text>
                                        </div>
                                    </div>
                                    <div className="flex w-[30%] items-center justify-center md:w-full">
                                        <Img src="images/img_call.svg" alt="call" className="h-[2.50rem] cursor-pointer w-[35%] sm:w-[30px]" />
                                        <Img
                                            src="images/upload.png.png"
                                            alt="upload"
                                            className="ml-[6.13rem] h-[2.75rem] md:h-auto cursor-pointer w-[40%] md:w-[20%] sm:w-[15%]"
                                        />
                                        <div className="ml-[4.81rem] flex w-[12%] flex-col cursor-pointer gap-[0.69rem] sm:h-[40px] sm:w-[12px]">
                                            <div className="h-[0.51rem] w-[0.51rem] rounded-[10px] bg-[#ffffff] sm:h-[10px] sm:w-[7px]" />
                                            <div className="h-[0.51rem] w-[0.51rem] rounded-[10px] bg-[#ffffff] sm:h-[10px] sm:w-[7px]" />
                                            <div className="h-[0.51rem] w-[0.51rem] rounded-[10px] bg-[#ffffff] sm:h-[10px] sm:w-[7px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-xs flex flex-col items-end pl-[0.88rem] pr-[1.63rem] md:p-[1.25rem] sm:pr-[1.25rem]">
                                <Button
                                    color="gray_50_01"
                                    size="6xl"
                                    className="min-w-[9.44rem] self-center rounded-[30px] font-semibold sm:px-[1.25rem]"
                                >
                                    Today
                                </Button>
                                <div className="mt-[5.06rem] flex w-[47%] sm:rounded-bl-[34px] sm:rounded-tl-[34px] rounded-bl-[61px] rounded-br-[47px] rounded-tr-[34px] bg-[#ffffff] px-[2.38rem] pb-[2.19rem] pt-[2.81rem] md:w-full md:pt-[1.25rem] sm:p-[0.25rem]">
                                    <Text size="18xl" as="p" className="text-[2.13rem] !text-[#000000] sm:!text-xl">
                                        Hi there, How are you?
                                    </Text>
                                </div>
                                <Text
                                    size="13xl"
                                    as="p"
                                    className="mr-[1.38rem] mt-[0.88rem] text-[1.69rem] !text-[#7b7b7b] md:mr-0"
                                >
                                    9.20 AM
                                </Text>
                                <div className="mr-[1.25rem] mt-[2.06rem] flex flex-col items-start self-stretch md:mr-0">
                                    <div className="flex w-[59%] rounded-bl-[61px] sm:rounded-bl-[34px] sm:rounded-tl-[34px] rounded-br-[34px] rounded-tr-[47px] bg-[#10348f] pb-[2.31rem] pl-[3.63rem] pr-[3.50rem] pt-[2.69rem] md:w-full md:px-[1.25rem] md:pt-[1.25rem] sm:p-[0.25rem]">
                                        <Text size="18xl" as="p" className="text-[2.13rem] sm:!text-xl">
                                            I am great, Thanks!
                                        </Text>
                                    </div>
                                    <Text size="13xl" as="p" className="mt-[1.06rem] text-[1.69rem] !text-[#7b7b7b]">
                                        9.23 AM
                                    </Text>
                                    <div className="mt-[0.81rem] flex w-[59%] sm:rounded-bl-[34px] sm:rounded-tl-[34px] justify-center self-end rounded-bl-[79px] rounded-br-[47px] rounded-tr-[34px] bg-[#ffffff] px-[2.25rem] pb-[5.19rem] pt-[2.25rem] md:w-full md:pb-[1.25rem] sm:p-[0.25rem]">
                                        <Text size="18xl" as="p" className="!text-[2.13rem] !text-[#000000] sm:!text-xl">
                                            I need your services for my new building project.
                                        </Text>
                                    </div>
                                    <Text
                                        size="13xl" as="p"
                                        className="mt-[0.63rem] self-end text-[1.69rem] !text-[#7b7b7b]"
                                    >
                                        9.25 AM
                                    </Text>
                                    <div className="mt-[0.38rem] sm:rounded-bl-[34px] sm:rounded-tl-[34px] flex rounded-bl-[68px] rounded-br-[34px] rounded-tr-[47px] bg-[#10348f] px-[2.13rem] pb-[4.69rem] pt-[2.13rem] md:pb-[1.25rem] sm:p-[0.65rem]">
                                        <Text size="18xl" as="p" className="!text-[2.13rem] sm:!text-xl">
                                            Okay, give me some time to make a schedule so we talk about it.
                                        </Text>
                                    </div>
                                    <Text size="13xl" as="p" className="mt-[0.31rem] text-[1.69rem] !text-[#7b7b7b]">
                                        9.27 AM
                                    </Text>
                                    <div className="mt-[13.31rem] flex gap-[2.38rem] sm:gap-1 self-stretch md:flex-col">
                                        <div className="flex flex-1 items-center justify-between gap-[1.25rem] sm:gap-0 md:w-full rounded-[47px] bg-[#a6bbf1] py-[2.38rem] pl-[3.06rem] pr-[35.63rem] md:self-stretch sm:p-1 md:p-[1.25rem]">
                                            <Img src="images/attach.png" alt="attach" className="h-[3.38rem] md:h-auto w-[14%]" />
                                            <Input shape="round"  type="text" variant="#a6bbf1" name="message" placeholder={`Enter your message`} className="sm:!text-xl text-[1.8rem] !text-[#00000075]" 
                                            />
                                                {/* Enter Your Message
                                            </Input> */}
                                        </div>
                                        <Button
                                            size="13xl"
                                            variant="gradient"
                                            // color="indigo_800_indigo_800_00"
                                            className="w-[9.63rem] sm:w-full rounded-[47px] md:p-[1.25rem] !bg-gradient-to-l !from-[#10348f] !to-[#10348f00]"
                                        >
                                            <Img src="images/forward.png" className="" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}