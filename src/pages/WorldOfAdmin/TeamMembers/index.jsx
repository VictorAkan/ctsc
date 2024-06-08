import { useState, useEffect } from 'react';
import axios from 'axios';
import TeamMemberForm from '../../../components/Admin/TeamMemberForm';
import TeamMemberList from '../../../components/Admin/TeamMemberList';

const TeamMembers = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [selectedTeamMember, setSelectedTeamMember] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const token = window.sessionStorage.getItem("token")

    useEffect(() => {
        // Fetch team members when the component mounts
        axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/team-members/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data);
                setTeamMembers(response.data);
            })
            .catch(error => {
                console.error('Error fetching team members:', error);
            });
    }, []);

    const handleEdit = (teamMember) => {
        setSelectedTeamMember(teamMember);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        axios.delete(`https://crackingthestylecode.pythonanywhere.com/api/v1/team-members/${id}/`)
            .then(() => {
                setTeamMembers(teamMembers.filter((teamMember) => teamMember.id !== id));
            })
            .catch(error => {
                console.error('Error deleting team member:', error);
            });
    };

    const handleSave = (teamMember) => {
        if (teamMember.id) {
            axios.put(`https://crackingthestylecode.pythonanywhere.com/api/v1/team-members/${teamMember.id}/`, teamMember)
                .then(() => {
                    setTeamMembers(teamMembers.map((t) => (t.id === teamMember.id ? teamMember : t)));
                })
                .catch(error => {
                    console.error('Error updating team member:', error);
                });
        } else {
            axios.post('https://crackingthestylecode.pythonanywhere.com/api/v1/team-members/', teamMember)
                .then(response => {
                    teamMember.id = response.data.id;
                    setTeamMembers([...teamMembers, teamMember]);
                })
                .catch(error => {
                    console.error('Error adding team member:', error);
                });
        }
        setIsEditing(false);
        setSelectedTeamMember(null);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setSelectedTeamMember(null);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Team Members</h1>
            {isEditing ? (
                <TeamMemberForm teamMember={selectedTeamMember} onSave={handleSave} onCancel={handleCancel} />
            ) : (
                <div>
                    <button onClick={() => setIsEditing(true)} className="bg-green-500 text-white px-4 py-2 rounded mb-4">
                        Add Team Member
                    </button>
                    {teamMembers.length === 0 ? (
                        <p>No team members yet.</p>
                    ) : (
                        <TeamMemberList teamMembers={teamMembers} onEdit={handleEdit} onDelete={handleDelete} />
                    )}
                </div>
            )}
        </div>
    );
};

export default TeamMembers;

