import React from 'react';
import './WorldTime.Style.scss';
import Sun from '../Assets/desktop/icon-sun.svg';
import Moon from '../Assets/desktop/icon-moon.svg';
import Spinner from './Spinner';
import useWolrdTime from '../Hooks/useWolrdTime';
import useLocalTime from '../Hooks/useLocalTime';

/**
 *  - [x]  - The sun icon and the daytime background image between 5am and 6pm
    - [x]  - The moon icon and the nighttime background image between 6pm and 5am
    - [x]  - "Good morning" between 5am and 12pm
    - [x]  - "Good afternoon" between 12pm and 6pm
    - [x]  - "Good evening" between 6pm and 5am
 */

const WorldTime = () => {
    const { worldTime } = useWolrdTime();
    const { time, currentHours } = useLocalTime();
    const isDaytime = currentHours >= 5 && currentHours < 18;
    const isMorning = currentHours >= 5 && currentHours < 12;
    const isAfternoon = currentHours >= 12 && currentHours < 18;

    if (worldTime === null) return <Spinner />;

    const greeting = () => {
        if (isMorning) {
            return 'Good morning';
        } else if (isAfternoon) {
            return 'Good afternoon';
        } else {
            return 'Good evening';
        }
    };

    return (
        <section className="world-time">
            <p className="world-time__greeting">
                <img className="world-time__greeting-icon" src={isDaytime ? Sun : Moon} alt="sun/moon icon" />
                {greeting()}
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
