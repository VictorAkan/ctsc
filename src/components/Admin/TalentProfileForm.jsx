import React, { useState, useEffect } from 'react';

const TalentProfileForm = ({ talentProfile, onSave, onCancel }) => {
    const [isClient, setIsClient] = useState(false);
    const [isTalent, setIsTalent] = useState(false);
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [workExperience, setWorkExperience] = useState('');

    useEffect(() => {
        if (talentProfile) {
            setIsClient(talentProfile.is_client);
            setIsTalent(talentProfile.is_talent);
            setAddress(talentProfile.address);
            setPhoneNumber(talentProfile.phone_number);
            setWorkExperience(talentProfile.work_experience);
        }
    }, [talentProfile]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...talentProfile,
            is_client: isClient,
            is_talent: isTalent,
            address,
            phone_number: phoneNumber,
            work_experience: workExperience
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl mb-4">{talentProfile ? 'Edit Talent Profile' : 'Add Talent Profile'}</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Is Client</label>
                <input
                    type="checkbox"
                    checked={isClient}
                    onChange={(e) => setIsClient(e.target.checked)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Is Talent</label>
                <input
                    type="checkbox"
                    checked={isTalent}
                    onChange={(e) => setIsTalent(e.target.checked)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Address</label>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Work Experience</label>
                <textarea
                    value={workExperience}
                    onChange={(e) => setWorkExperience(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
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

export default TalentProfileForm;
