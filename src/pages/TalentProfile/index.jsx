import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineCloudUpload, AiOutlineEdit } from 'react-icons/ai';
import { Button } from '../../components';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';

const UserProfile = () => {
    const { user } = useContext(UserContext);
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [cvDocument, setCvDocument] = useState(null);
    const [workExperience, setWorkExperience] = useState("");

    const onSubmit = data => {
        console.log(data);
        reset();    
        setProfilePicture(null);
        setCvDocument(null);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleWorkExperience = (e) => {
        setWorkExperience(e.target.value)
    }

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        setProfilePicture(URL.createObjectURL(file));
        setValue('profile_picture', file);
    };

    const handleCvDocumentChange = (e) => {
        const file = e.target.files[0];
        setCvDocument(file.name);
        setValue('cv_document', file);
    };

    const token = window.sessionStorage.getItem("token");

    const handleSaveChanges = async () => {
        try {
            const response = await axios.patch('https://crackingthestylecode.pythonanywhere.com/api/v1/user-profile/', {
                address: address,
                phone_number: phoneNumber,
                profile_picture: profilePicture,
                cv_document: cvDocument,
                work_experiences: workExperience,
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}` // Assuming access token is stored in localStorage
                    }
                }
            );

            console.log('Profile updated:', response.data);
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error);
            // alert('Failed to update profile. Please try again.');
        }
    };

    const handleSignOut = async () => {
        try {
            await axios.post('https://crackingthestylecode.pythonanywhere.com/api/v1/sign-out/'); // Route to home page after successful sign out
            alert('Signed out successfully!');
        } catch (error) {
            console.error('Error signing out:', error);
            // alert('Failed to sign out. Please try again.');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 mt-10 mb-10 bg-white shadow-md rounded-lg">
            <h1 className="text-xl mb-10 text-[#253451] font-bold">Hello {user ? user.name : 'Guest'}</h1>
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
                            onChange={handleProfilePictureChange}
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
                        className="mt-1 block w-full rounded-md p-4 !border-gray-300 shadow-sm !bg-[#d9d9d9 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        maxLength="200"
                        value={address}
                        onChange={handleAddressChange}
                    />
                    {errors.address && <span className="text-red-500 text-sm">Address must be less than 200 characters.</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        {...register('phone_number', {
                            maxLength: 15,
                            pattern: {
                                value: /^\d{10,15}$/,
                                message: "Invalid phone number"
                            }
                        })}
                        className="mt-1 block w-full rounded-md p-4 !border-gray-300 shadow-sm !bg-[#d9d9d9 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        maxLength="15"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
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
                            onChange={handleCvDocumentChange}
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
                        className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        rows="4"
                        onChange={handleWorkExperience}
                    ></textarea>
                </div>

                <div className="flex justify-end">
                    <Button
                        type="submit"
                        onClick={handleSaveChanges}
                        className="bg-[#253451] text-white py-2 px-4 rounded-md hover:bg-[#364c76]">
                        Save
                    </Button>
                </div>
            </form>
            <Link to="/jobs" className='text-center'>
                See all Jobs
            </Link>
            <div className="flex justify-between sm:flex-col">
            <Link to="/" replace onClick={handleSignOut}>
                    <Button type="button" className="px-4 mt-10 py-2 bg-[#253451] text-white rounded-md hover:bg-[#374e7a]" onClick={handleSignOut}>
                        Sign Out
                    </Button>
            </Link>
            <Link to="/application_status">
                    <Button type="button" className="px-4 mt-10 py-2 bg-[#253451] text-white rounded-md hover:bg-[#374e7a]">
                        View Application Status
                    </Button>
            </Link>
            </div>
        </div>
    );
};

export default UserProfile;
