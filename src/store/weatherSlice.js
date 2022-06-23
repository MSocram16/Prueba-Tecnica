import { createSlice } from '@reduxjs/toolkit'

import { DEFAULT_LANGUAJE, DEFAULT_CITY, LIST_OF_CITIES } from '../utils/constants'

const initialState = {
  listOfCities: LIST_OF_CITIES,
  languajeSelect: DEFAULT_LANGUAJE,
  citySelect: DEFAULT_CITY,
  isLoading: false,
  infoWeather: []
};

export const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.citySelect = action.payload;
    },
    setLanguage: (state, action) => {
      state.languajeSelect = action.payload;
    },
  },
});

export const { setCity, setLanguage } = weatherSlice.actions;

export default weatherSlice.reducer;