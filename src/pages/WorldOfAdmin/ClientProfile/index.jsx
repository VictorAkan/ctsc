import { useState, useEffect } from 'react';
import axios from 'axios';
import ClientProfileList from '../../../components/Admin/ClientProfileList';
import ClientProfileForm from '../../../components/Admin/ClientProfileForm';

const ClientProfiles = () => {
    const [clientProfiles, setClientProfiles] = useState([]);
    const [selectedClientProfile, setSelectedClientProfile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const token = window.sessionStorage.getItem("token")

    useEffect(() => {
        axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/clients/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setClientProfiles(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching client profiles:', error);
                setIsLoading(false);
            });
    }, []);

    const handleEdit = (clientProfile) => {
        setSelectedClientProfile(clientProfile);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        setClientProfiles(clientProfiles.filter((clientProfile) => clientProfile.id !== id));
    };

    const handleSave = (clientProfile) => {
        if (clientProfile.id) {
            setClientProfiles(clientProfiles.map((c) => (c.id === clientProfile.id ? clientProfile : c)));
        } else {
            clientProfile.id = clientProfiles.length + 1;
            setClientProfiles([...clientProfiles, clientProfile]);
        }
        setIsEditing(false);
        setSelectedClientProfile(null);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setSelectedClientProfile(null);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Client Profiles</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : clientProfiles.length === 0 ? (
                <p>No clients yet</p>
            ) : (
                <div>
                    {isEditing ? (
                        <ClientProfileForm clientProfile={selectedClientProfile} onSave={handleSave} onCancel={handleCancel} />
                    ) : (
                        <div>
                            <button onClick={() => setIsEditing(true)} className="bg-green-500 text-white px-4 py-2 rounded mb-4">
                                Add Client Profile
                            </button>
                            <ClientProfileList clientProfiles={clientProfiles} onEdit={handleEdit} onDelete={handleDelete} />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ClientProfiles;


