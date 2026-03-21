import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageLoader from './PageLoader';

const RouteTransition = ({ children }) => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => setIsLoading(false), 400);
        return () => clearTimeout(timeout);
    }, [location.pathname]);

    return (
        <>
            {isLoading && <PageLoader />}
            <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease' }}>
                {children}
            </div>
        </>
    );
};

export default RouteTransition;
