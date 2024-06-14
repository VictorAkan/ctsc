import { Text, Heading, Button, Img } from "./..";
import { Link } from "react-router-dom";

export default function Footer({ ...props }) {
    return (
        <footer {...props}>
            <div className="h-full w-full md:h-auto">
                <div className="w-full">
                    <div>
                        <div className="h-full md:h-auto">
                            {/* <Heading as="h2" className="ml-[8.25rem] mt-[5.88rem] !text-[2.00rem] md:ml-0"> Our Socials
                            </Heading> */}
                            <div className="m-auto flex w-full justify-center bg-[#192235] py-[5.00rem] md:mt-[5px] md:py-[1.25rem]">
                                <div className="container-xs flex items-center justify-center px-[2.3rem] md:p-[1.25rem] sm:px-[0.25rem]">
                                    <div className="flex w-full items-center justify-between gap-[1.25rem] md:flex-col">
                                        <div data-aos="flip-up" className="flex flex-col items-start gap-[0.7rem] md:w-full">
                                            <Text size="10xl" as="p" className="font-['Inter'] mt-10 md:mt-0 !text-[1.44rem]">
                                                CRACKING THE STYLE CODE
                                            </Text>
                                            <Text size="4xl" as="p" className="w-full leading-[1.56rem]">
                                                <>
                                                    We believe that valuable content should be <br />
                                                    easily accessible to empower a diverse global <br /> audience.
                                                </>
                                            </Text>
                                            <div className="flex items-start mt-4 justify-start"> 
                                        <Button shape="round" className="rounded-full">
                                            <Img src="images/facebook.png" className="" />
                                        </Button>
                                        <Button shape="round" className="rounded-full">  
                                            <Img src="images/twitter.png" className="" />
                                        </Button>
                                        <Button shape="round" className="rounded-full">
                                            <Img src="images/instagram.png" className="" /> 
                                        </Button>
                                    </div>
                                        </div>
                                        <div className="flex w-[52%] items-start justify-between gap-[1.25rem] md:w-full sm:flex-col">
                                            <div data-aos="flip-down" className="flex flex-col items-end">
                                                <div className="flex flex-col gap-[0.7rem]">
                                                    <Text size="10xl" as="p" className="text-[1.44rem]">
                                                        Pages
                                                    </Text>
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
                                                            <Link to="/newssection">
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
                                            <div data-aos="flip-up" className="flex flex-col items-start gap-[0.7rem]">
                                                <Text size="10xl" as="p" className="text-[1.44rem]">
                                                    Get in Touch
                                                </Text>
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
                                <Text size="9xl" as="p" className="!text-[#fffffff2]">
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