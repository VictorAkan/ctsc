import { useState, useEffect } from 'react';
import axios from 'axios';
import PartnerForm from '../../../components/Admin/PartnerForm';
import PartnerList from '../../../components/Admin/PartnerList';

const Partners = () => {
    const [partners, setPartners] = useState([]);
    const [selectedPartner, setSelectedPartner] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const token = window.sessionStorage.getItem("token");

    useEffect(() => {
        // Fetch partners when the component mounts
        axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/partner/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setPartners(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching partners:', error);
            });
    }, [token]);

    const handleEdit = (partner) => {
        setSelectedPartner(partner);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        axios.delete(`https://crackingthestylecode.pythonanywhere.com/api/v1/partner/${id}/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => {
                setPartners(partners.filter((partner) => partner.id !== id));
            })
            .catch(error => {
                console.error('Error deleting partner:', error);
            });
    };

    const handleSave = (partnerData) => {
        if (selectedPartner?.id) {
            axios.put(`https://crackingthestylecode.pythonanywhere.com/api/v1/partner/${selectedPartner.id}/`, partnerData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(() => {
                    setPartners(partners.map((p) => (p.id === selectedPartner.id ? partnerData : p)));
                })
                .catch(error => {
                    console.error('Error updating partner:', error);
                });
        } else {
            axios.post('https://crackingthestylecode.pythonanywhere.com/api/v1/partner/', partnerData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    setPartners([...partners, response.data]);
                })
                .catch(error => {
                    console.error('Error adding partner:', error);
                });
        }
        setIsEditing(false)
        // setSelectedPartner(null)
    };

    const handleCancel = () => {
        setIsEditing(false);
        // setSelectedPartner(null);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Partners</h1>
            {isEditing ? (
                <PartnerForm partner={selectedPartner} onSave={handleSave} onCancel={handleCancel} />
            ) : (
                <div>
                    <button onClick={() => setIsEditing(true)} className="bg-green-500 text-white px-4 py-2 rounded mb-4">
                        Add Partner
                    </button>
                    {partners.length === 0 ? (
                        <p>No partners yet.</p>
                    ) : (
                        <PartnerList partners={partners} onEdit={handleEdit} onDelete={handleDelete} />
                    )}
                </div>
            )}
        </div>
    );
};

export default Partners;