import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobApplications = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/job_applications/')
            .then(response => {
                setApplications(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the applications!', error);
            });
    }, []);

    const handleApplicationStatus = (id, status) => {
        axios.put(`https://crackingthestylecode.pythonanywhere.com/api/v1/job_applications/${id}/`, { status })
            .then(response => {
                alert('Application status updated successfully');
                setApplications(applications.map(app => app.id === id ? { ...app, status } : app));
            })
            .catch(error => {
                console.error('There was an error updating the application status!', error);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900">Job Applications</h1>
                </div>
                <ul className="bg-white shadow overflow-hidden sm:rounded-md">
                    {applications.length > 0 ? (
                        applications.map(app => (
                            <li key={app.id} className="border-t border-gray-200">
                                <div className="flex items-center justify-between p-4">
                                    <div>
                                        <p className="text-lg font-medium text-indigo-600">Job ID: {app.job_opportunity}</p>
                                        <p className="text-gray-500">Talent ID: {app.talent}</p>
                                    </div>
                                    <div className="flex space-x-4">
                                        <button
                                            onClick={() => handleApplicationStatus(app.id, 'accepted')}
                                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                        >
                                            Accept
                                        </button>
                                        <button
                                            onClick={() => handleApplicationStatus(app.id, 'rejected')}
                                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                        >
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))
                    ) : (
                        <div className="text-center p-4">
                            <p className="text-gray-500">No applications yet</p>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default JobApplications;

