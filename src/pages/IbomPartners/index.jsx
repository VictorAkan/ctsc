import { Helmet } from "react-helmet";
import { Img, Text, Button } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
// import scrolltotop hook
import useScrollToTop from "../../hooks/useScrollToTop";

export default function IbomPartnersPage() {
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
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center self-stretch">
                        <Header className="self-stretch" />
                        {/* <div className="container-xs relative mt-[-1.13rem] flex flex-col items-center pl-[50.69rem] pr-[21.63rem] md:p-[1.25rem] md:px-[1.25rem]">
                            <Text size="9xl" as="p" className="#0000003f] 5px 5px text-shadow-[4px !font-['Inter']">
                                Ibom Partners
                            </Text>
                        </div> */}
                    </div>
                    <div data-aos="zoom-in" className="container-xs mt-[7.06rem] px-[28rem] md:p-[1.25rem] md:px-[1.25rem]">
                        <Button color="indigo_50" size="12xl" className="w-full rounded-[47px] font-medium sm:px-[1.25rem]">
                            Ibom Partners
                        </Button>
                    </div>
                    <div className="mt-[4.38rem] flex w-[91%] items-center md:w-full md:flex-col md:p-[1.25rem]">
                        <div className="mb-[2.31rem] w-[50%] rounded-[58px] border border-solid border-[#253451] bg-[#f7f7f7] pb-[2.63rem] pl-[1.81rem] pr-[3.13rem] pt-[4.19rem] md:w-full md:py-[1.25rem] md:pr-[1.25rem] sm:p-[1.25rem]">
                            <div className="flex flex-col items-start">
                                <Text
                                    size="8xl"
                                    as="p"
                                    className="relative z-[1] w-full text-justify text-[1.31rem] !font-medium leading-[2.00rem] !text-[#000000]"
                                >
                                    <span className="font-normal text-[#000000]">
                                        <>
                                            These are the partners whose services we trust. These are Businesses owned by good Akwa Ibomites
                                            operating within Akwa Abasi Ibom who are serving the people of our great state without trying to
                                            be greedy and unkind to others in need.
                                        </>
                                        <br />
                                        <br />
                                        CTSC Partners will offer honest and professional services to you at your doorstep or your point of need without scamming you or putting your life and property at risk.
                                        <br />
                                        <br />
                                        We understand that things are hard in the country, but we cannot make them harder by distrusting even the good guys who just want to help.
                                        <br />
                                        If you want to become a partner,&nbsp;
                                    </span>
                                    <span className="font-normal text-[#000000]">contact us</span>
                                    <span className="font-normal text-[#000000]">.</span>
                                </Text>
                                <Button
                                    color="blue_gray_900"
                                    size="11xl"
                                    className="ml-[0.56rem] mt-10 min-w-[15.00rem] rounded-[35px] font-medium leading-[2.38rem] !text-[#fffdfd] md:ml-0 sm:mt-5 sm:px-[1.25rem]"
                                >
                                    <>
                                        Join Our List of 
                                        Partners{" "}
                                    </>
                                </Button>
                            </div>
                        </div>
                        <div data-aos="zoom-in-up" className="ml-[2.13rem] flex flex-1 flex-col gap-[2.38rem] md:ml-0 md: self-stretch">
                            <Img
                                src="images/rectangle_365.png"
                                alt="image"
                                className="h-[24.25rem] rounded-[65px] object-cover"
                            />
                            <Img
                                src="images/rectangle_368.png"
                                alt="image"
                                className="h-[24.25rem] rounded-[65px] object-cover"
                            />
                        </div>
                        <div data-aos="zoom-in-down" className="mb-[3.81rem] ml-[0.50rem] flex flex-1 flex-col gap-[2.88rem] md:ml-0 md: self-stretch">
                            <Img
                                src="images/rectangle_366.png"
                                alt="image"
                                className="h- [24.25rem] rounded-[65px] object-cover md:mt-[30px]"
                            />
                            <Img
                                src="images/rectangle_367.png"
                                alt="image"
                                className="h- [24.25rem] rounded-[65px] object-cover"
                            />
                        </div>
                    </div>
                    <Footer className="mt-[12.50rem] self-stretch" />
                </div>
            </div>
        </>
    );
}