import { useState, useEffect } from 'react';

const JobApplicationForm = ({ jobApplication, onSave, onCancel }) => {
    const [jobOpportunity, setJobOpportunity] = useState('');
    const [talent, setTalent] = useState('');

    useEffect(() => {
        if (jobApplication) {
            setJobOpportunity(jobApplication.job_opportunity);
            setTalent(jobApplication.talent);
        }
    }, [jobApplication]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...jobApplication, job_opportunity: jobOpportunity, talent });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl mb-4">{jobApplication ? 'Edit Job Application' : 'Add Job Application'}</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Job Opportunity</label>
                <input
                    type="number"
                    value={jobOpportunity}
                    onChange={(e) => setJobOpportunity(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Talent</label>
                <input
                    type="number"
                    value={talent}
                    onChange={(e) => setTalent(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="flex justify-end">
                <button type="button" onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">
                    Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Save
                </button>
            </div>
        </form>
    );
};

export default JobApplicationForm;




// import { useState, useEffect } from 'react';

// const JobApplicationForm = ({ jobApplication, onSave, onCancel }) => {
//     const [name, setName] = useState('');
//     const [position, setPosition] = useState('');

//     useEffect(() => {
//         if (jobApplication) {
//             setName(jobApplication.name);
//             setPosition(jobApplication.position);
//         }
//     }, [jobApplication]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSave({ ...jobApplication, name, position });
//     };

//     return (
//         <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
//             <h2 className="text-2xl mb-4">{jobApplication ? 'Edit Job Application' : 'Add Job Application'}</h2>
//             <div className="mb-4">
//                 <label className="block text-gray-700">Name</label>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="w-full !p-4 !bg-gray-200 border rounded-md"
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block text-gray-700">Position</label>
//                 <input
//                     type="text"
//                     value={position}
//                     onChange={(e) => setPosition(e.target.value)}
//                     className="w-full !p-4 !bg-gray-200 border rounded"
//                 />
//             </div>
//             <div className="flex justify-end">
//                 <button type="button" onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">
//                     Cancel
//                 </button>
//                 <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//                     Save
//                 </button>
//             </div>
//         </form>
//     );
// };

// export default JobApplicationForm;
