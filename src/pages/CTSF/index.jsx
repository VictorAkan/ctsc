import React, { useState } from 'react';
// import logo from './logo.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function App() {
    const [uploads, setUploads] = useState([]);

    const handleUpload = (event) => {
        const files = Array.from(event.target.files);
        const newUploads = files.map(file => ({
            url: URL.createObjectURL(file),
            type: file.type.startsWith('image') ? 'image' : 'video',
            name: file.name
        }));
        setUploads([...uploads, ...newUploads]);
    };

    return (
        <>
        <Header />
        <div className="min-h-screen bg-gray-100 p-6">
            <header className="bg-[#3a517f] text-white mt-24 sm:mt-32 text-center p-4 rounded flex items-center justify-center">
                <img src="ctsflogo.png" alt="Logo" className="h-10 mr-2" />
                <h1 className="text-3xl font-bold">Outreach Uploads</h1>
            </header>
            <main className="mt-6">
                <section className="mb-6">
                    <label className="block mb-2 text-xl font-medium">Upload your outreach videos and pictures:</label>
                    <input
                        type="file"
                        accept="image/*,video/*"
                        multiple
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 focus:outline-none"
                        onChange={handleUpload}
                    />
                </section>
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {uploads.map((upload, index) => (
                        <div key={index} className="relative group">
                            {upload.type === 'image' ? (
                                <img src={upload.url} alt={upload.name} className="object-cover w-full h-48 rounded-lg" />
                            ) : (
                                <video controls className="w-full h-48 rounded-lg">
                                    <source src={upload.url} type={upload.type} />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                    ))}
                </section>
            </main>
        </div>
        </>
    );
}

export default App;
