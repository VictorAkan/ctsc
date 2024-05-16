import { Text } from "../Text";
import React from "react";
import { Link } from "react-router-dom";

export default function MegaMenu3() {
    return (
        <div className="absolute top-auto z-[99] bg-[#253451] min-w-[12.50rem] pt-[0.75rem]">
            <div className="w-full rounded-1g_bg-[#ffffff] p-[1.25rem] shadow-[0px_0px_13px_5px_#00000029]"> 
            <div className="flex gap-[1.88rem] md:flex-row">
                {/* <div className="flex flex-col items-start gap-[1.00rem]">
                    <Text className="!font-['Open_Sans'] text-[1.13rem] font-bold !text-[#000000]">Title 1</Text> 
                    <div className="flex flex-col_items-start gap-[0.75rem]">
                        <a href="#">
                            <Text className="!font-['Open_Sans'] text-[1.00rem] font-normal !text-[#656d76]">Menu 1</Text> </a>
                        <a href="#" className="self-center">
                            <Text className="!font-['Open_Sans'] text-[1.00rem] font-normal !text-[#656d76]">Menu 2</Text> </a>
                        <a href="#" className="self-center">
                            <Text className="!font-['Open_Sans'] text-[1.00rem] font-normal !text-[#656d76]">Menu 3</Text> </a>
                        <a href="#" className="self-center">
                            <Text className="!font-['Open_Sans'] text-[1.00rem] font-normal !text-[#656d76]">Menu 4</Text> </a>
                        <a href="#" className="self-center">
                            <Text className="!font-['Open_Sans'] text-[1.00rem] font-normal !text-[#656d76]">Menu 5</Text> </a>
                    </div>
                </div> */}
                <div className="flex flex-col items-start gap-[1.00rem]">
                    {/* <Text className="!font-['Open_Sans'] text-[1.13rem] font-bold !text-[#000000]">Title 2</Text>  */}
                    {/* <div className="flex flex-col items-start gap-[0.75rem]">
                        <a href="#">
                            <Text className="!font-['Open_Sans'] text-[1.00rem] font-normal !text-[#656d76]">Menu 1</Text> 
                            </a>

                        <Text className="self-center !font-['Open Sans'] text-[1.00rem] font-normal !text-[#656d76]">Menu_2</Text> 
                        <Text className="self-center !font-['Open_Sans'] text-[1.00rem] font-normal !text-[#656d76]">Menu 3</Text> 
                        <Text className="self-center !font-['Open Sans'] text-[1.00rem] font-normal !text-[#656d76]">Menu 4</Text> 
                        <a href="#" className="self-center">
                            <Text className="!font-['Open_Sans'] text-[1.00rem] font-normal !text-[#656d76]">Menu 5</Text>
                        </a> 
                        </div> */}
                </div>
                <div className="flex flex-col items-start gap-[1.00rem]">
                    {/* <Text className="!font-['Open_Sans'] text-[1.13rem] font-bold !text-[#000000]">Title 3</Text>  */}
                    <div className="flex flex-col items-start gap-[0.75rem]">
                        <Link to="/ibompartnersone">
                            <Text className="!font-['Open Sans'] hover:text-[#c3d7ff] text-[1.00rem] font-normal">About Us</Text> </Link>
                        <a href="#" className="self-center">
                            <Text className="!font-['Open Sans'] hover:text-[#c3d7ff] text-[1.00rem] font-normal">CTSC Team</Text> </a>
                        <a href="#" className="self-center">
                            <Text className="!font-['Open Sans'] hover:text-[#c3d7ff] text-[1.00rem] font-normal">Contact Us</Text> </a>
                        <Link to="/signup" className="self-center">
                            <Text className="!font-['Open Sans'] hover:text-[#c3d7ff] text-[1.00rem] font-normal">Sign Up</Text> </Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}