import { useState, useEffect } from 'react';
import axios from 'axios';
import EventForm from '../../../components/Admin/EventForm';
import EventList from '../../../components/Admin/EventList';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Fetch events from the API when the component mounts
        axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/event/')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    }, []);

    const handleEdit = (event) => {
        setSelectedEvent(event);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        axios.delete(`https://crackingthestylecode.pythonanywhere.com/api/v1/event/${id}/`)
            .then(() => {
                setEvents(events.filter((event) => event.event_id !== id));
            })
            .catch(error => {
                console.error('Error deleting event:', error);
            });
    };

    const handleSave = (event) => {
        if (event.event_id) {
            // Update existing event
            axios.put(`https://crackingthestylecode.pythonanywhere.com/api/v1/event/${event.event_id}/`, event)
                .then(response => {
                    setEvents(events.map((e) => (e.event_id === event.event_id ? response.data : e)));
                    setIsEditing(false);
                    setSelectedEvent(null);
                })
                .catch(error => {
                    console.error('Error updating event:', error);
                });
        } else {
            // Create new event
            axios.post('https://crackingthestylecode.pythonanywhere.com/api/v1/event/', event)
                .then(response => {
                    setEvents([...events, response.data]);
                    setIsEditing(false);
                    setSelectedEvent(null);
                })
                .catch(error => {
                    console.error('Error creating event:', error);
                });
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setSelectedEvent(null);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Events</h1>
            {isEditing ? (
                <EventForm event={selectedEvent} onSave={handleSave} onCancel={handleCancel} />
            ) : (
                <div>
                    <button onClick={() => setIsEditing(true)} className="bg-green-500 text-white px-4 py-2 rounded mb-4">
                        Add Event
                    </button>
                    <EventList events={events} onEdit={handleEdit} onDelete={handleDelete} />
                </div>
            )}
        </div>
    );
};

export default Events;

