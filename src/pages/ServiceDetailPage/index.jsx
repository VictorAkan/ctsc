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
                console.log(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchService();
    }, [serviceId]);

    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
    if (error) return <div className="flex justify-center items-center h-screen text-red-500">Error loading service</div>;

    return (
        <>
            <Helmet>
                <title>{service.service_name}</title>
                <meta name="description" content={`Details for ${service.service_name}`} />
            </Helmet>
            <div className="w-full bg-[#ffffff]">
                <div className="flex flex-col gap-[7.06rem] md:gap-[5.25rem] sm:gap-[3.50rem]">
                    <Header />
                    <div className="container mx-auto flex flex-col mt-24 md:p-[1.25rem] md:px-[1.25rem]">
                        <Text size="27xl" as="p" className="sm:text-[2.00rem] text-center !font-medium !text-[#000000]">
                            {service.service_name}
                        </Text>
                        <Text className="text-center text-black mb-8">
                            {service.description}
                        </Text>
                        <div className="flex flex-col gap-8">
                            {service.talent_profiles.map((profile, index) => (
                                <div key={index} className="p-4 border rounded-lg shadow-md">
                                    <div className="flex items-center gap-4 mb-4">
                                        <img src={profile.profile_picture} alt={profile.user.username} className="w-16 h-16 rounded-full object-cover" />
                                        <div>
                                            <p className="text-lg font-semibold">{profile.user.username}</p>
                                            <p>{profile.user.email}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p><span className="font-semibold">Address:</span> {profile.address}</p>
                                        <p><span className="font-semibold">Phone Number:</span> {profile.phone_number}</p>
                                        <p><span className="font-semibold">Work Experiences:</span></p>
                                        <ul className="list-disc list-inside">
                                            {profile.work_experiences.map((experience, idx) => (
                                                <li key={idx}>{experience}</li>
                                            ))}
                                        </ul>
                                        {profile.cv_document && <a href={profile.cv_document} className="text-blue-500">Download CV</a>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer className="mt-28" />
        </>
    );
}
