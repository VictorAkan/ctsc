import { useState, useRef, useEffect, useContext } from 'react';
import axios from 'axios';
import { Img, Button, Input } from '../../components';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

function ClientProfile() {
    // const { user, token } = useContext(UserContext);
    const [profilePic, setProfilePic] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const fileInputRef = useRef(null);

    const username = window.sessionStorage.getItem("name");

    useEffect(() => {
        return () => {
            // Cleanup the object URL when the component unmounts
            if (profilePic) {
                URL.revokeObjectURL(profilePic);
            }
        };
    }, [profilePic]);

    const handleProfilePicChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const newProfilePic = URL.createObjectURL(event.target.files[0]);
            setProfilePic(newProfilePic);
        }
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        setName(firstName)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    // console.log(user);

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleProfilePicClick = () => {
        fileInputRef.current.click();
    };

    const token = window.sessionStorage.getItem("token");
    const refresh = window.sessionStorage.getItem("refreshToken");

    console.log(token);

    const handleSaveChanges = async () => {
        try {
            const response = await axios.patch('https://crackingthestylecode.pythonanywhere.com/api/v1/user-profile/', {
                user: {
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                },
                profile: {
                    address: address,
                    phone_number: phoneNumber
                }
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}` // Assuming access token is stored in localStorage
                    }
                }
            );

            console.log('Profile updated:', response.data);
            alert('Profile updated successfully!');
            setAddress("");
            setPhoneNumber("");
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile. Please try again.');
        }
    };

    const handleSignOut = async () => {
        try {
            await axios.post('https://crackingthestylecode.pythonanywhere.com/api/v1/sign-out/', {
                refresh_token: refresh
            });
            // window.sessionStorage.removeItem(token)
            // window.sessionStorage.removeItem(refresh)
            alert('Signed out successfully!');
        } catch (error) {
            console.error('Error signing out:', error);
            alert('Failed to sign out. Please try again.');
        }
    };

    return (
        <div className="container mx-auto md:p-5 sm:p-3 px-[10rem] py-16">
            <div className="bg-white shadow-lg md:p-5 sm:p-3 px-[10rem] py-16">
                <h1 className="text-2xl font-bold mb-4">Hello {username ? username : 'Guest'}</h1>
                <div className="flex flex-col">
                    <div className="w-full">
                        <label htmlFor="profilePic" className="block mb-2">
                            Profile Picture
                        </label>
                        <div className="flex items-center space-x-2">
                            <Img
                                src={profilePic || 'https://via.placeholder.com/150'}
                                alt="Profile Picture"
                                className="w-20 h-20 rounded-full object-cover cursor-pointer"
                                onClick={handleProfilePicClick}
                            />
                            <input
                                type="file"
                                id="profilePic"
                                className="hidden"
                                ref={fileInputRef}
                                onChange={handleProfilePicChange}
                            />
                            <Button
                                type="button"
                                className="px-4 py-2 bg-[#253451] text-white rounded-md hover:bg-[#3d5585]"
                                onClick={() => setProfilePic('')}
                            >
                                Remove
                            </Button>
                        </div>
                    </div>

                    <div className="w-full">
                        <label htmlFor="address" className="block mb-2">
                            Address
                        </label>
                        <textarea
                            id="address"
                            value={address}
                            onChange={handleAddressChange}
                            className="!w-full border rounded-md p-4 border-gray-300 shadow-sm bg-gray-100 "
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <label htmlFor="first_name" className="block mb-2">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={handleFirstName}
                        className="w-full !rounded-md !p-4 !border-gray-300 shadow-sm !bg-gray-100 focus:!outline-none"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="last_name" className="block mb-2">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={handleLastName}
                        className="w-full !rounded-md !p-4 !border-gray-300 shadow-sm !bg-gray-100 focus:!outline-none"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="email" className="block mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmail}
                        className="w-full !rounded-md !p-4 !border-gray-300 shadow-sm !bg-gray-100 focus:!outline-none"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="phoneNumber" className="block mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        className="w-full !rounded-md !p-4 !border-gray-300 shadow-sm !bg-gray-100 focus:!outline-none"
                    />
                </div>

                <div className="mt-4 flex sm:flex-col justify-between">
                    <Button type="button" className="px-4 py-2 bg-[#253451] text-white rounded-md hover:bg-[#374e7a]" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                    <Link to="/post_job">
                        <Button type="button" className="px-4 sm:mt-4 py-2 bg-[#253451] text-white rounded-md hover:bg-[#374e7a]">
                            Post a Job
                        </Button>
                    </Link>
                </div>
                <div className="flex sm:flex-col justify-between">
                <Link to="/login" replace onClick={handleSignOut}>
                    <Button type="button" className="px-4 mt-10 py-2 bg-[#253451] text-white rounded-md hover:bg-[#374e7a]">
                        Sign Out
                    </Button>
                    </Link>
                <Link to="/applications">
                    <Button type="button" className="px-4 mt-10 py-2 bg-[#253451] text-white rounded-md hover:bg-[#374e7a]">
                        View Job Applications
                    </Button>
                    </Link>
                    </div>
            </div>
        </div>
    );
}

export default ClientProfile;

