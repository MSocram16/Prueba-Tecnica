import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_LANGUAJE } from "../utils/constants";

const initialState = {
    languageSelect: DEFAULT_LANGUAJE,
    translations: {
        en: {
            titleApp: "Weather consultant",
            titleLanguage: "Select your language:",
            titleCity: "Select city for show weather:",
            sevilla: "Sevilla",
            lisbon: "Lisbon",
            panama_city: "Panama City",
            bogota: "Bogotá",
            toronto: "Toronto",
            rome: "Rome",
            wind: "Wind",
            humidity: "Humidity",
            pressure: "Pressure"
        },
        sp: {
            titleApp: "Consultor meteorológico",
            titleLanguage: "Seleccione su idioma:",
            titleCity: "Seleccione la ciudad para mostrar el clima:",
            sevilla: "Sevilla",
            lisbon: "Lisboa",
            panama_city: "Ciudad de Panamá",
            bogota: "Bogotá",
            toronto: "Toronto",
            rome: "Roma",
            wind: "Viento",
            humidity: "Humedad",
            pressure: "Presión"
        },
    },
};
export const i18nSlice = createSlice({
    name: "i18n",
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.languageSelect = action.payload;
        },
    }
});

export const selectTranslations = (state) =>
    state.i18n.translations[state.i18n.languageSelect];

export const { setLanguage } = i18nSlice.actions;

export default i18nSlice.reducer;