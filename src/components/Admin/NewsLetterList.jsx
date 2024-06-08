const NewsletterList = ({ newsletters, onEdit, onDelete }) => (
    <div>
        <h2 className="text-xl font-bold mb-4">Newsletter List</h2>
        <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-1/4 px-4 py-2">Title</th>
                    <th className="w-1/4 px-4 py-2">Content</th>
                    <th className="w-1/4 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {newsletters.map((newsletter) => (
                    <tr key={newsletter.id}>
                        <td className="border px-4 py-2">{newsletter.title}</td>
                        <td className="border px-4 py-2">{newsletter.content}</td>
                        <td className="border px-4 py-2">
                            <button onClick={() => onEdit(newsletter)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                Edit
                            </button>
                            <button onClick={() => onDelete(newsletter.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default NewsletterList;
