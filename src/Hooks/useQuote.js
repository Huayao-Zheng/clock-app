import axios from 'axios';
import { useEffect, useState } from 'react';

const useQuote = () => {
    const [quote, setQuote] = useState({ en: '', author: '' });

    const fetchQuote = async () => {
        try {
            const {
                data: { en, author },
            } = await axios.get('https://programming-quotes-api.herokuapp.com/Quotes/random');

            setQuote({ en, author });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return { quote, fetchQuote };
};

export default useQuote;
