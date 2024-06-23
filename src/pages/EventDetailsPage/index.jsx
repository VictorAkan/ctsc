import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Loader } from '../../Loader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function EventDetailsPage() {
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                const response = await axios.get(`https://crackingthestylecode.pythonanywhere.com/api/v1/event/${eventId}/`);
                console.log(response.data);
                setEvent(response.data);
            } catch (error) {
                console.error("There was an error fetching the event details!", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEventDetails();
    }, [eventId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-full">
                <Loader />
            </div>
        );
    }

    if (!event) {
        return <div className="text-center text-red-500">Error loading event details.</div>;
    }

    return (
        <>
        <Header />
        <div className="container mx-auto p-6 sm:p-4 px-[12rem]">
            <h1 className="text-4xl font-bold mt-24 sm:mt-32 mb-4">{event.event_name}</h1>
            <img className="w-full object-cover mb-4" src={event.event_image} alt={event.event_name} />
            <p className="text-gray-600 mb-4">{event.brief_summary}</p>
            <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2">About the Event</h2>
                <p>{event.about}</p>
            </div>
            <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2">Event Details</h2>
                <p><span className="font-semibold">Date:</span> {event.date}</p>
                <p><span className="font-semibold">Start Time:</span> {new Date(event.start_time).toLocaleString()}</p>
                <p><span className="font-semibold">End Time:</span> {new Date(event.end_time).toLocaleString()}</p>
                <p><span className="font-semibold">Location:</span> {event.location}</p>
            </div>
            <div>
                <a href={event.registation_link} className="bg-[#253451] text-white px-4 py-2 rounded hover:bg-[#354972]">
                    Register Here
                </a>
            </div>
        </div>
        <Footer />
        </>
    );
}
