const TalentProfileForm = ({ talentProfile, onSave, onCancel }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isClient, setIsClient] = useState(false);
    const [isTalent, setIsTalent] = useState(false);

    useEffect(() => {
        if (talentProfile) {
            setFirstName(talentProfile.first_name);
            setLastName(talentProfile.last_name);
            setIsClient(talentProfile.is_client);
            setIsTalent(talentProfile.is_talent);
        }
    }, [talentProfile]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...talentProfile, first_name: firstName, last_name: lastName, is_client: isClient, is_talent: isTalent });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl mb-4">{talentProfile ? 'Edit Talent Profile' : 'Add Talent Profile'}</h2>
            <div className="mb-4">
                <label className="block text-gray-700">First Name</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Last Name</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full !p-4 !bg-gray-200 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Is Client</label>
                <input
                    type="checkbox"
                    checked={isClient}
                    onChange={(e) => setIsClient(e.target.checked)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Is Talent</label>
                <input
                    type="checkbox"
                    checked={isTalent}
                    onChange={(e) => setIsTalent(e.target.checked)}
                />
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

export default TalentProfileForm