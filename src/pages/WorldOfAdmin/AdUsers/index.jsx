import { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from '../../../components/Admin/UserForm';
import UserList from '../../../components/Admin/UserList';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const token = window.sessionStorage.getItem("token");

    // Fetch users from the API
    useEffect(() => {
        axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/users/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

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
                    {users.length > 0 ? <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} /> : <div>
                        No Users yet 
                    </div>}
                </div>
            )}
        </div>
    );
};

export default Users;


