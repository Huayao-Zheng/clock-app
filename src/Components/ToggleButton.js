import React from 'react';
import './ToggleButton.Style.scss';
import arrowUp from '../Assets/desktop/icon-arrow-up.svg';

const ToggleButton = ({ showMore, setShowMore }) => {
    return (
        <button className="toggle-btn" onClick={() => setShowMore(!showMore)}>
            <div className="toggle-btn__text" style={showMore ? { marginLeft: '4px' } : null}>
                {showMore ? 'less' : 'more'}
            </div>

            <img
                style={showMore ? { transform: 'rotate(0deg)' } : { transform: 'rotate(180deg)' }}
                src={arrowUp}
                className="toggle-btn__arrow"
                alt="arrow"
            ></img>
        </button>
    );
};

export default ToggleButton;
