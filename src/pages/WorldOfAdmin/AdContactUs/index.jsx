import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactUsForm from '../../../components/Admin/ContactUsForm';
import ContactUsList from '../../../components/Admin/ContactUsList';

const ContactUs = () => {
    const [contactUsMessages, setContactUsMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const token = window.sessionStorage.getItem("token")

    useEffect(() => {
        // Fetch contact us messages from the API
        axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/contact-us/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setContactUsMessages(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const handleEdit = (message) => {
        setSelectedMessage(message);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        setContactUsMessages(contactUsMessages.filter((message) => message.id !== id));
        // You might want to also send a DELETE request to the API to remove the message permanently
    };

    const handleSave = (message) => {
        if (message.id) {
            setContactUsMessages(contactUsMessages.map((m) => (m.id === message.id ? message : m)));
            // You might want to also send a PUT request to the API to update the message
        } else {
            message.id = contactUsMessages.length + 1;
            setContactUsMessages([...contactUsMessages, message]);
            // You might want to also send a POST request to the API to add the new message
        }
        setIsEditing(false);
        setSelectedMessage(null);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setSelectedMessage(null);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Contact Us Messages</h1>
            {contactUsMessages.length === 0 ? (
                <div>No contact us messages yet.</div>
            ) : (
                isEditing ? (
                    <ContactUsForm message={selectedMessage} onSave={handleSave} onCancel={handleCancel} />
                ) : (
                    <div>
                        <button onClick={() => setIsEditing(true)} className="bg-green-500 text-white px-4 py-2 rounded mb-4">
                            Add Message
                        </button>
                        <ContactUsList messages={contactUsMessages} onEdit={handleEdit} onDelete={handleDelete} />
                    </div>
                )
            )}
        </div>
    );
};

export default ContactUs;


