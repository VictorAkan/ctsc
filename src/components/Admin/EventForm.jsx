import { useState, useEffect } from 'react';

const EventForm = ({ event, onSave, onCancel }) => {
    const [eventName, setEventName] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [registrationLink, setRegistrationLink] = useState('');
    const [about, setAbout] = useState('');
    const [briefSummary, setBriefSummary] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    useEffect(() => {
        if (event) {
            setEventName(event.event_name);
            setDate(event.date);
            setLocation(event.location);
            setRegistrationLink(event.registration_link);
            setAbout(event.about);
            setBriefSummary(event.brief_summary);
            setStartTime(event.start_time);
            setEndTime(event.end_time);
        }
    }, [event]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...event,
            event_name: eventName,
            date,
            location,
            registration_link: registrationLink,
            about,
            brief_summary: briefSummary,
            start_time: startTime,
            end_time: endTime
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl mb-4">{event ? 'Edit Event' : 'Add Event'}</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Event Name</label>
                <input
                    type="text"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Registration Link</label>
                <input
                    type="url"
                    value={registrationLink}
                    onChange={(e) => setRegistrationLink(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">About</label>
                <textarea
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Brief Summary</label>
                <textarea
                    value={briefSummary}
                    onChange={(e) => setBriefSummary(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Start Time</label>
                <input
                    type="datetime-local"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">End Time</label>
                <input
                    type="datetime-local"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="flex justify-end">
                <button type="button" onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">
                    Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Save
                </button>
            </div>
        </form>
    );
};

export default EventForm;

