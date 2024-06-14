import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [clientsCount, setClientsCount] = useState(0);
    const [talentsCount, setTalentsCount] = useState(0);
    const [jobOpportunitiesCount, setJobOpportunitiesCount] = useState(0);
    const token = window.sessionStorage.getItem("token");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const clientsResponse = await axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/clients/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const talentsResponse = await axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/talents/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const jobOpportunitiesResponse = await axios.all([
                    axios.get('https://crackingthestylecode.pythonanywhere.com/api/v1/job/2/', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }),
                ]);

                setClientsCount(clientsResponse.data.length);
                setTalentsCount(talentsResponse.data.length);
                setJobOpportunitiesCount(jobOpportunitiesResponse.length);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold mb-6">Welcome Admin</h1>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-6">
                <div className="bg-white p-4 rounded shadow-md">
                    <h2 className="text-2xl font-bold mb-2">Clients</h2>
                    <p className="text-5xl font-semibold">{clientsCount}</p>
                    <div className="h-2 bg-gray-300 rounded mt-2">
                        <div className="h-full bg-blue-500 rounded" style={{ width: `${(clientsCount / 100) * 100}%` }}></div>
                    </div>
                    <Link to="/admin/client-profiles" className="block text-blue-500 mt-2">View Clients</Link>
                </div>
                <div className="bg-white p-4 rounded shadow-md">
                    <h2 className="text-2xl font-bold mb-2">Talents</h2>
                    <p className="text-5xl font-semibold">{talentsCount}</p>
                    <div className="h-2 bg-gray-300 rounded mt-2">
                        <div className="h-full bg-green-500 rounded" style={{ width: `${(talentsCount / 100) * 100}%` }}></div>
                    </div>
                    <Link to="/admin/talent-profiles" className="block text-green-500 mt-2">View Talents</Link>
                </div>
                <div className="bg-white p-4 rounded shadow-md">
                    <h2 className="text-2xl font-bold mb-2">Job Opportunities</h2>
                    <p className="text-5xl font-semibold">{jobOpportunitiesCount}</p>
                    <div className="h-2 bg-gray-300 rounded mt-2">
                        <div className="h-full bg-yellow-500 rounded" style={{ width: `${(jobOpportunitiesCount / 100) * 100}%` }}></div>
                    </div>
                    <Link to="/admin/job-opportunities" className="block text-yellow-500 mt-2">View Job Opportunities</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
