import { useState, useEffect } from 'react';

const JobOpportunityForm = ({ jobOpportunity, onSave, onCancel }) => {
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [hiringCompany, setHiringCompany] = useState('');
    const [tag, setTag] = useState('Remote');
    const [requirements, setRequirements] = useState('');

    useEffect(() => {
        if (jobOpportunity) {
            setCategory(jobOpportunity.category);
            setTitle(jobOpportunity.title);
            setHiringCompany(jobOpportunity.hiring_company);
            setTag(jobOpportunity.tag);
            setRequirements(jobOpportunity.requirements);
        }
    }, [jobOpportunity]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...jobOpportunity, category, title, hiring_company: hiringCompany, tag, requirements });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl mb-4">{jobOpportunity ? 'Edit Job Opportunity' : 'Add Job Opportunity'}</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Category</label>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Hiring Company</label>
                <input
                    type="text"
                    value={hiringCompany}
                    onChange={(e) => setHiringCompany(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Tag</label>
                <select
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    className="w-full p-4 bg-gray-200 border rounded"
                >
                    <option value="Remote">Remote</option>
                    <option value="Onsite">Onsite</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Requirements</label>
                <textarea
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
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

export default JobOpportunityForm;





// import { useState, useEffect } from 'react';

// const JobOpportunityForm = ({ jobOpportunity, onSave, onCancel }) => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');

//     useEffect(() => {
//         if (jobOpportunity) {
//             setTitle(jobOpportunity.title);
//             setDescription(jobOpportunity.description);
//         }
//     }, [jobOpportunity]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSave({ ...jobOpportunity, title, description });
//     };

//     return (
//         <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
//             <h2 className="text-2xl mb-4">{jobOpportunity ? 'Edit Job Opportunity' : 'Add Job Opportunity'}</h2>
//             <div className="mb-4">
//                 <label className="block text-gray-700">Title</label>
//                 <input
//                     type="text"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     className="w-full !p-4 !bg-gray-200 border rounded"
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block text-gray-700">Description</label>
//                 <textarea
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
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

// export default JobOpportunityForm;
