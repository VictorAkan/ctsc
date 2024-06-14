const UserList = ({ users, onEdit, onDelete }) => (
    <div>
        <h2 className="text-xl font-bold mb-4">User List</h2>
        <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-1/5 px-4 py-2">First Name</th>
                    <th className="w-1/5 px-4 py-2">Last Name</th>
                    <th className="w-1/5 px-4 py-2">Email</th>
                    <th className="w-1/5 px-4 py-2">Is Client</th>
                    <th className="w-1/5 px-4 py-2">Is Talent</th>
                    <th className="w-1/5 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {users.map((user) => (
                    <tr key={user.id}>
                        <td className="border px-4 py-2">{user.first_name}</td>
                        <td className="border px-4 py-2">{user.last_name}</td>
                        <td className="border px-4 py-2">{user.email}</td>
                        <td className="border px-4 py-2">{user.is_client ? 'Yes' : 'No'}</td>
                        <td className="border px-4 py-2">{user.is_talent ? 'Yes' : 'No'}</td>
                        <td className="border px-4 py-2">
                            <button onClick={() => onEdit(user)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                Edit
                            </button>
                            <button onClick={() => onDelete(user.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default UserList;
