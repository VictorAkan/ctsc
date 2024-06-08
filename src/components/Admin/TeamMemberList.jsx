const TeamMemberList = ({ teamMembers, onEdit, onDelete }) => (
    <div>
        <h2 className="text-xl font-bold mb-4">Team Member List</h2>
        <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-1/4 px-4 py-2">Name</th>
                    <th className="w-1/4 px-4 py-2">Role</th>
                    <th className="w-1/4 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {teamMembers.map((teamMember) => (
                    <tr key={teamMember.id}>
                        <td className="border px-4 py-2">{teamMember.name}</td>
                        <td className="border px-4 py-2">{teamMember.role}</td>
                        <td className="border px-4 py-2">
                            <button onClick={() => onEdit(teamMember)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                Edit
                            </button>
                            <button onClick={() => onDelete(teamMember.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default TeamMemberList;
