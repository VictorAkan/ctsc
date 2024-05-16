import { Text, Heading, Button, Img } from "./..";


export default function Footer({ ...props }) {
    return (
        <footer {...props}>
            <div className="h-full w-full md:h-auto">
                {/* <div className="m-auto flex w-[13%] justify-between gap-[1.25rem]"> 
                <div className="flex flex-col rounded-[21px] bg-[#ffffff] shadow-[0px_17.01px_23px_0px_#10122314]">
                    <Img
                        src="images/img_facebook.svg"
                        alt="facebook"
                        className="h-[2.69rem] rounded-tl-[21px] rounded-tr-[21px]"
                        />
                    </div>
                    <div className="flex flex-col rounded-[21px] bg-[#ffffff] shadow-[0px_17.01px_23px_0px_#10122314]">
                        <img src="images/img_trash.svg" alt="trash" className="h-[2.69rem] rounded-t1-[21px] rounded-tr-[21px]" /> 
                        </div>
                    <div className="flex flex-col rounded-[21px] bg-[#ffffff] shadow-[0px_17.01px_23px_0px_#10122314]"> 
                    <Img src="images/img_info.svg" alt="info" className="h-[2.69rem] rounded-tl-[21px] rounded-tr-[21px]" />
                    </div>
                </div> */}
                <div className="w-full">
                    <div>
                        <div className="h-full md:h-auto">
                            {/* <Heading as="h2" className="ml-[8.25rem] mt-[5.88rem] !text-[2.00rem] md:ml-0"> Our Socials
                            </Heading> */}
                            <div className="m-auto flex h-max w-full justify-center bg-[#192235] pb-[8.31rem] pt-[5.00rem] md:mt-[5px] md:py-[1.25rem]"> 
                            <div className="container-xs flex justify-center pl-[4.56rem] pr-[6.88rem] md:p-[1.25rem] md:px-[1.25rem]">
                                <div className="flex w-full items-center justify-between gap-[1.25rem] md:flex-col">
                                    <div className="flex w-[36%] flex-col items-start gap-[1.81rem] self-end md:w-full">
                                        <Text size="10xl" as="p" className="font-['Inter'] sm:text-center !text-[1.44rem]">
                                        CRACKING THE STYLE CODE
                                    </Text>
                                    <Text size="4xl" as="p" className="ml-[0.31rem] sm:text-center w-full leading-[1.56rem] md:ml-0">
                                        <>
                                            We believe that valuable content should be <br />
                                            easily accessible to empower a diverse global <br /> audience.
                                        </>
                                    </Text>
                                    <div className="flex justify-between sm:justify-around gap-[0rem] md:w-full md:justify-start"> 
                                    {/* <Button shape="round" className="w-[2.69rem]"> */}
                                        <img src="images/facebook.png" className="w-[5.69rem] h-[5.69rem]" />
                                    {/* </Button> */}
                                        {/* <Button shape="round" className="w-[2.69rem]"> */}
                                            <img src="images/twitter.png" className="w-[5.69rem] h-[5.69rem]" />
                                        {/* </Button> */}
                                        {/* <Button shape="round" className="w-[2.69rem]"> */}
                                            <img src="images/instagram.png" className="w-[5.69rem] h-[5.69rem]" /> 
                                            {/* </Button> */}
                                    </div>
                                </div>
                                <div className="flex w-[52%] items-start justify-between gap-[1.25rem] md:w-full sm:flex-col"> 
                                <div className="mt-[0.31rem] flex flex-col items-end">
                                    <div className="flex flex-col gap-[1.13rem]">
                                        <Heading as="h2" className="! text-[2.00rem]">
                                            Pages
                                        </Heading>
                                        <ul className="flex flex-col gap-[0.38rem]">
                                            <li>
                                                <a href="Home" target="_blank" rel="noreferrer"> 
                                                <Text as="p" className="!text-[1.25rem]">
                                                    Home
                                                </Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Text size="9xl" as="p" className="!font-['Inter']">
                                                    Mkpo Nnyin
                                                </Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Text as="p" className="!text-[1.25rem]">
                                                    News & Stories
                                                </Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Text size="9xl" as="p" className="!font-['Inter']">
                                                    About CTSCode
                                                </Text>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                                <div className="flex flex-col items-start gap-[0.06rem]">
                                    <Heading as="h2" className="!text-[2.00rem]">
                                        Get in Touch
                                    </Heading>
                                    <ul className="!ml-[0.50rem] flex flex-col items-start gap-[0.38rem] md:ml-0"> 
                                    <li>
                                        <a href="#">
                                            <Text as="p" className="!text-[1.25rem]">
                                                Email: crackingthestyleco
                                            </Text>
                                        </a>
                                    </li>
                                        <li>
                                            <a href="#">
                                                <Text as="p" className="!text-[1.25rem]">
                                                    Phone: +2347080141538
                                                </Text>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </div> </div> </div> </div>
                <div className="relative z-[4] flex justify-center bg-[#3d547f]">
                    <div className="container-xs flex justify-center pl-[20.00rem] pr-[20.13rem] md:p-[1.25rem] md:px-[1.25rem]"> 
                    <Text size="12xl" as="p" className="!text-[#fffffff2]">
                        <span className="text-[#fffffff2]">All Rights Reserved. ©2024</span>
                        <span className="lowercase text-[#fffffff2]">&nbsp;CRACKING THE STYLE CODE</span>
                    </Text>
                    </div>
                </div>
            </div>
        </div>
</div >
</footer >
)
}