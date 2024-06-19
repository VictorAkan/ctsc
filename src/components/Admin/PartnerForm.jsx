import { useState, useEffect } from 'react';

const PartnerForm = ({ partner, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    id: partner ? partner.id : null,
    description: partner ? partner.description : '',
    partner_pics: partner ? partner.partner_pics : '',
  });

  useEffect(() => {
    if (partner) {
      setFormData({
        id: partner.id,
        description: partner.description,
        partner_pics: partner.partner_pics,
      });
    } else {
      setFormData({
        id: null,
        description: '',
        partner_pics: '',
      });
    }
  }, [partner]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, partner_pics: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });

    // Debug: Log FormData contents
    for (let [key, value] of formDataToSend.entries()) {
      console.log(`${key}:`, value);
    }

    onSave(formDataToSend);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md" encType="multipart/form-data">
      <h2 className="text-2xl mb-4">{partner ? 'Edit Partner' : 'Add Partner'}</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-4 bg-gray-200 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Profile Picture</label>
        <input
          type="file"
          name="partner_pics"
          onChange={handleFileChange}
          className="w-full p-2 bg-gray-200 border rounded"
        />
      </div>
      {formData.partner_pics && typeof formData.partner_pics === 'object' && (
        <div className="mb-4">
          <img src={URL.createObjectURL(formData.partner_pics)} alt="Profile Preview" className="w-32 h-32 object-cover" />
        </div>
      )}
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

// const PartnerForm = ({ partner, onSave, onCancel }) => {
//     const [formData, setFormData] = useState({
//         id: partner ? partner.id : null,
//         description: partner ? partner.description : '',
//         partner_pics: partner ? partner.partner_pics : '',
//     });

//     useEffect(() => {
//         if (partner) {
//             setFormData({
//                 id: partner.id,
//                 description: partner.description,
//                 partner_pics: partner.partner_pics,
//             });
//         } else {
//             setFormData({
//                 id: null,
//                 description: '',
//                 partner_pics: '',
//             });
//         }
//     }, [partner]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setFormData({ ...formData, partner_pics: file });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const formDataToSend = new FormData();
//         Object.keys(formData).forEach(key => {
//             formDataToSend.append(key, formData[key]);
//         });

//         onSave(formDataToSend);
//     };

//     return (
//         <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md" encType="multipart/form-data">
//             <h2 className="text-2xl mb-4">{partner ? 'Edit Partner' : 'Add Partner'}</h2>
//             <div className="mb-4">
//                 <label className="block text-gray-700">Description</label>
//                 <textarea
//                     name="description"
//                     value={formData.description}
//                     onChange={handleChange}
//                     className="w-full p-4 bg-gray-200 border rounded"
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block text-gray-700">Profile Picture</label>
//                 <input
//                     type="file"
//                     name="partner_pics"
//                     onChange={handleFileChange}
//                     className="w-full p-2 bg-gray-200 border rounded"
//                 />
//             </div>
//             {formData.partner_pics && typeof formData.partner_pics === 'object' && (
//                 <div className="mb-4">
//                     <img src={URL.createObjectURL(formData.partner_pics)} alt="Profile Preview" className="w-32 h-32 object-cover" />
//                 </div>
//             )}
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