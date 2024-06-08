const JobApplicationList = ({ jobApplications, onEdit, onDelete }) => (
    <div>
        <h2 className="text-xl font-bold mb-4">Job Application List</h2>
        <table className="min-w-full bg-white md:overflow-auto">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-1/4 px-4 py-2">ID</th>
                    <th className="w-1/4 px-4 py-2">Job Opportunity</th>
                    <th className="w-1/4 px-4 py-2">Talent</th>
                    <th className="w-1/4 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {jobApplications.map((jobApplication) => (
                    <tr key={jobApplication.id}>
                        <td className="border px-4 py-2">{jobApplication.id}</td>
                        <td className="border px-4 py-2">{jobApplication.job_opportunity}</td>
                        <td className="border px-4 py-2">{jobApplication.talent}</td>
                        <td className="border px-4 py-2">
                            <button
                                onClick={() => onEdit(jobApplication)}
                                className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(jobApplication.id)}
                                className="bg-red-500 text-white px-2 py-1 rounded"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default JobApplicationList;




// const JobApplicationList = ({ jobApplications, onEdit, onDelete }) => (
//     <div>
//         <h2 className="text-xl font-bold mb-4">Job Application List</h2>
//         <table className="min-w-full bg-white md:overflow-auto">
//             <thead className="bg-gray-800 text-white">
//                 <tr>
//                     <th className="w-1/3 px-4 py-2">Name</th>
//                     <th className="w-1/3 px-4 py-2">Position</th>
//                     <th className="w-1/3 px-4 py-2">Actions</th>
//                 </tr>
//             </thead>
//             <tbody className="text-gray-700">
//                 {jobApplications.map((jobApplication) => (
//                     <tr key={jobApplication.id}>
//                         <td className="border px-4 py-2">{jobApplication.name}</td>
//                         <td className="border px-4 py-2">{jobApplication.position}</td>
//                         <td className="border px-4 py-2">
//                             <button
//                                 onClick={() => onEdit(jobApplication)}
//                                 className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
//                             >
//                                 Edit
//                             </button>
//                             <button
//                                 onClick={() => onDelete(jobApplication.id)}
//                                 className="bg-red-500 text-white px-2 py-1 rounded"
//                             >
//                                 Delete
//                             </button>
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </div>
// );

// export default JobApplicationList;
