import { Text, Heading, Button, Img } from "./..";
import { Link } from "react-router-dom";

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
                                <div className="container-xs flex items-center justify-center px-[2.3rem] md:p-[1.25rem] sm:px-[0.25rem]">
                                    <div className="flex w-full items-center justify-between gap-[1.25rem] md:flex-col">
                                        <div className="flex pt-[5rem] md:pt-0 flex-col items-start gap-[1.81rem] md:w-full">
                                            <Text size="10xl" as="p" className="font-['Inter'] !text-[1.44rem]">
                                                CRACKING THE STYLE CODE
                                            </Text>
                                            <Text size="4xl" as="p" className="w-full leading-[1.56rem] md:ml-0">
                                                <>
                                                    We believe that valuable content should be <br />
                                                    easily accessible to empower a diverse global <br /> audience.
                                                </>
                                            </Text>
                                            <div className="flex items-start justify-start w-[60%]"> 
                                        <Button shape="round" className="w-[5.69rem] h-[5.69rem]">
                                            <Img src="images/facebook.png" className="" />
                                        </Button>
                                        <Button shape="round" className="w-[5.69rem] h-[5.69rem]">  
                                            <Img src="images/twitter.png" className="" />
                                        </Button>
                                        <Button shape="round" className="w-[5.69rem] h-[5.69rem]">
                                            <Img src="images/instagram.png" className="" /> 
                                        </Button>
                                    </div>
                                            {/* <div className="flex justify-start gap-[1.25rem]">
                                                <div className="flex flex-col shadow-[0px_17.01px_23px_0px_#10122314]">
                                                    <Img
                                                        src="images/facebook.png"
                                                        alt="facebook"
                                                        className="h-[5rem] rounded-tl-[21px] rounded-tr-[21px]"
                                                    />
                                                </div>
                                                <div className="flex flex-col rounded-[21px] bg-[#ffffff] shadow-[0px_17.01px_23px_0px_#10122314]">
                                                    <img src="images/twitter.png" alt="trash" className="h-[2.69rem] rounded-t1-[21px] rounded-tr-[21px]" />
                                                </div>
                                                <div className="flex flex-col rounded-[21px] bg-[#ffffff] shadow-[0px_17.01px_23px_0px_#10122314]">
                                                    <Img src="images/instagram.png" alt="info" className="h-[2.69rem] rounded-tl-[21px] rounded-tr-[21px]" />
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="flex w-[52%] items-start justify-between gap-[1.25rem] md:w-full sm:flex-col">
                                            <div className="flex flex-col items-end">
                                                <div className="flex flex-col gap-[1.13rem]">
                                                    <Heading as="h2" className="text-[2.00rem]">
                                                        Pages
                                                    </Heading>
                                                    <ul className="flex flex-col gap-[0.38rem]">
                                                        <li>
                                                            <Link to="/">
                                                                <Text as="p" className="text-[1.25rem] hover:text-[#c2d7ff]">
                                                                    Home
                                                                </Text>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/mkponnyin">
                                                                <Text as="p" className="!font-['Inter'] hover:text-[#c2d7ff]">
                                                                    Mkpo Nnyin
                                                                </Text>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                <Text as="p" className="text-[1.25rem] hover:text-[#c2d7ff]">
                                                                    News & Stories
                                                                </Text>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/ibompartnersone">
                                                                <Text as="p" className="!font-['Inter'] hover:text-[#c2d7ff]">
                                                                    About CTSCode
                                                                </Text>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start gap-[0.06rem]">
                                                <Heading as="h2" className="text-[2.00rem]">
                                                    Get in Touch
                                                </Heading>
                                                <ul className="flex flex-col items-start gap-[0.38rem] md:ml-0">
                                                    <li>
                                                        <a href="#">
                                                            <Text as="p" className="text-[1.25rem] hover:text-[#c2d7ff]">
                                                                Email: crackingthestyle.co
                                                            </Text>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <Text as="p" className="text-[1.25rem] hover:text-[#c2d7ff]">
                                                                Phone: +2347080141538
                                                            </Text>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> </div> </div> </div>
                        <div className="flex justify-center bg-[#3d547f]">
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