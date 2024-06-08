import { useState, useEffect } from 'react';

const CustomUserForm = ({ customUser, onSave, onCancel }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (customUser) {
            setUsername(customUser.username);
            setEmail(customUser.email);
        }
    }, [customUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...customUser, username, email });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl mb-4">{customUser ? 'Edit Custom User' : 'Add Custom User'}</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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

export default CustomUserForm;
