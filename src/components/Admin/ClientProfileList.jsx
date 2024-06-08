const ClientProfileList = ({ clientProfiles, onEdit, onDelete }) => (
    <div>
        <h2 className="text-xl font-bold mb-4">Client Profile List</h2>
        <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-1/3 px-4 py-2">Name</th>
                    <th className="w-1/3 px-4 py-2">Email</th>
                    <th className="w-1/3 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {clientProfiles.map((clientProfile) => (
                    <tr key={clientProfile.id}>
                        <td className="border px-4 py-2">{clientProfile.name}</td>
                        <td className="border px-4 py-2">{clientProfile.email}</td>
                        <td className="border px-4 py-2">
                            <button onClick={() => onEdit(clientProfile)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                Edit
                            </button>
                            <button onClick={() => onDelete(clientProfile.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default ClientProfileList;
