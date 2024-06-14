const ServiceList = ({ services, onEdit, onDelete }) => (
    <div>
        <h2 className="text-xl font-bold mb-4">Service List</h2>
        {services.length === 0 ? (
            <p className="text-gray-700">No service yet</p>
        ) : (
            <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="w-1/4 px-4 py-2">Name</th>
                        {/* <th className="w-1/4 px-4 py-2">Description</th> */}
                        <th className="w-1/4 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {services.map((service) => (
                        <tr key={service.id}>
                            <td className="border px-4 py-2">{service.service_name}</td>
                            {/* <td className="border px-4 py-2">{service.description}</td> */}
                            <td className="border px-4 py-2">
                                <button onClick={() => onEdit(service)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                    Edit
                                </button>
                                <button onClick={() => onDelete(service.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
);

export default ServiceList;

