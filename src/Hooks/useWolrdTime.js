import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_FREEGEOIP_API_KEY;
const GEO_IP_URL = `https://api.freegeoip.app/json/?apikey=${API_KEY}`;
const WORLD_TIME_BY_IP_URL = 'http://worldtimeapi.org/api/ip';

const useWolrdTime = () => {
    const [worldTime, setWorldTime] = useState(null);

    const fetchWorldTime = async () => {
        try {
            const promises = [axios.get(WORLD_TIME_BY_IP_URL), axios.get(GEO_IP_URL)];
            const [p1, p2] = await Promise.all(promises);
            setWorldTime({
                ...p1.data,
                ...p2.data,
            });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchWorldTime();
    }, []);

    return { worldTime };
};

export default useWolrdTime;
