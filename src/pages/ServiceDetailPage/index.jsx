import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
import { Text } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useScrollToTop from "../../hooks/useScrollToTop";
import { useParams } from 'react-router-dom';

export default function ServiceDetailPage() {
    useScrollToTop();
    const { serviceId } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await axios.get(`https://crackingthestylecode.pythonanywhere.com/api/v1/service/${serviceId}/`);
                setService(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchService();
    }, [serviceId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading service</div>;

    return (
        <>
            <Helmet>
                <title>{service.name}</title>
                <meta name="description" content={`Details for ${service.name}`} />
            </Helmet>
            <div className="w-full bg-[#ffffff]">
                <div className="flex flex-col gap-[7.06rem] md:gap-[5.25rem] sm:gap-[3.50rem]">
                    <Header />
                    <div className="container-xs flex flex-col mt-24 md:p-[1.25rem] md:px-[1.25rem]">
                        <Text size="27xl" as="p" className="sm:text-[2.00rem] text-center !font-medium !text-[#000000]">
                            {service.name}
                        </Text>
                        <Text className="text-center text-black">
                            {service.description}
                        </Text>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
