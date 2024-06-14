import { useState, useEffect } from 'react';

const UserForm = ({ user, onSave, onCancel }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [isClient, setIsClient] = useState(false);
    const [isTalent, setIsTalent] = useState(false);

    useEffect(() => {
        if (user) {
            setFirstName(user.first_name);
            setLastName(user.last_name);
            setEmail(user.email);
            setIsClient(user.is_client);
            setIsTalent(user.is_talent);
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...user,
            first_name: firstName,
            last_name: lastName,
            email,
            is_client: isClient,
            is_talent: isTalent
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl mb-4">{user ? 'Edit User' : 'Add User'}</h2>
            <div className="mb-4">
                <label className="block text-gray-700">First Name</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 rounded-md  border"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Last Name</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 rounded-md  border"
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
            <div className="mb-4">
                <label className="block text-gray-700">Is Client</label>
                <input
                    type="checkbox"
                    checked={isClient}
                    onChange={(e) => setIsClient(e.target.checked)}
                    className="w-4 h-4"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Is Talent</label>
                <input
                    type="checkbox"
                    checked={isTalent}
                    onChange={(e) => setIsTalent(e.target.checked)}
                    className="w-4 h-4"
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

export default UserForm;

