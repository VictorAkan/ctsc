import { Helmet } from "react-helmet";
import { Text } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import IbomServicesOnePlum from "../../components/IbomServicesOnePlum";

// import scrolltotop hook
import useScrollToTop from "../../hooks/useScrollToTop";

const data = [
    {
        userimage: "images/rect_361_1.png",
        username: "John Emmanuel",
        useraddress: "12 Abak Road, Uyo.",
        userphonenumber: "08489244859",
        messagebutton: "Message John",
    },
    {
        userimage: "images/rect_361_2.png",
        username: "Eno James",
        useraddress: "22 Stadium Road, Eket",
        userphonenumber: "0902773528393",
        messagebutton: "Message John",
    },
    {
        userimage: "images/rect_361_3.png",
        username: "John Emmanuel",
        useraddress: "12 Abak Road, Uyo.",
        userphonenumber: "080387757945",
        messagebutton: "Message John",
    },
];


export default function IbomServicesOnePage() {
    useScrollToTop();
    
    return (
        <>
            <Helmet>
                <title>CTSC</title>
                <meta name="description" content="web site created Victor Ikurekong" />
            </Helmet>
            <div className="w-full bg-[#ffffff]">
                <div className="flex flex-col gap-[8.06rem] md:gap-[6.00rem] sm:gap-[4.00rem]">
                    <div className="flex flex-col items-center">
                        <div className="self-stretch">
                            <div className="flex flex-col items-center">
                                <Header className="self-stretch" />
                                {/* <div className="container-xs relative mt-[-1.13rem] flex flex-col items-center pl-[50.69rem] pr-[22.81rem] md:p-[1.25rem] md:px-[1.25rem]">
                                    <a href="#" className="#0000007c] 5px 5px text-shadow-[4px">
                                        <Text size="9xl" as="p" className="!font-['Inter']">
                                            Ibom Events
                                        </Text>
                                    </a>
                                </div> */}
                            </div>
                            <div className="mt-[-0.56rem] flex justify-center bg-[#d8d7ff] pb-[16.50rem] pt-[7.94rem] md:py-[1.25rem]">
                                <div className="container-xs flex justify-center pl-[25.50rem] pr-[19.31rem] md:p-[1.25rem] md:px-[1.25rem]">
                                    <Text size="27xl" as="p" className="text-[4.00rem] !sm:text-[2.00rem] !text-[#000000]">
                                        Plumber SERVICES
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <div className="container-xs relative mt-[-9.63rem] md:mt-[-2.5rem] sm:mt-[-9.93rem] pl-[4.44rem] pr-[1.44rem] md:p-[1.25rem] md:pl-[1.25rem] sm:px-[1.25rem]">
                            <div className="flex flex-col gap-[6.00rem] rounded-[69px] bg-[#f7f6f6] pb-[2.75rem] pl-[9.44rem] pr-[5.56rem] pt-[9.63rem] md:p-[1.25rem] sm:mt-[130px]">
                                {data.map((d, index) => (
                                    <IbomServicesOnePlum
                                        {...d}
                                        key={"ibomservices" + index}
                                        className="gap-[50px] md:flex-col md:p-[1.25rem]"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}