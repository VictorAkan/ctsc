import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import useScrollToTop from "../../hooks/useScrollToTop";
import axios from "axios";
import { Loader } from '../../Loader';
import { Button } from '../../components';

const API_URL = 'https://crackingthestylecode.pythonanywhere.com/api/v1/story/';

const getStories = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching stories:", error);
        throw error;
    }
};

const postComment = async (storyId, comment) => {
    try {
        const response = await axios.post(`${API_URL}${storyId}/comment/`, { comment });
        return response.data;
    } catch (error) {
        console.error("Error posting comment:", error);
        throw error;
    }
};

const NewsSection = () => {
    useScrollToTop();
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [comments, setComments] = useState({});

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const data = await getStories();
                setStories(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStories();
    }, []);

    const handleCommentChange = (storyId, comment) => {
        setComments({
            ...comments,
            [storyId]: comment,
        });
    };

    const handleCommentSubmit = async (storyId) => {
        try {
            await postComment(storyId, comments[storyId]);
            const data = await getStories();
            setStories(data);
            setComments({
                ...comments,
                [storyId]: '',
            });
        } catch (error) {
            setError(error.message);
        }
    };

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p className="text-center text-red-500 mt-10">Error: {error}</p>;
    }

    return (
        <>
            <Header />
            <div className="bg-gray-200">
                <div className="container mx-auto px-24 sm:px-6 grid md:grid-cols-1 grid-cols-2 md:gap-4 gap-7 py-10">
                    {stories?.map((story) => (
                        <div key={story.id} className="flex mt-24 justify-center mb-10">
                            <div className="w-full bg-white p-6 rounded-lg shadow-md">
                                <Link to={`/story/${story.story_id}`}>
                                    <img
                                        src={story.image}
                                        alt={story.topic}
                                        className="w-full h-auto rounded-lg"
                                    />
                                </Link>
                                <div className="mt-4 flex items-center text-gray-600">
                                    {new Date(story.created_at).toLocaleDateString()}
                                    <span className="mx-2">•</span>
                                    <div className="font-semibold">
                                        {story.author.first_name} {story.author.last_name}
                                    </div>
                                </div>
                                <Link to={`/story/${story.story_id}`} className="block mt-4 text-xl font-bold text-[#253451] hover:text-blue-600">
                                    {story.topic}
                                </Link>
                                <p className="mt-2 text-gray-700">
                                    {story.short_description}
                                </p>
                                <Link to={`/story/${story.story_id}`} className="mt-4 inline-block text-blue-500 hover:underline">
                                    Read More
                                </Link>
                                <div className="mt-6 flex sm:flex-col items-center">
                                    <input
                                        type="text"
                                        value={comments[story.story_id] || ''}
                                        onChange={(e) => handleCommentChange(story.story_id, e.target.value)}
                                        placeholder="Type your comment here..."
                                        className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:border-blue-500"
                                    />
                                    <Button onClick={() => handleCommentSubmit(story.story_id)} className="bg-[#253451] text-white px-4 py-2 sm:rounded-l-lg rounded-r-lg hover:bg-blue-600">
                                        Post Comment
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default NewsSection;


