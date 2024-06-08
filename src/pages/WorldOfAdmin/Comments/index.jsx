import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentForm from '../../../components/Admin/CommentForm';
import CommentList from '../../../components/Admin/CommentList';

const Comments = ({ storyId }) => {
    const [comments, setComments] = useState([]);
    const [selectedComment, setSelectedComment] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const response = await axios.get(`https://crackingthestylecode.pythonanywhere.com/api/v1/story/${storyId}/comments`);
            setComments(response.data);
        } catch (error) {
            console.error("Error fetching comments", error);
        }
    };

    const handleEdit = (comment) => {
        setSelectedComment(comment);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://crackingthestylecode.pythonanywhere.com/api/v1/comment/${id}/`);
            setComments(comments.filter((comment) => comment.id !== id));
        } catch (error) {
            console.error("Error deleting comment", error);
        }
    };

    const handleSave = async (comment) => {
        try {
            if (comment.id) {
                await axios.put(`https://crackingthestylecode.pythonanywhere.com/api/v1/comment/${comment.id}/`, comment);
                setComments(comments.map((c) => (c.id === comment.id ? comment : c)));
            } else {
                const response = await axios.post(`https://crackingthestylecode.pythonanywhere.com/api/v1/story/${storyId}/comment/`, comment);
                setComments([...comments, response.data]);
            }
            setIsEditing(false);
            setSelectedComment(null);
        } catch (error) {
            console.error("Error saving comment", error);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setSelectedComment(null);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Comments</h1>
            {isEditing ? (
                <CommentForm comment={selectedComment} onSave={handleSave} onCancel={handleCancel} />
            ) : (
                <div>
                    <button onClick={() => setIsEditing(true)} className="bg-green-500 text-white px-4 py-2 rounded mb-4">
                        Add Comment
                    </button>
                    {comments.length > 0 ? (
                        <CommentList comments={comments} onEdit={handleEdit} onDelete={handleDelete} />
                    ) : (
                        <p>No comments available</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Comments;
