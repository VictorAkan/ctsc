const CommentList = ({ comments, onEdit, onDelete }) => (
    <div>
        <h2 className="text-xl font-bold mb-4">Comment List</h2>
        <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-1/4 px-4 py-2">Author</th>
                    <th className="w-1/2 px-4 py-2">Content</th>
                    <th className="w-1/4 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {comments.map((comment) => (
                    <tr key={comment.id}>
                        <td className="border px-4 py-2">{comment.author}</td>
                        <td className="border px-4 py-2">{comment.comment_body}</td>
                        <td className="border px-4 py-2">
                            <button onClick={() => onEdit(comment)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                Edit
                            </button>
                            <button onClick={() => onDelete(comment.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default CommentList;

