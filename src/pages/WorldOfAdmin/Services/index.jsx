import axios from 'axios';
import { useState, useEffect } from 'react';
import ServiceForm from '../../../components/Admin/ServiceForm';
import ServiceList from '../../../components/Admin/ServiceList';

const Services = () => {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/service/')
            .then(response => {
                setServices(response.data.results);
            })
            .catch(error => {
                console.error('There was an error fetching the services!', error);
            });
    }, []);

    const handleEdit = (service) => {
        setSelectedService(service);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        axios.delete(`https://crackingthestylecode.pythonanywhere.com/api/v1/service/${id}/`)
            .then(() => {
                setServices(services.filter((service) => service.id !== id));
            })
            .catch(error => {
                console.error('There was an error deleting the service!', error);
            });
    };

    const handleSave = (service) => {
        if (service.id) {
            axios.put(`https://crackingthestylecode.pythonanywhere.com/api/v1/service/${service.id}/`, service)
                .then(response => {
                    setServices(services.map((s) => (s.id === service.id ? response.data : s)));
                    setIsEditing(false);
                    setSelectedService(null);
                })
                .catch(error => {
                    console.error('There was an error updating the service!', error);
                });
        } else {
            axios.post('https://crackingthestylecode.pythonanywhere.com/api/v1/service/', service)
                .then(response => {
                    setServices([...services, response.data]);
                    setIsEditing(false);
                    setSelectedService(null);
                })
                .catch(error => {
                    console.error('There was an error adding the service!', error);
                });
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setSelectedService(null);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Services</h1>
            {isEditing ? (
                <ServiceForm service={selectedService} onSave={handleSave} onCancel={handleCancel} />
            ) : (
                <div>
                    <button onClick={() => setIsEditing(true)} className="bg-green-500 text-white px-4 py-2 rounded mb-4">
                        Add Service
                    </button>
                    <ServiceList services={services} onEdit={handleEdit} onDelete={handleDelete} />
                </div>
            )}
        </div>
    );
};

export default Services;

