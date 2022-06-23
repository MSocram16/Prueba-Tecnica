import { LanguageSwitch, SelectCity } from "../../components";

const WeatherView = () => {
    const _props = {
        container: {
            className: "w-4/5 mx-3 md:w-3/5 md:mx-auto p-5 rounded-md shadow-md bg-white flex flex-col gap-5"
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
            <p {..._props.titleApp}>Weather consultant</p>
            <p {..._props.titleLanguage}>Select your language:</p>
            <LanguageSwitch />
            <p {..._props.titleLanguage}>Select city for show weather:</p>
            <SelectCity />
        </div>
    )
}

export default WeatherView;