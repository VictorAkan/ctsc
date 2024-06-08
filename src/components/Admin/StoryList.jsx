const StoryList = ({ stories, onEdit, onDelete }) => (
    <div>
        <h2 className="text-xl font-bold mb-4">Story List</h2>
        <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-1/4 px-4 py-2">Title</th>
                    <th className="w-1/2 px-4 py-2">Description</th>
                    <th className="w-1/4 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {stories.map((story) => (
                    <tr key={story.id}>
                        <td className="border px-4 py-2">{story.topic}</td>
                        <td className="border px-4 py-2">{story.short_description}</td>
                        <td className="border px-4 py-2">
                            <button onClick={() => onEdit(story)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                Edit
                            </button>
                            <button onClick={() => onDelete(story.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default StoryList;
