import { useEffect, useState } from 'react';

const currentTime = () => {
    const currTime = new Date();
    const hours = `${currTime.getHours()}`;
    const minutes = `${currTime.getMinutes()}`;

    return `${hours.length < 2 ? `${hours}0` : hours}:${minutes < 2 ? `${minutes}0` : minutes}`;
};

const useLocalTime = () => {
    const [time, setTime] = useState(currentTime());

    useEffect(() => {
        setInterval(() => {
            if (time !== currentTime()) {
                setTime(currentTime());
            }
        }, 1000);
    });

    return time;
};

export default useLocalTime;
