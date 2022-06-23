import useGetWheater from "./useGetWheater";

import { useSelector, useDispatch } from 'react-redux';
import { selectTranslations } from '../../store/i18nSlice';

const WeatherInfo = () => {

    const { isLoading, infoWeather, citySelect } = useGetWheater();
    const t = useSelector(selectTranslations);

    const _props = {
        container: {
            "data-testid": "container-weatherInfo",
            className: "w-3/5 rounded-md shadow-xl mx-auto flex flex-col min-h-[300px]"
        },
        loadingPing: {
            className: "animate-ping h-[30px] w-[30px] rounded-full bg-sky-400 opacity-75 mx-auto my-auto"
        },
        conditionInfo: {
            className: "p-5 min-h-[150px] bg-zinc-300 flex flex-col text-black gap-5 rounded-t-md"
        },
        textCity: {
            className: "text-bold text-black text-4xl capitalize",
        },
        textDescription: {
            className: "text-bold text-black text-xl capitalize",
        },
        tempContainer: {
            className: "flex justify-between gap-5",
        },
        textTemp: {
            className: "text-bold text-black text-4xl lg:text-6xl my-auto",
        },
        icon: {
            className: "w-[100px] h-[100px]",
            src: infoWeather ? `${process.env.REACT_APP_OPEN_WEATHER_MAP_ICON}${infoWeather.weather[0].icon}@2x.png` : null
        },
        moreInfo: {
            className: "p-5 gap-5 grid grid-cols-2",
        },
        textMore: {
            className: "text-semibold text-gray text-md text-center",
        },
        textWindSpeed: {
            "data-testid": "text-windSpeed",
        }
    }
    return (
        <div {..._props.container} >
            {
                isLoading || !infoWeather ?
                    <span {..._props.loadingPing}></span>
                    :
                    <>
                        <div  {..._props.conditionInfo}>
                            <span {..._props.textCity}>{t[citySelect]}</span>
                            <span {..._props.textDescription}>{infoWeather.weather[0].description}</span>   
                            <div {..._props.tempContainer}>
                                <span {..._props.textTemp}>{infoWeather.temp} °C</span>
                                <img {..._props.icon} />
                            </div>
                        </div>
                        <div {..._props.moreInfo}>
                            <span {..._props.textMore}>{t.wind}</span>
                            <span {..._props.textMore} {..._props.textWindSpeed}>{infoWeather.wind_speed} m/s</span>
                            <span {..._props.textMore}>{t.humidity}</span>
                            <span {..._props.textMore}>{infoWeather.humidity} %</span>
                            <span {..._props.textMore}>{t.pressure}</span>
                            <span {..._props.textMore}>{infoWeather.pressure} hPa</span>
                        </div>
                    </>

            }
        </div>
    )
}

export default WeatherInfo;