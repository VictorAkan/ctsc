import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import axios from "axios";
import { Loader } from '../../Loader';
import { format } from 'date-fns';

const API_URL = 'https://crackingthestylecode.pythonanywhere.com/api/v1/story/';

const FullStory = () => {
    const { storyId } = useParams();
    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStory = async () => {
            try {
                const response = await axios.get(`${API_URL}${storyId}/`);
                setStory(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStory();
    }, [storyId]);

    const formatDate = (date) => {
        return date ? format(new Date(date), 'MMMM dd, yyyy') : 'N/A';
    };

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p className="text-red-500">Error: {error}</p>;
    }

    return (
        <>
            <Header />
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white shadow-md rounded md:mt-24 p-[10rem] md:p-10 sm:p-6">
                    <h1 className="text-2xl font-bold mb-4">{story.title}</h1>
                    <img src={story.image} alt={story.title} className="w-full h-auto mb-4" />
                    <p className="text-gray-900 mb-4">{story.body}</p>
                    <p className="text-gray-500 mb-4">{story.short_description}</p>
                    <p className="text-gray-500 mb-4">Topic: {story.topic}</p>
                    <p className="text-gray-500 mb-4">Tag: {story.tags ? story.tags : 'None'}</p>
                    <p className="text-gray-500 mb-4">Featured: {story.is_currently_featured ? 'Yes' : 'No'}</p>
                    <p className="text-gray-500 mb-4">Approved: {story.is_approved ? 'Yes' : 'No'}</p>
                    {/* <p className="text-gray-500 mb-4">Anonymous: {story.is_anonymous ? 'Yes' : 'No'}</p> */}
                    <p className="text-gray-500 mb-4">Featured Date: {formatDate(story.featured_date)}</p>
                    <p className="text-gray-500 mb-4">Date Published: {formatDate(story.created_at)}</p>
                    <h2 className="text-xl font-semibold mb-2">Comments</h2>
                    {story.comments.length > 0 ? (
                        <ul className="space-y-4">
                            {story.comments.map(comment => (
                                <li key={comment.id} className="border p-4 rounded">
                                    <p className="text-gray-700">{comment.comment_body}</p>
                                    <p className="text-gray-500 text-sm">User: {comment.user}</p>
                                    <p className="text-gray-500 text-sm">Likes: {comment.likes_count}</p>
                                    {comment.replies && comment.replies.length > 0 && (
                                        <ul className="mt-2 space-y-2">
                                            {comment.replies.map(reply => (
                                                <li key={reply.id} className="border p-2 rounded">
                                                    <p className="text-gray-700">{reply.comment_body}</p>
                                                    <p className="text-gray-500 text-sm">User: {reply.user}</p>
                                                    <p className="text-gray-500 text-sm">Likes: {reply.likes_count}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No comments yet.</p>
                    )}
                </div>
            </div>
            <Footer className="mb-0" />
        </>
    );
};

export default FullStory;
