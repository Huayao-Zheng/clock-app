import React from 'react';
import './WorldTime.Style.scss';
// import Sun from '../Assets/desktop/icon-sun.svg';
import Moon from '../Assets/desktop/icon-moon.svg';
import useWolrdTime from '../Hooks/useWolrdTime';
import Spinner from './Spinner';
import useLocalTime from '../Hooks/useLocalTime';

const WorldTime = () => {
    const { worldTime } = useWolrdTime();
    const time = useLocalTime();

    if (worldTime === null) return <Spinner />;

    return (
        <section className="world-time">
            <p className="world-time__greeting">
                <img className="world-time__greeting-icon" src={Moon} alt="" />
                GOOD EVENING
            </p>
            <div>
                <span className="world-time__time">{time}</span>
                <span className="world-time__time-zone-abbreviation">{worldTime.abbreviation}</span>
            </div>
            <p className="world-time__location">
                IN {worldTime.region_name}, {worldTime.country_code}
            </p>
        </section>
    );
};

export default WorldTime;
