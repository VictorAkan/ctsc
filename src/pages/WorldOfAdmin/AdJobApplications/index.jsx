import { useState, useEffect } from 'react';
import axios from 'axios';
import JobApplicationForm from '../../../components/Admin/AdJobApplicationForm';
import JobApplicationList from '../../../components/Admin/AdJobApplicationList';

const JobApplications = () => {
    const [jobApplications, setJobApplications] = useState([]);
    const [selectedJobApplication, setSelectedJobApplication] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const token = window.sessionStorage.getItem("token");
    console.log(token);

    useEffect(() => {
        axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/job_applications/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setJobApplications(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Failed to fetch job applications');
                setLoading(false);
            });
    }, [token]);

    const handleEdit = (jobApplication) => {
        setSelectedJobApplication(jobApplication);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        axios.delete(`https://crackingthestylecode.pythonanywhere.com/api/v1/job_applications/${id}/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => {
                setJobApplications(jobApplications.filter((jobApplication) => jobApplication.id !== id));
            })
            .catch(error => {
                setError('Failed to delete job application');
            });
    };

    const handleSave = (jobApplication) => {
        if (jobApplication.id) {
            axios.put(`https://crackingthestylecode.pythonanywhere.com/api/v1/job_applications/${jobApplication.id}/`, jobApplication, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    setJobApplications(jobApplications.map((j) => (j.id === jobApplication.id ? response.data : j)));
                    setIsEditing(false);
                    setSelectedJobApplication(null);
                })
                .catch(error => {
                    setError('Failed to update job application');
                });
        } else {
            axios.post('https://crackingthestylecode.pythonanywhere.com/api/v1/job_applications/', jobApplication, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    setJobApplications([...jobApplications, response.data]);
                    setIsEditing(false);
                    setSelectedJobApplication(null);
                })
                .catch(error => {
                    setError('Failed to add job application');
                });
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setSelectedJobApplication(null);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Job Applications</h1>
            {isEditing ? (
                <JobApplicationForm
                    jobApplication={selectedJobApplication}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            ) : (
                <div>
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
                    >
                        Add Job Application
                    </button>
                    {jobApplications.length > 0 ? (
                        <JobApplicationList
                            jobApplications={jobApplications}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ) : (
                        <div>No job applications yet</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default JobApplications;