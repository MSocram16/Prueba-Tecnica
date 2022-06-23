import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setInfoWeather, setLoading } from '../../store/weatherSlice';

import { LIST_OF_CITIES } from '../../utils/constants';

import axios from 'axios';
//import axios from '../../api';

const useGetWheater = () => {
    const EXCLUDE_API = "hourly,daily,minutely,alerts";
    const UNITS = "metric";
    const { citySelect, isLoading, infoWeather } = useSelector((state) => state.weather);
    const { languageSelect } = useSelector((state) => state.i18n);

    const dispatch = useDispatch();

    const fetchInfoWeather = async () => {
        if (!isLoading) {
            const infoCity = LIST_OF_CITIES.find(val => val.key === citySelect);
            dispatch(setLoading(true));
            const response = await axios({
                method: 'get',
                url: process.env.REACT_APP_OPEN_WEATHER_MAP_URL,
                params: {
                    lat: infoCity.lat,
                    lon: infoCity.lon,
                    appid: process.env.REACT_APP_OPEN_WEATHER_MAP_KEY,
                    lang: languageSelect,
                    exclude: EXCLUDE_API,
                    units: UNITS
                }
            });
            const { data: { current }, error } = response;
            if (error) {
                dispatch(setInfoWeather(null));
            } else {
                dispatch(setInfoWeather(current));
            }
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        fetchInfoWeather();
    }, [citySelect, languageSelect]);

    return {
        infoWeather,
        isLoading,
        citySelect
    }
};

export default useGetWheater;

