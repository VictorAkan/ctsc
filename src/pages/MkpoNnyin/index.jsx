import { Helmet } from "react-helmet";
import { Img, Text } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

// import scrolltotop hook
import useScrollToTop from "../../hooks/useScrollToTop";

const serviceData = [
    {
        userimage: "images/subtract_485x582.png",
        servicename: "Ibom Services",
    },
    {
        userimage: "images/subtract_3.png",
        servicename: "Ibom Partners",
    },
]

export default function MkpoNnyinPage() {
    useScrollToTop();
    
    return (
        <>
            <Helmet>
                <title>CTSC</title>
                <meta name="description" content="web site created by Victor Ikurekong" />
            </Helmet>
            <div className="w-full bg-[#ffffff]">
                <Header />
                <div className="flex flex-col items-center gap-[12.19rem] md:gap-[9.13rem] sm:gap-[6.06rem]">
                    <div className="flex mt-10 h-[31.19rem] items-center justify-center self-stretch bg-[url(/public/images/group_186.png)] bg-cover bg-no-repeat pb-[11.69rem] pt-[9.25rem] md:h-auto md:py-[1.25rem]">
                        <div className="container-xs mt-10 flex justify-center pl-[22.06rem] pr-[22.56rem] md:p-[1.25rem] md:px-[1.25rem]">
                            <div className="flex flex-col items-center">
                                <Text size="30xl" as="p" className="!font-['Inter'] !sm:text-[3rem] text-[6.50rem]">
                                    Mkpo Nnyin
                                </Text>
                                <Text size="20xl" as="p" className="!font-['Inter'] !md:tect-[2.13rem] text-[2.38rem]">
                                    Our Culture & Pride{" "}
                                </Text>
                            </div>
                        </div>
                    </div>
                    <section className="mkpo-nnyin-1 bg-f8f5f5 py-20 flex items-center justify-center">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="hover:scale-105 transition duration-300 ease-in-out">
                                    <Link to="/ibomevents">
                                        <img
                                            src="images/img_subb1.png"
                                            alt=""
                                            className="w-full rounded-lg object-cover mkpo-nnyin-img"
                                        />
                                    </Link>
                                </div>
                                <div className="hover:scale-105 transition duration-300 ease-in-out">
                                    <Link to="/ibomservices">
                                        <img
                                            src="images/img_subb.png"
                                            alt=""
                                            className="w-full rounded-lg object-cover mkpo-nnyin-img"
                                        />
                                    </Link>
                                </div>
                                <div className="hover:scale-105 transition duration-300 ease-in-out">
                                    <Link to="/jobspagetwo">
                                        <img
                                            src="images/img_subb2.png"
                                            alt=""
                                            className="w-full rounded-lg object-cover mkpo-nnyin-img"
                                        />
                                    </Link>
                                </div>
                                <div className="hover:scale-105 transition duration-300 ease-in-out">
                                    <Link to="/ibompartners">
                                        <img
                                            src="images/img_subb3.png"
                                            alt=""
                                            className="w-full rounded-lg object-cover mkpo-nnyin-img"
                                        />
                                    </Link>
                                </div>
                                <div className="centered-div rounded-[3.5em] md:hidden bg-[#d9d9d9] h-[20%] w-[20%] top-[79rem] left-[38rem] absolute"></div>
                            </div>
                        </div>
                    </section>
                    {/* <div className="container-xs pl-[1.81rem] pr-[2.25rem] md:p-[1.25rem] sm:px-[1.25rem]">
                        <div className="relative h-[64.38rem] md:h-auto">
                            <div className="flex w-full items-start justify-center md:flex-col">
                                <div className="relative sm:hidden h-[30.31rem] w-[44%] md:h-auto md:w-full">
                                    <Img src="images/subtract_1.png" alt="subtract" className="h-[30.31rem] sm:h-full w-full object-cover" />
                                    <div className="absolute bottom-0 left-[14%] top-0 my-auto flex h-max items-center gap-[0.38rem] sm:relative sm:flex-col">
                                        <Text size="22xl" as="p">
                                            Ibom Events
                                        </Text>
                                        <Img
                                            src="images/img_arrow_left.svg"
                                            alt="arrowleft"
                                            className="mb-[1.00rem] h-[1.69rem] w-[1.69rem] self-end sm:w-full"
                                        />
                                    </div>
                                </div>
                                <div className="relative z-[1] ml-[-5.75rem] flex flex-1 items-center md:ml-0 md:flex-col md:self-stretch">
                                    <div className="relative z-[2] h-[12.75rem] md:hidden w-[31%] rounded-[73px] bg-[#d9d9d9]" />
                                    <div className="ml-[-6.00rem] flex flex-1 flex-col gap-[3.69rem] md:ml-0 md:self-stretch"> */}
                    {/* {serviceData.map((d, index) => (
                                            <MkpoNnyinIbomservices
                                                userimage={d.userimage}
                                                servicename={d.servicename}
                                                key={"mkponnyin" + index}
                                            />
                                        ))} */}
                    {/* <div className={`h-[30.31rem] w-[90%] sm:hidden md:w-full md:h-auto flex-1 relative md:flex-none`}>
                                            <img src="images/subtract_485x582.png" alt="ibom_services" className="h-[30.31rem] sm:h-full w-full object-cover" />
                                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max items-center gap-[0.63rem] sm:relative sm:flex-col">
                                                <Text size="22xl" as="p">
                                                    Ibom Services
                                                </Text>
                                                <Img
                                                    src="images/img_arrow_left.svg"
                                                    alt="ibom services"
                                                    className="mb-[0.94rem] h-[1.69rem] w-[1.69rem] self-end sm:w-full"
                                                />
                                            </div>
                                        </div>
                                        <div className={`h-[30.31rem] w-[90%] md:w-full sm:hidden md:-mb-48 md:h-auto flex-1 relative md:flex-none`}>
                                            <img src="images/subtract_3.png" alt="ibom_services" className="h-[30.31rem] sm:h-full w-full object-cover" />
                                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max items-center gap-[0.63rem] sm:relative sm:flex-col">
                                                <Text size="22xl" as="p">
                                                    Ibom Partners
                                                </Text>
                                                <Img
                                                    src="images/img_arrow_left.svg"
                                                    alt="ibom services"
                                                    className="mb-[0.94rem] h-[1.69rem] w-[1.69rem] self-end sm:w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute md:hidden bottom-[0.00rem] left-[0.31rem] z-[3] m-auto h-[30.31rem] w-[47%] md:w-full md:h-auto">
                                <Img src="images/subtract_2.png" alt="subtract" className="h-[30.31rem] mt-4 sm:h-full w-full object-cover" />
                                <div className="absolute bottom-0 left-[19%] top-0 my-auto flex h-max items-center gap-[0.81rem] sm:relative sm:flex-col">
                                    <Text size="22xl" as="p">
                                        Ibom Jobs
                                    </Text>
                                    <Img
                                        src="images/img_arrow_left.svg"
                                        alt="arrowleft"
                                        className="mb-[1.25rem] h-[1.69rem] w-[1.69rem] self-end sm:w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <Footer className="mt-[21.06rem]" />
            </div>
        </>
    )
}