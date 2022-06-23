import { createSlice } from '@reduxjs/toolkit'

import { DEFAULT_LANGUAJE, DEFAULT_CITY, LIST_OF_CITIES } from '../utils/constants';

const initialState = {
  listOfCities: LIST_OF_CITIES,
  citySelect: DEFAULT_CITY,
  isLoading: false,
  infoWeather: null
};

export const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.citySelect = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setInfoWeather: (state, action) => {
      state.infoWeather = action.payload;
    }
  },
});

export const { setCity, setLanguage, setLoading, setInfoWeather } = weatherSlice.actions;

export default weatherSlice.reducer;