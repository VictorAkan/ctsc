import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JobApplicationForm = () => {
    const { jobId } = useParams();
    const [user, setUser] = useState(""); // Should be fetched from user context or auth state
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [workExperiences, setWorkExperiences] = useState("");
    const [isTalent, setIsTalent] = useState(false);
    const [cvDocument, setCvDocument] = useState(null);

    const token = window.sessionStorage.getItem("token");

    const handleApply = async (e) => {
        e.preventDefault();

        // Create a form data object to handle file upload
        const formData = new FormData();
        formData.append('job_opportunity', jobId);
        formData.append('talent.user', user);
        formData.append('talent.address', address);
        formData.append('talent.phone_number', phoneNumber);
        formData.append('talent.work_experiences', workExperiences);
        formData.append('talent.is_talent', isTalent);
        if (cvDocument) {
            formData.append('talent.cv_document', cvDocument);
        }

        try {
            const response = await axios.post(
                'https://crackingthestylecode.pythonanywhere.com/api/v1/job_applications/',
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            alert('Application submitted successfully');
            setUser("");
            setAddress("");
            setPhoneNumber("");
            setWorkExperiences("");
            setIsTalent(false);
            setCvDocument(null);
        } catch (error) {
            console.error('There was an error submitting your application!', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#5374b6] via-[#33476f] to-[#253451] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h1 className="text-center text-3xl font-extrabold text-white">Apply for Job ID: {jobId}</h1>
                </div>
                <form className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-lg" onSubmit={handleApply}>
                    <div className="rounded-md shadow-sm space-y-[1rem]">
                        <div>
                            <label htmlFor="user" className="sr-only">Username</label>
                            <input
                                id="user"
                                name="user"
                                type="text"
                                autoComplete="user"
                                required
                                className="appearance-none relative block w-full !p-4 !rounded-md !bg-gray-100 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md sm:text-sm"
                                placeholder="Username"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="address" className="sr-only">Address</label>
                            <input
                                id="address"
                                name="address"
                                type="text"
                                autoComplete="address"
                                className="appearance-none relative block w-full !p-4 !rounded-md !bg-gray-100 border border-gray-300 placeholder-gray-500 text-gray-900 sm:text-sm"
                                placeholder="Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone_number" className="sr-only">Phone Number</label>
                            <input
                                id="phone_number"
                                name="phone_number"
                                type="text"
                                autoComplete="phone_number"
                                className="appearance-none relative block w-full !p-4 !rounded-md !bg-gray-100 border border-gray-300 placeholder-gray-500 text-gray-900 sm:text-sm"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="work_experiences" className="sr-only">Work Experiences</label>
                            <textarea
                                id="work_experiences"
                                name="work_experiences"
                                rows="3"
                                className="appearance-none relative block w-full !p-4 !rounded-md !bg-gray-100 border border-gray-300 placeholder-gray-500 text-gray-900 sm:text-sm"
                                placeholder="Work Experiences"
                                value={workExperiences}
                                onChange={(e) => setWorkExperiences(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="is_talent"
                                name="is_talent"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                checked={isTalent}
                                onChange={(e) => setIsTalent(e.target.checked)}
                            />
                            <label htmlFor="is_talent" className="ml-2 block text-sm text-gray-900">
                                Is Talent
                            </label>
                        </div>
                        <div>
                            <label htmlFor="cv_document">Upload CV</label>
                            <input
                                id="cv_document"
                                name="cv_document"
                                type="file"
                                className="appearance-none relative block w-full !p-4 !rounded-md !bg-gray-100 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md sm:text-sm"
                                onChange={(e) => setCvDocument(e.target.files[0])}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#253451] hover:bg-[#344972] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Apply
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApplicationForm;