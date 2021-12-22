import { useEffect, useState } from 'react';

const currentTime = () => {
    const currTime = new Date();
    const hours = currTime.getHours();
    const minutes = currTime.getMinutes();

    return `${hours <= 9 ? `0${hours}` : hours}:${minutes <= 9 ? `0${minutes}` : minutes}`;
};

const useLocalTime = () => {
    const [time, setTime] = useState(currentTime());

    useEffect(() => {
        const interval = setInterval(() => {
            if (time !== currentTime()) {
                setTime(currentTime());
            }
        }, 1000);

        return () => clearInterval(interval);
    });

    return { time, currentHours: new Date().getHours() };
};

export default useLocalTime;
