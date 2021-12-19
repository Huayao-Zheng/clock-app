import React from 'react';

import './Quote.Style.scss';

import refresh from '../Assets/desktop/icon-refresh.svg';

const Quote = () => {
    return (
        <div className="quote">
            <blockquote>
                <p>
                    “The science of operations, as derived from mathematics more especially, is a science of itself, and
                    has its own abstract truth and value.”
                </p>
                <footer>
                    <cite>Ada Lovelace</cite>
                </footer>
            </blockquote>

            <img className="quote__refresh" src={refresh} alt="refresh"></img>
        </div>
    );
};

export default Quote;
