import { useState, useEffect } from 'react';
import axios from 'axios';
import PartnerForm from '../../../components/Admin/PartnerForm';
import PartnerList from '../../../components/Admin/PartnerList';

const Partners = () => {
    const [partners, setPartners] = useState([]);
    const [selectedPartner, setSelectedPartner] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Fetch partners from the API
        axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/partner/')
            .then(response => setPartners(response.data))
            .catch(error => console.error('Error fetching partners:', error));
    }, []);

    const handleEdit = (partner) => {
        setSelectedPartner(partner);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        axios.delete(`https://crackingthestylecode.pythonanywhere.com/api/v1/partner/${id}/`)
            .then(() => {
                setPartners(partners.filter((partner) => partner.id !== id));
            })
            .catch(error => console.error('Error deleting partner:', error));
    };

    const handleSave = (partner) => {
        if (partner.id) {
            // Update existing partner
            axios.put(`https://crackingthestylecode.pythonanywhere.com/api/v1/partner/${partner.id}/`, partner)
                .then(response => {
                    setPartners(partners.map((p) => (p.id === partner.id ? response.data : p)));
                    setIsEditing(false);
                    setSelectedPartner(null);
                })
                .catch(error => console.error('Error updating partner:', error));
        } else {
            // Create new partner
            axios.post('https://crackingthestylecode.pythonanywhere.com/api/v1/partner/', partner)
                .then(response => {
                    setPartners([...partners, response.data]);
                    setIsEditing(false);
                    setSelectedPartner(null);
                })
                .catch(error => console.error('Error creating partner:', error));
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setSelectedPartner(null);
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
                        <p>No Partners yet</p>
                    ) : (
                        <PartnerList partners={partners} onEdit={handleEdit} onDelete={handleDelete} />
                    )}
                </div>
            )}
        </div>
    );
};

export default Partners;

