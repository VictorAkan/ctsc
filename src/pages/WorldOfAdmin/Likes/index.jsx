import { useState, useEffect } from 'react';
import axios from 'axios';
import LikeList from '../../../components/Admin/LikeList';
import LikeForm from '../../../components/Admin/LikeForm';

const Likes = ({ commentId }) => {
    const [likes, setLikes] = useState([]);
    const [selectedLike, setSelectedLike] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchLikes();
    }, []);

    const fetchLikes = async () => {
        try {
            const response = await axios.get(`https://crackingthestylecode.pythonanywhere.com/api/v1/comment/${commentId}/likes`);
            setLikes(response.data);
        } catch (error) {
            console.error("Error fetching likes", error);
        }
    };

    const handleEdit = (like) => {
        setSelectedLike(like);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://crackingthestylecode.pythonanywhere.com/api/v1/like/${id}/`);
            setLikes(likes.filter((like) => like.id !== id));
        } catch (error) {
            console.error("Error deleting like", error);
        }
    };

    const handleSave = async (like) => {
        try {
            if (like.id) {
                await axios.put(`https://crackingthestylecode.pythonanywhere.com/api/v1/like/${like.id}/`, like);
                setLikes(likes.map((l) => (l.id === like.id ? like : l)));
            } else {
                const response = await axios.post(`https://crackingthestylecode.pythonanywhere.com/api/v1/comment/${commentId}/like/`, like);
                setLikes([...likes, response.data]);
            }
            setIsEditing(false);
            setSelectedLike(null);
        } catch (error) {
            console.error("Error saving like", error);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setSelectedLike(null);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Likes</h1>
            {isEditing ? (
                <LikeForm like={selectedLike} onSave={handleSave} onCancel={handleCancel} />
            ) : (
                <div>
                    <button onClick={() => setIsEditing(true)} className="bg-green-500 text-white px-4 py-2 rounded mb-4">
                        Add Like
                    </button>
                    {likes.length > 0 ? (
                        <LikeList likes={likes} onEdit={handleEdit} onDelete={handleDelete} />
                    ) : (
                        <p>No likes available</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Likes;

