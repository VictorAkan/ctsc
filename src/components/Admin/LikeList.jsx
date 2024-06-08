const LikeList = ({ likes, onEdit, onDelete }) => (
    <div>
        <h2 className="text-xl font-bold mb-4">Like List</h2>
        <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-1/4 px-4 py-2">User</th>
                    <th className="w-1/4 px-4 py-2">Item</th>
                    <th className="w-1/4 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {likes.map((like) => (
                    <tr key={like.id}>
                        <td className="border px-4 py-2">{like.user}</td>
                        <td className="border px-4 py-2">{like.item}</td>
                        <td className="border px-4 py-2">
                            <button onClick={() => onEdit(like)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                Edit
                            </button>
                            <button onClick={() => onDelete(like.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default LikeList;

