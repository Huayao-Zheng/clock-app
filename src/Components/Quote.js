import React from 'react';
import './Quote.Style.scss';
import refresh from '../Assets/desktop/icon-refresh.svg';
import useQuote from '../Hooks/useQuote';

const Quote = () => {
    const { quote, fetchQuote } = useQuote();

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

            <img onClick={fetchQuote} className="quote__refresh" src={refresh} alt="refresh" />
        </div>
    );
};

export default Quote;
