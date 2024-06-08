import { useState, useEffect } from 'react';
import axios from 'axios';
import StoryForm from '../../../components/Admin/StoryForm';
import StoryList from '../../../components/Admin/StoryList';

const Stories = () => {
    const [stories, setStories] = useState([]);
    const [selectedStory, setSelectedStory] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchStories();
    }, []);

    const fetchStories = async () => {
        try {
            const response = await axios.get(`https://crackingthestylecode.pythonanywhere.com/api/v1/story/`);
            setStories(response.data);
        } catch (error) {
            console.error("Error fetching stories", error);
        }
    };

    const handleEdit = (story) => {
        setSelectedStory(story);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://crackingthestylecode.pythonanywhere.com/api/v1/story/${id}/`);
            setStories(stories.filter((story) => story.id !== id));
        } catch (error) {
            console.error("Error deleting story", error);
        }
    };

    const handleSave = async (story) => {
        try {
            if (story.id) {
                await axios.put(`https://crackingthestylecode.pythonanywhere.com/api/v1/story/${story.id}/`, story);
                setStories(stories.map((s) => (s.id === story.id ? story : s)));
            } else {
                const response = await axios.post(`https://crackingthestylecode.pythonanywhere.com/api/v1/story/`, story);
                setStories([...stories, response.data]);
            }
            setIsEditing(false);
            setSelectedStory(null);
        } catch (error) {
            console.error("Error saving story", error);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setSelectedStory(null);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Stories</h1>
            {isEditing ? (
                <StoryForm story={selectedStory} onSave={handleSave} onCancel={handleCancel} />
            ) : (
                <div>
                    <button onClick={() => setIsEditing(true)} className="bg-green-500 text-white px-4 py-2 rounded mb-4">
                        Add Story
                    </button>
                    {stories.length > 0 ? (
                        <StoryList stories={stories} onEdit={handleEdit} onDelete={handleDelete} />
                    ) : (
                        <p>No stories available</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Stories;

