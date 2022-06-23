import { configureStore } from '@reduxjs/toolkit';

import weatherSlice from './weatherSlice';
import i18nSlice from './i18nSlice';

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    i18n: i18nSlice
  },
})