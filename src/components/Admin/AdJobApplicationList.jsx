import { format } from "date-fns";

const JobApplicationList = ({ jobApplications, onEdit, onDelete }) => (
    <div>
        <h2 className="text-xl font-bold mb-4">Job Application List</h2>
        <table className="min-w-full bg-white md:overflow-auto">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-1/6 px-4 py-2">ID</th>
                    <th className="w-1/6 px-4 py-2">Applied Date</th>
                    <th className="w-1/6 px-4 py-2">Job Opportunity</th>
                    <th className="w-1/6 px-4 py-2">Talent User</th>
                    {/* <th className="w-1/6 px-4 py-2">Talent Address</th>
                    <th className="w-1/6 px-4 py-2">Talent Phone Number</th>
                    <th className="w-1/6 px-4 py-2">Actions</th> */}
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {jobApplications.map((jobApplication) => (
                    <tr key={jobApplication.job_opportunity}>
                        <td className="border px-4 py-2">{jobApplication.id}</td>
                        <td className="border px-4 py-2">{format(new Date(jobApplication.applied_date), "PPP")}</td>
                        <td className="border px-4 py-2">{jobApplication.job_opportunity}</td>
                        {/* <td className="border px-4 py-2">{jobApplication.talent.user}</td>
                        <td className="border px-4 py-2">{jobApplication.talent.address}</td>
                        <td className="border px-4 py-2">{jobApplication.talent.phone_number}</td> */}
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
