import { Helmet } from "react-helmet";
import { Img, Text } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

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
            <div className="w-full bg-[#ffffff]">
                <Header />
                <div className="flex flex-col items-center gap-[12.19rem] md:gap-[9.13rem] sm:gap-[6.06rem]">
                    <div className="flex mt-10 h-[31.19rem] items-center justify-center self-stretch bg-[url(/public/images/group_186.png)] bg-cover bg-no-repeat pb-[11.69rem] pt-[9.25rem] md:h-auto md:py-[1.25rem]">
                        <div className="mt-10 flex justify-center md:p-[1.25rem] md:px-[1.25rem]">
                            <div data-aos="fade-up" className="flex flex-col items-center">
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
                                <div data-aos="flip-left" className="hover:scale-105 transition duration-300 ease-in-out">
                                    <Link to="/ibomevents">
                                        <img
                                            src="images/img_subb1.png"
                                            alt=""
                                            className="w-full rounded-lg object-cover mkpo-nnyin-img"
                                        />
                                    </Link>
                                </div>
                                <div data-aos="flip-left" className="hover:scale-105 transition duration-300 ease-in-out">
                                    <Link to="/ibomservices">
                                        <img
                                            src="images/img_subb.png"
                                            alt=""
                                            className="w-full rounded-lg object-cover mkpo-nnyin-img"
                                        />
                                    </Link>
                                </div>
                                <div data-aos="flip-right" className="hover:scale-105 transition duration-300 ease-in-out">
                                    <Link to="/jobspagetwo">
                                        <img
                                            src="images/img_subb2.png"
                                            alt=""
                                            className="w-full rounded-lg object-cover mkpo-nnyin-img"
                                        />
                                    </Link>
                                </div>
                                <div data-aos="flip-right" className="hover:scale-105 transition duration-300 ease-in-out">
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
                </div>
                <Footer className="mt-[8.06rem]" />
            </div>
        </>
    )
}