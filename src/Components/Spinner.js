import React from 'react';
import './Spinner.Style.scss';

const Spinner = () => {
    return (
        <>
            <div className="spinner"></div>
            <div className="turn-off-ad-blocker">If It's still loading, try turn off the Adblocker.</div>
        </>
    );
};

export default Spinner;
