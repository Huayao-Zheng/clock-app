import React from 'react';
import './MoreInfo.Style.scss';
import Spinner from './Spinner';

const MoreInfo = ({ worldTime, currentHours, showMore }) => {
    const isDayTime = currentHours >= 5 && currentHours < 18;

    if (worldTime === null) return <Spinner />;

    return (
        <div
            className={`more-info ${isDayTime ? 'day' : 'night'}`}
            style={showMore ? { transform: 'translateY(0)' } : { transform: 'translateY(100%)' }}
        >
            <div>
                <label>CURRENT TIMEZONE</label>
                <div className="more-info__detail">{worldTime.time_zone}</div>
            </div>
            <div>
                <label>Day of the year</label>
                <div className="more-info__detail ">{worldTime.day_of_year}</div>
            </div>
            <div>
                <label>Day of the week</label>
                <div className="more-info__detail ">{worldTime.day_of_week}</div>
            </div>
            <div>
                <label>Week number</label>
                <div className="more-info__detail ">{worldTime.week_number}</div>
            </div>

            <div className={`vertical-line ${isDayTime ? 'night' : 'day'}`}></div>
        </div>
    );
};

export default MoreInfo;
