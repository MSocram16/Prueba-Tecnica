import { LanguageSwitch, SelectCity, WeatherInfo } from "../../components";

import { useSelector } from "react-redux";
import { selectTranslations } from "../../store/i18nSlice";

const WeatherView = () => {
    const t = useSelector(selectTranslations);
    const _props = {
        container: {
            className: "w-full mx-3 md:w-4/5 md:mx-auto p-5 rounded-md shadow-md bg-white flex flex-col gap-5"
        },
        titleApp: {
            className: "text-3xl text-center"
        },
        titleLanguage: {
            className: "text-xl text-center"
        }
    }
    return (
        <div {..._props.container}>
            <p {..._props.titleApp}>{t.titleApp}</p>
            <p {..._props.titleLanguage}>{t.titleLanguage}</p>
            <LanguageSwitch />
            <p {..._props.titleLanguage}>{t.titleCity}</p>
            <SelectCity />
            <WeatherInfo />
        </div>
    )
}

export default WeatherView;