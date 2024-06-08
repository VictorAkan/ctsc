import axios from 'axios';

const JobOpportunityList = ({ jobOpportunities, onEdit, onDelete }) => {
    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://crackingthestylecode.pythonanywhere.com/api/v1/job/${id}/`);
            onDelete(id);
        } catch (error) {
            console.error('Error deleting job opportunity:', error);
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Job Opportunity List</h2>
            <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="w-1/5 px-4 py-2">Category</th>
                        <th className="w-1/5 px-4 py-2">Title</th>
                        <th className="w-1/5 px-4 py-2">Hiring Company</th>
                        <th className="w-1/5 px-4 py-2">Tag</th>
                        <th className="w-1/5 px-4 py-2">Requirements</th>
                        <th className="w-1/5 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {jobOpportunities.length === 0 ? (
                        <tr>
                            <td colSpan="6" className="border px-4 py-2 text-center">No jobs yet</td>
                        </tr>
                    ) : (
                        jobOpportunities.map((jobOpportunity) => (
                            <tr key={jobOpportunity.id}>
                                <td className="border px-4 py-2">{jobOpportunity.category}</td>
                                <td className="border px-4 py-2">{jobOpportunity.title}</td>
                                <td className="border px-4 py-2">{jobOpportunity.hiring_company}</td>
                                <td className="border px-4 py-2">{jobOpportunity.tag}</td>
                                <td className="border px-4 py-2">{jobOpportunity.requirements}</td>
                                <td className="border px-4 py-2">
                                    <button onClick={() => onEdit(jobOpportunity)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                        Edit
                                    </button>
                                    <button onClick={() => handleDelete(jobOpportunity.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default JobOpportunityList;





// const JobOpportunityList = ({ jobOpportunities, onEdit, onDelete }) => (
//     <div>
//         <h2 className="text-xl font-bold mb-4">Job Opportunity List</h2>
//         <table className="min-w-full bg-white">
//             <thead className="bg-gray-800 text-white">
//                 <tr>
//                     <th className="w-1/3 px-4 py-2">Title</th>
//                     <th className="w-1/3 px-4 py-2">Description</th>
//                     <th className="w-1/3 px-4 py-2">Actions</th>
//                 </tr>
//             </thead>
//             <tbody className="text-gray-700">
//                 {jobOpportunities.map((jobOpportunity) => (
//                     <tr key={jobOpportunity.id}>
//                         <td className="border px-4 py-2">{jobOpportunity.title}</td>
//                         <td className="border px-4 py-2">{jobOpportunity.description}</td>
//                         <td className="border px-4 py-2">
//                             <button onClick={() => onEdit(jobOpportunity)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
//                                 Edit
//                             </button>
//                             <button onClick={() => onDelete(jobOpportunity.id)} className="bg-red-500 text-white px-2 py-1 rounded">
//                                 Delete
//                             </button>
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </div>
// );

// export default JobOpportunityList;
