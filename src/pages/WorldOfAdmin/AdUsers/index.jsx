import { useState } from 'react';
import UserForm from '../../../components/Admin/UserForm';
import UserList from '../../../components/Admin/UserList';

const Users = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (user) => {
        setSelectedUser(user);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const handleSave = (user) => {
        if (user.id) {
            setUsers(users.map((u) => (u.id === user.id ? user : u)));
        } else {
            user.id = users.length + 1;
            setUsers([...users, user]);
        }
        setIsEditing(false);
        setSelectedUser(null);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setSelectedUser(null);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            {isEditing ? (
                <UserForm user={selectedUser} onSave={handleSave} onCancel={handleCancel} />
            ) : (
                <div>
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
                    >
                        Add User
                    </button>
                    <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
                </div>
            )}
        </div>
    );
};

export default Users;

