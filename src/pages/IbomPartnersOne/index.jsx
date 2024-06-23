import { Helmet } from "react-helmet";
import { Text, Img } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useScrollToTop from "../../hooks/useScrollToTop";

export default function IbomPartnersOnePage() {
    useScrollToTop();
    
    return (
        <>
            <Helmet>
                <title>CTSC</title>
                <meta name="description" content="web site created by Victor Ikurekong" />
            </Helmet>
            <div className="w-full bg-[#ffffff]">
                <Header />
                <div className="flex flex-col items-center px-5 md:px-0 gap-[6.31rem] md:gap-[4.69rem] sm:gap-[3.13rem]">
                    <div className="flex flex-col mt-16 md:mt-28 items-center self-stretch rounded-[188px] bg-[#cddeff] pb-[2.13rem] pt-[4.44rem] md:pt-[1.25rem] sm:py-[1.25rem]">
                        <div className="container-xs flex flex-col items-center gap-[0.75rem] pl-[16.50rem] pr-[19.06rem] md:p-[1.25rem] md:px-[1.25rem]">
                            <Text size="14xl" as="p" className="!font-['Inter'] text-[1.88rem] !font-medium !text-[#000000]"> ABOUT US
                            </Text>
                            <Text size="22xl" as="p" className="!font-['Inter'] !text-[#000000] sm:text-center"> Welcome to Our Quirky World </Text>
                        </div>
                    </div>
                    <div className="container-xs flex flex-col items-end gap-[2.00rem] px-[1.56rem] md:p-[1.25rem] sm:items-center sm:px-[1.25rem]">
                        <div className="mr-[1.19rem] flex items-start justify-between gap-[1.25rem] self-stretch md:mr-0 md:flex-col sm:items-center">
                            {/* <div className="h-[39.94rem] md:hidden w-[37%] bg-[#d9d9d9]" /> */}
                            <Img className="" src="images/rect_361_1.png" />
                            <Text size="6xl" as="p" className="w-[54%] text-justify leading-[1.75rem] !text-[#000000] md:w-full">
                                <>
                                    CTSC is a Digital Magazine that is ripe for this age. It is birthed out of necessity to get the truth across, avoiding those with selfish interests alone. Cracking The Style Code aka CTSC aka CTSCode is a Digital Magazine and Lifeline of information for the ordinary people of Akwa Ibom state, in southern Nigeria.
                                    <br />
                                    <br />
                                    This magazine is owned by the children of ordinary Akwa Ibom men and women. We watched our parents be fed lies about how our society and state should function. Today, those piles of lies have continued to devastate the standard of living for the average Akwa Ibomite.
                                    <br />
                                    <br />
                                    With CTSCode, we aim to bring the discussions to what we can all relate. The daily struggle of trying to escape the trenches. If you are not lucky enough to japa, then you are left to fend off the crumbs of those with access to resources.
                                    <br />
                                    <br />
                                    Cracking The Style Code is here to shine a light on the strengths of Akwa Ibomites. We are here to show ndito eka nyin that together we truly can lift ourselves out of this hovering darkness of fear, lies, laziness, and poverty.
                                    <br />
                                    <br />
                                    CTSC may choose to share your story and talk about your contribution to our society and people. You might talk about your origin story, and your team, highlight awards or recognitions, etc. The way you tell your story online can make all the difference in encouraging a yearning soul.
                                </>
                            </Text>
                        </div>
                        {/* <div className="h-[39.94rem] w-[53%] md:hidden bg-[#d9d9d9]" /> */}
                        {/* <Img className="" src="images/rect_361_3.png" /> */}
                    </div>
                </div>
                <Footer className="mt-[12.38rem]" />
            </div>
        </>
    );
}