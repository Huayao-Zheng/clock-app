import React from 'react';

import './BGImage.Style.scss';

const BGImage = ({ currentHours }) => {
    const isBetween5AmAnd6Pm = currentHours >= 5 && currentHours < 18;

    return <div className={isBetween5AmAnd6Pm ? 'bg-image bg-image--day' : 'bg-image bg-image--night'}></div>;
};

export default BGImage;
