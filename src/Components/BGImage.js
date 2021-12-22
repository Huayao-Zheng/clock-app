import React from 'react';
import useLocalTime from '../Hooks/useLocalTime';

import './BGImage.Style.scss';

const BGImage = () => {
    const { currentHours } = useLocalTime();

    const isBetween5AmAnd6Pm = currentHours >= 5 && currentHours < 18;

    return <div className={isBetween5AmAnd6Pm ? 'bg-image bg-image--day' : 'bg-image bg-image--night'}></div>;
};

export default BGImage;
