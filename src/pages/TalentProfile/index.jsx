import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { Button } from '../../components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserProfile = () => {
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [cvDocument, setCvDocument] = useState(null);
    const [workExperience, setWorkExperience] = useState("");

    const token = window.sessionStorage.getItem("token");
    const name = window.sessionStorage.getItem("name");
    const refresh = window.sessionStorage.getItem("refershToken");

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/user-profile/', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const data = response.data;
                setAddress(data.address || '');
                setPhoneNumber(data.phone_number || '');
                setProfilePicture(data.profile_picture || null);
                setCvDocument(data.cv_document || null);
                setWorkExperience(data.work_experience || '');
                setValue('address', data.address || '');
                setValue('phone_number', data.phone_number || '');
                setValue('work_experiences', data.work_experience || '');
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchProfileData();
    }, [token, setValue]);

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('address', data.address);
            formData.append('phone_number', data.phone_number);
            formData.append('work_experiences', data.work_experiences);
            if (data.profile_picture[0]) formData.append('profile_picture', data.profile_picture[0]);
            if (data.cv_document[0]) formData.append('cv_document', data.cv_document[0]);

            const response = await axios.patch('https://crackingthestylecode.pythonanywhere.com/api/v1/user-profile/', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            alert('Profile updated successfully!');
            reset();
            setProfilePicture(null);
            setCvDocument(null);
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile. Please try again.');
        }
    };

    const handleFileChange = (event, setter, setValueFunc, fieldName) => {
        const file = event.target.files[0];
        setter(URL.createObjectURL(file));
        setValueFunc(fieldName, file);
    };

    const handleSignOut = async () => {
        try {
            await axios.post('https://crackingthestylecode.pythonanywhere.com/api/v1/sign-out/', {
                refresh_token: refresh
            });
            alert('Signed out successfully!');
        } catch (error) {
            console.error('Error signing out:', error);
            alert('Failed to sign out. Please try again.');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 mt-10 mb-10 bg-white shadow-md rounded-lg">
            <h1 className="text-xl mb-10 text-[#253451] font-bold">Hello {name ? name : 'Guest'}</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="flex sm:flex-col items-center space-x-6">
                    <div className="relative w-32 h-32">
                        <img
                            src={profilePicture || 'https://via.placeholder.com/150'}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full"
                        />
                        <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            id="profilePicture"
                            {...register('profile_picture')}
                            onChange={(e) => handleFileChange(e, setProfilePicture, setValue, 'profile_picture')}
                        />
                        <label
                            htmlFor="profilePicture"
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full cursor-pointer">
                            <AiOutlineCloudUpload size={24} />
                        </label>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
                        <p className="text-gray-500 text-xs">Click on the picture to upload a new one</p>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Address</label>
                    <input
                        {...register('address', { maxLength: 200 })}
                        className="mt-1 block w-full rounded-md p-4 !border-gray-300 shadow-sm !bg-gray-100 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    {errors.address && <span className="text-red-500 text-sm">Address must be less than 200 characters.</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        {...register('phone_number', {
                            maxLength: 15,
                            pattern: { value: /^\d{10,15}$/, message: "Invalid phone number" }
                        })}
                        className="mt-1 block w-full rounded-md p-4 !border-gray-300 shadow-sm !bg-gray-100 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    {errors.phone_number && <span className="text-red-500 text-sm">{errors.phone_number.message}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">CV Document</label>
                    <div className="flex items-center space-x-4">
                        <input
                            type="file"
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                            id="cvDocument"
                            {...register('cv_document')}
                            onChange={(e) => handleFileChange(e, setCvDocument, setValue, 'cv_document')}
                        />
                        <label
                            htmlFor="cvDocument"
                            className="bg-[#253451] text-white py-2 px-4 rounded-md cursor-pointer hover:bg-[#354972]">
                            Upload CV
                        </label>
                        {cvDocument && <span className="text-gray-700">{cvDocument}</span>}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Work Experiences</label>
                    <textarea
                        {...register('work_experiences')}
                        className="mt-1 block w-full p-3 rounded-md !bg-gray-100 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        rows="4"
                        value={workExperience}
                        onChange={(e) => setWorkExperience(e.target.value)}
                    />
                </div>

                <div className="flex justify-end">
                    <Button
                        type="submit"
                        className="bg-[#253451] text-white py-2 px-4 rounded-md hover:bg-[#364c76]">
                        Save
                    </Button>
                </div>
            </form>
            <Link to="/jobs" className="text-center">
                See all Jobs
            </Link>
            <div className="flex justify-between sm:flex-col mt-10">
                <Link to="/login" replace onClick={handleSignOut}>
                    <Button type="button" className="px-4 py-2 bg-[#253451] text-white rounded-md hover:bg-[#374e7a]">
                        Sign Out
                    </Button>
                </Link>
                <Link to="/application_status">
                    <Button type="button" className="px-4 sm:mt-4 py-2 bg-[#253451] text-white rounded-md hover:bg-[#374e7a]">
                        View Application Status
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default UserProfile;

