import { useState, useEffect } from 'react';
import axios from 'axios';

const LikeForm = ({ like, commentId, onSave, onCancel }) => {
    const [user, setUser] = useState('');

    useEffect(() => {
        if (like) {
            setUser(like.user);
        }
    }, [like]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (like && like.id) {
                await axios.put(`https://crackingthestylecode.pythonanywhere.com/api/v1/comment/${commentId}/like/${like.id}/`, {
                    user,
                });
            } else {
                await axios.post(`https://crackingthestylecode.pythonanywhere.com/api/v1/comment/${commentId}/like/`, {
                    user,
                });
            }
            onSave();
        } catch (error) {
            console.error("Error saving the like:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl mb-4">{like ? 'Edit Like' : 'Add Like'}</h2>
            <div className="mb-4">
                <label className="block text-gray-700">User</label>
                <input
                    type="text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className="w-full p-4 bg-gray-200 border rounded"
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

export default LikeForm;
