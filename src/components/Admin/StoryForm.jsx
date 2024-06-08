import { useState, useEffect } from 'react';
import axios from 'axios';

const StoryForm = ({ story, onSave, onCancel }) => {
    const [title, setTitle] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [body, setBody] = useState('');
    const [topic, setTopic] = useState('');
    const [tags, setTags] = useState([]);
    const [isCurrentlyFeatured, setIsCurrentlyFeatured] = useState(false);
    const [isApproved, setIsApproved] = useState(false);
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [featuredDate, setFeaturedDate] = useState('');

    useEffect(() => {
        if (story) {
            setTitle(story.topic);
            setShortDescription(story.short_description);
            setBody(story.body);
            setTopic(story.topic);
            setTags(story.tags || []);
            setIsCurrentlyFeatured(story.is_currently_featured);
            setIsApproved(story.is_approved);
            setIsAnonymous(story.is_anonymous);
            setFeaturedDate(story.featured_date);
        }
    }, [story]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                title,
                short_description: shortDescription,
                body,
                topic,
                tags,
                is_currently_featured: isCurrentlyFeatured,
                is_approved: isApproved,
                is_anonymous: isAnonymous,
                featured_date: featuredDate
            };
            if (story && story.id) {
                await axios.put(`https://crackingthestylecode.pythonanywhere.com/api/v1/story/${story.id}/`, data);
            } else {
                await axios.post(`https://crackingthestylecode.pythonanywhere.com/api/v1/story/`, data);
            }
            onSave();
        } catch (error) {
            console.error("Error saving the story:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl mb-4">{story ? 'Edit Story' : 'Add Story'}</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Short Description</label>
                <textarea
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Body</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Topic</label>
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Tags</label>
                <input
                    type="text"
                    value={tags.join(', ')}
                    onChange={(e) => setTags(e.target.value.split(',').map(tag => tag.trim()))}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Is Currently Featured</label>
                <input
                    type="checkbox"
                    checked={isCurrentlyFeatured}
                    onChange={(e) => setIsCurrentlyFeatured(e.target.checked)}
                    className="ml-2"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Is Approved</label>
                <input
                    type="checkbox"
                    checked={isApproved}
                    onChange={(e) => setIsApproved(e.target.checked)}
                    className="ml-2"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Is Anonymous</label>
                <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="ml-2"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Featured Date</label>
                <input
                    type="date"
                    value={featuredDate}
                    onChange={(e) => setFeaturedDate(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
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

export default StoryForm;

