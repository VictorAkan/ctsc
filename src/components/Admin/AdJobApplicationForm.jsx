import { useState, useEffect } from 'react';

const JobApplicationForm = ({ jobApplication, onSave, onCancel }) => {
    const [jobOpportunity, setJobOpportunity] = useState('');
    const [talent, setTalent] = useState({
        user: '',
        address: '',
        phone_number: '',
        profile_picture: '',
        cv_document: '',
        work_experiences: '',
        is_talent: false
    });

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
                    className="w-full p-4 bg-gray-200 border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">User</label>
                <input
                    type="text"
                    value={talent.user}
                    onChange={(e) => setTalent({ ...talent, user: e.target.value })}
                    className="w-full p-4 bg-gray-200 border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Address</label>
                <input
                    type="text"
                    value={talent.address}
                    onChange={(e) => setTalent({ ...talent, address: e.target.value })}
                    className="w-full p-4 bg-gray-200 border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input
                    type="text"
                    value={talent.phone_number}
                    onChange={(e) => setTalent({ ...talent, phone_number: e.target.value })}
                    className="w-full p-4 bg-gray-200 border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Profile Picture</label>
                <input
                    type="text"
                    value={talent.profile_picture}
                    onChange={(e) => setTalent({ ...talent, profile_picture: e.target.value })}
                    className="w-full p-4 bg-gray-200 border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">CV Document</label>
                <input
                    type="text"
                    value={talent.cv_document}
                    onChange={(e) => setTalent({ ...talent, cv_document: e.target.value })}
                    className="w-full p-4 bg-gray-200 border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Work Experiences</label>
                <textarea
                    value={talent.work_experiences}
                    onChange={(e) => setTalent({ ...talent, work_experiences: e.target.value })}
                    className="w-full p-4 bg-gray-200 border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Is Talent</label>
                <input
                    type="checkbox"
                    checked={talent.is_talent}
                    onChange={(e) => setTalent({ ...talent, is_talent: e.target.checked })}
                    className="w-full p-4 bg-gray-200 border rounded-md"
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

