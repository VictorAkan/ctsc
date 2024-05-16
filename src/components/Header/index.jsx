import MegaMenu1 from "../MegaMenu1";
import MegaMenu2 from "../MegaMenu2";
import MegaMenu3 from "../MegaMenu3";
import React from "react";
import { Img, Text } from "./..";
import { Link } from "react-router-dom";

export default function Header({ ...props }) {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [menuOpen1, setMenuOpen1] = React.useState(false);
    const [menuOpen2, setMenuOpen2] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);


    return (<header {...props}
        className={`${props.className} flex justify-center items-center pt-[1.56rem] pb-[1.25rem] sm:pt-[1.25rem] bg-[#253451] relative`}>
        <div className="container-xs flex items-center justify-between gap-[1.25rem] md:flex-col md:p-[1.25rem]">
            <img src="images/img_header_logo.png" alt="headerlogo" className="h-[1.69rem] w-[19.13rem] object-contain" />
            <ul className="flex md:hidden gap-[1.56rem] md:flex-col">
                <li>
                    <Link to="/">
                        <Text size="9xl" as="p" className="!font-['Inter'] !text-[#c2d7ff] underline">
                            Home
                        </Text>
                    </Link>
                </li>
                <li
                    onMouseLeave={() => {
                        setMenuOpen(false);
                    }}
                    onMouseEnter={() => {
                        setMenuOpen(true);
                    }}
                >
                    <div className="flex cursor-pointer items-center">
                        <Text size="9xl" as="p" className="cursor-pointer !font-['Inter'] hover:text-[#c2d7ff] hover:underline"> Mkpo Nnyin
                        </Text>
                        <img src="images/img_polygon_2.svg" alt="polygontwo" className="mt-[0.56rem] h-[0.44rem] w-[0.50rem]" />
                    </div>
                    {menuOpen ? <MegaMenu1 /> : null}
                </li>
                <li
                    onMouseLeave={() => {
                        setMenuOpen1(false);
                    }}
                    onMouseEnter={() => {
                        setMenuOpen1(true);
                    }}
                >
                    <div className="flex cursor-pointer items-center">
                        <Text size="9xl" as="p" className="cursor-pointer !font-['Inter'] hover: text-[#c2d7ff] hover:underline"> News & Stories
                        </Text>
                        <img src="images/img_polygon_2.svg" alt="polygonone" className="mb-[0.50rem] h-[0.44rem] w-[0.50rem]" />
                    </div>
                    {menuOpen1 ? <MegaMenu2 /> : null}
                </li>
                <li
                    onMouseLeave={() => {
                        setMenuOpen2(false);
                    }}
                    onMouseEnter={() => {
                        setMenuOpen2(true);
                    }}
                >
                    <div className="flex cursor-pointer items-center">
                        <Text size="9xl" as="p" className="cursor-pointer !font-['Inter'] hover: text-[#c2d7ff] hover:underline"> About CTSCode
                        </Text>
                        <Img src="images/img_polygon_2.svg" alt="polygonthree" className="mt-[0.56rem] h-[0.44rem] w-[0.50rem]" />
                    </div>
                    {menuOpen2 ? <MegaMenu3 /> : null}
                </li>
            </ul >
        </div >
        <div className="md:flex-col hidden p-3 md:block flex justify-end">
            <img
                src="images/nav_icon.png"
                alt="hamburger"
                className="h-[2.25rem] hidden md:block w-[2.25rem] cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
            {mobileMenuOpen && (
                <ul className="absolute top-0 right-0 p-4 bg-[#253451] w-full">
                    <li className="flex justify-between">
                        <a href="#">
                            <Text size="9xl" as="p" className="!font-['Inter'] mb-5 !text-[#c2d7ff] underline">
                                Home
                            </Text>
                        </a>
                        <img
                src="images/closenav_icon.png"
                alt="hamburger"
                className="h-[2.25rem] hidden md:block w-[2.25rem] cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
                    </li>
                    <li
                    onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <div className="flex cursor-pointer items-center">
                            <Text size="9xl" as="p" className="cursor-pointer mb-5 !font-['Inter'] hover:text-[#c2d7ff] hover:underline">
                                Mkpo Nnyin
                            </Text>
                            <img src="images/img_polygon_2.svg" alt="polygontwo" className="-mt-2 h-[0.44rem] w-[0.50rem]" />
                        </div>
                        {menuOpen ? <MegaMenu1 /> : null}
                    </li>
                    <li
                        onClick={() => {
                            setMenuOpen(false)
                            setMenuOpen2(false)
                            setMenuOpen1(!menuOpen1)
                        }}
                    >
                        <div className="flex cursor-pointer mb-5 items-center">
                            <Text size="9xl" as="p" className="cursor-pointer !font-['Inter'] hover: text-[#c2d7ff] hover:underline"> News & Stories
                            </Text>
                            <img src="images/img_polygon_2.svg" alt="polygonone" className="-mb-2 h-[0.44rem] w-[0.50rem]" />
                        </div>
                        {menuOpen1 ? <MegaMenu2 /> : null}
                    </li>
                    <li
                        onClick={() => {
                            setMenuOpen(false)
                            setMenuOpen1(false)
                            setMenuOpen2(!menuOpen2)
                        }}
                    >
                        <div className="flex cursor-pointer mb-5 items-center">
                            <Text size="9xl" as="p" className="cursor-pointer !font-['Inter'] hover: text-[#c2d7ff] hover:underline"> About CTSCode
                            </Text>
                            <Img src="images/img_polygon_2.svg" alt="polygonthree" className="mt-[0.56rem] h-[0.44rem] w-[0.50rem]" />
                        </div>
                        {menuOpen2 ? <MegaMenu3 /> : null}
                    </li>
                </ul>
            )}
        </div>
    </header >
    )
}