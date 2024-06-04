import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Img, Text, Button } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import useScrollToTop from "../../hooks/useScrollToTop";

export default function PartnerDetailPage() {
    useScrollToTop();

    Aos.init({
            duration: 1800,
            offset: 0,
    });
    const { id } = useParams();
    const [partner, setPartner] = useState(null);

    useEffect(() => {

        const fetchPartner = async () => {
            try {
                const response = await axios.get(`https://crackingthestylecode.pythonanywhere.com/api/v1/partner/${id}/`);
                setPartner(response.data);
            } catch (error) {
                console.error("Error fetching partner data:", error);
            }
        };

        fetchPartner();
    }, [id]);

    if (!partner) return <p>Loading...</p>;

    return (
        <>
            <Helmet>
                <title>{partner.name}</title>
                <meta name="description" content={`Details of ${partner.name}`} />
            </Helmet>
            <div className="w-full bg-[#ffffff]">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center self-stretch">
                        <Header className="self-stretch" />
                    </div>
                    <div className="container-xs mt-[7.06rem] px-[28rem] md:p-[1.25rem] md:px-[1.25rem]">
                        <Text size="12xl" as="h1" className="w-full text-center">
                            {partner.name}
                        </Text>
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
                                        {partner.description}
                                    </span>
                                </Text>
                                <Button
                                    color="blue_gray_900"
                                    size="11xl"
                                    className="ml-[0.56rem] mt-10 min-w-[15.00rem] rounded-[35px] font-medium leading-[2.38rem] !text-[#fffdfd] md:ml-0 sm:mt-5 sm:px-[1.25rem]"
                                >
                                    <>
                                        Contact {partner.name}
                                    </>
                                </Button>
                            </div>
                        </div>
                        {partner.images && partner.images.map((image, index) => (
                            <Img
                                key={index}
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="h-[24.25rem] rounded-[65px] object-cover md:mt-[30px]"
                            />
                        ))}
                    </div>
                    <Footer className="mt-[12.50rem] self-stretch" />
                </div>
            </div>
        </>
    );
}
