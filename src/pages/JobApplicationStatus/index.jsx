import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TalentApplications = () => {
    const [applications, setApplications] = useState([]);
    const talentId = ''; // This should be fetched from the user context or auth state

    useEffect(() => {
        axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/job_applications/')
            .then(response => {
                const filteredApplications = response.data.filter(app => app.talent === talentId);
                setApplications(filteredApplications);
            })
            .catch(error => {
                console.error('There was an error fetching your applications!', error);
            });
    }, [talentId]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900">Your Applications</h1>
                </div>
                <ul className="bg-white shadow overflow-hidden sm:rounded-md">
                    {applications.length > 0 ? (
                        applications.map(app => (
                            <li key={app.id} className="border-t border-gray-200">
                                <div className="flex items-center justify-between p-4">
                                    <div className="text-lg font-medium text-indigo-600">
                                        Job ID: {app.job_opportunity}
                                    </div>
                                    <div className="text-gray-500">
                                        Status: {app.status}
                                    </div>
                                </div>
                            </li>
                        ))
                    ) : (
                        <div className="text-center p-4">
                            <p className="text-gray-500">You haven't applied to any job yet</p>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default TalentApplications;

