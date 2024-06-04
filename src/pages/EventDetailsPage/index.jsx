import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner'; // If using react-loader-spinner

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
                <Loader type="ThreeDots" color="#000000" height={80} width={80} />
            </div>
        );
    }

    if (!event) {
        return <div>Error loading event details.</div>;
    }

    return (
        <div className="container">
            <h1>{event.title}</h1>
            <img src={event.image_url} alt={event.title} />
            <p>{event.description}</p>
            {/* Add more event details here */}
        </div>
    );
}
