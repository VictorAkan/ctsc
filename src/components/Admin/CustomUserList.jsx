const CustomUserList = ({ customUsers, onEdit, onDelete }) => (
    <div>
        <h2 className="text-xl font-bold mb-4">Custom User List</h2>
        <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-1/4 px-4 py-2">Username</th>
                    <th className="w-1/4 px-4 py-2">Email</th>
                    <th className="w-1/4 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {customUsers.map((customUser) => (
                    <tr key={customUser.id}>
                        <td className="border px-4 py-2">{customUser.username}</td>
                        <td className="border px-4 py-2">{customUser.email}</td>
                        <td className="border px-4 py-2">
                            <button onClick={() => onEdit(customUser)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                Edit
                            </button>
                            <button onClick={() => onDelete(customUser.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default CustomUserList;
