import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import for location access

const useScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]); // Re-run on route change
};

export default useScrollToTop;