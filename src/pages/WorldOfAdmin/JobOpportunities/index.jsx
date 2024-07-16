import { useState, useEffect } from 'react';
import axios from 'axios';
import JobOpportunityForm from '../../../components/Admin/JobOpportunityForm';
import JobOpportunityList from '../../../components/Admin/JobOpportunityList';

const JobOpportunities = () => {
    const [jobOpportunities, setJobOpportunities] = useState([]);
    const [selectedJobOpportunity, setSelectedJobOpportunity] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchJobOpportunities = async () => {
            try {
                const response = await axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/job/');
                setJobOpportunities(response.data.results);
            } catch (error) {
                console.error('Error fetching job opportunities:', error);
            }
        };

        fetchJobOpportunities();
    }, []);

    const handleEdit = (jobOpportunity) => {
        setSelectedJobOpportunity(jobOpportunity);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://crackingthestylecode.pythonanywhere.com/api/v1/job/${id}/`);
            setJobOpportunities(jobOpportunities.filter((jobOpportunity) => jobOpportunity.id !== id));
        } catch (error) {
            console.error('Error deleting job opportunity:', error);
        }
    };

    const handleSave = async (jobOpportunity) => {
        try {
            if (jobOpportunity.id) {
                await axios.put(`https://crackingthestylecode.pythonanywhere.com/api/v1/job/${jobOpportunity.id}/`, jobOpportunity);
                setJobOpportunities(jobOpportunities.map((j) => (j.id === jobOpportunity.id ? jobOpportunity : j)));
            } else {
                const response = await axios.post('https://crackingthestylecode.pythonanywhere.com/api/v1/job/', jobOpportunity);
                setJobOpportunities([...jobOpportunities, response.data]);
            }
            setIsEditing(false);
            setSelectedJobOpportunity(null);
        } catch (error) {
            console.error('Error saving job opportunity:', error);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setSelectedJobOpportunity(null);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Job Opportunities</h1>
            {isEditing ? (
                <JobOpportunityForm jobOpportunity={selectedJobOpportunity} onSave={handleSave} onCancel={handleCancel} />
            ) : (
                <div>
                    <button onClick={() => setIsEditing(true)} className="bg-green-500 text-white px-4 py-2 rounded mb-4">
                        Add Job Opportunity
                    </button>
                    <JobOpportunityList jobOpportunities={jobOpportunities} onEdit={handleEdit} onDelete={handleDelete} />
                </div>
            )}
        </div>
    );
};

export default JobOpportunities;
