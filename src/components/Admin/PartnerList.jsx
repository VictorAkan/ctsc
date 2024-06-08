const PartnerList = ({ partners, onEdit, onDelete }) => (
    <div>
        <h2 className="text-xl font-bold mb-4">Partner List</h2>
        <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-1/4 px-4 py-2">Name</th>
                    <th className="w-1/4 px-4 py-2">Description</th>
                    <th className="w-1/4 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {partners.map((partner) => (
                    <tr key={partner.id}>
                        <td className="border px-4 py-2">{partner.name}</td>
                        <td className="border px-4 py-2">{partner.description}</td>
                        <td className="border px-4 py-2">
                            <button onClick={() => onEdit(partner)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                Edit
                            </button>
                            <button onClick={() => onDelete(partner.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default PartnerList;
