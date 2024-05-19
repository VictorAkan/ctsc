import { Helmet } from "react-helmet";
import { Text } from "../../components";
import Header from "../../components/Header";
import JobsPageOneRowdescription from "../../components/JobsPageOneRowdescription";
import Footer from "../../components/Footer";

// import scrolltotop hook
import useScrollToTop from "../../hooks/useScrollToTop";

export default function JobspageOnePage() {
    useScrollToTop();
    
    return (
        <>
            <Helmet>
                <title>CTSC</title>
                <meta name="description" content="web site created using create-react-app" />
            </Helmet>
            <Header />
            <div className="flex w-full flex-col items-center justify-center gap-[10.19rem] bg-[#ffffff] pb-[9.94rem] md:gap-[7.63rem] md:pb-[1.25rem] sm:gap-[5.06rem]">
                <Header className="self-stretch" />
                <div className="container-xs md:p-[1.25rem]">
                    <div className="flex mt-32 flex-col gap-[1.56rem]">
                        <div className="flex flex-col items-center">
                            <div className="relative z-[1] h-[5.94rem] self-stretch rounded-[25px] bg-[#d9d9d9]" />
                            <Text size="27xl" as="p" className="relative mt-[-2.94rem] !text-[4.00rem]">
                                IBOM EVENTS
                            </Text>
                        </div>
                        <div className="flex w-[97%] flex-col items-start gap-[6.00rem] md:w-full md:gap-[4.50rem] sm:gap-[3.00rem]">
                            <Text size="17xl" as="p" className="!font-['Inter'] !text-[2.06rem] !text-[#000000]">
                                User Profile
                            </Text>
                            <div className="flex flex-col gap-[4.75rem] self-stretch">
                                {[...Array(2)].map((d, index) => (
                                    <JobsPageOneRowdescription
                                        username="John Okon"
                                        description="Description"
                                        description1="Hello, am John, am a designer and based in uyo. i can design flyers and logo for your brand. I can handle your designs with great creativity."
                                        workexperience="Work Experience:"
                                        brandlogo="Brand logo design "
                                        hireMe="Hire me"
                                        jobtitle="Freelance designer"
                                        key={"jobspageone" + index}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}