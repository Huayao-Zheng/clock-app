import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_FREEGEOIP_API_KEY;
const GEO_IP_URL = `https://api.freegeoip.app/json/?apikey=${API_KEY}`;
/*
ip	"70.123.86.228"
country_code	"US"
country_name	"United States"
region_code	"TX"
region_name	"Texas"
city	"San Marcos"
zip_code	"78666"
time_zone	"America/Chicago"
latitude	29.8737
longitude	-97.9361
metro_code	635
*/
const WORLD_TIME_BY_IP_URL = 'http://worldtimeapi.org/api/ip';
/**
abbreviation	"CST"
client_ip	"70.123.86.228"
datetime	"2021-12-20T14:29:00.398794-06:00"
day_of_week	1
day_of_year	354
dst	false
dst_from	null
dst_offset	0
dst_until	null
raw_offset	-21600
timezone	"America/Chicago"
unixtime	1640032140
utc_datetime	"2021-12-20T20:29:00.398794+00:00"
utc_offset	"-06:00"
week_number	51
 */
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

// Be shown the correct greeting and background image based on the time of day they're visiting the site
