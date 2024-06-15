import React from 'react';

const TalentProfileList = ({ talentProfiles, onEdit, onDelete }) => (
    <div>
        <h2 className="text-xl font-bold mb-4">Talent Profile List</h2>
        <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-1/6 px-4 py-2">Is Client</th>
                    <th className="w-1/6 px-4 py-2">Is Talent</th>
                    <th className="w-1/6 px-4 py-2">Address</th>
                    <th className="w-1/6 px-4 py-2">Phone Number</th>
                    <th className="w-1/6 px-4 py-2">Work Experience</th>
                    <th className="w-1/6 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {talentProfiles.map((talentProfile) => (
                    <tr key={talentProfile.id}>
                        <td className="border px-4 py-2">{talentProfile.is_client ? 'Yes' : 'No'}</td>
                        <td className="border px-4 py-2">{talentProfile.is_talent ? 'Yes' : 'No'}</td>
                        <td className="border px-4 py-2">{talentProfile.address}</td>
                        <td className="border px-4 py-2">{talentProfile.phone_number}</td>
                        <td className="border px-4 py-2">{talentProfile.work_experience}</td>
                        <td className="border px-4 py-2">
                            <button onClick={() => onEdit(talentProfile)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                Edit
                            </button>
                            <button onClick={() => onDelete(talentProfile.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default TalentProfileList;

