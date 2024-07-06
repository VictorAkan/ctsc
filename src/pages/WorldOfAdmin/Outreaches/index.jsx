import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UploadPage() {
    const [uploads, setUploads] = useState([]);
    const navigate = useNavigate();

    const handleUpload = (event) => {
        const files = Array.from(event.target.files);
        const newUploads = files.map(file => ({
            url: URL.createObjectURL(file),
            type: file.type.startsWith('image') ? 'image' : 'video',
            name: file.name
        }));
        setUploads([...uploads, ...newUploads]);
    };

    const handleDelete = (index) => {
        const newUploads = uploads.filter((_, i) => i !== index);
        setUploads(newUploads);
        localStorage.setItem('uploads', JSON.stringify(newUploads));
    };

    const handleEdit = (index, newFile) => {
        const newUploads = uploads.map((upload, i) => {
            if (i === index) {
                return {
                    url: URL.createObjectURL(newFile),
                    type: newFile.type.startsWith('image') ? 'image' : 'video',
                    name: newFile.name
                };
            }
            return upload;
        });
        setUploads(newUploads);
        localStorage.setItem('uploads', JSON.stringify(newUploads));
    };

    const handleSubmit = () => {
        localStorage.setItem('uploads', JSON.stringify(uploads));
        navigate('/gallery');
    };

    const handleEditUpload = (index) => {
        const newFile = window.prompt("Please provide the new file:", "");
        if (newFile) {
            const file = new File([newFile], "filename");
            handleEdit(index, file);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <header className="bg-[#253451] text-white text-center p-4 rounded">
                <h1 className="text-3xl font-bold">Upload Outreach Media</h1>
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
                    <button
                        onClick={handleSubmit}
                        className="mt-4 bg-[#253451] text-white py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                </section>
                <section>
                    {uploads.length > 0 && (
                        <div className="mt-6">
                            <h2 className="text-xl font-medium mb-2">Uploaded Media:</h2>
                            <ul>
                                {uploads.map((upload, index) => (
                                    <li key={index} className="mb-2 flex items-center justify-between">
                                        {upload.type === 'image' ? (
                                            <img src={upload.url} alt={upload.name} className="w-32 h-32 object-cover mr-4" />
                                        ) : (
                                            <video src={upload.url} controls className="w-32 h-32 object-cover mr-4" />
                                        )}
                                        <div className="flex">
                                            <button
                                                onClick={() => handleEditUpload(index)}
                                                className="mr-2 bg-blue-500 text-white py-1 px-3 rounded"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(index)}
                                                className="bg-red-500 text-white py-1 px-3 rounded"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

export default UploadPage;
