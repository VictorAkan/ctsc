import { useState, useEffect } from 'react';
import axios from 'axios';
import TalentProfileForm from '../../../components/Admin/TalentProfileForm';
import TalentProfileList from '../../../components/Admin/TalentProfileList';

const TalentProfiles = () => {
    const [talentProfiles, setTalentProfiles] = useState([]);
    const [selectedTalentProfile, setSelectedTalentProfile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const token = window.sessionStorage.getItem("token")

    useEffect(() => {
        axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/talents/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                // Assuming the response.data contains an array of talent profiles
                setTalentProfiles(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching talent profiles:', error);
            });
    }, []);

    const handleEdit = (talentProfile) => {
        setSelectedTalentProfile(talentProfile);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        setTalentProfiles(talentProfiles.filter((talentProfile) => talentProfile.id !== id));
    };

    const handleSave = (talentProfile) => {
        // Handle saving talent profile here, if needed
        setIsEditing(false);
        setSelectedTalentProfile(null);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setSelectedTalentProfile(null);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Talent Profiles</h1>
            {talentProfiles.length === 0 ? (
                <p>No Talents yet</p>
            ) : (
                <>
                    {isEditing ? (
                        <TalentProfileForm talentProfile={selectedTalentProfile} onSave={handleSave} onCancel={handleCancel} />
                    ) : (
                        <div>
                            <button onClick={() => setIsEditing(true)} className="bg-green-500 text-white px-4 py-2 rounded mb-4">
                                Add Talent Profile
                            </button>
                            <TalentProfileList talentProfiles={talentProfiles} onEdit={handleEdit} onDelete={handleDelete} />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default TalentProfiles;

