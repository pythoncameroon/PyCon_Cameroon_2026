import React from 'react';

const PageLoader = () => {
    return (
        <div className="page-loader">
            <div className="page-loader-inner">
                <div className="loader-tribal-ring">
                    <div className="loader-tribal-ring-inner"></div>
                </div>
                <div className="loader-text">Loading...</div>
            </div>
        </div>
    );
};

export default PageLoader;
