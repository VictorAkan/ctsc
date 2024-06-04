// FullStory.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import axios from "axios";
import { Loader } from '../../Loader';

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

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <Header />
            <div className="container mx-auto px-4">
                {/* Render the full story here */}
                <h1>{story.title}</h1>
                <p>{story.content}</p>
            </div>
            <Footer className="mt-24" />
        </div>
    );
};

export default FullStory;
