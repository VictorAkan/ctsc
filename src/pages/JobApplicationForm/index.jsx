import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JobApplicationForm = () => {
    const { jobId } = useParams();
    const [talentId, setTalentId] = useState(0); // This should be fetched from the user context or auth state

    const token = window.sessionStorage.getItem("token");

    console.log(talentId);

    const handleApply = (e) => {
        e.preventDefault();

        const applicationData = {
            job_opportunity: jobId,
            talent: talentId
        };

        axios.post('https://crackingthestylecode.pythonanywhere.com/api/v1/job_applications/', applicationData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                alert('Application submitted successfully');
            })
            .catch(error => {
                console.error('There was an error submitting your application!', error);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h1 className="text-center text-3xl font-extrabold text-gray-900">Apply for Job ID: {jobId}</h1>
                </div>
                <form className="mt-8 space-y-6 bg-white p-8 rounded shadow-md" onSubmit={handleApply}>
                    <input className="bg-gray-100 p-4" placeholder='Enter your ID' value={talentId} onChange={(e) => setTalentId(e.target.value)} />
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Apply
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApplicationForm;

