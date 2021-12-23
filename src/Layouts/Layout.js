import React, { useState } from 'react';
import BGImage from '../Components/BGImage';
import Quote from '../Components/Quote';
import WorldTime from '../Components/WorldTime';
import ToggleButton from '../Components/ToggleButton';
import MoreInfo from '../Components/MoreInfo';

import './Layout.Style.scss';
import useWolrdTime from '../Hooks/useWolrdTime';
import useLocalTime from '../Hooks/useLocalTime';

const Layout = () => {
    const [showMore, setShowMore] = useState(false);
    const { worldTime } = useWolrdTime();
    const { time, currentHours } = useLocalTime();
    const heightOfMoreInfo = document.querySelector('.more-info');

    return (
        <>
            <BGImage currentHours={currentHours} />
            <div
                className="wrapper"
                style={
                    showMore
                        ? { transform: `translateY(-${heightOfMoreInfo.clientHeight}px)` }
                        : { transform: 'translateY(0)' }
                }
            >
                <Quote />
                <div className="time-button-wrapper">
                    <WorldTime worldTime={worldTime} time={time} currentHours={currentHours} />
                    <ToggleButton showMore={showMore} setShowMore={setShowMore} />
                </div>
            </div>
            <MoreInfo showMore={showMore} worldTime={worldTime} currentHours={currentHours} />
        </>
    );
};

export default Layout;
