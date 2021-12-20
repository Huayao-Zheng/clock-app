import React, { useState } from 'react';
import './Quote.Style.scss';
import refresh from '../Assets/desktop/icon-refresh.svg';
import useQuote from '../Hooks/useQuote';

const Quote = () => {
    const { quote, fetchQuote } = useQuote();
    const [spin, setSpin] = useState(1);

    const onClickEvents = () => {
        fetchQuote();
        setSpin(1);
    };

    return (
        <div className="quote">
            <blockquote>
                <p className="quote__body" alt="Random Quote">
                    “{quote.en}”
                </p>
                <footer>
                    <cite className="quote__author">{quote.author}</cite>
                </footer>
            </blockquote>

            <img
                onClick={onClickEvents}
                onAnimationEnd={() => setSpin(0)}
                className="quote__refresh"
                src={refresh}
                alt="refresh"
                spin={spin}
            />
        </div>
    );
};

export default Quote;
