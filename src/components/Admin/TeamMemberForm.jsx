import { useState, useEffect } from 'react';

const TeamMemberForm = ({ teamMember, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        id: teamMember ? teamMember.id : null,
        first_name: teamMember ? teamMember.first_name : '',
        last_name: teamMember ? teamMember.last_name : '',
        about: teamMember ? teamMember.about : '',
        profile_image: teamMember ? teamMember.profile_image : '',
    });

    useEffect(() => {
        if (teamMember) {
            setFormData({
                id: teamMember.id,
                first_name: teamMember.first_name,
                last_name: teamMember.last_name,
                about: teamMember.about,
                profile_image: teamMember.profile_image,
            });
        } else {
            setFormData({
                id: null,
                first_name: '',
                last_name: '',
                about: '',
                profile_image: '',
            });
        }
    }, [teamMember]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleProfilePic = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, profile_image: file });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a FormData object to handle file upload correctly
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            formDataToSend.append(key, formData[key]);
        });

        onSave(formDataToSend);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md" encType="multipart/form-data">
            <h2 className="text-2xl mb-4">{teamMember ? 'Edit Team Member' : 'Add Team Member'}</h2>
            <div className="mb-4">
                <label className="block text-gray-700">First Name</label>
                <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                    maxLength={50}
                    minLength={1}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Last Name</label>
                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                    maxLength={50}
                    minLength={1}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">About</label>
                <textarea
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                    maxLength={100}
                    minLength={1}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Profile Image</label>
                <input
                    type="file"
                    name="profile_image"
                    onChange={handleProfilePic}
                    className="w-full p-4 bg-gray-200 border rounded"
                    required
                />
            </div>
            {formData.profile_image && typeof formData.profile_image === 'object' && (
                <div className="mb-4">
                    <img src={URL.createObjectURL(formData.profile_image)} alt="Profile Preview" className="w-32 h-32 object-cover" />
                </div>
            )}
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

export default TeamMemberForm;

