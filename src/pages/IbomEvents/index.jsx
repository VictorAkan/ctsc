import Helmet from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {format} from "date-fns";

// import Loader
import { Loader } from "../../Loader";

// import scrolltotop hook
import useScrollToTop from "../../hooks/useScrollToTop";

export default function IbomEventsPage() {
    useScrollToTop();

    Aos.init({
            duration: 1800,
            offset: 0,
    });

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchEvents = async () => {
            try {
                const response = await axios.get("https://crackingthestylecode.pythonanywhere.com/api/v1/event/");
                console.log(response);
                setEvents(response.data); // assuming the API returns an array of events
            } catch (error) {
                console.error("There was an error fetching the events!", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <>
            <Helmet>
                <title>CTSC</title>
                <meta name="description" content="web site created by Victor Ikurekong" />
            </Helmet>
            <div className="flex w-full flex-col items-center justify-center bg-[#ffffff] pb-[22.25rem] md:pb-[1.25rem]">
                <div className="self-stretch">
                    <div>
                        <div className="relative z-[1] flex flex-col items-center">
                            <Header className="self-stretch" />
                        </div>
                        <div className="mt-[-0.56rem] flex h-full items-center justify-center bg-[url(/public/images/mg.png)] bg-cover bg-no-repeat pb-[9.69rem] pt-[13.13rem] md:h-auto md:py-[1.25rem] sm:pb-[155px] sm:pt-[1.25rem]">
                            <div data-aos="fade-up" className="container-xs mt-10 md:mt-24 flex justify-center px-[28.06rem] md:p-[1.25rem] md:px-[1.25rem]">
                                <Text size="27xl" as="p" className="!text-[3.00rem] sm:mt-10">
                                    IBOM EVENTS
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-xs mt-[9.00rem] sm:mt-[1rem] pl-[3.06rem] md:p-[1.25rem] md:pl-[1.25rem]">
                    <div className="flex flex-col gap-[3.81rem]">
                        {loading ? (
                            <div className="flex justify-center items-center h-full">
                                <Loader />
                            </div>
                        ) : (
                            events.map(event => (
                                <div key={event.id} data-aos="zoom-in" className="flex flex-1 bg-gray-100">
                                    <div className="flex w-[89%] items-center justify-between gap-[1.25rem] md:w-full md:flex-col md:p-[1.25rem]">
                                        <div className="flex w-[45%] flex-col gap-[0.31rem] md:w-full">
                                            <img src={event.event_image} alt={event.title} className="h-full object-cover" />
                                            <div className="flex flex-col items-start rounded-[20px] bg-[#eeeeee] px-[1.25rem] pb-[0.75rem] pt-[1.63rem] sm:pt-[1.25rem]">
                                                <Text size="12xl" as="p" className="!text-[1.63rem] !font-medium !text-[#000000]">
                                                    {event.event_name}
                                                </Text>
                                                <Text
                                                    size="xl"
                                                    as="p"
                                                    className="mt-[0.38rem] w-[72%] !text-[0.88rem] leading-[1.31rem] !text-[#000000] md:w-full"
                                                >
                                                    {event.about}
                                                </Text>
                                                <Button
                                                    color="blue_gray_900"
                                                    size="sm"
                                                    className="ml-[0.81rem] mt-[1.25rem] min-w-[6.44rem] rounded-[14px] font-medium md:ml-0"
                                                >
                                                    <Link to={`/event/${event.event_id}`}>View Event</Link>
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="flex w-[49%] mt-[-10rem] md:mt-0 flex-col items-start gap-[1.25rem] md:w-full">
                                            <p>{event.brief_summary}</p>
                                            <p>{event.date}</p>
                                            {/* 
                                            <div className="h-[1.63rem] self-stretch rounded-[13px] bg-[#aaaaaa]" />
                                            <div className="h-[1.63rem] w-[90%] rounded-[13px] bg-[#aaaaaa]" />
                                            <div className="h-[1.63rem] w-[80%] rounded-[13px] bg-[#aaaaaa]" />
                                            <div className="h-[1.63rem] self-stretch rounded-[13px] bg-[#aaaaaa]" />
                                             */}
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}