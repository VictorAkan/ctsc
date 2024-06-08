import { useState } from 'react';
import CustomUserForm from '../../../components/Admin/CustomUserForm';
import CustomUserList from '../../../components/Admin/CustomUserList';

const CustomUsers = () => {
    const [customUsers, setCustomUsers] = useState([
        { id: 1, username: 'user1', email: 'user1@example.com' },
        { id: 2, username: 'user2', email: 'user2@example.com' },
    ]);
    const [selectedCustomUser, setSelectedCustomUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (customUser) => {
        setSelectedCustomUser(customUser);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        setCustomUsers(customUsers.filter((customUser) => customUser.id !== id));
    };

    const handleSave = (customUser) => {
        if (customUser.id) {
            setCustomUsers(customUsers.map((c) => (c.id === customUser.id ? customUser : c)));
        } else {
            customUser.id = customUsers.length + 1;
            setCustomUsers([...customUsers, customUser]);
        }
        setIsEditing(false);
        setSelectedCustomUser(null);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setSelectedCustomUser(null);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Custom Users</h1>
            {isEditing ? (
                <CustomUserForm customUser={selectedCustomUser} onSave={handleSave} onCancel={handleCancel} />
            ) : (
                <div>
                    <button onClick={() => setIsEditing(true)} className="bg-green-500 text-white px-4 py-2 rounded mb-4">
                        Add Custom User
                    </button>
                    <CustomUserList customUsers={customUsers} onEdit={handleEdit} onDelete={handleDelete} />
                </div>
            )}
        </div>
    );
};

export default CustomUsers;
