import { useState, useEffect } from 'react';
import axios from 'axios';

const CommentForm = ({ comment, storyId, onSave, onCancel }) => {
    const [author, setAuthor] = useState('');
    const [commentBody, setCommentBody] = useState('');

    useEffect(() => {
        if (comment) {
            setAuthor(comment.author);
            setCommentBody(comment.comment_body);
        }
    }, [comment]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (comment && comment.id) {
                await axios.put(`https://crackingthestylecode.pythonanywhere.com/api/v1/comment/${comment.id}/`, {
                    comment_body: commentBody,
                    user: author,
                    story: storyId
                });
            } else {
                await axios.post(`https://crackingthestylecode.pythonanywhere.com/api/v1/story/${storyId}/comment/`, {
                    comment_body: commentBody,
                    user: author,
                    story: storyId
                });
            }
            onSave();
        } catch (error) {
            console.error("Error saving the comment:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl mb-4">{comment ? 'Edit Comment' : 'Add Comment'}</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Author</label>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full p-4 bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Content</label>
                <textarea
                    value={commentBody}
                    onChange={(e) => setCommentBody(e.target.value)}
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

export default CommentForm;
