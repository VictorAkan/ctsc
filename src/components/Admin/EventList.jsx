const formatDateTime = (dateTime) => {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    };
    return new Date(dateTime).toLocaleDateString(undefined, options);
};

const EventList = ({ events, onEdit, onDelete }) => (
    <div>
        <h2 className="text-xl font-bold mb-4">Event List</h2>
        <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-1/6 px-4 py-2">Event Name</th>
                    <th className="w-1/6 px-4 py-2">Date</th>
                    <th className="w-1/6 px-4 py-2">Location</th>
                    <th className="w-1/6 px-4 py-2">Start Time</th>
                    <th className="w-1/6 px-4 py-2">End Time</th>
                    <th className="w-1/6 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {events.map((event) => (
                    <tr key={event.event_id}>
                        <td className="border px-4 py-2">{event.event_name}</td>
                        <td className="border px-4 py-2">{event.date}</td>
                        <td className="border px-4 py-2">{event.location}</td>
                        <td className="border px-4 py-2">{formatDateTime(event.start_time)}</td>
                        <td className="border px-4 py-2">{formatDateTime(event.end_time)}</td>
                        <td className="border px-4 py-2">
                            <button onClick={() => onEdit(event)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                Edit
                            </button>
                            <button onClick={() => onDelete(event.event_id)} className="bg-red-500 text-white px-2 py-1 rounded">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default EventList;
