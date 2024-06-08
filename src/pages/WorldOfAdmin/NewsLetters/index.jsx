import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsLetterForm from '../../../components/Admin/NewsLetterForm';
import NewsLetterList from '../../../components/Admin/NewsLetterList';

const Newsletters = () => {
    const [newsletters, setNewsletters] = useState([]);
    const [selectedNewsletter, setSelectedNewsletter] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/newsletter/')
            .then(response => {
                setNewsletters(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the newsletters!', error);
            });
    }, []);

    const handleEdit = (newsletter) => {
        setSelectedNewsletter(newsletter);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        axios.delete(`https://crackingthestylecode.pythonanywhere.com/api/v1/newsletter/${id}/`)
            .then(response => {
                setNewsletters(newsletters.filter(newsletter => newsletter.id !== id));
            })
            .catch(error => {
                console.error('There was an error deleting the newsletter!', error);
            });
    };

    const handleSave = (newsletter) => {
        if (newsletter.id) {
            axios.put(`https://crackingthestylecode.pythonanywhere.com/api/v1/newsletter/${newsletter.id}/`, newsletter)
                .then(response => {
                    setNewsletters(newsletters.map(n => (n.id === newsletter.id ? response.data : n)));
                    setIsEditing(false);
                    setSelectedNewsletter(null);
                })
                .catch(error => {
                    console.error('There was an error updating the newsletter!', error);
                });
        } else {
            axios.post('https://crackingthestylecode.pythonanywhere.com/api/v1/newsletter/', newsletter)
                .then(response => {
                    setNewsletters([...newsletters, response.data]);
                    setIsEditing(false);
                    setSelectedNewsletter(null);
                })
                .catch(error => {
                    console.error('There was an error creating the newsletter!', error);
                });
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setSelectedNewsletter(null);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Newsletters</h1>
            {isEditing ? (
                <NewsLetterForm newsletter={selectedNewsletter} onSave={handleSave} onCancel={handleCancel} />
            ) : (
                <div>
                    <button onClick={() => setIsEditing(true)} className="bg-green-500 text-white px-4 py-2 rounded mb-4">
                        Add Newsletter
                    </button>
                    {newsletters.length > 0 ? (
                        <NewsLetterList newsletters={newsletters} onEdit={handleEdit} onDelete={handleDelete} />
                    ) : (
                        <p>No newsletters yet.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Newsletters;

