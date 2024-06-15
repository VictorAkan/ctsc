import { useState, useEffect } from 'react';
import axios from 'axios';

const PartnerForm = ({ partner, onSave, onCancel }) => {
    const [description, setDescription] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const [preview, setPreview] = useState(null);
    const [profilePicBase64, setProfilePicBase64] = useState('');

    useEffect(() => {
        if (partner) {
            setDescription(partner.description);
            setPreview(partner.partner_pics);
        }
    }, [partner]);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        setProfilePic(file);
        setPreview(URL.createObjectURL(file));

        const reader = new FileReader();
        reader.onloadend = () => {
            setProfilePicBase64(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('description', description);

        let profilePicUrl = partner?.partner_pics;

        if (profilePicBase64) {
            const uploadResponse = await axios.post(
                'https://crackingthestylecode.pythonanywhere.com/api/v1/partner/',
                { description, file: profilePicBase64 }
            );
            profilePicUrl = uploadResponse.data.url;
        }

        const partnerData = {
            ...partner,
            description,
            partner_pics: profilePicUrl,
        };

        onSave(partnerData);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl mb-4">{partner ? 'Edit Partner' : 'Add Partner'}</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-4 bg-gray-200 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Profile Picture</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full p-2 bg-gray-200 border rounded"
                />
                {preview && <img src={preview} alt="Profile Preview" className="mt-2 w-32 h-32 rounded-full object-cover" />}
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

export default PartnerForm;



// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const PartnerForm = ({ partner, onSave, onCancel }) => {
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     const [profilePic, setProfilePic] = useState(null);
//     const [preview, setPreview] = useState(null);

//     useEffect(() => {
//         if (partner) {
//             setDescription(partner.description);
//             setPreview(partner.partner_pics);
//         }
//     }, [partner]);

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setProfilePic(file);
//         setPreview(URL.createObjectURL(file));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('description', description);

//         if (profilePic) {
//             formData.append('file', profilePic);
//         }

//         try {
//             let profilePicUrl = partner?.partner_pics;

//             if (profilePic) {
//                 const uploadResponse = await axios.post(
//                     'https://crackingthestylecode.pythonanywhere.com/api/v1/partner/',
//                     formData
//                 );
//                 profilePicUrl = uploadResponse.data.url;
//             }

//             const partnerData = {
//                 ...partner,
//                 description,
//                 partner_pics: profilePicUrl,
//             };

//             onSave(partnerData);
//         } catch (error) {
//             console.error('Error uploading profile picture', error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
//             <h2 className="text-2xl mb-4">{partner ? 'Edit Partner' : 'Add Partner'}</h2>
//             <div className="mb-4">
//                 <label className="block text-gray-700">Description</label>
//                 <textarea
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     className="w-full p-4 bg-gray-200 border rounded"
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block text-gray-700">Profile Picture</label>
//                 <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleFileChange}
//                     className="w-full p-2 bg-gray-200 border rounded"
//                 />
//                 {preview && <img src={preview} alt="Profile Preview" className="mt-2 w-32 h-32 rounded-full object-cover" />}
//             </div>
//             <div className="flex justify-end">
//                 <button type="button" onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">
//                     Cancel
//                 </button>
//                 <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//                     Save
//                 </button>
//             </div>
//         </form>
//     );
// };

// export default PartnerForm;