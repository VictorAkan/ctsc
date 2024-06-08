const ContactUsList = ({ messages, onEdit, onDelete }) => (
    <div>
        <h2 className="text-xl font-bold mb-4">Messages List</h2>
        <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-1/4 px-4 py-2">Name</th>
                    <th className="w-1/4 px-4 py-2">Email</th>
                    <th className="w-1/2 px-4 py-2">Message</th>
                    <th className="w-1/4 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {messages.map((message) => (
                    <tr key={message.id}>
                        <td className="border px-4 py-2">{message.name}</td>
                        <td className="border px-4 py-2">{message.email}</td>
                        <td className="border px-4 py-2">{message.message}</td>
                        <td className="border px-4 py-2">
                            <button onClick={() => onEdit(message)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                Edit
                            </button>
                            <button onClick={() => onDelete(message.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default ContactUsList;
