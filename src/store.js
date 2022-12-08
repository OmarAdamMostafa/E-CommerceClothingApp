import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './features/NavBarFeature/NavBarSlice'

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});